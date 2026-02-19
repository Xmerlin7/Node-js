import Category from "../models/category.js";
export const create = async (cat) => {
    await Category.create({name: cat.name})
};
