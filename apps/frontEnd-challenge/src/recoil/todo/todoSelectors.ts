import { selector } from 'recoil';
import { v4 as uuidv4 } from 'uuid'
import { todoInputState, todoListState, TodoItem } from './todoAtoms';

export const filteredSuggestionsState = selector({
    key: 'filteredSuggestionsState',
    get: ({ get }) => {
      const inputValue = get(todoInputState).trim().toLowerCase()
      const todoList = get(todoListState)
      if (!inputValue) {
        return [];
      }
      return todoList.map((todo: TodoItem) => todo.text).filter((text: string) => text.toLowerCase().startsWith(inputValue));
    },
  });


export const addTodoSelector = selector({
  key: 'addTodoSelector',
  get: ({ get }) => {
    const todoList = get(todoListState);
    return todoList;
  },
  set: ({ get, set }, newTodoText: any) => {
    const todoList = get(todoListState);
    if (typeof newTodoText === 'string' && newTodoText.trim()) {
      const newTodo: TodoItem = {
        text: newTodoText.trim(),
        isCompleted: false,
        id: uuidv4()
      };
      set(todoListState, [...todoList, newTodo]);
    }
  },
});
