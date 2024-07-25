import axios from "axios";

const createApiConnection = (url: string) => {
  return axios.create({
    baseURL: url,
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const api = createApiConnection("/api");

const backendApi = createApiConnection(process.env.BACKEND_URL ?? "");

export { api, backendApi };
