import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";
import {expect} from 'chai';

Given('I am on the home page', () => {
    cy.visit("/");
});

When('I enter {string} as the task title', (title: string) => {
    cy.get('input[name="title"]').type(title);
});

When('I enter {string} as the task description', (description: string) => {
    cy.get('textarea[name="description"]').type(description);
});

When('I select {string} as the task priority', (priority: string) => {
    cy.get('input[name="priority"]').parent().click();
    cy.contains('li', priority).click();
});

When('I click {string}', (buttonText: string) => {
    cy.contains('button', buttonText).click();
});

Then('I should see {string} in the task list', (taskTitle: string) => {
    cy.contains('li', taskTitle).should('exist');
});

Given('I have a task titled {string} in the task list', (taskTitle: string) => {
    cy.visit("/");
    cy.get('input[name="title"]').type(taskTitle);
    cy.contains('button', 'Add Task').click();
});

When('I click {string} for the task titled {string}', (buttonText: string, taskTitle: string) => {
    cy.contains('li', taskTitle).parent().contains(buttonText).click();
});

Then('the task titled {string} should be marked as completed', (taskTitle: string) => {
    cy.contains('li', taskTitle).should('have.class', 'completed');
});

When('I update the task title to {string}', (updatedTitle: string) => {
    cy.get('input[name="editTitle"]').clear();
    updatedTitle.split('').forEach((char) => {
        cy.get('input[name="editTitle"]').type(char);
        cy.wait(1); // Add a slight delay between characters if necessary
    });
});

Then('I should not see {string} in the task list', (taskTitle: string) => {
    cy.contains('li', taskTitle).should('not.exist');
});

When('I select {string} from the {string} dropdown', (option: string, dropdownName: string) => {
    cy.get(`select[name="${dropdownName}"]`).select(option);
});

Given('I have tasks with completed and incomplete statuses', () => {
    cy.visit("/");
    cy.get('input[name="title"]').type('task 1');
    cy.contains('button', 'Add Task').click();
    cy.get('input[name="title"]').type('task 2');
    cy.contains('button', 'Add Task').click();
    cy.contains('li', 'task 1').parent().contains('Complete').click();
});

When('I select "Completed" from the filter dropdown', () => {
    cy.get('input[name="filter"]').parent().click();
    cy.contains('.MuiMenuItem-root', 'Completed').click(); // Select "Completed"
});

Given('I have tasks with different priorities', () => {
    cy.visit("/");
    cy.get('input[name="title"]').type('task 1');
    cy.contains('button', 'Add Task').click();
    cy.get('input[name="title"]').type('task 2');
    cy.get('input[name="priority"]').parent().click();
    cy.contains('li', 'High').click();
    cy.contains('button', 'Add Task').click();
    cy.get('input[name="title"]').type('task 3');
    cy.get('input[name="priority"]').parent().click();
    cy.contains('li', 'Low').click();
    cy.contains('button', 'Add Task').click();
});

When('I select "Sort by Priority" from the sort dropdown', () => {
    cy.get('input[name="sort"]').parent().click();
    cy.contains('.MuiMenuItem-root', 'Sort by Priority').click(); // Select "Sort by Priority"
});


Then('I should see only completed tasks in the task list', () => {
    cy.get('.task-list').within(() => {
        cy.get('li').each(($el) => {
            cy.wrap($el).should('have.class', 'completed');
        });
    });
});

Then('I should see tasks sorted by priority in the task list', () => {
    const priorities = ['High', 'Medium', 'Low'];
    let lastPriorityIndex = -1;
    cy.get('li').each(($el) => {
        const priority = $el.find('.priority-class').text(); // Replace '.priority-class' with actual class
        const currentPriorityIndex = priorities.indexOf(priority);
        expect(currentPriorityIndex).to.be.at.least(lastPriorityIndex);
        lastPriorityIndex = currentPriorityIndex;
    });
});