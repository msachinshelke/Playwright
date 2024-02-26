const DEFAULT_TIMEOUT = 40000;

const SCREENSHOT_PATH = "./playwright/reports/screenshots/";

const SCREENSHOT_ENTENSION = ".png";

const RGB = {
  GREEN: "rgb(16, 124, 16)",
  RED: "rgb(209, 52, 56)",
};

const BUILD_FAIL_LOG_DOWNLOAD_PATH = "playwright/downloads/build-fail-log.csv";

module.exports = {
  DEFAULT_TIMEOUT,
  SCREENSHOT_PATH,
  SCREENSHOT_ENTENSION,
  RGB,
  BUILD_FAIL_LOG_DOWNLOAD_PATH,
};
