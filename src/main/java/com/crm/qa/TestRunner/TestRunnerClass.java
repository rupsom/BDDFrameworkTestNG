package com.crm.qa.TestRunner;

import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;

@CucumberOptions
	(features = {"src\\main\\java\\com\\crm\\qa\\Features"},
	glue= {"com.crm.qa.StepDefinitions"}, 
	plugin = {"pretty", "html:test-output", "junit:junit_xml/cucumber.xml"},
	monochrome = true, 
	strict = true, 
	dryRun=false) 

public class TestRunnerClass 
{
	private TestNGCucumberRunner testNGCucumberRunner;
	 
    @BeforeClass(alwaysRun = true)
    public void setUpClass() throws Exception 
    {
        testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
    }
 
    @Test(groups = "cucumber", description = "Runs Cucumber Feature", dataProvider = "features")
    public void feature(CucumberFeatureWrapper cucumberFeature) 
    {
        testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
    }
 
    @DataProvider
    public Object[][] features() 
    {
        return testNGCucumberRunner.provideFeatures();
    }
 
    @AfterClass(alwaysRun = true)
    public void tearDownClass() throws Exception 
    {
        testNGCucumberRunner.finish();
    }
}

//To Run Specific Feature File <--> Give Complete Path of Particular Feature File to Run.
//D:\Automation_Workspace\BDDFrameworkTestNG\src\main\java\com\crm\qa\Features\LoginFeature_1.feature

//To Run All Feature Files at a Single Time -- Give Path as Below
//src\\main\\java\\com\\crm\\qa\\Features