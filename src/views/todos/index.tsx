import FilterControls from "@/components/features/todo/FilterControls";
import SortControls from "@/components/features/todo/SortControls";
import TodoInput from "@/components/features/todo/TodoInput";
import TodoList from "@/components/features/todo/TodoList";
import Button from "@/components/ui/button/Button";
import Section from "@/components/ui/section/Section";
import { useState } from "react";

const TodoApp: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Section>
      <div className="flex justify-between items-center mb-6 mx-3">
        <h1 className="text-xl font-bold text-center">Todo App</h1>
      <Button onClick={() => setVisible(true)} className="px-4 py-2 rounded-md text-white font-semibold transition-all duration-200 bg-green-500 hover:bg-green-600">
        Add Todo
      </Button>
      </div>
      {visible && <div className="fixed inset-0 z-10 bg-white/95 backdrop:blur-2xl flex justify-center items-center">
        <TodoInput onClose={() => setVisible(false)} />
      </div>}
      <div className="flex items-center gap-3 mx-3">
        <div className="flex justify-between flex-wrap sm:flex-nowrap gap-4 items-center mb-4">
          <FilterControls />
          <SortControls />
        </div>
      </div>
      <div className="flex flex-col gap-4 mx-3">
        <TodoList />
      </div>
    </Section>
  );
};

export default TodoApp;
