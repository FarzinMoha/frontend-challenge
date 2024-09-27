import { atom } from 'recoil';
 
export interface TodoItem {
  text: string;
  isCompleted: boolean;
  id: string; 
}

export const todoListState = atom<TodoItem[]>({
  key: 'todoListState',
  default: [],
});

export const todoInputState = atom({
  key: 'todoInputState',
  default: '',
});

export const suggestionsState = atom<string[]>({
  key: 'suggestionsState',
  default: [],
});