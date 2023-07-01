const express = require("express");
const {
  getAllProducts,
  createProdutct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
} = require("../controllers/productController");
const router = express.Router();

router.route("/products").get(getAllProducts);

router.route("/product/new").post(createProdutct);
router
  .route("/product/:id")
  .put(updateProduct)
  .delete(deleteProduct)
  .get(getSingleProduct);

module.exports = router;
