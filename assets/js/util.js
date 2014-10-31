;(function(BK, Backbone, Mn) {
  BK.getDownloadLink = function(platform) {
    switch (platform || BK.getPlatform()) {
      case 'windows':
        return "http://d299yghl10frh5.cloudfront.net/beaker-notebook-v1.1.1-0-g58f018d-windows.zip";
      case 'osx':
        return "http://d299yghl10frh5.cloudfront.net/beaker-notebook-v1.1.1-0-g58f018d-mac.dmg";
      default:
        return "http://d299yghl10frh5.cloudfront.net/beaker-notebook-v1.1.1-0-g58f018d-ubuntu.zip";
    }
  }

  BK.getPlatform = function() {
    var browser = navigator.appVersion;

    if (~browser.indexOf("Win"))
      return "windows";
    if (~browser.indexOf("Mac"))
      return "osx";
    if (~browser.indexOf("X11") || ~browser.indexOf("Linux"))
      return "linux";
  }
})(window.BK = window.BK || {}, Backbone, Backbone.Marionette);
