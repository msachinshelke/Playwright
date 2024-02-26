const { ITestCaseHookParameter } = require("@cucumber/cucumber");
const SauceWorld = require("./world");
const { Browser, chromium, firefox, webkit } = require("@playwright/test");
const config = require("./config");
const { SCREENSHOT_ENTENSION, SCREENSHOT_PATH } = require("./data/constant");

async function openBrowser() {
  let browser;

  switch (config.browser) {
    case "firefox":
      browser = await firefox.launch(config.browserOptions);
      break;
    case "webkit":
      browser = await webkit.launch(config.browserOptions);
      break;
    default:
      browser = await chromium.launch(config.browserOptions);
  }

  return browser;
}

const takeScreenShotOnFailure = async (world, scenario) => {
  const screenShotPath = SCREENSHOT_PATH;
  const screensShotExtn = SCREENSHOT_ENTENSION;
  const scenarioName = scenario.pickle.name.replace(/[/\\?%*:|"<>]/g, "-");
  const screenShot = await world.page.screenshot({
    fullPage: true,
    path: screenShotPath + scenarioName + screensShotExtn,
  });

  if (screenShot) world.attach(screenShot, "image/png");
};

module.exports = {
  openBrowser,
  takeScreenShotOnFailure,
};
