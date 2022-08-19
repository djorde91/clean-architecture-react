describe('Followers use cases', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.getFollowUsersList().within(() => {
      cy.get('[data-cy="followUsername"]')
        .first()
        .invoke('text')
        .as('firstUser');
      cy.get('[data-cy="followUsername"]')
        .last()
        .invoke('text')
        .as('secondUser');
    });
  });

  it('Follow and unfollow specific users - They appear and dissapear from Follow and Followed boxes', () => {
    cy.followUsers();

    cy.getFollowedUsersList().within(() => {
      cy.get('[data-cy="followedUsername"]')
        .first()
        .then(($firstUser) => {
          cy.get('@firstUser').should(($firstFollowedUser) => {
            expect($firstFollowedUser).to.eq($firstUser.text());
          });
        });
      cy.get('[data-cy="followedUsername"]')
        .last()
        .then(($secondUser) => {
          cy.get('@secondUser').should(($secondFollowedUser) => {
            expect($secondFollowedUser).to.eq($secondUser.text());
          });
        });
    });
  });

  it('Follow and Unfollow Users - Followed Box should have exact items', () => {
    cy.followUsers();
    cy.getFollowedUsersList().within(() => {
      cy.get('button').its('length').should('eq', 2);
    });

    cy.unfollowUsers();
    cy.getFollowedUsersList().within(() => {
      cy.get('button').should('not.exist');
    });
  });
});
