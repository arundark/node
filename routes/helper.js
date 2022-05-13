import { client } from "../index.js";
import bcrypt from "bcrypt";

export async function updateMovieById(id, update) {
  return await client
    .db("b29")
    .collection("movies")
    .updateOne({ id: id }, { $set: update });
}
export async function DeleteMovieById(id) {
  return await client.db("b29").collection("movies").deleteOne({ id: id });
}
export async function createMovies(movies) {
  return await client.db("b29").collection("movies").insertMany(movies);
}
export async function findAndFilterMovies(filter) {
  return await client.db("b29").collection("movies").find(filter).toArray();
}
export async function getMovieById(id) {
  return await client.db("b29").collection("movies").findOne({ id: id });
}

export async function generateHash(pwd) {
  const NumberOfRounds = 10;
  const salting = await bcrypt.genSalt(NumberOfRounds);
  const hashed = await bcrypt.hash(pwd, salting);
  return { salting, hashed };
}
