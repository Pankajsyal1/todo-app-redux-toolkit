# 1. Type Definitions

First, define types for the To-Do item and the state:

<script>
// src/types/todoTypes.ts
export interface Todo {
  id: number;
  title: string;
  description: string;
  date: string;
  status: 'pending' | 'completed';
}

export interface TodoState {
  items: Todo[];
  filter: 'ALL' | 'PENDING' | 'COMPLETED';
  sortOrder: 'DATE_DESC' | 'DATE_ASC' | 'ALPHA_ASC' | 'ALPHA_DESC';
}
</script>

# 2. Update the todoSlice.ts

Update the slice to use the types:

<script>
// src/features/todo/todoSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo, TodoState } from '../types/todoTypes';

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
 

</script>

# 3. Configure the Redux Store

Update the store configuration to use TypeScript:

<script>
// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './feature/todo/todoSlice';

export const store = configureStore({
    reducer: {
        todos: todoReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
</script>

# 4. TodoInput Component

Update the TodoInput component to handle the input fields with TypeScript:

<script>
// src/features/todo/TodoInput.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "@/store/feature/todo/todoSlice";
import { AppDispatch } from "@/store";

const TodoInput: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [status, setStatus] = useState<"pending" | "completed">("pending");
  const dispatch: AppDispatch = useDispatch();

  const handleAddTodo = () => {
    if (title.trim()) {
      dispatch(
        addTodo({
          title,
          description,
          date,
          status,
        })
      );
      setTitle("");
      setDescription("");
      setDate("");
      setStatus("pending");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value as "pending" | "completed")}
      >
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoInput;

</script>

# 5. TodoItem Component

Update the TodoItem component to handle editing and status toggling with TypeScript:

<script>
// src/features/todo/TodoItem.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo, deleteTodo, toggleTodoStatus } from "./todoSlice";
import { Todo } from "@/types/todoTypes";
import { AppDispatch } from "@/app/store";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(todo.title);
  const [description, setDescription] = useState<string>(todo.description);
  const [date, setDate] = useState<string>(todo.date);
  const [status, setStatus] = useState<"pending" | "completed">(todo.status);
  const dispatch: AppDispatch = useDispatch();

  const handleUpdate = () => {
    if (title.trim()) {
      dispatch(
        updateTodo({
          id: todo.id,
          title,
          description,
          date,
          status,
        })
      );
      setIsEditing(false);
    }
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value as "pending" | "completed")
            }
          >
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <p>{todo.date}</p>
          <p>Status: {todo.status}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={() => dispatch(toggleTodoStatus(todo.id))}>
        {todo.status === "completed" ? "Mark as Pending" : "Mark as Completed"}
      </button>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
    </li>
  );
};

export default TodoItem;

</script>

# 6. TodoList Component

Update the TodoList component to filter and sort To-Dos:

