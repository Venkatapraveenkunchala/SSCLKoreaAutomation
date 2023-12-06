const { When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect, } = require('@playwright/test');
const playwright = require('@playwright/test');
const { POManager } = require('../../pageObjects/POManager');
const { page, context, browser } = require('../support/browserManager');
const browserManager = require('../support/browserManager');
const { ExcelValues } = require('../support/readingValuesFromExcel')
setDefaultTimeout(80000);
let Claim_popup;


When('User has enterd required URL', async function () {
  let poManager = new POManager();
  let loginAction = poManager.getLoginPage();

  await loginAction.login.validLogin();


})



Then('System is validating title of the login page', async function () {
  let poManager = new POManager();
  let loginAction = poManager.getLoginPage();
  await loginAction.login.ValidPage();



});
When('User is loging into SSCL korea Application', async function () {
  console.log("User has successfully loged into application with valid credentials")
  //let poManager = new POManager();
  //let loginAction = poManager.getLoginPage();
  //loginAction.login.validLogin();
  // await browserManager.page.click('button[name="single-sign-on"]');
  browserManager.page.setDefaultTimeout(10000);
  await browserManager.page.fill('input[name="username"]', 'playwright.letsautomate@gmail.com')
  await browserManager.page.fill('input[name="password"]', 'Marsh@2026')
  await browserManager.page.click('input[type="submit"]');
  // browserManager.page.setDefaultTimeout(100000);
  // await browserManager.page.waitForSelector('input[value="Send me an email"]',{state:'visible'});
  // await browserManager.page.click('input[value="Send me an email"]');
  //let Backbutton='Back to sign in';
  // await browserManager.page.click('//*[contains(text(),"Back to sign in")]');
  // await browserManager.page.click('a[data-se="cancel"]');

  let pageTitle = await browserManager.page.title();
  await browserManager.page.waitForTimeout(10000)
  // expect(pageTitle).toBe('Marshdev-mmc - Sign In');

});

Then('User clicks on log out and navigate to login page', async function () {
  await browserManager.page.click('#logout');
  let pageTitle = await browserManager.page.title();

  expect(pageTitle).toBe("bluestream")
});


Then('Validating Title of Home page', async function () {
  console.log("Validated Title of Home page")
  let pageTitle = await browserManager.page.title();
  await browserManager.page.click('#logout');
  await browserManager.page.click('//a[contains(text(),"Find my password")]');

  await browserManager.page.click('#back_to_login');

  //Find my password
  //expect(pageTitle).toBe('Marshdev-mmc - Sign In');
  // await  browserManager.page.click('input[value="Login"]');

  //await page.waitForTimeout(10000);
  // await new Promise(resolve=>setTimeout(resolve,1000000));
});
Then('Clicking of warranty option', async function () {
  // await browserManager.page.click('button[name="single-sign-on"]');
  let poManager = new POManager();
  let WarrantyDetailsPage = poManager.getWarrantyDetailsPage();
  // await browserManager.page.waitForTimeout(100000)
  await WarrantyDetailsPage.WarrantyDetailsPage.clickOnDownloadWarranty();

});


When('I enter my username {string}', async function (username) {


  let poManager = new POManager();
  let loginAction = poManager.getLoginPage();
  await loginAction.login.ValidPage();

  await browserManager.page.fill('input[name="username"]', username)
  // await browserManager.page.waitForTimeout(2000)
});



When('I enter my password  {string}', async function (password) {
  await browserManager.page.fill('input[name="password"]', password)
  //  await browserManager.page.waitForTimeout(2000)
});

When('I click on the {string} button', async function (Login) {
  console.log("After clicking ${Login} button")
  await browserManager.page.click('input[type="submit"]');
  // await browserManager.page.reload();
  //await browserManager.page.waitForTimeout(4000)
});



Then('I should see {string}', async function (expected_result) {
  await browserManager.page.waitForSelector('p[role="alert"]')
  let errorMessage = await browserManager.page.$('p[role="alert"]');
  let errorText = await browserManager.page.innerText('p[role="alert"]')
  expect(errorText).toBe(expected_result)
});


