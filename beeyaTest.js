const {Builder, Key} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
driver.get('http://beeya.ddns.net:3000');



//Login
driver.findElement(webdriver.By.id("login_username")).click();
driver.findElement(webdriver.By.id("login_username")).clear();
userSuccess = driver.findElement(webdriver.By.id("login_username")).sendKeys("Bee", Key.RETURN);
driver.findElement(webdriver.By.id("login_password")).click();
driver.findElement(webdriver.By.id("login_password")).clear();
passwordSuccess = driver.findElement(webdriver.By.id("login_password")).sendKeys("password", Key.RETURN);
driver.findElement(webdriver.By.id("//*[@id='login']/div[3]/div/div/div/button")).click();
if (userSuccess && passwordSuccess) {
    console.log("Success!");
}
driver.wait(until.titleIs('Home'), 6000).then(driver.quit());
//////////////////////////////////////////////

//Login account
driver.findElement(By.name('username')).sendKeys('test1234123413', Key.RETURN);
driver.findElement(By.name('password')).sendKeys('t43413', Key.RETURN);
driver.wait(until.titleIs('Login'), 1000);
driver.quit();

//Naviagate to home page
driver.findElement(By.name('username')).sendKeys('test1234123413', Key.RETURN);
driver.findElement(By.name('password')).sendKeys('t43413', Key.RETURN);
driver.findElement(By.name('1')).click()
driver.wait(until.titleIs('Home page'), 1000);
driver.quit();

//Naviagate to explore page
driver.findElement(By.name('username')).sendKeys('test1234123413', Key.RETURN);
driver.findElement(By.name('password')).sendKeys('t43413', Key.RETURN);
driver.findElement(By.name('2')).click()
driver.wait(until.titleIs('Explore page'), 1000);
driver.quit();

//Naviagate to Profile page
driver.findElement(By.name('username')).sendKeys('test1234123413', Key.RETURN);
driver.findElement(By.name('password')).sendKeys('t43413', Key.RETURN);
driver.findElement(By.name('3')).click()
driver.wait(until.titleIs('Profile'), 1000);
driver.quit();

//Tweet to text and picture
driver.findElement(By.name('username')).sendKeys('test1234123413', Key.RETURN);
driver.findElement(By.name('password')).sendKeys('t43413', Key.RETURN);

driver.findElement(By.name('statusTextArea')).sendKeys('This is a test for the final demo! Picture included', Key.RETURN);
driver.findElement(By.name('statusTextArea')).uploadElement.sendKeys("C:\filename.pdf");

uploadElement.sendKeys("C:\filename.pdf")
driver.findElement(By.name('tweetButton')).click()

driver.wait(until.titleIs('Tweet text'), 1000);
driver.quit();

//Explore and find user
driver.findElement(By.name('username')).sendKeys('test1234123413', Key.RETURN);
driver.findElement(By.name('password')).sendKeys('t43413', Key.RETURN);
driver.findElement(By.name('2')).click()
driver.wait(until.titleIs('Explore page'), 1000);
driver.quit();

//Explore and find Post
driver.findElement(By.name('username')).sendKeys('test1234123413', Key.RETURN);
driver.findElement(By.name('password')).sendKeys('t43413', Key.RETURN);
driver.findElement(By.name('2')).click()
driver.wait(until.titleIs('Explore page'), 1000);
driver.quit();

//Explore and find user and go to profile
driver.findElement(By.name('username')).sendKeys('test1234123413', Key.RETURN);
driver.findElement(By.name('password')).sendKeys('t43413', Key.RETURN);
driver.findElement(By.name('2')).click()
driver.wait(until.titleIs('Explore page'), 1000);
driver.quit();


//Tweet text-only
driver.findElement(webdriver.By.id("login_username")).click();
driver.findElement(webdriver.By.id("login_username")).clear();
var userSuccess = driver.findElement(webdriver.By.id("login_username")).sendKeys("JaneS", Key.RETURN);
driver.findElement(webdriver.By.id("login_password")).click();
driver.findElement(webdriver.By.id("login_password")).clear();
var passwordSuccess = driver.findElement(webdriver.By.id("login_password")).sendKeys("jane1234", Key.RETURN);


var el = driver.wait(until.elementLocated(By.xpath('//*[@id="status"]')));
    el.click();
    el.clear();
    el.sendKeys('This is a test for the final demo!');
var tweet = driver.wait(until.elementLocated(By.xpath('//*[@id="tweetButton]')));
tweet.click();
/////////////////////////////////////////////////




//Naviagate to home page
/*driver.findElement(webdriver.By.id("login_username")).click();
driver.findElement(webdriver.By.id("login_username")).clear();
var userSuccess = driver.findElement(webdriver.By.id("login_username")).sendKeys("John", Key.RETURN);
driver.findElement(webdriver.By.id("login_password")).click();
driver.findElement(webdriver.By.id("login_password")).clear();
var passwordSuccess = driver.findElement(webdriver.By.id("login_password")).sendKeys("password", Key.RETURN);
driver.findElement(webdriver.By.id("//*[@id='login']/div[3]/div/div/div/button")).click();
if (userSuccess && passwordSuccess) {
    console.log("Logged In");
}

var menuSelected = driver.wait(until.titleIs('Home'), 6000);

if (menuSelected){
    console.log("At Home Page!")
}
else {
    console.log("Failed to reach Home.")
}*/


//Navigate to Explore
/*driver.findElement(webdriver.By.id("login_username")).click();
driver.findElement(webdriver.By.id("login_username")).clear();
var userSuccess = driver.findElement(webdriver.By.id("login_username")).sendKeys("JaneS", Key.RETURN);
driver.findElement(webdriver.By.id("login_password")).click();
driver.findElement(webdriver.By.id("login_password")).clear();
var passwordSuccess = driver.findElement(webdriver.By.id("login_password")).sendKeys("jane1234", Key.RETURN);
driver.findElement(webdriver.By.id("//*[@id='login']/div[3]/div/div/div/button")).click();
if (userSuccess && passwordSuccess) {
    console.log("Logged In");
}
*/

//Tweet to text only
/*driver.findElement(By.name('username')).sendKeys('test1234123413', Key.RETURN);
driver.findElement(By.name('password')).sendKeys('t43413', Key.RETURN);driver.findElement(webdriver.By.id("login_username")).click();
driver.findElement(webdriver.By.id("login_username")).clear();
var userSuccess = driver.findElement(webdriver.By.id("login_username")).sendKeys("JaneS", Key.RETURN);
driver.findElement(webdriver.By.id("login_password")).click();
driver.findElement(webdriver.By.id("login_password")).clear();
var passwordSuccess = driver.findElement(webdriver.By.id("login_password")).sendKeys("jane1234", Key.RETURN);
driver.findElement(webdriver.By.id("//*[@id='login']/div[3]/div/div/div/button")).click();
if (userSuccess && passwordSuccess) {
    console.log("Logged In");
}

driver.findElement(By.name('statusTextArea'));
driver.findElement(By.xpath('statusTextArea')).sendKeys('This is a test for the final demo!', Key.RETURN);
driver.findElement(By.name('tweetButton')).click()

driver.wait(until.titleIs('Tweet text'), 1000);
*/
