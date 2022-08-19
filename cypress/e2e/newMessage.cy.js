describe('New Message form', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Should send a post', () => {
    cy.submitPost({
      post: 'Lorem ipsum dolor sit amet, consecte',
    });
    cy.contains('Your message was submitted!');
  });
  it('Should not send a post - Message is empty', () => {
    cy.get('button[data-cy="submitPost"]').click();
    cy.contains('Your tweet cannot be empty!');
  });
  it('Should not send a post - Message is short', () => {
    cy.submitPost({
      post: 'hi',
    });
    cy.contains('Your tweet is too short! Write more than 10 characters');
  });
  it('Should not send a post - Message is long', () => {
    cy.submitPost({
      post: 'm dolor sit amet, consectetur adipiscing elit. Cras laoreet a nisl vitae euismod. Ut dictum tortor quis magna eleifend vehicula. Ut ante tortor, pretium eget orci ac, congue egestas augue. Praesent vulputate quam ipsum, non sollicitudin elit sagittis ut. Sed a pulvinar nis',
    });
    cy.contains(
      'Your tweet is too long! It cannot be longer than 140 characters'
    );
  });
  it('Message should be displayed in the timeline', () => {
    cy.submitPost({
      post: 'Find this in the timeline',
    });
    cy.getTimeline().contains('Find this in the timeline');
  });
});
