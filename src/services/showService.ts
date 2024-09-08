import { Show } from '../types/Show';
import { apiShows, apiShow } from '../utils/apiUtils';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getAllShows = async (): Promise<Show[]> => {
  return await apiShows(`${API_BASE_URL}/shows`);
};

export const getShowById = async (id: number): Promise<Show> => {
  return await apiShow(`${API_BASE_URL}/shows/${id}`);
};

export const searchShowByName = async (query: string): Promise<Show[]> => {
  return await apiShows(`${API_BASE_URL}/search/shows?q=${query}`);
};