Then('Click on Claim button in header part', async function () {
  await browserManager.page.click('//a[contains(text(),"Claim")]');


});
Then('Navigate to claims page from Header Claim option', async function () {
  await browserManager.page.click('//a[contains(text(),"Claim")]');
});
Then('click on Warranty from Header and select upload from Drop down', async function () {
  await browserManager.page.waitForTimeout(10000);
  await browserManager.page.click('//i[@myidentifier="menuIcon"]')
  // await browserManager.page.locator('//i[@myidentifier="menuIcon"]').selectOption("Upload")
  await browserManager.page.click('//a[text()="Upload"]')
  await browserManager.page.waitForTimeout(10000)
});

Then('Click on Browse File option', async function () {
  //await browserManager.page.click('//button[text()=" Browse File "]')
  await browserManager.page.waitForTimeout(10000)
});
Then('Choose Warranty Excel file from Local and click on upload button on UI', async function () {
  const filePath = 'C://SSCL_Korea_Automation_Code//features//stepDefinations//ExcelSheets//ValidWarrantyTestData.xlsx'
  // await browserManager.page.setInputFiles('//button[text()=" Browse File "]',);
  await browserManager.page.locator('//input[@type="file"]').setInputFiles(filePath)
  await browserManager.page.click('#upload-button')
  await browserManager.page.waitForTimeout(20000)
});

Then('User is clicking on forgot password functionality', async function () {
  await browserManager.page.click('//a[text()="Find my password"]')

  await browserManager.page.waitForTimeout(1000)

});
Then('validate the message pop ups on leaving email field with empty value', async function () {
  await browserManager.page.locator("#email").fill(" ")
  await browserManager.page.click("#submit")
  let error = await browserManager.page.locator("//*[@myidentifier='validation-message']").innerText();
  expect(error).toContain("Invalid email")

});
Then('validate the message pop ups on leaving email field with invalid value', async function () {
  await browserManager.page.locator("#email").fill("@Gmail")
  await browserManager.page.click("#submit")
  let error = await browserManager.page.locator("//*[@myidentifier='validation-message']").innerText();
  expect(error).toContain("Invalid email")
});
Then('validate the message pop ups on entering valid email', async function () {
  await browserManager.page.reload()
  await browserManager.page.locator("#email").fill("playwright.letsautomate@gmail.com")
  await browserManager.page.click("#submit")
  let error = await browserManager.page.locator("//a[@role='link']").innerText();
  expect(error).toContain("playwright.letsautomate@gmail.com")
});
Then('verify serach functionality working on all the clolumns in warranty enquiry', async function () {
  await browserManager.page.waitForTimeout(10000)
  const tableSelector = "//div[@myidentifier='table-container-div']"
  //let columnNames=['WarrantyNumber','Model','VIN','PlateNumber','Status','FirstRegistrationDate','ApplicationDate','StartDate',
  //'ExpiryDate','WarrantyType','ExtendedPeriod','Outlet']
  let columnNames = ['tr0', 'tr2', 'tr3', 'tr11']
  const searchCriteria = {
    tr0: '08', tr2: 'P109', tr3: '01', tr11: 'PC DC'
  }
  for (const columnName of columnNames) {
    const columnSelector = '#' + columnName + '';
    await browserManager.page.waitForTimeout(1000)
    await browserManager.page.fill('' + columnSelector + '', searchCriteria[columnName])
    await browserManager.page.keyboard.press('Enter')

    await browserManager.page.waitForTimeout(5000)
    await browserManager.page.reload();


  }
});
Then('verify search functionality in drop down columns', async function () {
  await browserManager.page.waitForTimeout(10000)
  let dropDowns = await browserManager.page.locator("//span[contains(text(),'Select')]").count();
  //for (let i=0;i<dropDowns;i++) {
  await browserManager.page.waitForTimeout(1000)
  await browserManager.page.click("//span[contains(text(),'Select')]")
  await browserManager.page.click("//span[contains(text(),'997 Carrera')]")
  //await browserManager.page.reload();
  await browserManager.page.waitForTimeout(10000)
  await browserManager.page.click("//span[contains(text(),'Select')]")
  await browserManager.page.click("//span[contains(text(),'VOID')]")
  //await browserManager.page.reload();'New Car/3 year'
  await browserManager.page.waitForTimeout(10000)
  await browserManager.page.click("//span[contains(text(),'Select')]")
  await browserManager.page.click("//span[contains(text(),'New Car/3 year')]")
  //await browserManager.page.reload();'New Car/3 year'

  await browserManager.page.waitForTimeout(10000)
  await browserManager.page.click("//span[contains(text(),'Select')]")
  await browserManager.page.click("//span[contains(text(),'2 Years')]")


  // await browserManager.page.keyboard.press('Enter') 
  // await browserManager.page.waitForTimeout(5000)
  //await browserManager.page.reload();


  //}
});



