module.exports = {
  rootUrl: "http://yandex.ru",
  gridUrl: "http://127.0.0.1:4444/wd/hub",
  windowSize: "1150x768",
  screenshotsDir: "./gemini-reports/screens",
  screenshotMode: "fullpage",
  compositeImage: true,

  browsers: {
    chrome: {
      screenshotMode: "fullpage",
      compositeImage: true,
      desiredCapabilities: {
        browserName: "chrome"
      }
    }
  },

  system: {
    plugins: {
      "html-reporter/gemini": {
        enabled: true,
        path: "gemini-reports",
        defaultView: "all",
        baseHost: "yandex.ru"
      }
    }
  }
};
