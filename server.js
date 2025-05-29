const express = require("express");
const path = require("path");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = 2020;

// IMPORTANT: Use "mongo" as the hostname because of Docker networking
const MONGO_URL = "mongodb://admin:password@localhost:27017";
const DB_NAME = "roshani-db";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/users", async (req, res) => {
    const client = new MongoClient(MONGO_URL);
    try {
      await client.connect();
      console.log("Connected to MongoDB for fetching users");
  
      const db = client.db(DB_NAME);
      const users = await db.collection("users").find({}).toArray();
  
      res.status(200).json(users);
    } catch (err) {
      console.error("Error fetching users:", err);
      res.status(500).send("Error getting users");
    } finally {
      await client.close();
    }
  });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/addUser", async (req, res) => {
  const client = new MongoClient(MONGO_URL);
  try {
    await client.connect();
    const db = client.db(DB_NAME);
    const result = await db.collection("users").insertOne(req.body);
    console.log("User inserted:", result.insertedId);
    res.status(201).send("User added successfully");
  } catch (err) {
    console.error("Error adding user:", err);
    res.status(500).send("Error adding user");
  } finally {
    await client.close();
  }
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });