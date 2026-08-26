var animeLib = require('animejs');
var anime = animeLib.default || animeLib;
var animateFn = animeLib.animate || (anime && anime.animate);
var createTimelineFn = animeLib.createTimeline || (anime && anime.createTimeline);
var staggerFn = animeLib.stagger || (anime && anime.stagger);

var EASING_MAP = {
    easeInOutCubic: 'inOutCubic',
    easeInCubic: 'inCubic',
    easeOutCubic: 'outCubic',
    easeInOutQuad: 'inOutQuad',
    easeInQuad: 'inQuad',
    easeOutQuad: 'outQuad',
    easeInOutSine: 'inOutSine',
    easeInSine: 'inSine',
    easeOutSine: 'outSine',
    linear: 'linear'
};

var SKIP_KEYS = {
    targets: true,
    complete: true,
    begin: true,
    update: true,
    easing: true
};

function mapEase(easing) {
    if (!easing) return undefined;
    if (EASING_MAP[easing]) return EASING_MAP[easing];
    return String(easing).replace(/^ease(InOut|In|Out)/, function(_, token) {
        return token.charAt(0).toLowerCase() + token.slice(1);
    });
}

var UNIT_KEYS = {
    height: true,
    width: true,
    top: true,
    left: true,
    right: true,
    bottom: true,
    translateX: true,
    translateY: true,
    margin: true,
    padding: true
};

function toAnimatableValue(value) {
    if (typeof value === 'number' && isFinite(value)) {
        return value + 'px';
    }
    return value;
}

function normalizeKeyframe(key, value) {
    if (!UNIT_KEYS[key]) return value;
    if (Array.isArray(value)) {
        return value.map(toAnimatableValue);
    }
    return toAnimatableValue(value);
}

function toV4Params(params) {
    var options = {};
    if (!params) return options;

    Object.keys(params).forEach(function(key) {
        if (SKIP_KEYS[key]) return;
        if (key === 'duration' || key === 'delay' || key === 'loop' || key === 'autoplay') {
            options[key] = params[key];
            return;
        }
        options[key] = normalizeKeyframe(key, params[key]);
    });

    var ease = mapEase(params.easing) || params.ease;
    if (ease) options.ease = ease;
    if (params.complete) options.onComplete = params.complete;
    if (params.begin) options.onBegin = params.begin;
    if (params.update) options.onUpdate = params.update;
    if (params.onComplete) options.onComplete = params.onComplete;
    if (params.onBegin) options.onBegin = params.onBegin;
    if (params.onUpdate) options.onUpdate = params.onUpdate;

    return options;
}

function wrapAnimation(animation) {
    if (!animation) return animation;
    if (typeof animation.reset !== 'function' && typeof animation.revert === 'function') {
        animation.reset = function() { return animation.revert(); };
    }
    if (!animation.finished && typeof animation.then === 'function') {
        animation.finished = animation.then();
    }
    return animation;
}

function hasTargets(targets) {
    if (targets == null) return false;
    if (typeof targets.length === 'number') return targets.length > 0;
    return true;
}

function wrapTimeline(params) {
    params = params || {};
    var defaultTargets = params.targets;
    var settled = false;
    var finishedResolve;
    var finishedPromise = new Promise(function(resolve) {
        finishedResolve = resolve;
    });
    function settle() {
        if (settled) return;
        settled = true;
        finishedResolve();
    }

    var userBegin = params.begin || params.onBegin;
    var userComplete = params.complete || params.onComplete;
    var tlOptions = {
        autoplay: params.autoplay !== undefined ? params.autoplay : true,
        onBegin: userBegin,
        onComplete: function() {
            if (typeof userComplete === 'function') userComplete();
            settle();
        }
    };
    var defaults = {};
    var ease = mapEase(params.easing) || params.ease;
    if (ease) defaults.ease = ease;
    if (params.duration != null) defaults.duration = params.duration;
    if (Object.keys(defaults).length) tlOptions.defaults = defaults;
    if (params.update) tlOptions.onUpdate = params.update;
    if (params.onUpdate) tlOptions.onUpdate = params.onUpdate;

    var tl = createTimelineFn(tlOptions);

    var api = {
        add: function(animParams, position) {
            if (!animParams) return api;
            var targets = animParams.targets || defaultTargets;
            var child = toV4Params(animParams);
            if (hasTargets(targets)) {
                tl.add(targets, child, position);
            } else {
                tl.add(child, position);
            }
            return api;
        },
        play: function() {
            if (typeof tl.play === 'function') tl.play();
            return api;
        },
        pause: function() {
            if (typeof tl.pause === 'function') tl.pause();
            return api;
        },
        complete: function() {
            if (typeof tl.complete === 'function') tl.complete();
            settle();
            return api;
        },
        reset: function() {
            if (typeof tl.revert === 'function') tl.revert();
            return api;
        }
    };

    Object.defineProperty(api, 'finished', {
        get: function() {
            return finishedPromise;
        }
    });
    Object.defineProperty(api, 'isAnimating', {
        get: function() {
            return !settled && !tl.paused && !tl.completed;
        }
    });

    return api;
}

function stubTimeline() {
    var api = {
        add: function() { return api; },
        play: function() { return api; },
        pause: function() { return api; },
        complete: function() {},
        reset: function() { return api; },
        finished: Promise.resolve(),
        isAnimating: false
    };
    return api;
}

function compat(params) {
    if (!params || !animateFn) {
        return { finished: Promise.resolve(), reset: function() {} };
    }

    var targets = params.targets;
    var options = toV4Params(params);

    return wrapAnimation(animateFn(targets, options));
}

compat.timeline = createTimelineFn
    ? function(params) { return wrapTimeline(params); }
    : stubTimeline;

compat.stagger = typeof staggerFn === 'function'
    ? staggerFn
    : function() { return 0; };

module.exports = compat;
