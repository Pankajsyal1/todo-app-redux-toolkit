import PencilFilled from "@/components/icons/PencilFilled";
import TrashFilled from "@/components/icons/TrashFilled";
import Button from "@/components/ui/button/Button";
import { deleteUser, toggleUser } from "@/store/feature/user/userSlice";
import { User } from "@/types/user/userTypes";
import { Toast } from "@/utils/plugins/toast";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import { UserStatus } from "@/enums"

interface UserProps extends User {
  sr: number;
}

const UserRow: React.FC<UserProps> = (props) => {
  const dispatch = useDispatch();

  // ****************** Handle User Delete ******************
  const handleDelete = (id: string) => {
    dispatch(deleteUser(id));
    Toast("User deleted successfully", "success");
  };


  // ****************** Handle User Status ******************

  const handleUserStatus = (id: string, status: string) => {
    dispatch(toggleUser({ id, status }));

    console.log(id, status);

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
        to={`/users/${props.id}/edit`}
        type="button"
        className="btn btn-success"
      >
        <PencilFilled />
      </Link>
    </div>
  );

  const statusActive = props.status === UserStatus.active;

  return (
    <tr key={props.id}>
      <td className="p-4 border-b border-gray-200">{props.sr}</td>
      <td className="p-4 border-b border-gray-200 capitalize">{props.name}</td>
      <td className="p-4 border-b border-gray-200">{props.email}</td>
      <td className="p-4 border-b border-gray-200">{props.phone}</td>
      <td className="p-4 border-b border-gray-200">
        {moment(props.dob, 'DD-MM-YYYY', true).format('DD MMMM YYYY')}
      </td>
      <td className="p-4 border-b border-gray-200">{props.bio}</td>
      <td className="p-4 border-b border-gray-200">
        <Button type="button" className={`btn ${statusActive ? 'btn-primary' : 'btn-danger'}`}
          onClick={() =>
            handleUserStatus(props.id, statusActive ? UserStatus.inactive : UserStatus.active)}
        >{statusActive ? UserStatus.active : UserStatus.inactive}</Button>
      </td>
      <td className="p-4 border-b border-gray-200">{actions}</td>
    </tr>
  );
};

export default UserRow;
