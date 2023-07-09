# Instagram Login and Signup Authentication

This project implements an authentication system for Instagram-like functionality, including user login, sign-up, and a protected home page. The system utilizes React for the client-side user interface, Node.js and Express for the server, and MongoDB for data storage.

![signup page](https://res.cloudinary.com/dhwbyshmo/image/upload/v1688895583/Screenshot_2023-07-09_at_15-07-54_Instagram_authentication_ajjkis.png)

![login page](https://res.cloudinary.com/dhwbyshmo/image/upload/v1688895600/Screenshot_2023-07-09_at_15-08-20_Instagram_authentication_lusnpw.png)

![home page: all data are dynamic (comes from database), rather than profile image and followers](https://res.cloudinary.com/dhwbyshmo/image/upload/v1688895614/Screenshot_2023-07-09_at_15-08-41_Instagram_authentication_jrgdcc.png)

## Technologies Used

- React
- Node.js
- Express
- MongoDB

## Modules Utilized

- Mongoose: MongoDB object modeling
- Cors: Cross-origin resource sharing
- Cookie-parser: Parsing cookies
- Dotenv: Managing environment variables
- Email-validator: Validating email addresses
- Bcrypt: Hashing passwords
- JWT: JSON Web Token authentication
- Nodemon: Auto-restart server during development

## API Endpoints

- `/signup`: Create a new user account by providing the required information (name, username, email, password, and bio).
- `/signupDataValidate`: Middleware to validate the sign-up data before saving it to the database.
- `/login`: Authenticate a user by providing the username and password.
- `/loginDataValidate`: Middleware to validate the login data before processing the authentication.
- `/logout`: Logout the currently authenticated user.
- `/checkAuth`: Middleware to check if a user is authorized or not.

## Key Features

- User Signup: Allow users to create an account with their name, username, email, password, and bio.
- User Login: Authenticate users using their credentials. Upon successful login, redirect to the home page.
- User Logout: Allow users to log out of their account.
- Protected Home Page: Display user details on the home page. Access to the home page is protected, requiring authentication.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd instagram-authentication`
3. Install the dependencies: `npm install`
4. Set up the environment variables:
   - Create a `.env` file in the backend directory.
   - Define the following variables in the `.env` file:
     ```
     PORT=<server-port>
     MONGODB_URI=<mongodb-connection-string>
     CLIENT_URL=<client-side-url>
     SECRET=<jwt-secret-key>
     ```
5. Start the server: `npm start`
6. Open the client-side folder and install the dependencies: `cd client` and `npm install`
7. Start the client-side development server: `npm start`
8. Open a web browser and access the application at `http://localhost:<server-port>`

Feel free to customize and enhance the project according to your needs and send pull requests.
