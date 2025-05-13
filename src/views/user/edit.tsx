import { useState } from "react"
import Section from "@/components/ui/section/Section"
import { useNavigate, useParams } from 'react-router-dom'
import { Toast } from '@/utils/plugins/toast'
import { useAppDispatch } from '@/store/store-thunk'
import BackOutlined from '@/components/icons/BackOutlined'
import Button from '@/components/ui/button/Button'
import { RootState } from "@/store/store-thunk/thunkRootReducer"
import { useSelector } from "react-redux"
import { editUser, UserProps } from '@/store/store-thunk/users'

const EditUserPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { id } = useParams();

    // Fetch the users from Redux state
    const { users } = useSelector((state: RootState) => state.users);
    const user = users.find((user: UserProps) => user.id === id);

    // If no user is found, navigate back or show an error
    if (!user) {
        return <p>No user found with the given ID</p>
    }

    const [formData, setFormData] = useState<UserProps>({
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        status: user.status,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'status' ? value === "true" : value,
        }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        dispatch(editUser(formData, user.id));  // Assuming you have an `updateUser` action
        Toast('User updated successfully', 'success');

        navigate('/users');  // Redirect to the users list
    }

    return (
        <Section>
            <div className='flex gap-2 items-center'>
                <Button
                    className="mb-4 px-4 py-2 rounded-md text-white font-semibold transition-all duration-200 bg-green-500 hover:bg-green-600"
                    onClick={() => navigate(-1)}
                >
                    <BackOutlined />
                </Button>
                <h1 className={`text-lg sm:text-xl md:text-2xl font-extrabold uppercase mb-5`}>Edit User</h1>
            </div>

            <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg flex flex-col gap-2 border border-gray-200">
                <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="w-full border border-gray-300 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 px-3 py-2 rounded"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full border border-gray-300 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 px-3 py-2 rounded"
                    />
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        className="w-full border border-gray-300 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 px-3 py-2 rounded"
                    />
                    <label className="flex flex-col space-y-1">
                        <span>Status</span>
                        <select
                            name="status"
                            value={formData.status ? "true" : "false"}
                            onChange={handleChange}
                            className="w-full border border-gray-300 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 px-3 py-2 rounded"
                        >
                            <option value="true">Active</option>
                            <option value="false">Inactive</option>
                        </select>
                    </label>
                    <div className="mt-8">
                        <button
                            type="submit"
                            className="w-full text-center border bg-green-500 text-white hover:bg-green-600 hover:text-white px-4 py-2 rounded uppercase transition-colors duration-200"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </Section>
    );
}

export default EditUserPage;
