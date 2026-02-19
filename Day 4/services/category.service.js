import Category from "../models/category.js";
export const create = async (body) => {
    await Category.create({name: body.name})
};
