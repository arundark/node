import express from "express";
import {
  createMovies,
  createUser,
  generateHash,
  verifyPassword,
  getUserByName,
} from "./helper.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  const isUserExist = await getUserByName(username);
  console.log(isUserExist);

  if (isUserExist) {
    res.send({ msg: "user already exists" });
  } else if (password.length < 8) {
    res.status("400").send({ msg: "password must be at least 8 characters" });
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
  //   console.log(userFromDB);

  if (!userFromDB) {
    res.status("401").send({ msg: "Invalid Credential" });
  } else {
    const storedPassword = userFromDB.password;
    const isPasswordValid = await verifyPassword(password, storedPassword);
    // console.log(isPasswordValid);
    if (isPasswordValid) {
      const token = jwt.sign({ id: userFromDB._id }, process.env.SECRET_KEY);
      res.send({ msg: "successfully login", token: token });
    } else {
      res.status("401").send({ msg: "Invalid Credential" });
    }
  }
});
export const usersRouter = router;
