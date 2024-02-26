const { BeforeStep, Given } = require("@cucumber/cucumber");
const SauceWorld = require("../world");

let world;

let isLoggedIn = false;

BeforeStep(async function () {
  world = this;
});

Given("Given User is logged into SauceDemo portal.", async function () {
  if (!isLoggedIn) {
    await world.getLogin().loginToApp(this.username, this.password);
  }
});

When(
  "User identifies all products and adds the product with max and min price to the cart.",
  async function () {
    const products = await this.page.$$eval("inventory_item_price", (nodes) =>
      nodes.map((n) => parseFloat(n.innerText.replace("$", "")))
    );

    const maxPrice = Math.max(...products);
    const minPrice = Math.min(...products);

    const maxPriceIndex = products.indexOf(maxPrice);
    const minPriceIndex = products.indexOf(minPrice);

    const addToCartButtons = await this.page.$$(
      "#add-to-cart-sauce-labs-onesie"
    );

    if (addToCartButtons[maxPriceIndex]) {
      await addToCartButtons[maxPriceIndex].click();
    }

    if (addToCartButtons[minPriceIndex]) {
      await addToCartButtons[minPriceIndex].click();
    }
  }
);

And('User click on "Checkout" button', async function () {
  // Find the 'Checkout' button and click on it
  await this.page.click(".shopping_cart_link");
});
