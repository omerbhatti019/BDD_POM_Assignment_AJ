const { I } = inject();
const ASSERT = require('assert');

module.exports = {
    
    mostPopularTitle : '#trending-articles-heading',
    mostPopularItems : ".trending-articles__list li",
    headerSelector : ".container--header a, .container--header button",
    mostReadBypassBlock : ".bypass-block-link[href='#most-read-container']",
    appendLink : '#most-read-container',


    // functions to check the most popular section on the home page 
    //1. checkMostPopularTitle()
    //2. checkMostPopularSection()
    //3. checkMostPopularHasTenPosts()

    async checkMostPopularTitle(){
    
      await I.scrollTo(this.mostPopularTitle);
      await I.seeElement(this.mostPopularTitle);
    },

    async checkMostPopularSection(){

      await I.scrollTo(this.mostPopularItems)
      await I.seeElement(this.mostPopularItems);

    },

    async checkMostPopularHasTenPosts(){

      // Check if the most popular items are visible and are 10 in number
      await I.waitForVisible(this.mostPopularItems);
      const count = await I.grabNumberOfVisibleElements(this.mostPopularItems);
      ASSERT.strictEqual(count, 10, 'Expected 10 visible posts');

    },

    async checkMostPopularMobile(){

      // Check if the most popular section is not visible on mobile devices
      await I.dontSeeElement(this.mostPopularTitle);

    },

    async clickHeaderMenu() {

      await I.executeScript((selector) => {
        const FOCUSABLE = document.querySelector(selector);
        if (FOCUSABLE) FOCUSABLE.focus();
      },this.headerSelector);
      await I.pressKey('Tab'); 

    },


    async clickMostReadBypassBlock(){
      await I.waitForVisible(this.mostReadBypassBlock, 5);
      // Click on the Most Read Bypass Block
      await I.click(this.mostReadBypassBlock);

    },

    async checkUrlContainsMostRead(){

      // Check if the URL contains the expected append link
      await I.seeInCurrentUrl(this.appendLink);

    },

};







