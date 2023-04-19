const ColorManipulator = require('./color-manipulator');

(function($) {
  $.fn.colorManipulator = function(options) {
    const settings = $.extend({
      lighten: 0,
      darken: 0,
      saturate: 0,
      desaturate: 0
    }, options);
    
    return this.each(function() {
      const $this = $(this);
      let color = $this.css('background-color');
      
      if (color.indexOf('rgb') >= 0) {
        color = Color(color).hex();
      }
      
      if (settings.lighten) {
        color = ColorManipulator.lighten(color, settings.lighten);
      }
      
      if (settings.darken) {
        color = ColorManipulator.darken(color, settings.darken);
      }
      
      if (settings.saturate) {
        color = ColorManipulator.saturate(color, settings.saturate);
      }
      
      if (settings.desaturate) {
        color = ColorManipulator.desaturate(color, settings.desaturate);
      }
      
      $this.css('background-color', color);
    });
  };
})(jQuery);
