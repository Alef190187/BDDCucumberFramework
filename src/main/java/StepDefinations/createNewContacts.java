package StepDefinations;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class createNewContacts {
    
	
WebDriver driver;
	
	@Given("^user is already on the login page$")
	public void user_is_already_on_the_login_page()  {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.get("https://www.crmpro.com"); 
	}

	@When("^title of the login page is \"([^\"]*)\"$")
	public void the_title_of_the_login_page_is(String arg1)  {
		String title = driver.getTitle();
		System.out.println("the title of the login page is==> " + title);
		Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.", title);  
	}

	@Then("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String username, String password)  {
		driver.findElement(By.xpath("//input[@placeholder='Username']")).sendKeys(username);
		driver.findElement(By.xpath("//input[@placeholder='Password']")).sendKeys(password);
	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button()  {
		driver.findElement(By.xpath("//input[@class='btn btn-small']")).click();
	}
    
	@Then("^user is on the home page$")
	public void user_is_on_the_home_page()  {
		String title = driver.getTitle();
		System.out.println("the title of the home page is==> "+ title);
	}
	@Then("^the home page title is \"([^\"]*)\"$")
	public void the_home_page_title_is()  {
	   String homepageTitle = driver.getTitle();
	   System.out.println("the home page title is =="+ homepageTitle);
	   Assert.assertEquals("CRMPRO", homepageTitle);
	}
	@Then("^user moves to contacts link and clicks on new contacts link$")
	public void user_moves_to_contacts_link_and_clicks_on_new_contacts_link() {
		driver.switchTo().frame("mainpanel");
	    Actions action = new Actions(driver);
	    action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"))).build().perform();
	    driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")).click();
	}
	@Then("^user enters contacts details as \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_contacts_details_as_and_and(String firstname, String lastname, String position) {
		driver.findElement(By.xpath("//input[@id='first_name']")).sendKeys(firstname);
		driver.findElement(By.xpath(" //input[@id='surname']")).sendKeys(lastname);
		driver.findElement(By.xpath("//input[@id='company_position']")).sendKeys(position);
		driver.findElement(By.cssSelector("#contactForm > table > tbody > tr:nth-child(1) > td > input:nth-child(2)")).click();
	   
	}
	
     
	@Then("^user colse the browser$")
	public void user_colse_the_browser() {
	   driver.close();
	}

}
