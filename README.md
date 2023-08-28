This is a fullstack project I made for the FullstackOpen by University of Helsinki/Houston.inc. Works as a bloglist site where you can create your user, post blogs, see blogs posted by other users and even like or comment them! Basic CRUD functionalities are covered as well.

It features a backend built with ExpressJS, utilizing tools such as nodemon, jest and CORS.
MongoDB and mongoose were used to connect the backend to the database, set up validations and such.

As for the frontend, I used ReactJS with Redux (w/Redux Toolkit) and TailwindCSS. Some tests using react-testing-library were included. Since the design required several routes, react-router-dom was also used.

Initially, I just did what the exercises told me to, but I've been taking it a bit further recently and I'm still working on new features and some reformulation.

A few items/ideas to work on:

- Make more exhaustive tests both on front and backend.
- E2E tests with cypress/playground.
- Optimized CSS design.
- UI Functionality for deleting users .
- "Share" function to tweet (or X) your freshly posted blog.

Disclaimer: The frontend was set up with create-react-app which I actually don't use in my other personal projects since as of april 2023 it was not yet considered deprecated but highly recommended to instead create projects using frameworks such as Vite or NextJS to name a few. But since the course exercises used create-react-app, I just followed through.
