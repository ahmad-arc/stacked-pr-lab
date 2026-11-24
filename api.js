function createOrder(order) {
  console.log("[API] Processing order");
  if (!order.productId) {
    return {
      success: false,
      error: "Product ID is required"
    };
  }

  if (order.quantity <= 0) {
    return {
      success: false,
      message: "Invalid quantity"
    };
  }

  return {
    success: true,
    orderId: "ORD-001"
  };
}

module.exports = { createOrder };
