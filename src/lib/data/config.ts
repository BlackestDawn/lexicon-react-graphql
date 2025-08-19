export const API_URL = process.env.NEXT_PUBLIC_REMOTE_API_URL || "https://futuramaapi.com/graphql";

export const fetcher = async (query: string, variable: string = "{}") => {
  const result = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: query, variable: variable }),
  });

  if (result.status !== 200) {
    console.log(result.statusText)
    throw new Error(`Error fetching data: ${result.statusText}`);
  }

  return result.json();
};
