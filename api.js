function createOrder(order) {
  console.log("[API] Processing order");
  if (!order.productId) {
    return {
      success: false,
      error: {
        code: "INVALID_PRODUCT",
        message: "Product ID is required"
      }
    };
  }

  if (order.quantity <= 0) {
    return {
      success: false,
      error: {
        code: "INVALID_QUANTITY",
        message: "Invalid quantity"
      }
    };
  }

  return {
    success: true,
    orderId: "ORD-001"
  };
}

module.exports = { createOrder };