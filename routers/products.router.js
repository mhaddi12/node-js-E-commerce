const express = require("express");
const router = express.Router();
const middleware = require("../middleware/middleware");
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductbyId,
  deleteProduct,
} = require("../controllers/product.controller");

//product Router
router.get("/product", middleware, getAllProducts);
router.get("/product/:id", middleware, getProductById);
router.post("/createProduct", middleware, createProduct);
router.put("/updateProduct/:id", middleware, updateProductbyId);
router.delete("/deleteProduct/:id", middleware, deleteProduct);

module.exports = router;
