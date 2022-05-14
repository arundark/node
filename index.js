import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";
import { moviesRouter } from "./routes/movies.js";
import { createMobiles, generateHash, getMobiles } from "./routes/helper.js";
import { usersRouter } from "./routes/user.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to NodeJS");
});

// const MONGO_URL = "mongodb://localhost";

dotenv.config();
//heroku will automatically asign the port
const port = process.env.PORT;
// console.log(process.env);
const MONGO_URL = process.env.MONGO_URL;
// console.log(MONGO_URL);

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongodb Connected");
  return client;
}

export const client = await createConnection();
app.use(express.json());
app.use(cors());
app.use("/movies", moviesRouter);
app.use("/users", usersRouter);

app.get("/mobiles", async (req, res) => {
  const result = await getMobiles();
  res.send(result);
});

app.post("/mobiles", async (req, res) => {
  const movies = req.body;
  console.log(movies);
  const result = await createMobiles(movies);
  res.send(result);
});

app.listen(port, () => console.log("server started on port " + port));
