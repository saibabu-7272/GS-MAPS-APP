# React Maps App

## Overview
This project is a React application that integrates a map using **Leaflet**, implements **JWT-based authentication**, and features a secure login system. The backend is built with **Node.js and Express**, and the database is **SQLite** with password hashing using **bcrypt**. The frontend and backend are deployed on **Render**.

## Features
- **User Authentication**: Secure login using JWT tokens.
- **JWT Token Handling**: Token is stored in cookies using `js-cookie`.
- **Secure Routes**: Protected API endpoints using JWT authentication.
- **Leaflet Map Integration**: Displays a zoomable map of India.
- **Interactive Dashboard**: Cards navigate to the map view when clicked.
- **Deployment**: Fully deployed on **Render** (Frontend & Backend).

## Technologies Used
### Frontend:
- React.js
- React Router
- Leaflet (for map integration)
- js-cookie (for managing JWT tokens)
- CSS (for styling)

### Backend:
- Node.js & Express
- SQLite (Database)
- bcrypt (for password hashing)
- JWT (for authentication)

## Installation & Setup
### Prerequisites
- Node.js & npm installed
- Git installed

### Clone the Repository
```sh
git clone <repository_url>
cd react-maps-app
```

### Backend Setup
1. Install dependencies:
   ```sh
   cd backend
   npm install
   ```
2. Run the server:
   ```sh
   node server.js
   ```

### Frontend Setup
1. Install dependencies:
   ```sh
   cd frontend
   npm install
   ```
2. Start the React application:
   ```sh
   npm start
   ```

## API Endpoints
### Authentication
- `POST /api/login` - Authenticates user and returns JWT token

### Protected Routes
- `GET /api/dashboard` - Returns dashboard data (Protected)
- `GET /api/map` - Returns map configuration (Protected)

## Deployment
- **Frontend**: Deployed on Render
- **Backend**: Deployed on Render

## Usage
1. Navigate to the login page and enter your credentials.
2. Upon successful login, you will be redirected to the dashboard.
3. Click on a card to view the map.
4. Use zoom in/out functionality to explore the map of India.

### Test Credentials
Since account creation is not implemented yet, use the following credentials to log in:
- **Username**: `sai`
- **Password**: `1234`

## Security Considerations
- User passwords are **hashed using bcrypt** before storing in SQLite.
- JWT tokens are used for **secure authentication**.
- Protected routes ensure **only logged-in users can access** restricted data.

## Future Enhancements
- Add user registration functionality.
- Implement interactive markers on the map.
- Improve UI/UX with a design system (Material UI, TailwindCSS, etc.).
- Enhance dashboard functionality with real-time data.

## Author
**Sai Babu**


