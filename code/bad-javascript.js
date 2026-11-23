function processUserData(id, name) {
  if (typeof id === 'number' && typeof name === 'string') {
    // Process the data
  } else {
    throw new Error("Invalid input");
  }
}
