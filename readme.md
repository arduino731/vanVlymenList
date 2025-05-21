# vanVlymenList

## Initial Setup
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (with Mongoose)
* **Authentication:** Passport.js, express-session, passport-local, passport-facebook
* **Templating:** EJS
* **Styling:** Bootstrap 4
* **Other:** dotenv, method-override, body-parser, nodemon

## Key Dependencies
```json
"dependencies": {
  "body-parser": "^1.18.3",
  "bower": "^1.7.9",
  "dotenv": "^6.0.0",
  "ejs": "^3.1.10",
  "express": "^4.16.3",
  "express-session": "^1.15.6",
  "method-override": "^2.3.5",
  "mongoose": "^8.14.3",
  "nodemon": "^3.1.10",
  "passport": "^0.7.0",
  "passport-facebook": "^2.1.1",
  "passport-local": "^1.0.0",
  "passport-local-mongoose": "^3.1.0"
}
```

# Getting Started
* Clone the repository:
  ```bash
  git clone https://github.com/yourusername/vanVlymenList.git
  cd vanVlymenList
  ```
 # Install dependencies: 
   ```bash
  npm install
  ```
# Set up environment variables:
* Copy .env.example to .env and add your MongoDB URI, Facebook App credentials, and session secret.

# (Optional) Seed the database:
   ```bash
  node seeds.js
  ```
# Start the application:
```bash
nodemon app.js
# or
node app.js
```
# Vist the app
* Go to http://localhost:3000 in your browser.

# Project Structure
```
.
├── models/        # Mongoose models (User, Listing, Comment)
├── routes/        # Express routes (auth, listings, comments)
├── views/         # EJS templates
├── public/        # Static assets (CSS, JS, images)
├── app.js         # Main Express application
├── seeds.js       # Optional seed file
└── .env.example   # Example environment variables
```
# RESTful API Overview
```
| Route                         | Method | Description                  |
| ----------------------------- | ------ | ---------------------------- |
| /listings                     | GET    | View all listings            |
| /listings/new                 | GET    | Form to create a new listing |
| /listings                     | POST   | Create a new listing         |
| /listings/\:id                | GET    | View a specific listing      |
| /listings/\:id/edit           | GET    | Edit a listing               |
| /listings/\:id                | PUT    | Update a listing             |
| /listings/\:id                | DELETE | Delete a listing             |
| /listings/\:id/comments       | POST   | Add a comment to a listing   |
| /listings/\:id/comments/\:cid | PUT    | Edit a comment               |
| /listings/\:id/comments/\:cid | DELETE | Delete a comment             |

```
# License
MIT License 

# Credits
* Inspired by Craigslist and learning projects such as vanVlymenList
* Built with Express, MongoDB, Bootstrap, Passport.js

## Want to contribute?
Pull requests and suggestions are welcome!


