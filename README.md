# 🎵 MERN Song App

A full-stack MERN application that allows users to **create, list, update, and delete songs**, as well as view **statistics** such as:

- Total songs, artists, albums, and genres
- Number of songs per genre
- Number of songs & albums per artist
- Number of songs per album
- (and more custom stats)

Deployed with:

- **Backend** → Render
- **Frontend** → Vercel

---

## 🚀 Live Demo

- **Frontend (Vercel):** [https://mern-song-frontend.vercel.app](https://mern-song-frontend.vercel.app)
- **Backend (Render):** [https://mern-song-backend.onrender.com](https://mern-song-backend.onrender.com)

---

## 📂 Project Structure

```
mern-song-app/
 ├── backend/          # Express + MongoDB + Mongoose API
 ├── frontend/         # React + TypeScript + Redux Toolkit + Redux-Saga + Emotion + Styled System
 └── docker-compose.yml
```

---

## 🛠️ Tech Stack

**Frontend**

- React + TypeScript
- Redux Toolkit & Redux-Saga
- Emotion + Styled System

**Backend**

- Express.js
- MongoDB + Mongoose
- Backend is fully Dockerized (with `docker-compose.yml`)

---

## ⚡ Features

- Add, update, delete, and list songs
- Live updates (no page reload)
- Song statistics dashboard
- Filter songs by genre
- Styled using **Emotion + Styled System**
- Backend is fully Dockerized for local setup

---

## 🖼️ Screenshots

### Landing Page

![Landing Page](./screenshots/landing.png)

### Add New Song

![Add Song](./screenshots/add-song.png)

### Song List with Filters

![Song List](./screenshots/song-list.png)

### Music Stats Dashboard

![Stats](./screenshots/stats.png)

---

## 🏃‍♂️ Quick Start

The easiest way to run the project locally:

```bash
git clone https://github.com/lideam/mern-song-app.git
cd mern-song-app
docker-compose up --build
```

This will start:
- **Backend API** → [http://localhost:5000](http://localhost:5000)
- **MongoDB** → running inside Docker

Now, start the frontend:

```bash
cd frontend
npm install
npm start
```

Frontend will be running at:  
👉 [http://localhost:3000](http://localhost:3000)

---

## 🔧 Manual Setup (Optional)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/lideam/mern-song-app.git
cd mern-song-app
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create **`.env`** inside `backend/`:

```env
# ==== MongoDB Connection ====
# Local option (Docker)
# MONGO_URI=mongodb://mongo:27017/mern_songs

# Local option (without Docker, just Mongo installed locally)
# MONGO_URI=mongodb://localhost:27017/mern_songs

# Atlas (default for cloud deployment)
MONGO_URI=mongodb+srv://lidetuamare:1tgwyVmgtvdGlNO2@cluster0.9wgx3dj.mongodb.net/mern_songs?retryWrites=true&w=majority&appName=Cluster0

# ==== Server Port ====
PORT=5000
```

Run backend:

```bash
npm run dev
```

Backend will be running at:  
👉 [http://localhost:5000](http://localhost:5000)

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
```

Create environment files inside `frontend/`:

**.env.development**

```env
REACT_APP_API_URL=http://localhost:5000
```

**.env.production**

```env
REACT_APP_API_URL=https://mern-song-backend.onrender.com
```

Run frontend:

```bash
npm start
```

Frontend will be running at:  
👉 [http://localhost:3000](http://localhost:3000)

---

## 📊 API Endpoints

Base URL:

- Local → `http://localhost:5000/songs`
- Deployed → `https://mern-song-backend.onrender.com/songs`

| Method | Endpoint            | Description       |
| ------ | ------------------- | ----------------- |
| GET    | `/songs`            | Get all songs     |
| POST   | `/songs`            | Create a new song |
| PUT    | `/songs/:id`        | Update a song     |
| DELETE | `/songs/:id`        | Delete a song     |
| GET    | `/songs/stats/data` | Get statistics    |

---

## 👨‍💻 Author

Developed by **Lidetu Amare**  
For **Addis Software Full Stack Developer Test Project**

---

## ⭐ Notes for Reviewers

- Both **frontend and backend are deployed** (Vercel + Render).
- **Backend is fully Dockerized** for easy local setup.
- Filtering by **genre** is included as a bonus feature.
