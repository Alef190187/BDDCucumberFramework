$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/alef1/eclipse-workspace/BDDDataDrivenFramework/src/main/java/Feature/NewContacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRMPro Create new Contacts Feature",
  "description": "",
  "id": "free-crmpro-create-new-contacts-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM Login Data Driven Test Scenario",
  "description": "",
  "id": "free-crmpro-create-new-contacts-feature;free-crm-login-data-driven-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is already on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the title of the login page is \"CRMPRO  - CRM software for customer relationship management, sales, and support.\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"\u003cusername\u003e\" and  \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the home page title is \"CRMPRO\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to contacts link and clicks on new contacts link",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contacts details as \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user colse the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "free-crmpro-create-new-contacts-feature;free-crm-login-data-driven-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 15,
      "id": "free-crmpro-create-new-contacts-feature;free-crm-login-data-driven-test-scenario;;1"
    },
    {
      "cells": [
        "Alef190187",
        "Au2155941186",
        "Khan",
        "Hossain",
        "QA"
      ],
      "line": 16,
      "id": "free-crmpro-create-new-contacts-feature;free-crm-login-data-driven-test-scenario;;2"
    },
    {
      "cells": [
        "batchautomation",
        "test@12345",
        "Alef",
        "Uddin",
        "QA Lead"
      ],
      "line": 17,
      "id": "free-crmpro-create-new-contacts-feature;free-crm-login-data-driven-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Free CRM Login Data Driven Test Scenario",
  "description": "",
  "id": "free-crmpro-create-new-contacts-feature;free-crm-login-data-driven-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is already on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the title of the login page is \"CRMPRO  - CRM software for customer relationship management, sales, and support.\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"Alef190187\" and  \"Au2155941186\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the home page title is \"CRMPRO\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to contacts link and clicks on new contacts link",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contacts details as \"Khan\" and \"Hossain\" and \"QA\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user colse the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "createNewContacts.user_is_already_on_the_login_page()"
});
formatter.result({
  "duration": 12471227900,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "createNewContacts.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createNewContacts.user_is_on_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CRMPRO",
      "offset": 24
    }
  ],
  "location": "createNewContacts.the_home_page_title_is()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createNewContacts.user_moves_to_contacts_link_and_clicks_on_new_contacts_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Khan",
      "offset": 33
    },
    {
      "val": "Hossain",
      "offset": 44
    },
    {
      "val": "QA",
      "offset": 58
    }
  ],
  "location": "createNewContacts.user_enters_contacts_details_as_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createNewContacts.user_colse_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 17,
  "name": "Free CRM Login Data Driven Test Scenario",
  "description": "",
  "id": "free-crmpro-create-new-contacts-feature;free-crm-login-data-driven-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is already on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the title of the login page is \"CRMPRO  - CRM software for customer relationship management, sales, and support.\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"batchautomation\" and  \"test@12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the home page title is \"CRMPRO\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to contacts link and clicks on new contacts link",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contacts details as \"Alef\" and \"Uddin\" and \"QA Lead\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user colse the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "createNewContacts.user_is_already_on_the_login_page()"
});
formatter.result({
  "duration": 10231557400,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "createNewContacts.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createNewContacts.user_is_on_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CRMPRO",
      "offset": 24
    }
  ],
  "location": "createNewContacts.the_home_page_title_is()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createNewContacts.user_moves_to_contacts_link_and_clicks_on_new_contacts_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Alef",
      "offset": 33
    },
    {
      "val": "Uddin",
      "offset": 44
    },
    {
      "val": "QA Lead",
      "offset": 56
    }
  ],
  "location": "createNewContacts.user_enters_contacts_details_as_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createNewContacts.user_colse_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});