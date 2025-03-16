# Super License Tracker

## Overview
The **Super License Tracker** is a web application designed to track the points required for a driver to obtain an FIA Super License. It provides an API to store and retrieve data on points earned by drivers in various racing categories, as well as a frontend interface to visualize this data.

## Features
- **API with Express & TypeScript**: A backend built using Express.js and TypeScript.
- **MongoDB & Mongoose**: Database storage and schema modeling.
- **Redis Integration**: Caching for improved performance.
- **React Frontend**: A web interface to display driver rankings and points.
- **Deployment Ready**: Designed for production use with Atlas for database hosting.

## Tech Stack
- **Backend**: Node.js, Express.js, TypeScript, MongoDB, Mongoose, Redis
- **Frontend**: React, TypeScript
- **Database**: MongoDB Atlas
- **Caching**: Redis
- **Deployment**: Docker, Vercel/Render (for frontend), Railway/Fly.io (for backend)

## Installation
### Prerequisites
Ensure you have the following installed:
- Node.js (>= 18.x)
- MongoDB (local or Atlas connection)
- Redis (optional but recommended for caching)

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/super-license-tracker.git
   cd super-license-tracker/backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and configure environment variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   REDIS_URL=your_redis_connection (optional)
   PORT=5000
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend folder:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend:
   ```bash
   npm start
   ```

## Usage
- Access the API at `http://localhost:5000/api`
- Open `http://localhost:3000` for the frontend

## Roadmap
- [ ] Add more racing series support
- [ ] Improve caching strategies
- [ ] Enhance UI with more analytics

## License
This project is licensed under the MIT License.

---
Made by Luís

