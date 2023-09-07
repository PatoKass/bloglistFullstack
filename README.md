This is a fullstack project I made for the FullstackOpen by University of Helsinki/Houston.inc. Works as a bloglist site where you can create your user, post blogs, see blogs posted by other users and even like or comment them! Basic CRUD functionalities are covered as well.

It features a backend built with ExpressJS, utilizing tools such as nodemon, morgan (for logging), supertest (for testing, of course) and CORS. It also features other installed and custom middleware
MongoDB and mongoose were used to connect the backend to the database, set up validations and such.

As for the frontend, I used ReactJS with Redux (w/Redux Toolkit) and TailwindCSS. Project was originally built with create-react-app, but I migrated to ViteJS for faster development and better perfomance. I also used Axios for data fetching and will use Vitest for testing.

For the login system JSON Web Token (JWT) was implemented, and login credentials are stored in browser's localstorage for a longer lasting user session, meaning if the user wants to log out, they should do so manually.

HOW TO RUN:

- Clone this repository to your desired directory entering "git clone https://github.com/PatoKass/bloglistFullstack" in the terminal.
- You'll need a package manager (npm, yarn, pnpm) to install and run everything so if you don't have any of them yet installed globally in your computer, please do so.
- Get inside the newly created directory and run for instance "npm i" in root (optional), back and front subdirectories.
- IF YOU RAN THE INSTALL COMMAND ON ROOT FOLDER:
  - you'll be able to start both the server and frontend by prompting "npm run dev" on the root.
- IF YOU PREFFERED NOT TO:
  - To run the backend, enter "npm run dev" on the terminal while on the "bloglistFullstack/back" directory. This should start the server.
  - To get the frontend going, go to "bloglistFullstack/front" and run "npm start". Don't forget to start the server first or functions that require data fetching will throw errors!
- Go to your browser and access "https://localhost:3000" to open the app, in case it didn't happen automatically.

A few items/ideas to work on:

- Exhaustive tests both on front and backend.
- E2E tests with cypress/playground.
- Optimized CSS design.
- UI Functionality for deleting users (DONE!).
- Dockerizing.
- "Share" function to tweet (or X) your freshly posted blog.
- Refactoring code if convenient to achieve the best perfomance, readability and mantainability.
