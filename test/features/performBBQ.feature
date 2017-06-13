Feature: Perform a BBQ-session
    As a user of BBQMaster
    I should be able to perform a BBQ-session

    Background:
        Given the device dashboard is displayed
        And the app is connected to server

    @bbqsession
    Scenario Outline: Update temperature
        Given the temperature has changed to "<temperature>" degrees at the sensor
        When the app is requesting an temperature update from the server 
        Then the temperature in the device dashboard is updated with the same value
            Examples:
                | temperature | 
                |     20      |
                |     36      |
                |     56      |
                |     60      |