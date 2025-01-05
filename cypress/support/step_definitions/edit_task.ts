import {Then, When} from '@badeball/cypress-cucumber-preprocessor';

When("the user enters {string} in the title field", (newTitle: string) => {
    cy.get('input[name="editTitle"]').clear();
    newTitle.split('').forEach((char) => {
        cy.get('input[name="editTitle"]').type(char);
    });
});

When("the user enters {string} in the description field", (newDescription: string) => {
    cy.get('textarea[name="editDescription"]').clear();
    newDescription.split('').forEach((char) => {
        cy.get('textarea[name="editDescription"]').type(char);
    });
});

Then("the task title is updated to {string}", (updatedTitle: string) => {
    cy.get(".task-list").contains("h3", updatedTitle).should("be.visible");
});

Then("the description is updated to {string}", (updatedDescription: string) => {
    cy.get(".task-list").contains("p", updatedDescription).should("be.visible");
});
