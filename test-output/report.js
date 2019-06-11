$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginFeature_1.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Without Examples",
  "description": "",
  "id": "free-crm-login-without-examples",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#Without Examples Keyword"
    },
    {
      "line": 4,
      "value": "#Logging in Normally - Taking UserName and Password from Property file"
    }
  ],
  "line": 5,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-without-examples;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters username and password and click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestCase_1.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 15150470790,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestCase_1.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 58799738,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestCase_1.user_enters_username_and_password()"
});
formatter.result({
  "duration": 5550469950,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestCase_1.user_is_on_home_page()"
});
formatter.result({
  "duration": 23611796,
  "status": "passed"
});
formatter.uri("LoginFeature_2.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login With Examples",
  "description": "",
  "id": "free-crm-login-with-examples",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Logging in Using Scenario Outline - Achieving Data Driven Approach"
    },
    {
      "line": 4,
      "value": "#Taking UserName and Password from Feature file"
    }
  ],
  "line": 5,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-with-examples;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is should be on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Title of login page should be verified",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\" and clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User should be on home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "free-crm-login-with-examples;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 12,
      "id": "free-crm-login-with-examples;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "pavanreddy",
        "Saibaba77"
      ],
      "line": 13,
      "id": "free-crm-login-with-examples;free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "pavanreddy",
        "Saibaba77"
      ],
      "line": 14,
      "id": "free-crm-login-with-examples;free-crm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-with-examples;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is should be on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Title of login page should be verified",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters \"pavanreddy\" and \"Saibaba77\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User should be on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestCase_2.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 17557961441,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestCase_2.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 13977679,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pavanreddy",
      "offset": 13
    },
    {
      "val": "Saibaba77",
      "offset": 30
    }
  ],
  "location": "LoginTestCase_2.user_enters_and_and_click_on_login_button(String,String)"
});
formatter.result({
  "duration": 8328541000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestCase_2.user_is_on_home_page()"
});
formatter.result({
  "duration": 10197180,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-with-examples;free-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is should be on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Title of login page should be verified",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters \"pavanreddy\" and \"Saibaba77\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User should be on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestCase_2.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 11643313311,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestCase_2.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 37097786,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pavanreddy",
      "offset": 13
    },
    {
      "val": "Saibaba77",
      "offset": 30
    }
  ],
  "location": "LoginTestCase_2.user_enters_and_and_click_on_login_button(String,String)"
});
formatter.result({
  "duration": 6986698743,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestCase_2.user_is_on_home_page()"
});
formatter.result({
  "duration": 5962311,
  "status": "passed"
});
});