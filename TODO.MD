# Clean Architecture

- Application layer is handling some Business operations.
- Redux reducers are doing some logic that should be handled by the Application layer useCases.
- ActiveUser and Users/Followers creates a cognitive overload on some parts of the application.

# Typescript

- Cypress and Jest test files are not on typescript.

# CSS

- Scroll bar on boxes partially hides content.
- Size of list items of followers changes on tablet resolutions.
- MaxH of boxes is not handled together. They need to be adjusted at the same time.

# UX

- Viewing messages on mobile resolutions when selecting an user is not usable.

# Environment

- Typescript custom paths alias not working with CRA https://github.com/facebook/create-react-app/issues/12047

# Functionality improvements

- Scroll to top of timeline content everytime messages changes.
- Initial state of active user is kind of wrong. It should be initializated on a different way.
- Order posts by date

# Performance

- Followers and messages displayed need to be controlled with a "load more" functionality. In case the application grows, perfomance would be a problem.
-

# Testing

- More isolated testing mixin useCases with Redux store.
