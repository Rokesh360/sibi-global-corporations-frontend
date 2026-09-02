import api from "./axios";

export const sendChatMessage = async (payload) => {
  const response = await api.post("/chatbot/message", payload);
  return response.data;
};