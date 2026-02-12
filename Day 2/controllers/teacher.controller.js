const getAll = (req, res, next) => {
  try {
    throw new Error("تجربة: خطأ متعمد في جلب المدرسين!");
  } catch (error) {
    next(error);
  }
};

const getByID = () => {};
const addOne = () => {};
const deleteOne = () => {};
const updateOne = () => {};

export { getAll, getByID, updateOne, addOne, deleteOne };