Then('Click on Back to Sign in button', async function () {
  await browserManager.page.click('#back_to_login')
});
Then('Validate user is navigated back to login page', async function () {
  let LoginURL = await browserManager.page.url()
  expect(LoginURL).toContain("login")
});



Then('Verify User has navigated to claim list page', async function () {
  //await browserManager.page.goto('https://release.na.secureaffinity.marsh.com/bluestream/extended-warranty/sscl/en-US/claims')
  await browserManager.page.waitForTimeout(10000)
  targetURL = 'https://release.na.secureaffinity.marsh.com/bluestream/extended-warranty/sscl/en-US/claims'
  //await browserManager.page.waitForURL('https://release.na.secureaffinity.marsh.com/bluestream/extended-warranty/sscl/en-US/claims')
  const currentURL = browserManager.page.url()
  console.log(currentURL)
  if (currentURL === targetURL) {
    console.log('Navigation has happend')
  }
  else {
    console.log('No Navigation To claim list page')
  }
  expect(targetURL).toBe(currentURL)
  let ClaimListText = await browserManager.page.innerText('//span[contains(text(),"Claim List")]')
  expect(ClaimListText).toBe("Claim List")


});


Then('User is able to click on ADD claim button', async function () {
  await browserManager.page.click('#add-claim');
  //await browserManager.page.click('//a[contains(text(),"Claim")]');
});
Then('User has able to see warranty list pop up to select a warranty', async function () {
  let AddClaim = browserManager.page.locator("#warranty-search-columns_layout-0")

  AddClaim.click("//td span[contains(text(),'SSUC0041-00000004')]")

  // await browserManager.page.click('#add-claim');
  // const[popUp]=await Promise.race([browserManager.page.context().waitForEvent('page'),
  //browserManager.page.waitForTimeout(10000),]);
  // let [Claim_Alert]=browserManager.page.context().pages();
  // if(Claim_Alert){
  // let [Claim_Alert]=browserManager.page.context().pages();
  //let [Claim_popup]=contextss.pages();

  //let WR_List_Text=await Claim_Alert.innerText('//label[@for="warranty-search-table"]/span')
  // expect(WR_List_Text).toBe("Please search a warranty to add new claim")
  // await Claim_Alert.click('//span[@myidentifier="tableNonLinkFieldDataText"]')
  //  await Claim_Alert.click('#confirm-warranty-search')
  //  await Claim_Alert.waitForTimeout(10000)}
  await browserManager.page.waitForTimeout(20000)
  await AddClaim.evaluate(() => {
    const targetElement = document.querySelector("#confirm-warranty-search")
    if (targetElement) {
      targetElement.scrollIntoView();
    }
  })
  await browserManager.page.waitForTimeout(20000)
  let confirm = browserManager.page.locator("#warranty-search-columns_layout-container")
  await confirm.click("//button[@type='submit']")
  await browserManager.page.waitForTimeout(20000)

});



Then('User clicks on warranty record from warranty details page', async function () {
  await browserManager.page.waitForTimeout(10000)
  //await browserManager.page.click('.ng-star-inserted')
  await browserManager.page.click('//a[contains(text(),"SSUC0041-00000004")]');


});



Then('User Will navigate to warranty details page', async function () {
  await browserManager.page.waitForTimeout(10000)

});

Then('User clicks on claims section', async function () {
  await browserManager.page.click('//label[contains(text()," Claims")]');


});



Then('User clicks on ADD Claim button', async function () {
  await browserManager.page.click('#add-claim');


});



Then('User navigate to new claim creation page', async function () {

});
Then('Internal User Logging into the apllication', async function () {
  await browserManager.page.click('button[name="single-sign-on"]');
  await browserManager.page.waitForTimeout(5000)
  // await browserManager.page.click('#logout');
});
Then('User Need to be log out', async function () {
  await browserManager.page.waitForTimeout(5000)
  await browserManager.page.click('#logout');
  await browserManager.page.waitForTimeout(5000)
});




