# Kaplan ReadHub-Backend

## Introduction
Kaplan ReadHub-Backend is an online bookstore backend repository that provides a secure and efficient API for managing users and books. 
It utilizes JWT for session management and ensures that users can access and purchase books seamlessly.

## Technologies

- Node.js: Server-side runtime environment.
- Express.js: Web application framework for building robust APIs.
- JSON Web Tokens (JWT): Used for authentication and session management.
- MySQL: Database system for storing user and book data.
- CORS: Middleware for enabling Cross-Origin Resource Sharing.
- Dotenv: Module for managing environment variables.
- bcrypt: Library for hashing user passwords securely.

## Getting Started

These instructions will help you set up and run the Kaplan ReadHub-Backend on your local machine.

### Prerequisites

To run the application, you'll need the following software installed:

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) - Package manager

### Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/Ashwath-Kaplan/KaplanReadHub-Backend.git
2. Navigate to the project directory:
   ```bash
   cd KaplanReadHub-Backend
3. Install the project dependencies:
    ```bash
   npm install
4. Set environment variables:
   
   Edit .env file in the root directory.
6. Database Setup:
   
   Set up your MySQL database with the necessary tables as described in the ./schema.sql file.
7. Run the Development server

   Run `nodemon index` for a development server. 
   The application will automatically reload if you change any of the source files.

### Usage
Once the server is running, you can start using the API for user and book management. Ensure that the frontend or client application is set up to communicate with this backend.

### API Endpoints
The following API endpoints are available:

- POST `/api/v1/kaplanreadhub/users/adduser` : Register a new user.
- POST `/api/v1/kaplanreadhub/users/login` : Log in a user and receive an access token.
- POST `/api/v1/kaplanreadhub/users/logout` : Log out a user (requires authentication).
- GET `/api/v1/kaplanreadhub/users/getuser` : Get user information (requires authentication).
- GET `/api/v1/kaplanreadhub/books/getbooks` : Get books from the databse (requires authentication).
