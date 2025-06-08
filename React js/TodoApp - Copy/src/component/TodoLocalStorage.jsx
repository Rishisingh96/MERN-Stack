
const todoKey = 'todoList';

export const getSLocalStorageData = () => {
  const savedTasks = localStorage.getItem(todoKey);
      if(!savedTasks) return [];
      return JSON.parse(savedTasks);
}

export const setSLocalStorageData = (task) => {
  return localStorage.setItem(todoKey, JSON.stringify(task));
}