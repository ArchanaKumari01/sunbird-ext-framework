var exec = require('cordova/exec');

var PLUGIN_NAME = 'splashscreen';

var splash = {
  show: function () {
    exec(null, null, PLUGIN_NAME, "show", []);
  },
  hide: function () {
    exec(null, null, PLUGIN_NAME, "hide", []);
  },
  setContent: function (appName, url) {
    exec(null, null, PLUGIN_NAME, "setContent", [appName, url]);
  },
};


module.exports = splash;
