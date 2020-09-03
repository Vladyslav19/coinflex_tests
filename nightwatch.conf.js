const chromedriver = require('chromedriver');


module.exports = {

  test_settings: {
    default: {
      webdriver: {
        start_process: true,
        server_path: chromedriver.path,
        port: 4446,
        cli_args: ['--port=4446']
      },
      desiredCapabilities: {
        browserName: 'chrome'
      },
      page_objects_path: 'pages',
    }
  }

}
