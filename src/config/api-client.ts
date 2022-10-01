import axios from "axios";
// export const API_URL = process.env.REACT_APP_API_URL;
// export const TOKEN = process.env.REACT_APP_API_SECRET;

const apiClient = axios.create({
  // baseURL: API_URL,
  headers: {
    Accept: "application/json",
    // Authorization: 'Bearer ' + TOKEN
  },
});

export function getMock(value: any) {
  return new Promise((resolve) => setTimeout(resolve, 100, { data: value }));
}

export default apiClient;
