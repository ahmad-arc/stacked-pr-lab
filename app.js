const { createOrder } = require("./api");
const { handleResponse } = require("./client");
const { notify } = require("./notifications");

const orders = [
  { quantity: 1 },
  { productId: "P-001", quantity: 0 },
  { productId: "P-001", quantity: 0 }
];

for (const order of orders) {
  const response = createOrder(order);
  const result = handleResponse(response);

  if (!response.success) {
    notify(result);
  } else {
    console.log(result);
  }
}
