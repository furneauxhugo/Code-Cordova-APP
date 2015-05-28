#!/usr/bin/env node

//this hook installs all your plugins

// add your plugins to this list--either the identifier, the filesystem location or the URL
var pluginlist = [
		"com.pushwoosh.plugins.pushwoosh@3.5.1",
		"com.simonmacdonald.prefs",
		"de.appplant.cordova.plugin.email-composer@0.8.2",
		"nl.x-services.plugins.socialsharing@4.3.18",
		"org.apache.cordova.device@0.2.9",
		"org.apache.cordova.device-motion@0.2.11",
		"org.apache.cordova.device-orientation@0.3.11",
		"org.apache.cordova.dialogs@0.2.10",
		"cordova-plugin-file@2.0.0",
		"cordova-plugin-file-transfer@1.0.0",
		"cordova-plugin-whitelist",
		"org.apache.cordova.geolocation@0.3.12",
		"org.apache.cordova.inappbrowser@0.6.0",
		"org.apache.cordova.splashscreen@1.0.0",
		"org.apache.cordova.statusbar@0.1.9",
		"org.apache.cordova.vibration@0.3.13"
];

// no need to configure below

var fs = require('fs');
var path = require('path');
var sys = require('sys')
var exec = require('child_process').exec;

function puts(error, stdout, stderr) {
    sys.puts(stdout)
}

pluginlist.forEach(function(plug) {
    exec("cordova plugin add " + plug, puts);
});
