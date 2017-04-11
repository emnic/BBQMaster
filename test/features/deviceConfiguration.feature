Feature: Configure Temperature device
    As a user of BBQMaster
    I should be able configure the target temperature, set alarm etc

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

    
    Scenario: Set target temp using list
        Given the temperature sensor config menu is displayed
        When I select a meat category
        And then selects a meat type
        Then the temperature is updated


    Scenario: Set target temp using list
        Given the temperature sensor config menu is displayed
        When I select a meat category
        And then selects a meat type
        Then the temperature is updated        

    @wip
    Scenario Outline: List option removed when slider is used
        Given the temperature has been set using an option from list
        When the "<inputType>" is changed
        Then the list option is removed
        And the temperature is updated    
            Examples:
                |   inputType  |
                | manual input |
                |    slider    |

    @wip
    Scenario Outline: Save or Cancel edit target temperature
        Given the temperature sensor config menu is displayed
        When the "<button>" is pressed
        Then the "<page>" is displayed
        And the target temp is "<status>"
            Examples:
                | button |        page      |  status   |
                |  Save  | device dashboard |   Saved   |
                | Cancel | device dashboard | Not Saved |

    Scenario: Turn on target temp notification
        Given the temperature sensor config menu is displayed
        When the target temp notification is activated 
        Then notification setting is displayed as activated

    Scenario Outline: Set High and Low temperature notification
        Given the temperature sensor config menu is displayed
        When the button to add a "<highLow>" notification is pressed
        Then a configuration page for setting high low temperatures is displayed

