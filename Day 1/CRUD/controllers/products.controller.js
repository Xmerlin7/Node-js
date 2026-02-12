const { products } = require("../data.js");

module.exports.getAllProducts = (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  return res.end(JSON.stringify(products));
};

module.exports.createProduct = (req, res) => {
  console.log("create products ... ");
  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {
    console.log(body);
    let user = JSON.parse(body);
    console.log(products);
    products.push(user);

    res.writeHead(201, { "content-type": "application/json" });
    return res.end(
      JSON.stringify({
        message: "User Created",
        data: user,
      })
    );
  });
};

module.exports.getProductByID = (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  console.log(url.pathname, req.url);

  const id = url.pathname.split("/")[2];
  console.log(id);

  const product = products.find((product) => product.id == id);

  res.writeHead(200, { "content-type": "application/json" });
  return res.end(JSON.stringify(product));
};

module.exports.getProductByPrice = (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  console.log(url);

  const price = url.searchParams.get("price");
  console.log(price);

  const filteredProducts = products.filter((product) => product.price == price);

  res.writeHead(200, { "content-type": "application/json" });
  return res.end(JSON.stringify(filteredProducts));
};
