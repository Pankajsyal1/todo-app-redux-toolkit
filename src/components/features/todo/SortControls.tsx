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
