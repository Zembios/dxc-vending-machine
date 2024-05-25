// pages/api/getProducts.ts

export default function handler(req, res) {
  res.status(200).json({
      "products": [
        {
          "id": 1,
          "name": "Coca-Cola",
          "price": 1.50,
          "quantity": 10
        },
        {
          "id": 2,
          "name": "Pepsi",
          "price": 1.40,
          "quantity": 12
        },
        {
          "id": 3,
          "name": "Water",
          "price": 1.00,
          "quantity": 15
        },
        {
          "id": 4,
          "name": "Chocolate Bar",
          "price": 1.80,
          "quantity": 7
        },
        {
          "id": 5,
          "name": "Chips",
          "price": 2.00,
          "quantity": 9
        },
        {
          "id": 6,
          "name": "Gum",
          "price": 0.70,
          "quantity": 13
        },
        {
          "id": 7,
          "name": "Cookies",
          "price": 1.20,
          "quantity": 11
        },
        {
          "id": 8,
          "name": "Juice",
          "price": 1.30,
          "quantity": 8
        },
        {
          "id": 9,
          "name": "Sandwich",
          "price": 2.50,
          "quantity": 5
        }
      ]
  });
}