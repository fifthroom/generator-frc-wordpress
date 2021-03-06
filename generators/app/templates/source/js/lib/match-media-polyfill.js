/**
 * <%= themeName %>
 * matchMedia Polyfill Module
 */

/* jshint esnext: true, globalstrict: true, browser: true */

'use strict';

var matchFn = window.matchMedia || (function() {

  var styleMedia = (window.styleMedia || window.media);

  if (!styleMedia) {
    var style  = document.createElement('style');
    var script = document.getElementsByTagName('script')[0];
    var info   = null;

    style.type = 'text/css';
    style.id   = 'matchmediajs-test';

    script.parentNode.insertBefore(style, script);

    info = ('getComputedStyle' in window) && window.getComputedStyle(style, null) || style.currentStyle;

    styleMedia = {
      matchMedium: function(media) {
        var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';

        if (style.styleSheet) {
          style.styleSheet.cssText = text;
        } else {
          style.textContent = text;
        }

        return info.width === '1px';
      }
    };
  }

  return function(media) {
    return {
      matches: styleMedia.matchMedium(media || 'all'),
      media: media || 'all'
    };
  };

})();

export default matchFn;
