import FilterControls from "@/components/features/todo/FilterControls";
import SortControls from "@/components/features/todo/SortControls";
import TodoInput from "@/components/features/todo/TodoInput";
import TodoList from "@/components/features/todo/TodoList";
import Section from "@/components/ui/section/Section";

const TodoApp: React.FC = () => {
  return (
    <Section>
      <h1>To-Do App</h1>
      <TodoInput />
      <FilterControls />
      <SortControls />
      <TodoList />
    </Section>
  );
};

export default TodoApp;
