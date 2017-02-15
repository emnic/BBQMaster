Feature: Configuration of devices
    As a user of BBQMaster
    I should be able to use configuire devices

    Background:
        Given I'm in the settings menu for devices

    Scenario: Add new device
        Given there is an option to add a new device
        When I click the button to add a new device 
        And input all nessescary information and press save
		Then the new device is added and displayed on the settings devices dashboard
