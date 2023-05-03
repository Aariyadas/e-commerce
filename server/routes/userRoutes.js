import express from 'express'
import User from "../models/User.js";
import asyncHandler from 'express-async-handler';
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const userRoutes = express.Router();

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "60d" });
};
console.log(process.env.JWT_SECRET);

  const authUser = asyncHandler(async (req, res) => {
  console.log("Auth User");
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPasswords(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error(`Invalid email and Password`);
  }
});

 const registerUser = asyncHandler(async (req, res) => {
  console.log("register")
  const { name, email, password } = req.body;

  const userExist = await User.findOne({ email });
  
  if (userExist) {
    res.status(400);
    throw new Error("Already registerd!!!");
  }

  const user = await User.create({
    name,
    email,
    password,
  });
  console.log(user)
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.json(400);
    throw new Error("Invalid User");
  }
});

userRoutes.route('/login').post(authUser);
userRoutes.route('/register').post(registerUser);


export default userRoutes;