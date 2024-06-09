const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderNumber: { type: String, required: true }, // Unique order number
  items: [
    {
      id: { type: String, required: true }, // Unique identifier for the item
      name: { type: String, required: true }, // Name of the item
      quantity: { type: Number, required: true }, // Quantity of the item
      price: { type: Number, required: true }, // Price of the item
    },
    // Add more item objects as needed
  ],
  totalAmount: { type: Number, required: true }, // Total amount for the order
});

module.exports = mongoose.model("Order", orderSchema);