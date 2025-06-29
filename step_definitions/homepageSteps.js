// File: step_definitions/homeSteps.js

const { I } = inject();
const COMMONMETHODS = require('../pages/CommonMethods');
const HOMEPAGE = require('../pages/HomePage');

// Feature: Home Page Tests
Given('I am on the home page', async () => {
  console.log('Navigating to the home page...');
  
  await COMMONMETHODS.gotoHomePage();
  await COMMONMETHODS.acceptCookies();
});

// Scenario #1: On Desktop make sure the "MOST POPULAR" section is visible

When('I scroll to "MOST POPULAR" section', async () => {
  await HOMEPAGE.checkMostPopularTitle();
});

Then('I should see the "MOST POPULAR" Section', async () => {
  await HOMEPAGE.checkMostPopularSection();
});


// Scenario #2: Make sure the "MOST POPULAR" section has 10 posts.

Then('I should see 10 posts under "MOST POPULAR" section', async () => {
  await HOMEPAGE.checkMostPopularHasTenPosts();
});


// Scenario #3: Make sure the Bypass blocks for "Most reads" is working fine

When('I click on Header Menu', async () => {
  await HOMEPAGE.clickHeaderMenu();
});

When('I click on Most Read "Bypass blocks"', async () => {
  await HOMEPAGE.clickMostReadBypassBlock();
});

Then('I should see that URL contains "#most-read-container"', async () => {
  await HOMEPAGE.checkUrlContainsMostRead();
});

// Scenario #4: Make sure on mobile view "MOST POPULAR" section should not be visible
Then('I should not see the "MOST POPULAR" section in Mobile', async () => {
  await COMMONMETHODS.resizeWindow('mobile');
  await HOMEPAGE.checkMostPopularMobile();
});


