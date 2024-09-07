import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "@/store/feature/todo/todoSlice";
import { RootState, AppDispatch } from "@/store/index";

const FilterControls: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.todos.filter);

  return (
    <div>
      <button
        onClick={() => dispatch(setFilter("ALL"))}
        disabled={filter === "ALL"}
      >
        All
      </button>
      <button
        onClick={() => dispatch(setFilter("COMPLETED"))}
        disabled={filter === "COMPLETED"}
      >
        Completed
      </button>
      <button
        onClick={() => dispatch(setFilter("PENDING"))}
        disabled={filter === "PENDING"}
      >
        Pending
      </button>
    </div>
  );
};

export default FilterControls;
