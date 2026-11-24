function createOrder(order) {
  console.log("[API] Processing order");
  if (!order.productId) {
    return {
      success: false,
      error: {
        code: "MISSING_PRODUCT_ID",
        message: "Product ID is required"
      }
    };
  }

  if (order.quantity <= 0) {
    return {
      success: false,
      error: {
        code: "INVALID_QUANTITY",
        message: "Quantity must be greater than zero"
      }
    };
  }

  return {
    success: true,
    orderId: "ORD-001"
  };
}

module.exports = { createOrder };