Then('User is able to select a warranty from the list and able to click on confirm', async function () {

  //  await Claim_popup.click('//span[@myidentifier="tableNonLinkFieldDataText"]')
  //  await Claim_popup.click('#confirm-warranty-search')
  //  await Claim_popup.waitForTimeout(10000)
  await browserManager.page.waitForTimeout(20000)
  //await AddClaim.click("//button[@type='submit']")
  //await browserManager.page.waitForTimeout(20000)
  await browserManager.page.click("#confirm-warranty-search")

});


Then('user has navigated to claim creation page', async function () {

  let NewClaim = await browserManager.page.innerText('//p[contains(text(),"New Claim")]')
  expect(NewClaim).toBe("New Claim")


});


Then('User is able to cancel the warranty by clicking cancel button', async function () {
  await browserManager.page.waitForTimeout(1000)
  await browserManager.page.click("//button[@name='cancel-policy']");

});


Then('User is able to navigate to Cancellation Dates & Reason pop up', async function () {
  await browserManager.page.waitForTimeout(1000)
  await browserManager.page.waitForSelector('#cancellation-reason', { visible: true })
  const dropdown = await browserManager.page.$('#cancellation-reason')
  await dropdown.click();
  // const optionSelector='role="option"';
  await browserManager.page.waitForTimeout(5000)
  //await browserManager.page.waitForSelector(".ng-star-inserted")
  // await browserManager.page.click(".ng-star-inserted");
  //await dropdown.selectOption({label:' Sign up for product changes '})
  // const optionText = " Sign up for product changes ";
  // const optionTextElement =await browserManager.page.$(`#cancellation-reason:has-text('${optionText}')`)
  // await optionTextElement.click()
  // await browserManager.page.click('//span[contains(text()," Sign up for product changes ")]')
  //span[contains(text(),"Cancel purchase intention")]
  // await browserManager.page.waitForTimeout(1000)
});



Then('User is able to fill the all the details and complete the validations in pop up', async function () {
  await browserManager.page.waitForTimeout(1000)
  //aria-label="Product information is different"
  await browserManager.page.click("//li[@aria-label='Product information is different']")
});



Then('User is able to click on Next on Cancellation Dates & Reason pop up', async function () {
  await browserManager.page.click('#next-button')


});



Then('User is able to navigate to Refund pop up screen', async function () {
  let Text = await browserManager.page.locator('//P[contains(text(),"Refund")]').innerText();
  expect(Text).toBe("Refund")
});



Then('User is able to view all required fields in refund pop up', async function () {
  await browserManager.page.click("//button[@name='myClose']")
});
Then('User clicks on Administration Tab', async function () {
  await browserManager.page.waitForTimeout(10000)
  await browserManager.page.click('//span[contains(text(),"Administration")]')
  await browserManager.page.waitForTimeout(10000)
});



Then('User Selects outlet option from drop down', async function () {
  await browserManager.page.click('//a[contains(text(),"Outlet")]')

});



Then('User navigate to OutLet table', async function () {
  let OutLet = await browserManager.page.locator('//span[contains(text(),"Outlet")]').innerText()
  expect(OutLet).toBe("Outlet")
});

Then('User Select an option Car Model from drop down', async function () {
  await browserManager.page.click('//a[contains(text(),"Car Model")]')
});



Then('user navigate to Car Model', async function () {
  let OutLet = await browserManager.page.locator('//span[contains(text(),"Car Model")]').innerText()
  expect(OutLet).toBe("Car Model")
});
Then('Valiadate the Car Model table columns', async function () {
  const OutLetColumns = await browserManager.page.$$("//tr[@myidentifier='tableHead']/th")

  for (const ColumnName of OutLetColumns) {
    //console.log(ColumnName.innerText())
    let ColumnText = (await ColumnName.innerText()).toString();
    const columnNames = [' Category ', ' Class ', ' Model ', ' Code ']
    expect(columnNames.toString().includes(ColumnText)).toBeTruthy();
    console.log("Attempt" + " " + ColumnText)
    await browserManager.page.waitForTimeout(10000)
  }
});
Then('Validate the place holders in search criteria in each column', async function () {
  const OutLetColumns = await browserManager.page.$$("//tr[@myidentifier='tableSubHead']/th")
  let PlaceHolder1 = browserManager.page.locator("//tr[@myidentifier='tableSubHead']/th[3]").getAttribute('placeholder')
  let PlaceHolder2 = browserManager.page.locator("//tr[@myidentifier='tableSubHead']/th[4]").getAttribute('placeholder')

  console.log(await PlaceHolder1)
  console.log(await PlaceHolder2)
  for (const ColumnName of OutLetColumns) {
    //console.log(ColumnName.innerText())

    let ColumnText = (await ColumnName.innerText()).toString();
    const columnNames = ['ALL', 'ALL', 'Search', 'Search']
    expect(columnNames.toString().includes(ColumnText)).toBeTruthy();
    console.log("Attempt" + " " + ColumnText)
    await browserManager.page.waitForTimeout(10000)
  }
});

