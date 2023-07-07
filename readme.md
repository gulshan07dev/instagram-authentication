# Instagram Login and Signup Authentication

This project implements an authentication system for Instagram-like functionality, including user login, sign-up, and a protected home page. The system utilizes HTML, CSS, and JavaScript for the client-side user interface, Node.js and Express for the server, and MongoDB for data storage.

## Technologies Used
- HTML, CSS, JavaScript
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

## Key Features
- User Signup: Allow users to create an account with their name, username, email, password, and bio.
- User Login: Authenticate users using their credentials. Upon successful login, redirect to the home page.
- Protected Home Page: Display user details on the home page. Access to the home page is protected, requiring authentication.

## Getting Started
To run this project locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd instagram-authentication`
3. Install the dependencies: `npm install`
4. Set up the environment variables:
   - Create a `.env` file in the backend folder.
   - Define the following variables in the `.env` file:
     ```
     PORT=<server-port>
     MONGODB_URI=<mongodb-connection-string>
     CLIENT_URL=<clent-side-url>
     SECRET=<jwt-secret-key>
     ```
5. Start the server: `cd backend` then npm start
6. Open a web browser and access the application at `http://localhost:<server-port>`

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

Feel free to customize and enhance the project according to your needs and send pull request