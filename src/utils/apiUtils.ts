import axios from 'axios';
import { Show } from '../types/Show';

export const apiShows = async (url: string): Promise<Show[]> => {
  try {
    const response = await axios.get<Show[]>(url);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch shows');
  }
};

export const apiShow = async (url: string): Promise<Show> => {
  try {
    const response = await axios.get<Show>(url);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch show');
  }
};
