# Multi Tier App Deployment

This project demonstrates a multi-tier application deployed using Docker Compose.

## Services

- **Frontend:** Nginx (Port 8080)
- **Backend:** Node.js API (Port 5000)
- **Database:** MySQL 8
- **phpMyAdmin:** Port 8081

## Project Architecture

```
Browser
   │
   ▼
Frontend (Nginx)
   │
   ▼
Backend (Node.js API)
   │
   ▼
Database (MySQL)
```

## How It Works

- The frontend serves the web application.
- The frontend communicates with the backend API.
- The backend connects to the MySQL database.
- Docker Compose creates a private network so all containers can communicate.
- phpMyAdmin provides a web interface to manage the MySQL database.

## Prerequisites

- Docker
- Docker Compose

## Run the Project

```bash
docker compose up -d --build
```

## Verify Running Containers

```bash
docker compose ps
```

## View Logs

```bash
docker compose logs
```

## Stop the Project

```bash
docker compose down
```

## Access the Application

- Frontend: http://localhost:8080
- Backend API: http://localhost:5000
- phpMyAdmin: http://localhost:8081

## Project Structure

```
.
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── Dockerfile
│   ├── index.html
│   └── nginx.conf
├── docker-compose.yml
└── README.md
```

## Technologies Used

- Docker
- Docker Compose
- Node.js
- Express.js
- Nginx
- MySQL 8
- phpMyAdmin

## Author

Created as a DevOps multi-tier application deployment project.
