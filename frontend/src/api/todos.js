import { axiosInstance } from '../utils/axios';

import { useTodos } from '../context/todosContext';

// Define the username and password for authentication


export function useFetchTodo() {
  
  const username = 'zucker';
  const password = '123456';
  const { todosDispatch } = useTodos();


  const getTodo = async () => {

    try {
      const response = await axiosInstance.get('todos', {
        auth: {
          username: username,
          password: password,
        },
      });

      if (response.status === 200) {
        todosDispatch({
          type: 'get',
          payload: response.data
        })
        return response.data;
      } else {
        return [];
      }
    } catch (error) {
      console.error('Error fetching todos:', error);
      return [];
    }
}

  return { getTodo };
}
