describe('Followers use cases', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Check all followed users messages are on timeline', () => {
    cy.followUsers();
    cy.get('[data-cy="followedUsername"]').each(($user) => {
      cy.getTimeline().contains($user.text());
    });
  });

  it('Check only clicked followed users messages exists on timeline', () => {
    cy.followUsers();
    cy.get('[data-cy="followedUsername"]')
      .first()
      .click()
      .then(($user) => {
        cy.get('[data-cy="timelineItemUsername"]').each(($item) => {
          const content = $item.text();
          console.log(content);
          expect(content).to.eq($user.text());
        });
      });
  });
});