Then('Click on ADD Car Model button', async function () {
  await browserManager.page.click('#add-vehicle')
});



Then('validate user navigate to pop up where he can add new car model', async function () {
  expect(await browserManager.page.locator('//p[contains(text(),"Add Car Model")]').innerText()).toBe('Add Car Model')

});
When('User uploads warranty with invalid data', async function () {

  const filesAndErrorMessages = [
    { file: 'features//stepDefinations//ExcelSheets//ErrorCode1.xlsx', errorMessage: 'EW_NOT_PERMITTED_YEAR : Settled Year' },
    { file: 'features//stepDefinations//ExcelSheets//ErrorCode2.xlsx', errorMessage: 'EW_INVALID_YEAR : Settled Year' },
    { file: 'features//stepDefinations//ExcelSheets//ErrorCode3.xlsx', errorMessage: 'Missing mandatory' },
    { file: 'features//stepDefinations//ExcelSheets//ErrorCode4.xlsx', errorMessage: 'EW_NOT_PERMITTED_MONTH : Settled Month' },
    { file: 'features//stepDefinations//ExcelSheets//ErrorCode5.xlsx', errorMessage: 'EW_INVALID_MONTH : Settled Month' },
    { file: 'features//stepDefinations//ExcelSheets//ErrorCode6.xlsx', errorMessage: 'Missing mandatory' },
    { file: 'features//stepDefinations//ExcelSheets//ErrorCode7.xlsx', errorMessage: 'Model doesn’t exist in Master Table' },
    { file: 'features//stepDefinations//ExcelSheets//ErrorCode8.xlsx', errorMessage: 'Missing mandatory' },
    { file: 'features//stepDefinations//ExcelSheets//ErrorCode9.xlsx', errorMessage: 'Missing mandatory' },
    { file: 'features//stepDefinations//ExcelSheets//ErrorCode10.xlsx', errorMessage: 'Model doesn’t exist in Master Table' },
    { file: 'features//stepDefinations//ExcelSheets//ErrorCode11.xlsx', errorMessage: 'Missing mandatory' },
    { file: 'features//stepDefinations//ExcelSheets//ErrorCode12.xlsx', errorMessage: 'Missing mandatory' },
    { file: 'features//stepDefinations//ExcelSheets//ErrorCode13.xlsx', errorMessage: 'Missing mandatory' },
    { file: 'features//stepDefinations//ExcelSheets//ErrorCode14.xlsx', errorMessage: 'Invalid Data : Car Price' },
    { file: 'features//stepDefinations//ExcelSheets//ErrorCode15.xlsx', errorMessage: 'Missing mandatory' },
    { file: 'features//stepDefinations//ExcelSheets//ErrorCode16.xlsx', errorMessage: 'Duplicate Data Exist: VIN' },
    { file: 'features//stepDefinations//ExcelSheets//ErrorCode17.xlsx', errorMessage: 'Missing mandatory' },
    { file: 'features//stepDefinations//ExcelSheets//ErrorCode18.xlsx', errorMessage: 'Invalid Data : Mileage' },
    { file: 'features//stepDefinations//ExcelSheets//ErrorCode19.xlsx', errorMessage: 'Present Mileage is not eligible for warranty enrolment : Mileage' },
    { file: 'features//stepDefinations//ExcelSheets//ErrorCode20.xlsx', errorMessage: 'Missing mandatory' },
    { file: 'features//stepDefinations//ExcelSheets//ErrorCode21.xlsx', errorMessage: 'Model doesn’t exist in Master Table' },
    { file: 'features//stepDefinations//ExcelSheets//ErrorCode22.xlsx', errorMessage: 'Invalid vehicle type with product code' },
    { file: 'features//stepDefinations//ExcelSheets//ErrorCode23.xlsx', errorMessage: 'Missing mandatory' },
    { file: 'features//stepDefinations//ExcelSheets//ErrorCode24.xlsx', errorMessage: 'Outlet doesn’t exist in Outlet Table' },
    { file: 'features//stepDefinations//ExcelSheets//ErrorCode25.xlsx', errorMessage: 'Missing mandatory' },
    { file: 'features//stepDefinations//ExcelSheets//ErrorCode26.xlsx', errorMessage: 'Invalid product code' },
    { file: 'features//stepDefinations//ExcelSheets//ErrorCode28.xlsx', errorMessage: 'Missing mandatory' },
    { file: 'features//stepDefinations//ExcelSheets//ErrorCode29.xlsx', errorMessage: 'Invalid Data : EW Price' },
    { file: 'features//stepDefinations//ExcelSheets//ErrorCode30.xlsx', errorMessage: 'Invalid application date : Application Date' },
    { file: 'features//stepDefinations//ExcelSheets//ErrorCode31.xlsx', errorMessage: 'Invalid application date : Application Date' },
    { file: 'features//stepDefinations//ExcelSheets//ErrorCode32.xlsx', errorMessage: 'EW_WRONG_DATE_FORMAT : Application Date ' },
    { file: 'features//stepDefinations//ExcelSheets//ErrorCode33.xlsx', errorMessage: 'Application Date (EW Purchase Date) is not eligible for warranty enrolment' },
    { file: 'features//stepDefinations//ExcelSheets//ErrorCode34.xlsx', errorMessage: 'Missing mandatory' },
    { file: 'features//stepDefinations//ExcelSheets//ErrorCode35.xlsx', errorMessage: 'Missing mandatory' },
    { file: 'features//stepDefinations//ExcelSheets//ErrorCode36.xlsx', errorMessage: 'EW_WRONG_DATE_FORMAT' },
    { file: 'features//stepDefinations//ExcelSheets//ErrorCode37.xlsx', errorMessage: 'Missing mandatory ' },
    { file: 'features//stepDefinations//ExcelSheets//ErrorCode38.xlsx', errorMessage: 'EW_WRONG_DATE_FORMAT : ExistingWarrantyEndDate' },
    { file: 'features//stepDefinations//ExcelSheets//ErrorCode39.xlsx', errorMessage: 'Invalid Data : Coverage start' },
  ];
  for (const { file, errorMessage } of filesAndErrorMessages) {
    //await browserManager.page.waitForTimeout(10000);
    // browserManager.page.setDefaultTimeout(10000000)

    try {
      await browserManager.page.goto('https://release.na.secureaffinity.marsh.com/bluestream/extended-warranty/sscl/en-US/warranty-upload')
      await browserManager.page.reload()
      await browserManager.page.locator('//input[@type="file"]').setInputFiles(file)
      await browserManager.page.click('#upload-button')
      await browserManager.page.waitForTimeout(20000)
      await browserManager.page.waitForSelector('#list-section-file-upload-error')
      const capturedErrorMessage = await browserManager.page.innerText('#list-section-file-upload-error')
      // console.log("Error Message for "+${file}+"", capturedErrorMessage);
      console.log("Error Message ", capturedErrorMessage)
      console.log("error file name", { file })
      expect(capturedErrorMessage).toContain(errorMessage)

    }
    catch (error) {
      await browserManager.page.goto('https://release.na.secureaffinity.marsh.com/bluestream/extended-warranty/sscl/en-US/warranty-upload')
      await browserManager.page.reload()
      await browserManager.page.locator('//input[@type="file"]').setInputFiles(file)
      await browserManager.page.waitForTimeout(30000)
      await browserManager.page.click('#upload-button')
      //await browserManager.page.waitForTimeout(20000)
      await browserManager.page.waitForSelector('#list-section-file-upload-error')
      const capturedErrorMessage = await browserManager.page.innerText('#list-section-file-upload-error')
      //console.log('Error Message for ${file}:', capturedErrorMessage);
      console.log("Error Message ", capturedErrorMessage)
      console.log("error file name", { file })
      expect(capturedErrorMessage).toContain(errorMessage)
    }
  }


});

