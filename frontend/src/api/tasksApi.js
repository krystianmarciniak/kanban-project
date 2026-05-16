import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

export const getTasks = async () => {
  const response = await API.get("/tasks");
  return response.data;
};

export const createTask = async (taskData) => {
  const response = await API.post("/tasks", taskData);
  return response.data;
};

export const updateTask = async (id, taskData) => {
  const response = await API.put(`/tasks/${id}`, taskData);
  return response.data;
};

export const deleteTaskApi = async (id) => {
  const response = await API.delete(`/tasks/${id}`);
  return response.data;
};