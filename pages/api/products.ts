// pages/api/getProducts.ts

export default function handler(req, res) {
  res.status(200).json({
      "products": [
        {
          "id": 31,
          "name": "Coca-Cola",
          "price": 1.50,
          "quantity": 10,
          "img": "/img/coke.webp"
        },
        {
          "id": 32,
          "name": "Pepsi",
          "price": 1.40,
          "quantity": 12,
          "img": "/img/pepsi.webp"
        },
        {
          "id": 33,
          "name": "Water",
          "price": 1.00,
          "quantity": 15,
          "img": "/img/water.webp"
        },
        {
          "id": 44,
          "name": "Chocolate Bar",
          "price": 1.80,
          "quantity": 7,
          "img": "/img/chocolate.webp"
        },
        {
          "id": 45,
          "name": "Chips",
          "price": 2.00,
          "quantity": 9,
          "img": "/img/chips.webp"
        },
        {
          "id": 46,
          "name": "Gum",
          "price": 0.70,
          "quantity": 13,
          "img": "/img/gum.webp"
        },
        {
          "id": 57,
          "name": "Cookies",
          "price": 1.20,
          "quantity": 11,
          "img": "/img/cookies.webp"
        },
        {
          "id": 58,
          "name": "Juice",
          "price": 1.30,
          "quantity": 8,
          "img": "/img/juice.webp"
        },
        {
          "id": 59,
          "name": "Sandwich",
          "price": 2.50,
          "quantity": 5,
          "img": "/img/sandwich.webp"
        }
      ]
  });
}