import category from "../models/category.js";
import productSer from "../models/product.js";

export const create = async (data) => {
  try {

    await productSer.create({
      name: data.name,
      price: data.price,
      inStock: data.inStock,
      category: data.categoryID,
    });
  } catch (err) {
    throw err;
  }
};
export const getAll = async () => {
  try {
    let products = await productSer.find().populate("category");
    return products;
  } catch (err) {
    throw err;
  }
};
export const getByID = async (id) => {
  try {
    let product = await productSer.findById(id).populate("category");
    return product;
  } catch (err) {
    throw err;
  }
};
