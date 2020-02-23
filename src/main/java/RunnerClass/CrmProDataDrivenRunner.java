package RunnerClass;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		features= "C:\\Users\\alef1\\eclipse-workspace\\BDDDataDrivenFramework\\src\\"
				+ "main\\java\\Feature\\NewContacts.feature",
	    glue ="StepDefinations",
			
	    //or format used to generate reports.
	   plugin= {"pretty", "html:test-output", "json:json_output/Cucumber.json"},
		//dryRun= true/false,//to chect any steps is missing or not in the step def file.
	    dryRun = false,
	    monochrome= true//display console output in more readable format/clear unexpected chars.
		//strict= true // to chect any undefined steps in the step def file.
		
		)
	





public class CrmProDataDrivenRunner {

}
