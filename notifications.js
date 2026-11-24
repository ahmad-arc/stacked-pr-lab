const displayedErrors = new Set();

function notify(error) {
  if (displayedErrors.has(error.code)) {
    return;
  }

  displayedErrors.add(error.code);

  console.log(`[Notification] ${error.message}`);
}

module.exports = { notify };