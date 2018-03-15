var exec = require('cordova/exec');

var PLUGIN_NAME = 'GenieSDK';

var auth = {
    
    getBearerToken: function (success, error) {
      exec(success, error, PLUGIN_NAME, this.action(), ["getMobileDeviceBearerToken"]);
    },

    startSession: function (session) {
      exec(null, null, PLUGIN_NAME, this.action(), ["startSession", session]);
    },

    endSession: function () {
      exec(null, null, PLUGIN_NAME, this.action(), ["endSession"]);
    },

    getSessionData: function (success) {
      exec(success, null, PLUGIN_NAME, this.action(), ["getSessionData"]);
    },

    action: function () {
        return "auth";
    }
  };

  module.exports = auth;

