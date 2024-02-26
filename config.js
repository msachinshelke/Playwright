const { BrowserContextOptions, LaunchOptions } = require("@playwright/test");

const browserOptions = {
  args: ["--start-maximized", "--window-position=-5,0"],
  devtools: false,
  downloadsPath: "./playwright/downloads",
  headless: !(process.env.HEADLESS === "false"),
};

const contextOptions = {
  acceptDownloads: true,
  ignoreHTTPSErrors: true,
  recordVideo: process.env.PWVIDEO ? { dir: "screenshots" } : undefined,
  viewport: { height: 720, width: 1280 },
};

const config = {
  accessCode: process.env.ACCESS_CODE || "",
  browser: process.env.BROWSER || "chromium",
  browserOptions,
  contextOptions,
  defaultTimeout: 10 * 1000,
};

module.exports = config;
