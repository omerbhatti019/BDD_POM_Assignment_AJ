// This file contains common methods used across different pages in the application.
// It includes methods for navigating to the home page, accepting cookies, resizing the window


 const { I } = inject();

 const assert = require('assert');
 
 module.exports = {
  cookiebtnAccept : '#onetrust-accept-btn-handler',
  header : ".container--white.header-is-sticky",


  async gotoHomePage()
  {
    await I.amOnPage('/');
    console.log('Navigated to the home page');
  },

  async acceptCookies() {
    const exists = await I.grabNumberOfVisibleElements(this.cookiebtnAccept);
    if (exists > 0) {
      await I.click(this.cookiebtnAccept);
    }
    else {
      console.log('No cookie banner found');
    }
  },

  async resizeWindow(device){
    if (device === 'desktop') {
      await  await I.resizeWindow(1920, 1080); // Example dimensions for desktop view
    }  
    else if (device === 'mobile') {
      await I.resizeWindow(375, 667); // Example dimensions for mobile view
    } else {
      throw new Error('Unknown device type: ' + device);
    }
     // Example dimensions for mobile view
    console.log('Window resized to mobile dimensions');
  }
};
