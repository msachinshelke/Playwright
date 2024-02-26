const { World } = require("@cucumber/cucumber");
const { Browser, BrowserContext, Page } = require("@playwright/test");
const Login = require("./page-objects/login");
const Common = require("./page-objects/common");

class SauceWorld extends World {
  getLogin() {
    if (!this.pageObjects?.login) {
      throw new Error('"Login" is not defined');
    }

    return this.pageObjects.login;
  }

  getCommon() {
    if (!this.pageObjects?.common) {
      throw new Error('"Common" is not defined');
    }

    return this.pageObjects.common;
  }

  setupPageObjects(page) {
    this.pageObjects = {
      common: new Common(page), // No need to cast 'page' to 'any' in JavaScript

      login: new Login(page), // No need to cast 'page' to 'any' in JavaScript
    };
  }
}

module.exports = SauceWorld;
