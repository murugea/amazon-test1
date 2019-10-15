/* Amazon Protractor Assignment
 * Sign in - Search for a product - verify if results of searched products are displayed - 
 * Select a filter - clear the filter
 * Delete our search - Search for a different product            
 * 
 * Author - Aishwarya Murugesan 
 * 
 */


describe('Amazon Protractor Assignment', function() {

 var login_page = require('../Pages/LoginPage.js');
 var home_page = require('../Pages/HomePage.js');
 var leftpanel = require('../Components/LeftPanel.js');
 var searchbar = require('../Components/SearchQuery.js');
 
it('Launch browser and navigate to sign in page', function() {
      browser.waitForAngularEnabled(false);  
      browser.get('https://amazon.in');
      browser.driver.manage().window().maximize();
      element(by.id("nav-link-accountList")).click();
      element(by.cssContainingText('.nav-action-inner','Sign in')).click();  

     
});
     
it('rest of the flow', function() {
		     var usern = "";
		     login_page.username(usern);
		     login_page.ctnbtn();
		     var pass = "";
		     login_page.password(pass);
		     login_page.lgnbtn();
		     
		     
		     var item = "iPhone";
		     searchbar.queryitem(item);
		 
		     var searchresult = home_page.searchresulttext();
		     expect(searchresult).toContain(item);
		 
		     leftpanel.selectprime();
		     var filterpresent = leftpanel.hasfilter();
		     expect(filterpresent).toContain('Clear');
		     leftpanel.clearfilter();
		 
		 
		     searchbar.delqueryitem();
		     searchbar.queryitem('The alchemist');
		 
		     home_page.searchbtn();
		   
		 

  });
 
});