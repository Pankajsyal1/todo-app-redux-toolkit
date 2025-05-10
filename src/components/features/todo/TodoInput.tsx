import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "@/store/feature/todo/todoSlice";
import { AppDispatch } from "@/store";
import CrossIcon from "@/components/icons/CrossIcon";

interface TodoInputProps {
  onClose:()=>void
}

const TodoInput: React.FC<TodoInputProps> = ({onClose}) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [status, setStatus] = useState<"pending" | "completed">("pending");
  const [errors, setErrors] = useState<{ title?: string; description?: string; date?: string }>({});
  const dispatch: AppDispatch = useDispatch();

  const validate = () => {
    let newErrors: { title?: string; description?: string; date?: string } = {};

    if (!title.trim()) newErrors.title = "Title is required.";
    if (!description.trim()) newErrors.description = "Description is required.";
    if (!date) newErrors.date = "Date is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddTodo = () => {
    if (!validate()) return;

    dispatch(
      addTodo({
        title,
        description,
        date,
        status,
      })
    );

    // Reset form fields
    setTitle("");
    setDescription("");
    setDate("");
    setStatus("pending");
    setErrors({});
    onClose();
  };

  return (
    <div className="w-full lg:w-1/3 mx-auto bg-white p-6 rounded-lg shadow-sm border border-gray-200 relative">
      <h2 className="text-2xl font-bold text-center mb-4">Add New Todo</h2>
      <div className="absolute top-2 right-2">
        <button
          onClick={onClose}
          className="w-full transition"
        >
          <CrossIcon />
        </button>
      </div>

      <div className="mb-3">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.title ? "border-red-500 focus:ring-red-500" : "focus:ring-green-500"
            }`}
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
      </div>

      <div className="mb-3">
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.description ? "border-red-500 focus:ring-red-500" : "focus:ring-green-500 resize-none"
            }`}
        />
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
      </div>

      <div className="mb-3">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.date ? "border-red-500 focus:ring-red-500" : "focus:ring-green-500"
            }`}
        />
        {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
      </div>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value as "pending" | "completed")}
        className="w-full px-4 py-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>

      <div>
        <button
          onClick={handleAddTodo}
          className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
        >
          Add Todo
        </button>

      </div>
    </div>
  );
};

export default TodoInput;
