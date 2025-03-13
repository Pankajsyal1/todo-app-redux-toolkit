import FilterControls from "@/components/features/todo/FilterControls";
import SortControls from "@/components/features/todo/SortControls";
import TodoInput from "@/components/features/todo/TodoInput";
import TodoList from "@/components/features/todo/TodoList";
import Section from "@/components/ui/section/Section";

const TodoApp: React.FC = () => {
  return (
    <Section>
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">To-Do App</h1>
      <div className="flex flex-col gap-4 p-4">
        <TodoInput />
        <div className="flex justify-between flex-wrap gap-4 items-center mb-4">
          <FilterControls />
          <SortControls />
        </div>
        <TodoList />
      </div>
    </Section>
  );
};

export default TodoApp;
