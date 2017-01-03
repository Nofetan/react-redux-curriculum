import { create } from 'apisauce';

export const READ_POSTS = 'readPosts';
export const INITIALIZE_POSTS = 'initializePosts';

const api = create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})

export const readPosts = (_page, userId ) => {
  const request = api.get('/posts/', { _page, userId });
  return {
    type: READ_POSTS,
    payload: request,
    meta: { _page, userId }
  };
}

export const initializePosts = () => {
  return {
    type: INITIALIZE_POSTS,
  };
}