import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "@/store/feature/todo/todoSlice";
import { RootState, AppDispatch } from "@/store/index";

const FilterControls: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.todos.filter);

  return (
    <div className="flex p-4 bg-white rounded-lg shadow-md items-center flex-wrap gap-2">
      <button
        onClick={() => dispatch(setFilter("ALL"))}
        disabled={filter === "ALL"}
        className={`px-4 py-2 rounded-md text-white font-semibold transition-all duration-200 ${filter === "ALL" ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
          }`}
      >
        All
      </button>
      <button
        onClick={() => dispatch(setFilter("COMPLETED"))}
        disabled={filter === "COMPLETED"}
        className={`px-4 py-2 rounded-md text-white font-semibold transition-all duration-200 ${filter === "COMPLETED" ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
          }`}
      >
        Completed
      </button>
      <button
        onClick={() => dispatch(setFilter("PENDING"))}
        disabled={filter === "PENDING"}
        className={`px-4 py-2 rounded-md text-white font-semibold transition-all duration-200 ${filter === "PENDING" ? "bg-gray-400 cursor-not-allowed" : "bg-yellow-500 hover:bg-yellow-600"
          }`}
      >
        Pending
      </button>
    </div>
  );
};

export default FilterControls;