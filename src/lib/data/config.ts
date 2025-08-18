import axios from "axios";

export const API_URL = process.env.NEXT_PUBLIC_REMOTE_API_URL || "https://futuramaapi.com/graphql";

const apiCaller = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 seconds timeout
});

export const fetcher = async (query: string, variables?: Record<string, unknown>) => {
  const result = await apiCaller.post("", {
    query,
    variables,
  });

  if (result.status !== 200) {
    throw new Error(`Error fetching data: ${result.statusText}`);
  }

  return result.data;
};
