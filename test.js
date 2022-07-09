// We load the remote object from the WebdriverIO package.
const { remote } = require('webdriverio');

// We wrap our code in an async function so we can use await statements.
(async () => {
  // We create a new session using remote, saving the reference to a browser 
  // object which we use to send commands.
  const browser = await remote({
    // ChromeDriver server uses port 9515 to listens for commands
    // WebdriverIO expects the WebDriver server to be running on port 4444
    //port: 9515,
    // Unlike ChromeDriver, when you start Selenium, it runs on port 4444 by default. 
    // That means we can comment out or remove the port option we had for our ChromeDriver usage.
    //path: '/wd/hub',
    capabilities: {
      browserName: 'chrome'
    }
  });
  // We send a url command, requesting the browser go to the WebdriverIO website.
  await browser.url('https://webdriver.io');
  // We then get the title of the page, storing it as a local variable.
  const title = await browser.getTitle();
  // The title of the page is logged to the terminal.
  console.log('Title was: ' + title);
  // The session is ended, since we’re done with our test.
  await browser.deleteSession();
// A simple catch statement is added in case anything goes wrong.  
})().catch((e) => console.error(e));