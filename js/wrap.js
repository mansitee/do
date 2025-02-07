// mediaWrapper.js: Simple responsive iframes
// MIT license http://www.opensource.org/licenses/mit-license.php/
// @author Matthew A. K. Smith http://www.akselkreis.com

(function($) {
  $.fn.mediaWrapper = function(options) {
    var settings = $.extend({
      intrinsic: true,
      baseWidth: 16,
      baseHeight: 9
    }, options);

    return this.each(function() {
      var hRatio = '';

      if (settings.intrinsic && $(this).attr("width") !== undefined && $(this).attr("height") !== undefined) {
        hRatio = ($(this).attr("height") / $(this).attr("width")) * 100;
      } else {
        hRatio = (settings.baseHeight / settings.baseWidth) * 100;
      }
 
      $(this).wrap('<div class="mediaWrapper" style="position: relative; width: 100%; height:95vh; padding-bottom: ' + hRatio + '%;"></div>').css({
        "position": "absolute",
        "width": "100%",
        "height": "95vh",
        "top": "0",
        "left": "0"
      });
    });
  };
})(jQuery);