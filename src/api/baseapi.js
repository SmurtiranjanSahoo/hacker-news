import axios from "axios";

export const baseapi = axios.create({
  baseURL: `https://hacker-news.firebaseio.com/v0/`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
