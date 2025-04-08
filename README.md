
# Book Review Web Application 📚

This web application was developed as part of the **Web Technologies** module at **WIUT**. It enables users to manage book reviews with full **CRUD** functionality—Create, Read, Update, and Delete—covering the book's title, author, genre, and the actual review content.

### Key Features

- All users can **view** reviews.
- Only **registered and logged-in users** can **add**, **edit**, or **delete** their own reviews.
- Built-in validation ensures review text length is between **10 and 500 characters**.
- RESTful routing and proper **error handling** implemented.
- Clean and responsive UI styled with **basic CSS**.

### Technologies Used

- Backend: Node.js, Express.js  
- Frontend: Pug templating engine, CSS  
- Database: MongoDB Atlas (connected via Mongoose)    
- Validation: express-validator  

## Learning Outcomes

This project satisfies the following **Learning Outcomes**:

- Server-side development with Express.js  
- Integration with NoSQL databases (MongoDB using Mongoose)  
- Secure authentication and session management using Passport  
- Input validation and error handling using express-validator  

## Getting Started

### Setup Instructions

1. Clone the repository:
   git clone https://github.com/00019110/WT_CW2_00019110
   cd WT_CW_2_00019110

2. Install all dependencies:
   npm install

3. Start the server:
   npm start

4. Open the app in your browser:
   http://localhost:3000

Note: Ensure your MongoDB URI is properly configured in app.js and your IP is added to the MongoDB Atlas IP whitelist.

## Usage Guide

- View all reviews: /reviews  
- Register for an account: /auth/register  
- Login: /auth/login  
- After logging in, users can add/edit/delete their own reviews  

## Project Structure

/book-review-app
├── app.js                  # App setup (Express, Mongoose, Passport)
├── package.json            # Project metadata and dependencies
├── .gitignore              # Ignored files (e.g., node_modules)
├── /public
│   └── /styles/style.css   # Basic styling
├── /routes
│   ├── index.js            # Main routes
│   ├── reviews.js          # Review CRUD routes
├── /controllers
│   └── reviews.js          # Review logic and validation
├── /services
│   └── reviews.js          # Mongoose CRUD logic
├── /models
│   ├── review.js           # Review schema
└── /views
    ├── index.pug           # Review list view
    ├── new.pug             # Add review form
    ├── edit.pug            # Edit review form


## Dependencies

express
pug
method-override
mongoose
express-validator
passport
passport-local
bcrypt
express-session

Dev dependency:
nodemon

To install everything:
npm install express pug method-override mongoose express-validator passport passport-local bcrypt express-session

## Project Links

GitHub Repository: https://github.com/00019110/WT_CW2_00019110
Live Deployment: https://webtech-cw2-00019110.onrender.com

## Author

Created by Behzod Maksudov (Student ID: 00019110)