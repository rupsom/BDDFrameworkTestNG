Feature: CRM Login

  #Logging in Using Scenario Outline - Achieving Data Driven Approach
  #Taking UserName and Password from Feature file
  Scenario Outline: Free CRM Login Test Scenario
  Given User is already on Login Page
  When Title of login page is Free CRM
  Then User enters "<Username>" and "<Password>" and click on login button
  Then User is on home page

  Examples: 
      | Username   | Password  |
      | pavanreddy | Saibaba77 |
      | pavanreddy | Saibaba77 |
