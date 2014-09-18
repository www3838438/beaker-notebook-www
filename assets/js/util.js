;(function(BK, Backbone, Mn) {
  BK.getDownloadLink = function() {
    switch (BK.getPlatform()) {
      case 'windows':
        return "http://d299yghl10frh5.cloudfront.net/beaker-notebook-v1.0-0-g5644b78-windows.zip";
      break
      case 'osx':
        return "http://d299yghl10frh5.cloudfront.net/beaker-notebook-v1.0-0-g5644b78-mac.dmg";
      break
      default:
        return "http://d299yghl10frh5.cloudfront.net/beaker-notebook-v1.0-0-g5644b78-ubuntu.zip";
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
