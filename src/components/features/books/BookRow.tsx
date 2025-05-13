import PencilFilled from "@/components/icons/PencilFilled";
import TrashFilled from "@/components/icons/TrashFilled";
import { Toast } from "@/utils/plugins/toast";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import { deleteBook, toggleBook } from "@/store/feature/book/bookSlice";
import { Book } from "@/types/book/bookTypes";
import { BookStatus } from "@/enums";
import ShowFilled from "@/components/icons/ShowFilled";

interface UserProps extends Book {
  sr: number;
}

const BookRow: React.FC<UserProps> = (props) => {
  const dispatch = useDispatch();

  // ****************** Handle Book Delete ******************
  const handleDelete = (id: string) => {
    dispatch(deleteBook(id));
    Toast("Book deleted successfully", "success");
  };


  // ****************** Handle Book Status ******************

  const handleBookStatus = (id: string, published: string) => {
    dispatch(toggleBook({ id, published }));
    console.log(id, published);

  }
  // ****************** Table Action ******************

  const actions = (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={() => handleDelete(props.id)}
        className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition duration-200"
        title="Delete"
      >
        <TrashFilled />
      </button>

      <Link
        to={`/books/${props.id}/edit`}
        className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition duration-200"
        title="Edit"
      >
        <PencilFilled />
      </Link>

      <Link
        to={`/books/${props.id}/view`}
        className="p-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md transition duration-200"
        title="View"
      >
        <ShowFilled />
      </Link>
    </div>
  );
  const statusActive = props.published === BookStatus.published;

  return (
    <tr key={props.id} className="hover:bg-gray-50 transition-colors duration-200">
      <td className="px-4 py-3 border-b border-gray-200">{props.sr}</td>
      <td className="px-4 py-3 border-b border-gray-200 capitalize">{props.title}</td>
      <td className="px-4 py-3 border-b border-gray-200">{props.author}</td>
      <td className="px-4 py-3 border-b border-gray-200">${Number(props?.price).toFixed(2)}</td>
      <td className="px-4 py-3 border-b border-gray-200">
        {moment(props.date, 'DD-MM-YYYY', true).format('DD MMMM YYYY')}
      </td>
      <td className="px-4 py-3 border-b border-gray-200">
        <button
          type="button"
          onClick={() =>
            handleBookStatus(props.id, statusActive ? BookStatus.unPublish : BookStatus.published)
          }
          className={`px-3 py-1 text-xs font-medium text-white rounded-full
        ${statusActive ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'}`}
        >
          {statusActive ? BookStatus.published : BookStatus.unPublish}
        </button>
      </td>
      <td className="px-4 py-3 border-b border-gray-200">
        <div className="flex gap-2">{actions}</div>
      </td>
    </tr>

  );
};

export default BookRow;
