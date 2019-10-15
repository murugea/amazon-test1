/* Elements - Home page 
 * 		    - Search items
 * 
 * Author - Aishwarya Murugesan
 * 
 */


var home_page = function(){
	
	this.searchbox = function(value){
		element(by.id('twotabsearchtextbox')).sendKeys(value);
	}
	
	this.searchbtn = function(){
		element(by.css('#nav-search > form > div.nav-right > div > input')).click();
	}
	
	this.searchresulttext = function(){
		
		return element(by.className('a-color-state a-text-bold')).getText();
	}
	
	this.searchelement = function(){
		element(by.className('a-link-normal a-text-normal')).click();
	}
	
	
	
};
module.exports = new home_page();