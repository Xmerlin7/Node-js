import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/user.js";
import { create } from "./user.service.js";
import ApiError from "../utils/ApiError.js";
import RefreshTokenModel from "../models/tokens.js";
export const registerUser = async (data) => {
  const newUser = await create(data);
  return newUser;
};
export const loginUser = async (data) => {
  const { email, password } = data;

  const foundUser = await User.findOne({ email });

  if (!foundUser) throw new ApiError("Invalid email or password", 400);

  const isValid = await bcrypt.compare(password, foundUser.password);

  if (!isValid) throw new ApiError("Invalid email or password", 400);
  const accessToken = await jwt.sign(
    { userId: foundUser._id, role: foundUser.role },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "5m" },
  );
  const refreshToken = await jwt.sign(
    {
      userId: foundUser._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: "7d",
    },
  );
  let hashedToken = await bcrypt.hash(refreshToken, 10);
  hashedToken = hashedToken.toString();
  await RefreshTokenModel.create({
    user: foundUser._id,
    token: hashedToken,
    expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000,
  });

  return { refreshToken, accessToken, foundUserName: foundUser.name };
};
export const logoutUser = async (data) => {};
export const refreshUser = async (data) => {};
