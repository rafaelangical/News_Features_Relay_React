async function fetchGraphQL(text, variables) {
  const response = await fetch("http://localhost:5000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: text,
      variables
    })
  });

  // Get the response as JSON
  return await response.json();
}

export default fetchGraphQL;
