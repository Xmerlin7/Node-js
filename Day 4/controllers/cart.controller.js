import * as cartServices from "../services/cart.service.js";

export const addToCart = async (req, res, next) => {
  try {
    const { productId, quantity } = req.body;
    const added = await cartServices.add(
      req.params.userId,
      productId,
      quantity,
    );
    return res
      .status(201)
      .json({ Message: "create Successfully!", data: added });
  } catch (err) {
    next(err);
  }
};
export const getUserCart = async (req, res, next) => {
  try {
    let cart = await cartServices.get(req.params.userId);
    return res
      .status(200)
      .json({ Message: "Retrieved Successfully!", data: cart });
  } catch (err) {
    next(err);
  }
};
export const deleteFromCart = async (req, res, next) => {
  try {
    const { productId } = req.body;
    const cart = await cartServices.del(req.params.userId, productId);
    return res.status(200).json({ Message: "Deleted Successfully!", data: cart });
  } catch (err) {
    next(err);
  }
};
