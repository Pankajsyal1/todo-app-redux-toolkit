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
    <li className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-2 border border-gray-200">
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as "pending" | "completed")}
            className="w-full p-2 border rounded-md"
          >
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
          <button onClick={handleUpdate} className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
            Save
          </button>
        </>
      ) : (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md border border-gray-300">
          <div className="flex flex-col gap-2">
            {/* Title */}
          <div>
            <p className={`text-sm font-medium text-gray-700`}>
              Title:
            </p>
            <h3 className="text-lg font-semibold text-gray-900 capitalize">{todo.title}</h3>
          </div>
          {/* Description */}
          <div>
            <p className={`text-sm font-medium text-gray-700`}>
              Description:
            </p>
            <p className="text-base text-black">{todo.description}</p>
          </div>
          {/* Date */}
          <div>
            <p className={`text-sm font-medium text-gray-700`}>
              Date:
            </p>
            <p className="text-base text-black">{todo.date}</p>
          </div>
          {/* Status */}
          <div>
            <p className={`text-sm font-medium text-gray-700`}>
              Status:
            </p>
            <span className={`capitalize text-white font-medium inline-block text-center text-xs px-2 py-1 rounded ${todo.status === "completed" ? "bg-green-600" : "bg-yellow-600"}`}>{todo.status}</span>
          </div>
          </div>

          {/* Button */}
          <div className="flex gap-2 mt-4">
            <button onClick={() => setIsEditing(true)} className="px-4 py-1.5 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
              Edit
            </button>
            <button onClick={() => dispatch(deleteTodo(todo.id))} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
              Delete
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => dispatch(toggleTodoStatus(todo.id))}
        className={`mt-2 px-4 py-2 rounded-md text-white ${todo.status === "completed" ? "bg-gray-500 hover:bg-gray-600" : "bg-green-500 hover:bg-green-600"}`}
      >
        {todo.status === "completed" ? "Mark as Pending" : "Mark as Completed"}
      </button>
    </li>
  );
};

export default TodoItem;
