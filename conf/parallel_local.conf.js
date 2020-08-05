var browserstack = require('browserstack-local');

nightwatch_config = {
  src_folders : [ "tests/local" ],

  selenium : {
    "start_process" : false,
    "host" : "hub-cloud.browserstack.com",
    "port" : 443
  },

  common_capabilities: {
    'build': 'nightwatch-browserstack',
    'browserstack.user': process.env.BROWSERSTACK_USERNAME || 'mudassardemo',
    'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY || 'Mz55zvYU9iCdyV9dvsKv',
    'browserstack.debug': true,
    'browserstack.local': true
  },

  test_settings: {
    default: {},
    chrome: {
      desiredCapabilities: {
        browser: "chrome"
      }
    },
    firefox: {
      desiredCapabilities: {
        browser: "firefox"
      }
    },
    safari: {
      desiredCapabilities: {
        browser: "safari"
      }
    }
  }
};

// Code to support common capabilites
for(var i in nightwatch_config.test_settings){
  var config = nightwatch_config.test_settings[i];
  config['selenium_host'] = nightwatch_config.selenium.host;
  config['selenium_port'] = nightwatch_config.selenium.port;
  config['desiredCapabilities'] = config['desiredCapabilities'] || {};
  for(var j in nightwatch_config.common_capabilities){
    config['desiredCapabilities'][j] = config['desiredCapabilities'][j] || nightwatch_config.common_capabilities[j];
  }
}

module.exports = nightwatch_config;
