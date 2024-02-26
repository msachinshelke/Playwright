const { Page } = require("playwright");

class Login {
  constructor(page) {
    this.page = page;
  }

  async loginToApp(username, password) {
    await this.page.locator("#user-name").fill("standard_user");
    await this.page.locator("#password").fill("secret_sauce");
    await this.page.locator("login-button").click();
    // await this.enterLoginCredentials(username, password);
    await this.page.waitForLoadState("networkidle");
    // const releaseAnnouncement = this.page.getByRole('heading', {
    //   name: 'Mix Message Center'
    // });
  }
}

module.exports = Login;
