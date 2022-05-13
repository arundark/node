import express from "express";
import {
  createMovies,
  createUser,
  generateHash,
  verifyPassword,
  getUserByName,
} from "./helper.js";
const router = express.Router();

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  const isUserExist = await getUserByName(username);
  console.log(isUserExist);

  if (isUserExist) {
    res.send("user already exists");
  } else if (password.length < 8) {
    res.status("400").send("password must be at least 8 characters");
  } else {
    const hashPwd = await generateHash(password);
    const newUser = {
      username: username,
      password: hashPwd,
    };

    const result = await createUser(newUser);
    res.send(result);
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const userFromDB = await getUserByName(username);
  console.log(userFromDB);

  if (!userFromDB) {
    res.status("401").send("Invalid Credential");
  } else {
    const storedPassword = userFromDB.password;
    const isPasswordValid = await verifyPassword(password, storedPassword);
    console.log(isPasswordValid);
    if (isPasswordValid) {
      res.send("successfully login");
    } else {
      res.status("401").send("Invalid Credential");
    }
  }
});
export const usersRouter = router;
