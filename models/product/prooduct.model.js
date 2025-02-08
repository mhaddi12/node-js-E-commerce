const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  category: {
    type: [String],
    required: true,
    enum: ["All", "Male", "Female", "Kids"], // Default includes 'All'
    default: ["All"], // All products belong to 'All' by default
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  stock: {
    type: Number,
    required: true,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
