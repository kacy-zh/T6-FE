/**
 * Sends a post request to the backend for a bot response
 * @function
 * @param input What will be send to the backend
 */
export default async function post(input) {
  try {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": true,
      },
      body: JSON.stringify({ query: input }),
    };

    const post = await fetch(
      "https://udmjqk9rl1.execute-api.ap-southeast-2.amazonaws.com",
      requestOptions
    );
    const data = await post.json();

    return data;
  } catch (e) {
    console.log("Error: {}", e);
  }
}
