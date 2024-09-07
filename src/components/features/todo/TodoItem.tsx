import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  updateTodo,
  deleteTodo,
  toggleTodoStatus,
} from "@/store/feature/todo/todoSlice";
import { Todo } from "@/types/todo/todoTypes";
import { AppDispatch } from "@/store";

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
