/**
 * The parsed object will be passed as the parameters
to the the world constructor.
Look into World.ts
 * @returns 
 */

const params = {
  appURL: "https://www.saucedemo.com/ ",
  coverage: false,
  env: "localhost",
  expectTimeout: 50 * 1000,
  mockAuthorization: true,
  navigationTimeout: 45 * 1000,
  requestExpectTimeout: 10 * 1000,
  saveTraceOnFailure: false,
  tracesDir: "./playwright/traces",
  useBuildArtifacts: false,
};

const common = {
  format: [
    "json:./playwright/reports/cucumber.json",
    "html:./playwright/reports/report.html",
    "message:./playwright/reports/cucumber.ndjson",
    "junit:./playwright/reports/JUnit.xml",
    "summary",
    "progress-bar",
   
  ],
  formatOptions: {
    colorsEnabled: true,
    theme: {
      "datatable border": ["green"],
      "datatable content": ["green", "italic"],
      "docstring content": ["green", "italic"],
      "docstring delimiter": ["green"],
      "feature description": ["green"],
      "feature keyword": ["bold", "green"],
      "rule keyword": ["yellow"],
      "scenario keyword": ["greenBright"],
      "scenario name": ["green", "underline"],
      "step keyword": ["bgGreen", "black", "italic"],
      "step text": ["greenBright", "italic"],
      tag: ["green"],
    },
  },
 // paths: ["./*.feature"],
  publishQuiet: true,
  require: [
    "./common-hooks.js",
    "./setup-utils.js",
    "./types.js",
    "./world.js",
    "./page-objects/*.js",
    "./steps/*.js",
  ],
  //requireModule: ["@babel/register", "ts-node/register"],
};

module.exports = {
  default: {
    ...common,
    ...params,
  },
};
