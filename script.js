const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

// Don't change the above line
// Write your code here :

async function fetchAndLog(urls) {
  for (const url of urls) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("Response from", url, ":", data);
    } catch (error) {
      console.error("Error fetching", url, ":", error);
    }
  }
}

fetchAndLog(urls);