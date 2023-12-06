const browserManager = require('../features/support/browserManager')
const { expect } = require('@playwright/test');
const { browser } = require('../features/support/browserManager');
const { After, Before, AfterStep, setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(80000)
class LoginPage {
    constructor() {

        // const Pager=browserManager.page;
    }
    async validLogin() {
        this.page = browserManager.page;

        console.log('Do something');
  // await this.page.goto('https://dev2.m2digitalbroker.com/bluestream/extended-warranty/sscl/en-US/login');
await this.page.goto('https://release.na.secureaffinity.marsh.com/bluestream/extended-warranty/sscl/en-US/login');

    }
    async ValidPage() {
        let page = browserManager.page;
        const pageTtile = await page.title();
      //  expect(pageTtile).toBe('bluestream');
    }
}
module.exports = { LoginPage }