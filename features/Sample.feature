Feature: Functionality of SSCL Korea
  @WrToClaims
  Scenario: Navigating to Claims page from Warranty details page
    When User has enterd required URL
    When User is loging into SSCL korea Application
    Then User clicks on warranty record from warranty details page
    Then User Will navigate to warranty details page
    Then User clicks on claims section
    Then User clicks on ADD Claim button
    Then User navigate to new claim creation page
    Given User Need to be log out
    @DraftClaimDetails
  Scenario: User has to see the details of created claim 
    When User has enterd required URL
    When User is loging into SSCL korea Application
    Then User clicks on warranty record from warranty details page
    Then User Will navigate to warranty details page
    Then User clicks on claims section
    Then click on claim record and verify the fields with respect to that

  @LoginScenario
  Scenario Outline: Login with different credentials
    When User has enterd required URL
    When I enter my username "<username>"
    And I enter my password  "<password>"
    And I click on the "Login" button
    Then I should see "<expected_result>"
    Examples:
      | username       |  | password   |  | expected_result       |
      |                |  | Marsh@2023 |  | Please enter User Id  |
      | Play@Gmail.com |  |            |  | Password is required. |
      |                |  |            |  | Please enter User Id  |
  @LoginScenario-Ex
  Scenario: Validating Login--External user
    When User has enterd required URL
    When User is loging into SSCL korea Application
    Then User clicks on log out and navigate to login page

  @DownloadSample
  Scenario: Download Sample of warranty
    When User has enterd required URL
    When User is loging into SSCL korea Application
    Then Clicking of warranty option
    Then User clicks on log out and navigate to login page
  @LoginScenario-InteralUser
  Scenario: Login functionality of SSCL Korea--Internal User
    When User has enterd required URL
    Then Internal User Logging into the apllication
    Given User Need to be log out



  @cancelWarranty
  Scenario: Validating Warranty cancel functionality
    When User has enterd required URL
    When User is loging into SSCL korea Application
    Then User clicks on warranty record from warranty details page
    Then User is able to cancel the warranty by clicking cancel button
    Then User is able to navigate to Cancellation Dates & Reason pop up
    Then User is able to fill the all the details and complete the validations in pop up
    Then User is able to click on Next on Cancellation Dates & Reason pop up
    Then User is able to navigate to Refund pop up screen
    Then User is able to view all required fields in refund pop up
    Then User clicks on log out and navigate to login page
    @cancelWarrantyError
  Scenario: Validating Warranty cancel functionality with error message
    When User has enterd required URL
    When User is loging into SSCL korea Application
    Then User clicks on warranty record from warranty details page
    Then User is able to cancel the warranty by clicking cancel button
    Then User is able to click on Next on Cancellation Dates & Reason pop up
    Then User is able to see the error
    Then User clicks on log out and navigate to login page
    @EditRefund
    Scenario: Valiadting edit refund functionality
    When User has enterd required URL
    When User is loging into SSCL korea Application
    Then User clicks on warranty record from warranty details page
    Then User is able to cancel the warranty by clicking cancel button
    Then User is able to navigate to Cancellation Dates & Reason pop up
    Then User is able to fill the all the details and complete the validations in pop up
    Then User is able to click on Next on Cancellation Dates & Reason pop up
    Then User is able to navigate to Refund pop up screen
    Then User is able to edit refund amount
    Then User clicks on log out and navigate to login page

  @creatCLaimFmHeader
  Scenario: Navigating to claim creation page from Claim button in Header
    When User has enterd required URL
    When User is loging into SSCL korea Application
    Then Click on Claim button in header part
    Then Click on Claim button in header part
    Then Navigate to claims page from Header Claim option
    Then User is able to click on ADD claim button
    Then User has able to see warranty list pop up to select a warranty
    Then User is able to select a warranty from the list and able to click on confirm
    Then user has navigated to claim creation page
    Then user will create claim
    Then User clicks on log out and navigate to login page
  @UploadWRIntoUI
  Scenario: Uploading Warranty excel from local to UI
    When User has enterd required URL
    When User is loging into SSCL korea Application
    Then click on Warranty from Header and select upload from Drop down
    Then Click on Browse File option
    Then Choose Warranty Excel file from Local and click on upload button on UI
    Then User clicks on log out and navigate to login page
  @logout
  Scenario: Logout functionality
    When User has enterd required URL
    When User is loging into SSCL korea Application
    Then User clicks on log out and navigate to login page
  @ForgotPassword
  Scenario: Check Forgot password functionality module
    When User has enterd required URL
    Then User is clicking on forgot password functionality
    Then Click on Back to Sign in button
    Then Validate user is navigated back to login page

  
  @outlet
  Scenario: Navigating to OutLet Table
    When User has enterd required URL
    When User is loging into SSCL korea Application
    Then User clicks on Administration Tab
    Then User Selects outlet option from drop down
    Then User navigate to OutLet table
    Then User clicks on log out and navigate to login page
  @CarModel
  Scenario: Navigating to Car Model Table
    When User has enterd required URL
    When User is loging into SSCL korea Application
    Then User clicks on Administration Tab
    Then User Select an option Car Model from drop down
    Then user navigate to Car Model
    Then Valiadate the Car Model table columns
    Then Click on ADD Car Model button
    And  validate user navigate to pop up where he can add new car model
    Given User Need to be log out
  @ValidateE2E
  Scenario: User Login to Warranty Creation
    When User has enterd required URL
    When User is loging into SSCL korea Application
    Then click on Warranty from Header and select upload from Drop down
    Then Click on Browse File option
    Then Choose Warranty Excel file from Local and click on upload button on UI
    Then Go to Header warranty section and click on warranty enquiry
    Then Read the values in warranty upload excel sheet
    Then validate the EX Warranty sheet values mapping with warranty enquiry
    Then click on warranty which is uploaded recently
    Then user navigate to warranty details page
    Then validate the extended warranty details displaying corresponding fields
    Then User clicks on log out and navigate to login page


  @warrantyUploadValidationsInvalid
  Scenario: Validating error messages of Warranty upload
    When User has enterd required URL
    When User is loging into SSCL korea Application
    When User uploads warranty with invalid data
    Then User able to capture error message On Ui and validated
    Given User Need to be log out
  @UploadFileOtherThanXlsx
  Scenario: User not allowed to enter file other than xlsx
    When User has enterd required URL
    When User is loging into SSCL korea Application
    Then click on Warranty from Header and select upload from Drop down
    Then Click on Browse File option
    When User uploads warranty with invalid extension
    Given User Need to be log out
  @UploadWRIntoUITwoTimes
  Scenario: Uploading Warranty excel from local to UI only one file
    When User has enterd required URL
    When User is loging into SSCL korea Application
    Then click on Warranty from Header and select upload from Drop down
    Then Click on Browse File option
    Then Choose Warranty Excel file from Local and click on upload button on UI and upload two files
    Then User clicks on log out and navigate to login page
  @SearchCarModel
  Scenario: Searching Car Model from List
    When User has enterd required URL
    When User is loging into SSCL korea Application
    Then User clicks on Administration Tab
    Then User Select an option Car Model from drop down
    Then user navigate to Car Model
    Then search the required CAR MODEL
    Then User clicks on log out and navigate to login page
  @SearchingOutletModel
  Scenario: Search OutLet model
    When User has enterd required URL
    When User is loging into SSCL korea Application
    Then User clicks on Administration Tab
    Then User Selects outlet option from drop down
    Then User navigate to OutLet table
    Then search the required OUTLET MODEL
    Then User clicks on log out and navigate to login page
  @forgotPassworderror
  Scenario: Verify Error pop ups on entering empty and invalid emails
    When User has enterd required URL
    Then User is clicking on forgot password functionality
    Then validate the message pop ups on leaving email field with empty value
    Then validate the message pop ups on leaving email field with invalid value
    Then validate the message pop ups on entering valid email
    
  @searchInWarrantyEnquiry
  Scenario: Verify user is able to perform search operation on all columns in warranty enquiry
    When User has enterd required URL
    When User is loging into SSCL korea Application
    Then verify serach functionality working on all the clolumns in warranty enquiry
    Then verify search functionality in drop down columns
    Given User Need to be log out
  @WrToClaimsCreation
  Scenario: Creating claims from header part
    When User has enterd required URL
    Then Internal User Logging into the apllication
    Then User clicks on warranty record from warranty details page
    Then User Will navigate to warranty details page
    Then User clicks on claims section
    Then User clicks on ADD Claim button
    Then User navigate to new claim creation page
    Then user will create claim
    Given User Need to be log out

  @createClaimFromExistingIncident
  Scenario: Creating claims from header part
    When User has enterd required URL
    Then Internal User Logging into the apllication
    Then User clicks on warranty record from warranty details page
    Then User Will navigate to warranty details page
    Then User clicks on claims section
    Then User clicks on ADD Claim button
    Then User navigate to new claim creation page
    Then user will select the existing incident
    Then user will create claim for existing incident
    Given User Need to be log out
@AddCarModel
Scenario: Add new car model in existing list
    When User has enterd required URL
    When User is loging into SSCL korea Application
    Then User clicks on Administration Tab
    Then User Select an option Car Model from drop down
    Then user navigate to Car Model
    Then Click on ADD Car Model button
    Then user adds new car model to existing list
    @Addoutlet
  Scenario: Add new OutLet to existing  list
    When User has enterd required URL
    When User is loging into SSCL korea Application
    Then User clicks on Administration Tab
    Then User Selects outlet option from drop down
    Then User navigate to OutLet table
    Then click on add outlet
    Then User clicks on log out and navigate to login page
    @editOutlet
    Scenario: edit existing outlet
    When User has enterd required URL
    When User is loging into SSCL korea Application
    Then User clicks on Administration Tab
    Then User Selects outlet option from drop down
    Then User navigate to OutLet table
    Then edit existing outlet
    Then User clicks on log out and navigate to login page











