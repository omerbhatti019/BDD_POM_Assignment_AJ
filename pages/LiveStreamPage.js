const { I } = inject();

module.exports = {
  
  switchplayerBtn: '#liveStreamPlayerHelpButton',
  mainVideo : '.aj-video-player video',

  async gotoLive() {
    await I.amOnPage('/live');
    console.log('Navigated to the live page');
  },

  async checkVideoPlayer() {
    await I.seeElement(this.mainVideo);
  },
    
  async checkSwitchPlayerBtn() {
     await I.seeElement(this.switchplayerBtn);
},
};
