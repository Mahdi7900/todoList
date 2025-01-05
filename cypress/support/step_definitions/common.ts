import {Given, When} from "@badeball/cypress-cucumber-preprocessor";

Given("the user is on the To-Do List homepage", () => {
    cy.visit("/");
});

Given("the task {string} exists with {string} description and {string} priority", (title: string,description:string,priority:string) => {
    cy.get('input[name="title"]').type(title);
    cy.get('textarea[name="description"]').type(description);
    cy.get('input[name="priority"]').parent().click();
    cy.contains("li", priority).click();
    cy.contains("button", "Add Task").click();
});


When("the user clicks the {string} button", (buttonText: string) => {
    cy.contains("button", buttonText).click();
});

When("the user clicks the {string} button for the task", (buttonText: string) => {
    cy.contains("li", buttonText).find("button").contains(buttonText).click();
});