Then('User able to capture error message On Ui and validated', async function () {

});

Then('click on warranty which is uploaded recently', async function () {
  await browserManager.page.click("//a[contains(text(),'SSNC0001-00000057')]")

});
Then('user navigate to warranty details page', async function () {
  await browserManager.page.waitForURL("https://release.na.secureaffinity.marsh.com/bluestream/extended-warranty/sscl/en-US/warranty-detail")
  await browserManager.page.waitForTimeout(2000)
});

Then('Go to Header warranty section and click on warranty enquiry', async function () {
  await browserManager.page.waitForTimeout(10000);
  await browserManager.page.reload()
  await browserManager.page.click('//i[@myidentifier="menuIcon"]')
  await browserManager.page.click('//a[text()="Enquiry"]')
  await browserManager.page.waitForTimeout(10000)
});
Then('Read the values in warranty upload excel sheet', async function () {
  let Value = new ExcelValues();
  let ExValue = Value.readingExcel()
  let millege = await (await ExValue).CarMillege;
  console.log("Millege:" + millege)

});
Then('validate the EX Warranty sheet values mapping with warranty enquiry', async function () {
  let Value = new ExcelValues();
  let ExValue = Value.readingExcel()
  let VIN = await (await ExValue).VINNumber;
  await browserManager.page.locator("#tr2").fill(VIN)
  await browserManager.page.waitForTimeout(4000)
  //let ModelName=await (await ExValue).VehicleModelName;
  //let value=await browserManager.page.locator("//span[@myidentifier='tableNonLinkFieldDataText']").innerText()

});
Then('validate the extended warranty details displaying corresponding fields', async function () {
  await browserManager.page.waitForTimeout(10000)
  let Value = new ExcelValues();
  let ExValue = Value.readingExcel()
  let Outlet = await (await ExValue).OutLetCodes;
  console.log("Excel value", Outlet)
  let Outletdisplay = await (await browserManager.page.locator("#outlet").innerText()).toString();
  console.log("displayed value", Outletdisplay)
  expect(Outlet).toContain(Outletdisplay)
  let VMName = await (await ExValue).VehicleModelName;
  let VMNmaeDisplay = await browserManager.page.locator("#class").innerText()
  expect(VMName).toContain(VMNmaeDisplay)
  let VINNumber = await (await ExValue).VINNumber;
  let VIN = await browserManager.page.locator("#vin").innerText()
  console.log(VIN)
  expect(VIN).toContain(VINNumber)
  let carPrice = await (await ExValue).CarPrice;
  let CarPriceDisplay = await browserManager.page.locator("#car-purchase-price").innerText()
  expect(carPrice).toContain(CarPriceDisplay)
  let PlateNumber = await (await ExValue).PlateNumber;
  let PlateNumberDispaly = await browserManager.page.locator("#plate-number").innerText()
  expect(PlateNumber).toContain(PlateNumberDispaly)
  let presentmileage = await (await ExValue).CarMillege;
  let presentMileageDispaly = await browserManager.page.locator("#present-mileage").innerText()
  expect(presentmileage).toContain(presentMileageDispaly)
  let SMonth = await (await ExValue).SettlementMonths;
  let settMonth = await browserManager.page.locator("#application-setlement-month").innerText()
  expect(SMonth).toContain(settMonth)

});

