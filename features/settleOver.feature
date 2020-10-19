Feature: settleOver

  Scenario: settleOver

    Given I am logged in via API
    Then The main page open
    And I select '5' as Time Frame
    And I select 'Over' as Instrument
    And I select 'Under' as Instrument
    And I select 'Tunnel' as Instrument
    And I select 'UnderTugOfWar' as Instrument