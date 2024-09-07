import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo, TodoState } from '@/types/todo/todoTypes';

const initialState: TodoState = {
    items: [],
    filter: 'ALL',
    sortOrder: 'DATE_DESC',
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Omit<Todo, 'id'>>) => {
            const newTodo: Todo = {
                id: Date.now(),
                ...action.payload,
            };
            state.items.push(newTodo);
        },
        updateTodo: (state, action: PayloadAction<Todo>) => {
            const { id, title, description, date, status } = action.payload;
            const todo = state.items.find((todo) => todo.id === id);
            if (todo) {
                todo.title = title;
                todo.description = description;
                todo.date = date;
                todo.status = status;
            }
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((todo) => todo.id !== action.payload);
        },
        toggleTodoStatus: (state, action: PayloadAction<number>) => {
            const todo = state.items.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.status = todo.status === 'completed' ? 'pending' : 'completed';
            }
        },
        setFilter: (state, action: PayloadAction<TodoState['filter']>) => {
            state.filter = action.payload;
        },
        setSortOrder: (state, action: PayloadAction<TodoState['sortOrder']>) => {
            state.sortOrder = action.payload;
        },
    },
});

export const {
    addTodo,
    updateTodo,
    deleteTodo,
    toggleTodoStatus,
    setFilter,
    setSortOrder,
} = todoSlice.actions;

export default todoSlice.reducer; 
