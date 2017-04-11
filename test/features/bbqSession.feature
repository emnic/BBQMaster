Feature: BBQ Session
    As a user of BBQMaster
    I should be able to measure the temperature when grilling

    Background:
        Given the device dashboard is displayed

    @wip
    Scenario: Set target temp by manually inputting number
        Given the temperature sensor config menu is displayed
        When I click on the target temperature 
        Then it is possible to manually input the desired temperature    