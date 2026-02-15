export default (req, res, next) => {
  const user = process.env.adminUser;
  const pass = process.env.adminPassword;

  const reqUser = req.body?.reqUser;
  const reqPass = req.body?.reqPass;

  if (!reqUser || !reqPass)
    return res.status(400).json({ message: "Missing credentials" });

  if (reqUser != user || reqPass != pass)
    return res.status(403).json({ message: "U are not authorized" });
  next();
};
