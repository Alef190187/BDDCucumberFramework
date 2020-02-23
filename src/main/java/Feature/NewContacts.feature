Feature: Free CRMPro Create new Contacts Feature

Scenario Outline: Free CRM Login Data Driven Test Scenario
Given user is already on the login page
When the title of the login page is "CRMPRO  - CRM software for customer relationship management, sales, and support."
Then user enters "<username>" and  "<password>"
Then user clicks on login button
Then user is on the home page
Then the home page title is "CRMPRO"
Then user moves to contacts link and clicks on new contacts link
Then user enters contacts details as "<firstname>" and "<lastname>" and "<position>"
Then user colse the browser

Examples: 
 | username | password | firstname | lastname | position |
 | Alef190187 | Au2155941186 | Khan | Hossain | QA |
 | batchautomation | test@12345 | Alef | Uddin | QA Lead |