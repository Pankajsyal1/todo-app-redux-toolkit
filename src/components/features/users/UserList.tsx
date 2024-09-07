import { useSelector } from "react-redux";
import { RootState } from "@/store";
import UserRow from "@/components/features/users/UserRow";

const UserList = () => {
  const users = useSelector((state: RootState) => state.users.items);
  console.log(users);
  

  return (
    <div className="overflow-x-auto pb-3">
      <table className="min-w-full bg-white border border-gray-200 text-nowrap">
      <thead>
        <tr className="bg-gray-800">
          <td className="text-left p-4 border-b border-gray-200 text-white font-semibold uppercase">S.No</td>
          <td className="text-left p-4 border-b border-gray-200 text-white font-semibold uppercase">Name</td>
          <td className="text-left p-4 border-b border-gray-200 text-white font-semibold uppercase">Email</td>
          <td className="text-left p-4 border-b border-gray-200 text-white font-semibold uppercase">Phone</td>
          <td className="text-left p-4 border-b border-gray-200 text-white font-semibold uppercase">DOB</td>
          <td className="text-left p-4 border-b border-gray-200 text-white font-semibold uppercase">Bio</td>
          <td className="text-left p-4 border-b border-gray-200 text-white font-semibold uppercase">
            Status
          </td>
          <td className="text-left p-4 border-b border-gray-200 text-white font-semibold uppercase">
            Actions
          </td>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          return <UserRow sr={index + 1} key={user.id} {...user} />;
        })}
      </tbody>
    </table>
    </div>
  );
};

export default UserList;
