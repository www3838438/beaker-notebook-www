;(function(BK, Backbone, Mn) {
  BK.Views = BK.Views || {};

  BK.Views.GettingStarted = Mn.LayoutView.extend({
    events: {
      "click .getting-started li": "switchOSTab"
    },

    ui: {
      'platforms': '.block.platforms li',
      'install': '.install-instructions'
    },

    regions: {
      "releaseHistory": ".release-history"
    },

    onShow: function() {
      this.getRegion("releaseHistory")
      .show(new BK.Views.Releases());
    },

    getTemplate: function() {
      return templates['getting-started'];
    },

    getOS: function() {
      var param   = Backbone.history.location.search || "";
      var browser = navigator.appVersion;

      if (param = param.match(/osx|windows|linux/))
        return param[0];

      if (~browser.indexOf("Win"))
        return "windows";
      if (~browser.indexOf("Mac"))
        return "osx";
      if (~browser.indexOf("X11") || ~browser.indexOf("Linux"))
        return "linux";
    },

    switchOSTab: function(e) {
      var $t       = $(e.currentTarget);
      var template = templates[$t.data('platform')+"-install"];

      this.ui.platforms.removeClass('active');
      this.ui.install.html(template())

      $t.addClass('active');
    },

    templateHelpers: function() {
      return {
        OS: this.getOS()
      }
    }
  });
})(window.BK = window.BK || {}, Backbone, Backbone.Marionette);
