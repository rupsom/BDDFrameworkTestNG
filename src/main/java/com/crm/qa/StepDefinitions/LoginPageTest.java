package com.crm.qa.StepDefinitions;

import org.testng.Assert;
import org.testng.ITestResult;
import org.testng.annotations.AfterMethod;
import org.testng.asserts.SoftAssert;

import com.aventstack.extentreports.ExtentTest;
import com.crm.qa.BaseClass.TestBase;
import com.crm.qa.Pages.HomePage;
import com.crm.qa.Pages.LoginPage;
import com.crm.qa.Utilities.TestUtility;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

//
public class LoginPageTest extends TestBase {
	LoginPage login;
	HomePage homePage;
	ExtentTest loginLogger = extentReports.createTest("Login Page");
	boolean assertResult = true;
	SoftAssert softassert = new SoftAssert();

	@Given("^User is already on Login Page$")
	public void user_is_already_on_Login_Page() throws Throwable {
		initialization();
	}

	@When("^Title of Login Page is Free CRM$")
	public void title_of_login_page_is_Free_CRM() throws Throwable {
		login = new LoginPage();
		String loginPageTitle = login.validateLoginPageTitle();
		try {
			Assert.assertEquals(loginPageTitle,
					"CRMPRO - CRM software for customer relationship management, sales, and support.");
			loginLogger.pass("Login page title is validated");
			log.info("Login page title is successful");
		} catch (Exception e) {
			softassert.assertAll();
			loginLogger.fail(e);
			log.info("Login page title is failed");
		}
	}

//	Below Method is for LoginPage @SmokeTest Scenario.
//	@Then("^User enters username and password and click on login button$")
//	public void user_enters_username_and_password() throws Throwable 
//	{
//		login.login(property.getProperty("Username"), property.getProperty("Password"));
//	}

//	Below Method is for LoginPage @SanityTest Scenario.
	@Then("^User enters \"([^\"]*)\" and \"([^\"]*)\" and click on login button$")
	public void user_enters_and_and_click_on_login_button(String Username, String Password) throws Throwable {
		try {
			login.login(Username, Password);
			loginLogger.pass("Login is donw with user - " + Username);
			log.info("Login is successful");
		} catch (Exception e) {
			loginLogger.fail("Login is unsuccessful");
			log.info("Login is unsuccessful");
		}
	}

	@Then("^User is on Home Page$")
	public void user_is_on_home_page() throws Throwable {
		homePage = new HomePage();
		String homePageTitle = homePage.verifyHomePageTitle();
		try {
			softassert.assertEquals(homePageTitle, "CRMPRO");
			loginLogger.pass("Home Page is opened");
			log.info("Home Page opening is successful");
		} catch (Exception e) {
			softassert.assertAll();
			loginLogger.fail("Home page title is not matched");
			log.info("Home page title is not matched");
		} finally {
			TestUtility.reportFlush();
			
		}
	}
	
	@AfterMethod
	public void tearDown(ITestResult result) {
		if(result.getStatus() == 2) {
			
			
		}
	}
}
