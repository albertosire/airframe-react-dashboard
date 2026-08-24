var animeLib = require('animejs');
var anime = animeLib.default || animeLib;

if (typeof anime.timeline !== 'function') {
    anime.timeline = function() {
        var api = {
            add: function() { return api; },
            play: function() { return api; },
            complete: function() {},
            finished: Promise.resolve(),
            isAnimating: false
        };
        return api;
    };
}

if (typeof anime.stagger !== 'function') {
    anime.stagger = function() { return 0; };
}

if (typeof anime !== 'function' && typeof animeLib.animate === 'function') {
    var compat = function(params) {
        return animeLib.animate(params.targets, params);
    };
    compat.timeline = anime.timeline;
    compat.stagger = anime.stagger;
    module.exports = compat;
} else {
    module.exports = anime;
}
