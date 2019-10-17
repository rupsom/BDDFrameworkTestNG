$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginFeature_1.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login",
  "description": "Description: This feature will test Login Feature of CRM Application",
  "id": "free-crm-login",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "#Without Examples Keyword"
    },
    {
      "line": 5,
      "value": "#Logging in Normally - Taking UserName and Password from Property file"
    }
  ],
  "line": 6,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters username and password and click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestCase_1.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 11204480039,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestCase_1.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 123633051,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestCase_1.user_enters_username_and_password()"
});
formatter.result({
  "duration": 6978322873,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestCase_1.user_is_on_home_page()"
});
formatter.result({
  "duration": 11459469,
  "status": "passed"
});
formatter.uri("LoginFeature_2.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login With Examples Keyword",
  "description": "Description: This feature will test Login Feature of CRM Application",
  "id": "free-crm-login-with-examples-keyword",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#Logging in Using Scenario Outline - Achieving Data Driven Approach"
    },
    {
      "line": 5,
      "value": "#Taking UserName and Password from Feature file"
    }
  ],
  "line": 6,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-with-examples-keyword;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User is should be on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Title of login page should be verified",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\" and clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User should be on home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "free-crm-login-with-examples-keyword;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 13,
      "id": "free-crm-login-with-examples-keyword;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "pavanreddy",
        "Saibaba77"
      ],
      "line": 14,
      "id": "free-crm-login-with-examples-keyword;free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "pavanreddy",
        "Saibaba77"
      ],
      "line": 15,
      "id": "free-crm-login-with-examples-keyword;free-crm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-with-examples-keyword;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User is should be on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Title of login page should be verified",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters \"pavanreddy\" and \"Saibaba77\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User should be on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestCase_2.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 9479499842,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestCase_2.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 20648970,
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
  "duration": 7341559365,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestCase_2.user_is_on_home_page()"
});
formatter.result({
  "duration": 5937558,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-with-examples-keyword;free-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User is should be on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Title of login page should be verified",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters \"pavanreddy\" and \"Saibaba77\" and clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User should be on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestCase_2.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 10549658478,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestCase_2.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 14172143,
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
  "duration": 5033569038,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestCase_2.user_is_on_home_page()"
});
formatter.result({
  "duration": 11841529,
  "status": "passed"
});
});