import jwt from "jsonwebtoken";
export const auth = (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    // console.log(token);
    next();
  } catch (err) {
    res.status("401").send({ msg: err.message });
  }
};
