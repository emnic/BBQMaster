Feature: Device Configuration
    As a user of BBQMaster
    I should be able configure the added devices to set target temperature set time etc

    Background:
        Given the device dashboard is displayed


    Scenario: Set target temp by manually inputting number
        Given the temperature sensor config menu is displayed
        When I click on the target temperature 
        Then it is possible to manually input the desired temperature


    Scenario: Set target temp by using slider
        Given the temperature sensor config menu is displayed
        When I adjust the slider
        Then the temperature is updated

    @wip
    Scenario: Set target temp using list
        Given the temperature sensor config menu is displayed
        When I select a meat category
        And then selects a meat type
        Then the temperature is updated