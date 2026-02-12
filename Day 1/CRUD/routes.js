const {
  getAllProducts,
  createProduct,
  getProductByID,
  getProductByPrice,
} = require("./controllers/products.controller.js");



module.exports = (req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;

  console.log(`request url: ${req.url}, method: ${req.method}`);

  if (pathname === "/" && req.method === "GET") {
    return welcome(req, res);
  }

  if (pathname === "/products" && req.method === "GET") {
    if (parsedUrl.search) {
      return getProductByPrice(req, res);
    }
    return getAllProducts(req, res);
  }

  if (pathname === "/products" && req.method === "POST") {
    return createProduct(req, res);
  }

  if (pathname.startsWith("/products/") && req.method === "GET") {
    return getProductByID(req, res);
  }

  res.statusCode = 404;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ message: "endpoint not found" }));
};
