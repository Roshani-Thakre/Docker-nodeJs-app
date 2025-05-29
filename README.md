### Technology Used
Node.js
MongoDB (via mongodb driver)
HTML/CSS (served from /public folder)
Docker (optional for deployment)

### 📂 Project Structure

 PracticesApp/
├── public/               # Static files (HTML, CSS)
│   └── index.html
│    └── style.css  
├── server.js              # Main server file
├── package.json          # Project metadata and dependencies
├── .gitignore            # Node modules, etc.
└── README.md             # Project documentation

### ⚙️ Setup Instructions
Node.js & npm installed
MongoDB running locally (or use Docker)

### 🧪 Local Development (push application on VScode to GitHub):
git clone https://github.com/your-username/PracticesApp.git
cd PracticesApp

### Local Development (pull application on GitHub to VScode):
git remote add origin https://github.com/Roshani-Thakre/Docker-nodeJs-app.git
git push -u origin main

### Install dependencies:
npm install

### Start the app:
node index.js

### Check Network
docker network ls
docker network create mongo-network

### Create images and Run Containers :

---MONGO IMAGE:-
      docker run -d -p 27017:27017 --network mongo-network --name mongodb -e MONGO_INITDB_ROOT_USERNAME:admin -e MONGO_INITDB_ROOT_PASSWORD:password mongo

---MONGO-EXPRESS
      docker run -d -p 8081:8081 --network mongo-network --name mongo-express -e ME_CONFIG_MONGODB_ADMINUSERNAME:admin -e ME_CONFIG_MONGODB_ADMINPASSWORD:password -e ME_CONFIG_MONGODB_SERVER=mongo mongo-express
      
### Create images with Dockerfile 
docker build -t docker-node-app .

### Run Compose file (compose.yaml)
docker compose up --build

### Open in browser:
http://localhost:2020
http://localhost:2020/addUser --- Adds a user to the database
http://localhost:2020/users   ---Returns all users in JSON format










