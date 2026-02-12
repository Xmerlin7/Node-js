export default (req, res) => {
  res
    .status(400)
    .json({ message: "Bad Request, make sure u are in the right url" });
};
