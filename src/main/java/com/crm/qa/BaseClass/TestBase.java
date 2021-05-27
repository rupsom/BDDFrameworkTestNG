package com.crm.qa.BaseClass;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.logging.log4j.LogManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.events.EventFiringWebDriver;
import org.testng.ITestResult;
import org.apache.logging.log4j.Logger;
import org.joda.time.DateTime;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.reporter.ExtentSparkReporter;
import com.crm.qa.Utilities.TestUtility;
import com.crm.qa.Utilities.WebEventListener;

public class TestBase
{
	public static WebDriver driver; // Interface
	public static Properties property; // Class
	public static EventFiringWebDriver e_driver; // Class
	public static WebEventListener eventListener; // Class
	public static Logger log = LogManager.getLogger(TestBase.class);
	
	static String currentDate = DateTime.now().toString("yyyy-MM-ddHH-mm-ss-SSS");
	
	public static ExtentSparkReporter extentsparkreporter 
	= new ExtentSparkReporter("./reports/testreports"+currentDate+".html");
		
	public static ExtentReports extentReports = new ExtentReports();
	
	public TestBase()
	{
		try 
		{
			property = new Properties();
			FileInputStream ip = 
					new FileInputStream("D:\\Projects\\Java\\Projects_Selenium\\BDDFrameworkTestNG\\src\\main\\java\\com\\crm\\qa\\Configuration\\Configuration.properties");
			property.load(ip);			
		} 
		catch (FileNotFoundException e)
		{
			e.printStackTrace();
		} 
		catch (IOException e) 
		{
			e.printStackTrace();
		}
	}
	
	public static void initialization() 
	{
		extentReports.attachReporter(extentsparkreporter);
		ExtentTest extnlogger = extentReports.createTest("Initialization");
		
		String broswerName = property.getProperty("Browser");
		
		if(broswerName.equals("chrome"))
		{
			System.setProperty("webdriver.chrome.driver","./Drivers/chromedriver.exe");
			driver = new ChromeDriver();
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			log.info("Browser Open");
			extnlogger.info("Browser is Opened");
		}
		else if(broswerName.equals("firefox"))
		{
			System.setProperty("webdriver.gecko.driver","./Drivers/geckodriver.exe");
			driver = new FirefoxDriver();
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			extnlogger.info("Firefox Browser is Opened");
		}
		
		e_driver = new EventFiringWebDriver(driver);
		//Now create object of EventListerHandler to register it with EventFiringWebDriver.
		eventListener = new WebEventListener();
		e_driver.register(eventListener);
		driver = e_driver;
			
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(TestUtility.Page_Load_TimeOut, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(TestUtility.Implicit_Wait, TimeUnit.SECONDS);
		
		driver.get(property.getProperty("Url"));
		log.info("URL -"+property.getProperty("Url"));
		extnlogger.info("Browser Opened with URL - "+property.getProperty("Url"));
		extnlogger.pass("Browser Initialization Done");

	}

}
