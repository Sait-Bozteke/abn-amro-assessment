import axios from "axios";
import { Show } from "../types/Show";

const API_BASE_URL = "https://api.tvmaze.com";

export const getAllShows = async (): Promise<Show[]> => {
  const response = await axios.get<Show[]>(`${API_BASE_URL}/shows`);
  return response.data;
};
export const getShowById = async (id: number): Promise<Show[]> => {
  const response = await axios.get(`${API_BASE_URL}/shows/${id}`);
  return response.data;
};

export const searchShowByName = async (query: string): Promise<Show[]> => {
  const response = await axios.get<{ show: Show }[]>(
    `${API_BASE_URL}/search/shows?q=${query}`
  );
  return response.data.map((item) => item.show);
};
