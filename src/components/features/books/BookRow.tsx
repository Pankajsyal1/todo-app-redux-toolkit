import PencilFilled from "@/components/icons/PencilFilled";
import TrashFilled from "@/components/icons/TrashFilled";
import Button from "@/components/ui/button/Button";
import { Toast } from "@/utils/plugins/toast";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import { deleteBook, toggleBook } from "@/store/feature/book/bookSlice";
import { Book } from "@/types/book/bookTypes";
import { BookStatus } from "@/enums";

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
    <div className="flex gap-3">
      <Button
        type="button"
        className="btn btn-danger"
        onClick={() => handleDelete(props.id)}
      >
        <TrashFilled />
      </Button>
      <Link
        to={`/books/${props.id}/edit`}
        type="button"
        className="btn btn-success"
      >
        <PencilFilled />
      </Link>
    </div>
  );

  const statusActive = props.published ===  BookStatus.published;

  return (
    <tr key={props.id}>
      <td className="p-4 border-b border-gray-200">{props.sr}</td>
      <td className="p-4 border-b border-gray-200 capitalize">{props.title}</td>
      <td className="p-4 border-b border-gray-200">{props.author}</td>
      <td className="p-4 border-b border-gray-200">{Number(props?.price).toFixed(2)}</td>
      <td className="p-4 border-b border-gray-200">
        {moment(props.date, 'DD-MM-YYYY', true).format('DD MMMM YYYY')}
      </td>
      <td className="p-4 border-b border-gray-200">{props.description}</td>
      <td className="p-4 border-b border-gray-200">
        <Button type="button" className={`btn ${statusActive ? 'btn-primary' : 'btn-danger'}`}
          onClick={() =>
            handleBookStatus(props.id, statusActive ? BookStatus.unPublish : BookStatus.published)}
        >{statusActive ? BookStatus.published : BookStatus.unPublish}</Button>
      </td>
      <td className="p-4 border-b border-gray-200">{actions}</td>
    </tr>
  );
};

export default BookRow;
