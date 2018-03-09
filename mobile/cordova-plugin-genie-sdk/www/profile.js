var exec = require('cordova/exec');

var PLUGIN_NAME = 'GenieSDK';

var profile = {
    
    getProfileById: function (requestJson, success, error) {
      exec(success, error, PLUGIN_NAME, this.action(), ["getProfileById", requestJson]);
    },

    
  };

  module.exports = profile;

