let user = process.env.adminUser;
let pass = process.env.adminPassword;
export default (req, res, next) => {
  let { reqUser, reqPass } = req.body;
  if (reqUser != user || reqPass != pass)
    return res.status(403).json({ message: "U are no authorized" });
  next();
};
