
const config = require("./config");
const setupUtils = require("./setup-utils");
const { DEFAULT_TIMEOUT } = require("./data/constant");
const SauceWorld = require("./world");
const { page } = require("@playwright/test");
const {
  After,
  AfterAll,
  Before,
  BeforeAll,
  Status,
  setDefaultTimeout,
  setWorldConstructor,
} = require("@cucumber/cucumber");

setDefaultTimeout(DEFAULT_TIMEOUT);
setWorldConstructor(SauceWorld);

BeforeAll(async function () {
  global.browser = await setupUtils.openBrowser();
  global.context = await global.browser.newContext(config.contextOptions);
  global.page = await global.context.newPage();
});

Before(async function (scenario) {
  // set value for global appURL, this is used in oauthRedirection
  global.appURL = this.parameters.appURL;
  this.browser = global.browser;
  this.context = global.context;

  this.page = global.page;

  this.username = "standard_user";
  this.password = "";
  this.setupPageObjects(this.page);

  if (this.parameters) {
    global.appURL = this.parameters.appURL;
  } else {
    console.error("this.parameters is undefined");
  }
});

After(async function (scenario) {
  if (scenario.result) {
    this.attach(
      `Status: ${scenario.result.status}. Duration:${JSON.stringify(
        scenario.result.duration
      )}s`
    );
    if (scenario.result.status !== Status.PASSED) {
      if (this.page) {
        await setupUtils.takeScreenShotOnFailure(this, scenario);
      }
    }
  }
});

AfterAll(async function () {
  await global.browser.close();
});
