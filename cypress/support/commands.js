/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
Cypress.Commands.add('submitPost', (user) => {
  cy.get('textarea[name=newPost]').type(user.post);
  cy.get('button[data-cy="submitPost"]').click();
});

Cypress.Commands.add('getTimeline', () => {
  cy.get('[data-cy="timeline"]');
});

Cypress.Commands.add('getFollowUsersList', () => {
  cy.get('[data-cy="followList"]');
});

Cypress.Commands.add('getFollowedUsersList', () => {
  cy.get('[data-cy="followedList"]');
});

Cypress.Commands.add('followUsers', () => {
  cy.getFollowUsersList().within(() => {
    cy.get('button').first().click();
    cy.get('button').last().click();
  });
});

Cypress.Commands.add('unfollowUsers', () => {
  cy.getFollowedUsersList().within(() => {
    cy.get('button').first().click();
    cy.get('button').last().click();
  });
});
