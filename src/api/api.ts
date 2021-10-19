import {PostsFromAPI, UsersFromAPI} from '../utils/types';

const link = 'https://gorest.co.in/public-api';

export function api<T>(url: string): Promise<T> {
  return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json() as Promise<T>;
      });
};

export const getUsers = (page: number = 1) => {
  return api<UsersFromAPI>(`${link}/users?page=${page}`).then((res) => {
    return res;
  });
};

export const getPosts = () => {
  return api(`${link}/posts`).then((res) => {
    return res;
  });
};

export const getPostsByUser = (userId: number) => {
  return api<PostsFromAPI>(`${link}/posts?user_id=${userId}`).then((res) => {
    return res;
  });
};
