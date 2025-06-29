Feature: HomePage

Background:
  Given I am on the home page

@web
Scenario: On Desktop make sure the "MOST POPULAR" section is visible
  When I scroll to "MOST POPULAR" section
  Then I should see the "MOST POPULAR" Section
  
@web
Scenario: Make sure the "MOST POPULAR" section has 10 posts
  Then I should see 10 posts under "MOST POPULAR" section
  
@web
Scenario: Make sure the Bypass blocks for "Most reads" is working fine
  When I click on Header Menu
  And I click on Most Read "Bypass blocks"
  Then I should see that URL contains "#most-read-container"

@mobile
Scenario: Make sure on mobile view "MOST POPULAR" section should not be visible
  Then I should not see the "MOST POPULAR" section in Mobile
