Feature: Edit Task
  Scenario: User edits a task's title and description
    Given the user is on the To-Do List homepage
    And the task "Buy groceries" exists with "Test Description" description and "Medium" priority
    When the user clicks the "Edit" button for the task
    And the user enters "Buy groceries and vegetables" in the title field
    And the user enters "Milk, eggs, bread, carrots" in the description field
    And the user clicks the "Save" button
    Then the task title is updated to "Buy groceries and vegetables"
    And the description is updated to "Milk, eggs, bread, carrots"
