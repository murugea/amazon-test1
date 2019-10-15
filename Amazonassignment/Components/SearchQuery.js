var searchbar = function(){

	this.queryitem = function(value){
	
	element(by.id("twotabsearchtextbox")).sendKeys(value);
	element(by.css('#nav-search > form > div.nav-right > div > input')).click();
	
	}
	
	this.delqueryitem = function(){
	   element(by.id("twotabsearchtextbox")).clear();
	}
	
	
};
module.exports = new searchbar();