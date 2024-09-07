import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "@/components/features/todo/TodoItem";
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
