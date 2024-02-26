const { Page } = require("@playwright/test");

class Common {
  constructor(page) {
    this.page = page;
  }
}

module.exports = Common;
