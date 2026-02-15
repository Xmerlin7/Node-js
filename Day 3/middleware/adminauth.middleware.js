export default (req, res, next) => {
  const user = process.env.adminUser;
  const pass = process.env.adminPassword;

  const reqUser =
    req.body?.reqUser ??
    req.headers["x-admin-user"] ??
    req.query?.reqUser;
  const reqPass =
    req.body?.reqPass ??
    req.headers["x-admin-pass"] ??
    req.query?.reqPass;

  if (!reqUser || !reqPass)
    return res.status(400).json({ message: "Missing credentials" });

  if (reqUser != user || reqPass != pass)
    return res.status(403).json({ message: "U are not authorized" });
  next();
};