When('User uploads warranty with invalid extension', async function () {
  const filePath = 'C://SSCL_Korea_Automation_Code//features//stepDefinations//ExcelSheets//Issues.docx'
  // await browserManager.page.setInputFiles('//button[text()=" Browse File "]',);
  await browserManager.page.locator('//input[@type="file"]').setInputFiles(filePath)
  await browserManager.page.click('#upload-button')
  await browserManager.page.waitForTimeout(20000)
});
Then('Choose Warranty Excel file from Local and click on upload button on UI and upload two files', async function () {
  const filePathONE = 'C://SSCL_Korea_Automation_Code//features//stepDefinations//ExcelSheets//ErrorCode1.xlsx'
  const filePathTWO = 'C://SSCL_Korea_Automation_Code//features//stepDefinations//ExcelSheets//ErrorCode2.xlsx'

  // await browserManager.page.setInputFiles('//button[text()=" Browse File "]',);
  await browserManager.page.locator('//input[@type="file"]').setInputFiles(filePathONE)
  await browserManager.page.locator('//input[@type="file"]').setInputFiles(filePathTWO)

  await browserManager.page.click('#upload-button')
  await browserManager.page.waitForTimeout(20000)
});
Then('search the required CAR MODEL', async function () {

  await browserManager.page.click("//span[contains(text(),'Select')]")
  await browserManager.page.click("//span[contains(text(),'Boxster')]")
  await browserManager.page.waitForTimeout(20000)

  await browserManager.page.click("//timesicon")



});
Then('search the required OUTLET MODEL', async function () {
  await browserManager.page.locator("#tr3").fill("Sample")
  await browserManager.page.waitForTimeout(20000)

});

