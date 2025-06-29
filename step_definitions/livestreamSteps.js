const LIVESTREAM = require('../pages/LiveStreamPage.js');


Given ('I am on the livestream page', async () => {
    await LIVESTREAM.gotoLive();
  }),

//Scenario #1: Validate player is visible in Livestream page

Then ('I should see the video player', async () => {
    await LIVESTREAM.checkVideoPlayer();
  });

//Scenario #2: Validate Switch Player button is visible in Livestream page   

Then ('I should see the Switch Player button', async () => {
    await LIVESTREAM.checkSwitchPlayerBtn();
  });
