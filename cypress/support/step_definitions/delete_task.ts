import {Then} from '@badeball/cypress-cucumber-preprocessor';

Then("the task {string} is removed from the task list", (title: string) => {
  cy.get(".task-list").contains("h3", title).should("not.exist");
});
