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

    Scenario Outline: Save or Cancel add device
        Given the add device page is displayed
        When the "<button>" is pressed
        Then the "<page>" is displayed
            Examples:
                | button |        page       |
                |  Save  | Dashboard Devices |
                | Cancel | Dashboard Devices |

    Scenario: Edit device
        Given there is at least one device added
        When I click the button to edit the device
        Then the device edit page is displayed

    Scenario Outline: Save or Cancel edit device
        Given the edit device page is displayed
        When the "<button>" is pressed
        Then the "<page>" is displayed
            Examples:
                | button |        page       |
                |  Save  | Dashboard Devices |
                | Cancel | Dashboard Devices |

    Scenario: Delete device
        Given the edit device page is displayed
        When I click the button to delete the device
        Then the user needs to confirm the deletion

    Scenario Outline: Save or Cancel delete device
        Given the delete device page is displayed
        When the "<button>" is pressed
        Then the "<page>" is displayed
            Examples:
                | button |       page        |
                |   Yes  | Dashboard Devices |
                |   No   |    Edit Grill     |