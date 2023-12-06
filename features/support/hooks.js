const {After, BeforeAll,Before,AfterStep,setDefaultTimeout, Status, TestCaseHookDefinition, AfterAll} = require('@cucumber/cucumber');
const playwright=require('@playwright/test');
const {expect}=require('@playwright/test');
const browserManager=require('./browserManager')
const {POManager}=require('../../pageObjects/POManager')
const {attach,configureVideo,devices}=require('playwright-video')
setDefaultTimeout(1000000);
BeforeAll(async()=>{
   //console.log("Having an issue with This key word need to resolve"); 
  // this.browser= await playwright.chromium.launch({ executablePath: 'C://Users//U1303095//Desktop//chrome-win//chrome.exe', headless: false});
   // this.page=await this.browser.newPage()
   const{browser,page,context}=await browserManager.launchBrowser()
   
  
   //this.browser=browser;
   //this.page=page;
   // await this.page.goto('https://nodejs.org/en');
   // await expect(this.page).toHaveTitle('Node.js');
     // await page.goto('https://www.google.com/');

  //  const  poManager=new POManager();
});
AfterStep(async({result})=> {
  if(result.status===Status.FAILED)
    await browserManager.page.screenshot({path:'error.png'});
    
}); 
After(async function(testCase){
  if(testCase.result.status===Status.FAILED)
  {
   console.log("Scenario got failed")
  }
})


AfterAll(async()=>{
  
  await browserManager.browser.close();
})