<script>
// src/features/todo/TodoList.tsx
import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "@/components/TodoItem";
import { RootState } from "@/store";

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.items);
  const filter = useSelector((state: RootState) => state.todos.filter);
  const sortOrder = useSelector((state: RootState) => state.todos.sortOrder);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "COMPLETED") return todo.status === "completed";
    if (filter === "PENDING") return todo.status === "pending";
    return true;
  });

  const sortedTodos = [...filteredTodos].sort((a, b) => {
    if (sortOrder === "DATE_DESC")
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    if (sortOrder === "DATE_ASC")
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    if (sortOrder === "ALPHA_ASC") return a.title.localeCompare(b.title);
    if (sortOrder === "ALPHA_DESC") return b.title.localeCompare(a.title);
    return 0;
  });

  return (
    <ul>
      {sortedTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;

</script>

# 7. FilterControls Component

Update the FilterControls component to filter To-Dos by status:

<script>
// src/features/todo/FilterControls.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from './todoSlice';
import { RootState, AppDispatch } from '../../app/store';

const FilterControls: React.FC = () => {
const dispatch: AppDispatch = useDispatch();
const filter = useSelector((state: RootState) => state.todos.filter);

return (

<div>
<button
onClick={() => dispatch(setFilter('ALL'))}
disabled={filter === 'ALL'} >
All
</button>
<button
onClick={() => dispatch(setFilter('COMPLETED'))}
disabled={filter === 'COMPLETED'} >
Completed
</button>
<button
onClick={() => dispatch(setFilter('PENDING'))}
disabled={filter === 'PENDING'} >
Pending
</button>
</div>
);
};

export default FilterControls;
</script>

# 8. SortControls Component

Update the SortControls component to sort To-Dos:

<script>
// src/features/todo/SortControls.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortOrder } from "@/store/feature/todo/todoSlice";
import { RootState, AppDispatch } from "@/store";

const SortControls: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const sortOrder = useSelector((state: RootState) => state.todos.sortOrder);

  return (
    <div>
      <button
        onClick={() => dispatch(setSortOrder("DATE_DESC"))}
        disabled={sortOrder === "DATE_DESC"}
      >
        Newest First
      </button>
      <button
        onClick={() => dispatch(setSortOrder("DATE_ASC"))}
        disabled={sortOrder === "DATE_ASC"}
      >
        Oldest First
      </button>
      <button
        onClick={() => dispatch(setSortOrder("ALPHA_ASC"))}
        disabled={sortOrder === "ALPHA_ASC"}
      >
        A-Z
      </button>
      <button
        onClick={() => dispatch(setSortOrder("ALPHA_DESC"))}
        disabled={sortOrder === "ALPHA_DESC"}
      >
        Z-A
      </button>
    </div>
  );
};

export default SortControls;

</script>

# 9. Integrate Components into the App.tsx

Finally, integrate everything in the App.tsx file:

<script>
import FilterControls from "./components/features/todo/FilterControls";
import SortControls from "./components/features/todo/SortControls";
import TodoInput from "./components/features/todo/TodoInput";
import TodoList from "./components/features/todo/TodoList";

const App: React.FC = () => {
  return (
    <div>
      <h1>To-Do App</h1>
      <TodoInput />
      <FilterControls />
      <SortControls />
      <TodoList />
    </div>
  );
};

export default App;

</script>

# 10. Wrap the whole app with redux Provider

<script>
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

</script>

# 12. Style the app

# 11. Run the App

After creating all the components, you can run the app using:
`npm run dev`

This will start your TypeScript-based To-Do app with Redux in React, allowing you to create, edit, delete, list, sort, filter, and change the status of To-Dos with title, description, date, and status fields.

When using Redux with React, adhering to best practices ensures your application remains scalable, maintainable, and efficient. Here are some key best practices for using Redux in React:

1. Organize Your Redux Code
   Follow the "Ducks" Pattern: Group related actions, reducers, and selectors into "slices" or "ducks" to keep your Redux code modular.
   Use Redux Toolkit: Simplifies the Redux setup with a more opinionated and modern API, reducing boilerplate code. It also encourages the use of "slices," which integrate actions and reducers.
   Separate Concerns: Maintain a clear separation between UI components (React) and business logic (Redux). UI components should primarily dispatch actions and select state.
2. Use Immutable State
   Never Mutate State Directly: Always return a new state object from reducers, either using the spread operator (...) or libraries like immer (built into Redux Toolkit).
3. Keep the Redux State Shape Simple
   Normalize Data: Avoid deeply nested state structures. Normalize your state shape using entities and IDs, which helps in managing relational data and reduces complexity.
   Minimal State: Store only necessary data in Redux. Derived data should be calculated within selectors rather than stored in the state.
4. Use Selectors for Data Access
   Create Memoized Selectors with Reselect: Use the reselect library to create memoized selectors, which improves performance by preventing unnecessary re-renders.
   Encapsulate Complex Logic: Keep your components simple by encapsulating complex state retrieval logic inside selectors.
5. Use Thunks or Sagas for Side Effects
   Handle Asynchronous Logic Outside Components: Use middleware like Redux Thunk or Redux Saga to manage side effects (e.g., API calls) outside your components, keeping them pure and focused on UI.
   Avoid Logic in Action Creators: Keep action creators simple by moving side effects into thunks or sagas.
6. Use TypeScript
   Type Your Actions and State: Using TypeScript with Redux ensures type safety and helps catch errors at compile time. This is especially useful for large-scale applications.
   Typed Hooks: If using Redux with React hooks, type your useSelector and useDispatch hooks to ensure proper types are enforced across your app.
7. Handle Loading and Error States
   Centralized State Management for Async Operations: Track loading, success, and error states in Redux to provide consistent UI feedback for asynchronous operations.
   Use Status Indicators: Include status fields in your state (e.g., isLoading, hasError) to easily track the state of an API call.
8. Optimize Performance
   Avoid Over-Rerendering: Use React.memo and selectors to prevent unnecessary renders in components.
   Use Batched Updates: Redux updates can be batched to minimize the number of re-renders.
9. Testing
   Test Reducers and Selectors: Since reducers and selectors contain the bulk of your business logic, ensure they are well-tested.
   Test Connected Components: Use libraries like react-testing-library to test connected components, ensuring they interact with Redux as expected.
10. Maintain Code Consistency
    Follow a Consistent Naming Convention: Use consistent naming for actions, action types, and reducers, which makes the codebase easier to navigate and maintain.
    Document Your Code: Comment and document complex logic, especially within reducers and selectors, to help other developers understand your code.

https://blog.devgenius.io/45-javascript-super-hacks-every-developer-should-know-92aecfb33ee8

# LINUX

rm -rf node_modules package-lock.json
npm install
