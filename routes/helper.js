import { client } from "../index.js";
import bcrypt from "bcrypt";
import { ObjectId } from "mongodb";

export async function updateMovieById(id, update) {
  return await client
    .db("b29")
    .collection("movies")
    .updateOne({ _id: ObjectId(id) }, { $set: update });
}
export async function DeleteMovieById(id) {
  return await client
    .db("b29")
    .collection("movies")
    .deleteOne({ _id: ObjectId(id) });
}
export async function createMovies(movies) {
  return await client.db("b29").collection("movies").insertMany(movies);
}
export async function findAndFilterMovies(filter) {
  return await client.db("b29").collection("movies").find(filter).toArray();
}
export async function getMovieById(id) {
  return await client
    .db("b29")
    .collection("movies")
    .findOne({ _id: ObjectId(id) });
}

export async function generateHash(pwd) {
  const NumberOfRounds = 10;
  const salting = await bcrypt.genSalt(NumberOfRounds);
  const hashedValue = await bcrypt.hash(pwd, salting);
  return hashedValue;
}

export async function createUser(newUser) {
  return await client.db("b29").collection("users").insertOne(newUser);
}

export async function getUserByName(username) {
  return await client
    .db("b29")
    .collection("users")
    .findOne({ username: username });
}
export async function verifyPassword(password, storedPassword) {
  return await bcrypt.compare(password, storedPassword);
}
