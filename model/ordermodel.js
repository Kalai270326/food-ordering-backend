const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  productId: String,
  menuname: String,
  image: String,
  price: Number,
  quantity: Number,
  total: Number,
  restaurantId: String,
  restaurantname: String,
  status: { type: String, default: "pending" }
});

const order = mongoose.model("order", orderSchema);
module.exports = order;