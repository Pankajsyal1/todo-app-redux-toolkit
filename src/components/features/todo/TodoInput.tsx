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
