const playwright = require('@playwright/test');
class BrowserManager {
    constructor() {
        this.browser = null;
        this.page = null;
    }
    async launchBrowser() {
        if (!this.browser) {
            this.browser = await playwright.chromium.launch({ executablePath: 'C://Users//U1303095//Desktop//chrome-win//chrome.exe', headless: false });
            this.context = await this.browser.newContext(

            );


            this.page = await this.browser.newPage()
        }
        return { browser: this.browser, page: this.page, context: this.context }
    }
    async closeBrowser() {
        if (this.browser) {

            await this.browser.close();
            this.browser = null;
            this.page = null;
        }
    }
}
module.exports = new BrowserManager();