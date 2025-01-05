import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { mount } from '@cypress/react';
import Home from '@/app/page';
import useTaskStore from '@/app/store/taskStore';
import React from "react";

Given('I am on the home page', () => {
    mount(<Home />);
});

When('I enter {string} as the task title', (title: string) => {
    cy.get('input[name="title"]').type(title);
});

When('I enter {string} as the task description', (description: string) => {
    cy.get('textarea[name="description"]').type(description);
});

When('I select {string} as the task priority', (priority: string) => {
    cy.get('select[name="priority"]').select(priority);
});

When('I click {string}', (buttonText: string) => {
    cy.contains('button', buttonText).click();
});

Then('I should see {string} in the task list', (taskTitle: string) => {
    cy.contains('li', taskTitle).should('exist');
});

Given('I have a task titled {string} in the task list', (taskTitle: string) => {
    const addTask = useTaskStore.getState().addTask;
    addTask({
        id: '1',
        title: taskTitle,
        description: 'Task Description',
        completed: false,
        priority: 'Medium',
        createdAt: new Date().toISOString(),
    });
    mount(<Home />);
});

When('I click {string} for the task titled {string}', (buttonText: string, taskTitle: string) => {
    cy.contains('li', taskTitle).parent().contains(buttonText).click();
});

Then('the task titled {string} should be marked as completed', (taskTitle: string) => {
    cy.contains('li', taskTitle).should('have.class', 'completed');
});

When('I update the task title to {string}', (updatedTitle: string) => {
    cy.get('input[name="title"]').clear().type(updatedTitle);
});

When('I click "Save"', () => {
    cy.contains('button', 'Save').click();
});

Then('I should not see {string} in the task list', (taskTitle: string) => {
    cy.contains('li', taskTitle).should('not.exist');
});

When('I select {string} from the {string} dropdown', (option: string, dropdownName: string) => {
    cy.get(`select[name="${dropdownName}"]`).select(option);
});

Then('I should see only completed tasks in the task list', () => {
    cy.get('li').each(($el) => {
        expect($el).to.have.class('completed');
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
