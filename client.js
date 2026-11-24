function handleResponse(response) {
  if (!response.success) {
    return {
      code: "UNKNOWN",
      message: response.error || "Something went wrong"
    };
  }

  return response;
}

module.exports = { handleResponse };
