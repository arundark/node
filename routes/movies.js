import express from "express";
import {
  findAndFilterMovies,
  getMovieById,
  DeleteMovieById,
  createMovies,
  updateMovieById,
} from "./helper.js";
const router = express.Router();

router.get("/", async function (req, res) {
  const filter = req.query;
  // console.log(filter);
  // const movie = movies.filter((movie) => movie.rating == rating);
  if (filter.rating) {
    filter.rating = +filter.rating;
  }
  const movie = await findAndFilterMovies(filter);

  res.send(movie);
});

router.get("/:id", async function (req, res) {
  const { id } = req.params;
  //   const movie = movies.find((movie) => movie.id == id);
  const movie = await getMovieById(id);
  //   console.log(movie);
  movie ? res.send(movie) : res.status(404).send("no such movie found");
});
router.delete("/:id", async function (req, res) {
  const { id } = req.params;
  //   const movie = movies.find((movie) => movie.id == id);
  const result = await DeleteMovieById(id);
  console.log(result);
  result ? res.send(result) : res.status(404).send("no such movie found");
});

router.post("/", async (req, res) => {
  const movies = req.body;
  console.log(movies);
  const result = await createMovies(movies);
  res.send(result);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const update = req.body;
  console.log(update);
  const result = await updateMovieById(id, update);
  console.log(result);
  res.send(result);
});

export const moviesRouter = router;
