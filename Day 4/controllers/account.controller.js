import { registerUser, loginUser } from "../services/account.service.js";

export const register = async (req, res, next) => {
  try {
    let user = await registerUser(req.body);
    res.status(200).json({ message: "User Created successfully!", data: user });
  } catch (error) {
    next(error);
  }
};
export const login = async (req, res, next) => {
  try {
    const { refreshToken, accessToken, foundUserName } = await loginUser(
      req.body,
    );
    res
      .status(200)
      .cookie("refreshToken", refreshToken, {
        httpOnly: true,
        sameSite: "strict", //CSRF
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .json({
        message: `Hi ${foundUserName} U loggedIn successfully!`,
        token: accessToken,
      });
  } catch (error) {
    next(error);
  }
};
export const getUser = async (req, res, next) => {
  try {
    return res
      .status(200)
      .json({ message: "Retrieved Successfully!", data: req.user });
  } catch (error) {
    next(error);
  }
};
