import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortOrder } from "@/store/feature/todo/todoSlice";
import { RootState, AppDispatch } from "@/store";

const SortControls: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const sortOrder = useSelector((state: RootState) => state.todos.sortOrder);

  return (
     <div className="flex p-4 bg-white rounded-lg shadow-md items-center flex-wrap gap-2">
      <button
        onClick={() => dispatch(setSortOrder("DATE_DESC"))}
        disabled={sortOrder === "DATE_DESC"}
        className={`px-4 py-2 rounded-md text-white font-semibold transition-all duration-200 ${sortOrder === "DATE_DESC" ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
          }`}
      >
        Newest First
      </button>
      <button
        onClick={() => dispatch(setSortOrder("DATE_ASC"))}
        disabled={sortOrder === "DATE_ASC"}
        className={`px-4 py-2 rounded-md text-white font-semibold transition-all duration-200 ${sortOrder === "DATE_ASC" ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
          }`}
      >
        Oldest First
      </button>
      <button
        onClick={() => dispatch(setSortOrder("ALPHA_ASC"))}
        disabled={sortOrder === "ALPHA_ASC"}
        className={`px-4 py-2 rounded-md text-white font-semibold transition-all duration-200 ${sortOrder === "ALPHA_ASC" ? "bg-gray-400 cursor-not-allowed" : "bg-purple-500 hover:bg-purple-600"
          }`}
      >
        A-Z
      </button>
      <button
        onClick={() => dispatch(setSortOrder("ALPHA_DESC"))}
        disabled={sortOrder === "ALPHA_DESC"}
        className={`px-4 py-2 rounded-md text-white font-semibold transition-all duration-200 ${sortOrder === "ALPHA_DESC" ? "bg-gray-400 cursor-not-allowed" : "bg-red-500 hover:bg-red-600"
          }`}
      >
        Z-A
      </button>
    </div>
  );
};

export default SortControls;
