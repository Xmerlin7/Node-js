# E-Commerce API Documentation

**Project:** Day 4 (Node.js + Express + MongoDB)

## Base URL

- `http://localhost:8080`
- All routes are prefixed with `/api`

## Content Type

- Request body: `Content-Type: application/json`
- Responses: JSON

## Environment

- `PORT` (default in repo: `8080`)
- `DB_URI` (default in repo: `mongodb://localhost:27017/ecommerce`)

## Standard Response Shape

Most endpoints respond like:

```json
{
  "message": "...",
  "data": {}
}
```

Cart endpoints currently use `Message` (capital M) in some responses.

## Errors

- Validation errors: `400`
  - Response:

```json
{
  "message": "<validation messages>"
}
```

- Duplicate key errors (MongoDB `11000`): `400`
  - Response is an array of strings like:

```json
["email test@example.com already exists"]
```

- Unhandled errors: `500`

```json
{
  "message": "Internal Server Error!"
}
```

---

# Data Models (MongoDB)

## User

Fields (see `models/user.js`):

- `name` (string, required, min 3, max 50)
- `email` (string, required, unique)
- `password` (string, required, min 6) — stored hashed
- `role` (`user` | `admin`, default `user`)

## Category

- `name` (string, required, unique)

## Product

- `name` (string, required, unique)
- `price` (number, required, min 0)
- `inStock` (`yes` | `no`, default `yes`)
- `category` (ObjectId -> Category, required)

## Cart

- `user` (ObjectId -> User, required)
- `products[]`
  - `product` (ObjectId -> Product, required)
  - `quantity` (number, min 1, default 1)

---

# Endpoints

## Authentication

### Register

- **POST** `/api/register`

Request body:

```json
{
  "name": "Merlin",
  "email": "merlin@example.com",
  "password": "secret123",
  "role": "user"
}
```

Response: `200`

### Login

- **POST** `/api/login`

Request body:

```json
{
  "email": "merlin@example.com",
  "password": "secret123"
}
```

Response: `200`

- Sets an HttpOnly cookie: `refreshToken`
- Returns JSON including an access token:

```json
{
  "message": "Hi Merlin U loggedIn successfully!",
  "token": "<accessToken>"
}
```

## Users

### Create user

- **POST** `/api/users`

Request body:

```json
{
  "name": "Merlin",
  "email": "merlin@example.com",
  "password": "secret123",
  "role": "user"
}
```

Response: `200`

```json
{
  "message": "User Created successfully!",
  "data": {
    "_id": "...",
    "name": "Merlin",
    "email": "merlin@example.com",
    "role": "user",
    "password": "<hashed>",
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

### Get all users

- **GET** `/api/users`

Response: `200`

```json
{
  "message": "User retrieved successfully!",
  "data": [
    {
      "_id": "...",
      "name": "Merlin",
      "email": "merlin@example.com",
      "role": "user",
      "createdAt": "...",
      "updatedAt": "..."
    }
  ]
}
```

---

## Categories

### Create category

- **POST** `/api/category`

Request body:

```json
{
  "name": "Electronics"
}
```

Response: `201`

```json
{
  "message": "Category Created Successfully!",
  "data": {
    "name": "Electronics"
  }
}
```

---

## Products

### Create product

- **POST** `/api/products`

Request body (note: the service expects `categoryID`):

```json
{
  "name": "iPhone 15",
  "price": 999,
  "inStock": "yes",
  "categoryID": "<CategoryObjectId>"
}
```

Response: `201`

```json
{
  "message": "Category Created Successfully!",
  "data": {
    "name": "iPhone 15",
    "price": 999,
    "inStock": "yes",
    "categoryID": "<CategoryObjectId>"
  }
}
```

### Get all products

- **GET** `/api/products`

Response: **currently** `201` (implementation detail)

```json
{
  "message": "Got all Successfully!",
  "data": [
    {
      "_id": "...",
      "name": "iPhone 15",
      "price": 999,
      "inStock": "yes",
      "category": {
        "_id": "...",
        "name": "Electronics"
      }
    }
  ]
}
```

### Get product by id

- **GET** `/api/products/:id`

Response: `200`

---

## Carts

All cart routes are scoped to a user id in the URL.

### Add to cart

- **POST** `/api/carts/user/:userId`

Request body:

```json
{
  "productId": "<ProductObjectId>",
  "quantity": 2
}
```

Response: `201`

```json
{
  "Message": "create Successfully!",
  "data": {
    "_id": "...",
    "user": "<UserObjectId>",
    "products": [
      {
        "product": "<ProductObjectId>",
        "quantity": 2
      }
    ]
  }
}
```

### Get user cart

- **GET** `/api/carts/user/:userId`

Response: `200`

- If the cart does not exist yet, `data` will be `null`.

### Delete product from cart

- **DELETE** `/api/carts/user/:userId`

Request body:

```json
{
  "productId": "<ProductObjectId>"
}
```

Response: `200`

```json
{
  "Message": "Deleted Successfully!",
  "data": {
    "_id": "...",
    "user": "<UserObjectId>",
    "products": []
  }
}
```
