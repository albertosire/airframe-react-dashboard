/**
 * Slim sidebar open/close is handled by React classes + CSS.
 * The original animejs timeline fought React (it removed `sidebar--collapsed`
 * mid-toggle and often left the panel translated off-screen).
 */
function SlimSidebarAnimate() {}

SlimSidebarAnimate.prototype.assignParentElement = function () {};

SlimSidebarAnimate.prototype.destroy = function () {};

module.exports = SlimSidebarAnimate;
