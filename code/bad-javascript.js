const APIKEY = process.env.API_KEY;
const secret = process.env.SECRET;
const dbString = process.env.DB;
function processUserData(id, name) {
  if (typeof id === 'number' && typeof name === 'string') {
    // Process the data
  } else {
    throw new Error("Invalid input");
  }
}
