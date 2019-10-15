var left_page = function(){

this.selectprime = function(){
element(by.className("a-icon a-icon-prime a-icon-medium")).click();
}

this.hasfilter = function(){

return element(by.xpath('//*[@id="primeRefinements"]/ul/li[1]/span/a/span[2]')).getText();

}

this.clearfilter = function(){
element(by.xpath('//*[@id="primeRefinements"]/ul/li[1]/span/a/span[2]')).click();
}



};
module.exports = new left_page();