const browserManager = require('../features/support/browserManager')
const { expect } = require('@playwright/test');
const { browser } = require('../features/support/browserManager');
const { After, Before, AfterStep, setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(80000)
class WarrantyDetailsPage {
    constructor() {

        // const Pager=browserManager.page;
    }
    async clickOnDownloadWarranty() {
       // this.page = browserManager.page;

        console.log('Download Warranty');
   await browserManager.page.waitForTimeout(10000);
        await browserManager.page.click('//i[@myidentifier="menuIcon"]')
       // await browserManager.page.locator('//i[@myidentifier="menuIcon"]').selectOption("Upload")
        await browserManager.page.click('//a[text()="Upload"]')
 //       await browserManager.page.goto('https://release.na.secureaffinity.marsh.com/bluestream/extended-warranty/sscl/en-US/login')
        await browserManager.page.click('//a[text()="Download Sample"]')
      //await browserManager.page.pause();
    }
    
}
module.exports = { WarrantyDetailsPage }