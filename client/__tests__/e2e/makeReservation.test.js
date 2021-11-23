module.exports = {
  "default e2e tests": (browser) => {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible("#app")
      .assert.elementPresent(".header-dark")
      .assert.elementPresent(".footer-dark")
      .end();
  },
  "test feature 1 A unchecked and feature 1 unchecked": (browser) => {
    browser
      .url(`${browser.launchUrl}/`)
      .waitForElementVisible(".hero-container")
      .waitForElementVisible(".search-container")
      .assert.containsText("h1", "The Dining Revolution is Here.")
      .click("#submit-btn")
      .waitForElementVisible(".restaurant-list")
      .assert.containsText("h2", "Browse the restaurants")
      .click('a[type=submit]')
      .waitForElementVisible('.reservation-form')
      .setValue('input[name=mobile]', '0497357456')
      .click("button[type=submit]")
      .waitForElementVisible('.restaurant-list')
      .assert.containsText("h2", "Browse My Reservations.")
      .end();
  },
};