Then('user will create claim', async function () {
  await browserManager.page.waitForTimeout(1000)
  await browserManager.page.fill('#wip-number', '12345')
  await browserManager.page.fill('#present-mileage', '12345')
  await browserManager.page.click("//*[@name='claim-notice-day']")
  await browserManager.page.click("//span[contains(text(),'Today')]")
  await browserManager.page.click("#report-fault-date")
  await browserManager.page.click("//span[contains(text(),'Today')]")
  await browserManager.page.fill('#loss-description', 'Sample')
  await browserManager.page.fill('#total-estimated-claim-amount', '555')
  await browserManager.page.locator("//div[@aria-description='Service Advisor']").click()
  await browserManager.page.locator("#dropdown-option-service-advisor-0").click()
  await browserManager.page.locator("//div[@aria-description='Failure Reason']").click()
  await browserManager.page.click("//*[@aria-label='Accidental Damage']")
  //await browserManager.page.click("#component-area-button")  
  //let componentPopUp=browserManager.page.locator("//p-table[@myidentifier='datatable']")
  // await componentPopUp.click("//span[contains(text(),'1 Engine')]")
  //await browserManager.page.waitForTimeout(10000)

  //await componentPopUp.evaluate(() => {
  // const targetElements = document.querySelector("#confirm-component-search")
  //if (targetElements) {
  //targetElements.scrollIntoView();
  //  }
  //})
  //await browserManager.page.waitForTimeout(10000)
  //await componentPopUp.waitFor("#confirm-component-search")
  //let confirm=browserManager.page.locator("#component-search-columns_layout-container")
  //await confirm.click("#confirm-component-search")


  await browserManager.page.waitForTimeout(5000)
  await browserManager.page.click("#create-claim-button")


});
Then('user will select the existing incident', async function () {
  await browserManager.page.click("#incident-type-existingIncident")
  await browserManager.page.waitForTimeout(1000)
  await browserManager.page.click("//div[@aria-label='Incident Number']")
  await browserManager.page.click("//li[@aria-label='SSI000037']")
});
Then('user will create claim for existing incident', async function () {
  await browserManager.page.waitForTimeout(3000)
 // await browserManager.page.fill('#wip-number', '12344')
  //await browserManager.page.fill('#present-mileage', '12345')
  //await browserManager.page.click("//*[@name='claim-notice-day']")
  //await browserManager.page.click("//span[contains(text(),'Today')]")
  await browserManager.page.click("#report-fault-date")
 // await browserManager.page.click("//span[contains(text(),'1')]")
  await browserManager.page.click("//span[contains(text(),'Today')]")
  await browserManager.page.fill('#loss-description', 'Sample')
  await browserManager.page.fill('#total-estimated-claim-amount', '555')
  await browserManager.page.locator("//div[@aria-description='Service Advisor']").click()
  await browserManager.page.locator("#dropdown-option-service-advisor-0").click()
  await browserManager.page.locator("//div[@aria-description='Failure Reason']").click()
  await browserManager.page.click("//*[@aria-label='Accidental Damage']")
});
Then('user adds new car model to existing list', async function () {
  await browserManager.page.waitForTimeout(50000)
  let AddCarModel=browserManager.page.locator("section#add-vehicle")
  await AddCarModel.click("//div[@aria-label='Category']")
  await AddCarModel.click("//*[@id='category-Boxster']")
  //id="dropdown-list-vehicle-class"
  await AddCarModel.click("#dropdown-list-vehicle-class")
  await AddCarModel.fill("#vehicle-model",'Parav')
  await AddCarModel.fill("#vehicle-code",'907')
  await AddCarModel.click("#vehicle-create-button")


});