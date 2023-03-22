

import { atom } from 'nanostores';
import type { TodoItemINT } from '../types/listInterface';

export const todoLists = atom<TodoItemINT[]>([
    {
        id: 1,
        text: 'This is Todo Item 1',
    },
    {
        id: 2,
        text: 'This is Todo Item 2',
    }
]);