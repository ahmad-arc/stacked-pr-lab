function handleResponse(response) {
  if (!response.success) {
    return {
      code: response.error.code,
      message: response.error.message
    };
  }

  return response;
}

module.exports = { handleResponse };