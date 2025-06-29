# Project Overview 
<h3>Website name:  Recipe Nest</h3>
Recipe Nest is a user-driven web application designed for discovering, sharing, and exploring food recipes. The platform allows users to create an account, log in, and contribute their own unique recipes. In return, they gain access to a growing community of food enthusiasts and a wide collection of recipes submitted by others.


## Live Demo

[Live Site URL](#) (https://b11-assinment-10.web.app/)

## Features

- User authentication and authorization 
- CRUD operations on items (Create, Read, Update, Delete)
- Responsive UI/UX design
- MongoDB database interaction

## Technologies Used

- Backend: Node.js, Express.js
- Frontend: React.js
- Database: MongoDB (native deiver)
- Authentication: Firebase


## API Endpoints

### Product Endpoints

| Method | Endpoint                | Description                          | Access  |
|--------|-------------------------|--------------------------------------|---------|
| GET    | /recipes                | Fetch all products                  | Public  |
| GET    | /recipes/:id            | Fetch single product by ID          | Public  |
| POST   | /recipes                | Add new product                     | User   |
| PUT    | /recipes/:id            | Update product by ID                | User   |
| DELETE | /recipes/:id            | Delete product by ID                | User   |

## Installation

1. **Clone the repository:**
   ```bash
   https://github.com/Niloy-Modak/recipe-nest-app.git

2. **Navigate repository:**
   ```bash
   cd project
3. **Install dependencies:**
   ```bash
   npm install

4. **Set up environment variables:**
   ```bash
   PORT=3000
   MONGO_URI=your-mongodb-uri
5. **Run in client side:**
   ```bash
   npm run dev
6. **Run in server side:**
   ```bash
   nodemon index.js
