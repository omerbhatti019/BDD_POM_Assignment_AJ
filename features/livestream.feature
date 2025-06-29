Feature: Livestream switch player

   Background:
    Given I am on the livestream page

  @web
  Scenario: Validate player is visible in Livestream page
    Then I should see the video player

  @web
  Scenario: Validate "Switch Player" button is visible in Livestream page
    Then I should see the Switch Player button