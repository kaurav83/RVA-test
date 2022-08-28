import axios, { AxiosResponse } from 'axios';
import { IProfile } from '../types';

export const api = Object.freeze({
  async profile(id: number): Promise<IProfile> {
    const { data } = await axios.get<number, AxiosResponse<IProfile>>(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );

    return data;
  },
});
