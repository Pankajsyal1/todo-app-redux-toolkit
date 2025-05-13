/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { RootState } from "@/store/store-thunk/thunkRootReducer";
import Section from "@/components/ui/section/Section";
import { Toast } from "@/utils/plugins/toast";
import { deleteUser } from "@/store/store-thunk/users";
import { useAppDispatch } from "@/store/store-thunk"; 


const UsersPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { users } = useSelector((state: RootState) => state.users);
  const [filteredUsers, setFilteredUsers] = useState<any>(users);
  const [query, setQuery] = useState<string>('');
  const [filterByStatus, setFilterByStatus] = useState<string>('all');
  const [sortField, setSortField] = useState<string>('name');
  const [sortOrder, setSortOrder] = useState<string>('asc');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterByStatus(e.target.value);
  };

  const handleSortField = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortField(e.target.value);
  };

  const handleSortOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  // const loadData = () => {
  //   setFilteredUsers(users)
  // }

  useEffect(() => {
    const queryString = query.toLowerCase();

    if (Array.isArray(users)) {
      const filteredUsers = users
        .filter((user: any) => {
          const { name, email, phone, status } = user;
          // Filter by search query (name, email, phone)
          const matchesQuery =
            name.toLowerCase().includes(queryString) ||
            email.toLowerCase().includes(queryString) ||
            phone.toString().includes(queryString);

          // Filter by status
          const matchesStatus =
            filterByStatus === 'all' ||
            (filterByStatus === 'active' && status) ||
            (filterByStatus === 'inactive' && !status);

          return matchesQuery && matchesStatus;
        })
        .sort((a: any, b: any) => {
          const valueA = a[sortField as any].toString().toLowerCase();
          const valueB = b[sortField as any].toString().toLowerCase();

          if (sortOrder === 'asc') {
            return valueA.localeCompare(valueB);
          } else if (sortOrder === 'desc') {
            return valueB.localeCompare(valueA);
          }
          return 0;
        });

      setFilteredUsers(filteredUsers);
    } else {
      setFilteredUsers(users);
    }
  }, [users, query, filterByStatus, sortField, sortOrder]);


  const handleDelete = (id: string) => {
    dispatch(deleteUser(id));
    Toast("User deleted successfully", "success");
  }


 

  return (
    <Section>
      <div className="container">
        {/* Heading Search and Add Button */}
        <div className="flex justify-between items-center mb-5">
          <h1 className={`text-lg sm:text-xl md:text-2xl font-extrabold uppercase`}>Users List</h1>
          <div className="flex gap-2">
            <input
              className={`px-4 py-2 border-2 rounded-sm overflow-hidden hover:border-primary-500 outline-primary-500 focus:border-primary-500 `}
              value={query}
              onChange={handleSearch}
              type="search"
              placeholder="Search by name, phone, and email..."
            />
            <select
              className="px-4 py-2 border-2 rounded-sm overflow-hidden bg-white hover:border-primary-500 outline-primary-500 focus:border-primary-500"
              value={filterByStatus}
              onChange={handleFilter}
            >
              <option value="all">All</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>

            <select
              className="px-4 py-2 border-2 rounded-sm overflow-hidden bg-white hover:border-primary-500 outline-primary-500 focus:border-primary-500"
              value={sortField}
              onChange={handleSortField}
            >
              <option value="name">Sort by Name</option>
              <option value="email">Sort by Email</option>
              <option value="phone">Sort by Phone</option>
              <option value="status">Sort by Status</option>
            </select>

            <select
              className="px-4 py-2 border-2 rounded-sm overflow-hidden bg-white hover:border-primary-500 outline-primary-500 focus:border-primary-500"
              value={sortOrder}
              onChange={handleSortOrder}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
            <Link to="/users/add" className="px-4 py-2 rounded-sm text-white font-semibold transition-all duration-200 bg-green-500 hover:bg-green-600">Add New User</Link>
          </div>
        </div>

        <div className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-2 border border-gray-200">
          <table className="min-w-full divide-y divide-gray-300 text-sm">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-4 py-3 text-left font-semibold tracking-wide">S.No</th>
                <th className="px-4 py-3 text-left font-semibold tracking-wide">Name</th>
                <th className="px-4 py-3 text-left font-semibold tracking-wide">Email</th>
                <th className="px-4 py-3 text-left font-semibold tracking-wide">Phone</th>
                <th className="px-4 py-3 text-left font-semibold tracking-wide">Status</th>
                <th className="px-4 py-3 text-left font-semibold tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {Array.isArray(filteredUsers) && filteredUsers.length > 0 ? (
                filteredUsers.map((user: any, index: number) => (
                  <tr key={user.id} className="hover:bg-gray-100 transition-colors duration-200">
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3">{user.name}</td>
                    <td className="px-4 py-3">{user.email}</td>
                    <td className="px-4 py-3">{user.phone}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-white text-xs font-medium ${user.status ? 'bg-green-600' : 'bg-red-500'}`}>
                        {user.status ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button
                          className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-full"
                          onClick={() => handleDelete(user.id)}
                          title="Delete"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                        <button
                          className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
                          title="Edit"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5h6M11 5L5 11v6h6l6-6M11 5l6 6" />
                          </svg>
                        </button>
                        <button
                          className="p-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full"
                          title="View"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="text-center px-4 py-4 text-gray-500">
                    No User found!!!
                    {/* <Button className="bg-green-500" onClick={loadData}>Refresh</Button> */}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>



      </div>
    </Section>
  );
};

export default UsersPage;
