import BackOutlined from "@/components/icons/BackOutlined";
import Button from "@/components/ui/button/Button";
import Section from "@/components/ui/section/Section";
import { RootState } from "@/store/store-thunk/thunkRootReducer";
import { UserProps } from "@/store/store-thunk/users";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"


const ViewUserPage = () => {
    const navigate = useNavigate();
    const { users } = useSelector((state: RootState) => state.users);
    const { id } = useParams();

    const user = users.find((user: UserProps) => user.id === id);
    console.log(user)

    if (!user) return <p>No user found the the given Id</p>

    return (
        <Section>
            <div className='flex gap-2 items-center'>
                <Button className="mb-4 px-4 py-2 rounded-md text-white font-semibold transition-all duration-200 bg-green-500 hover:bg-green-600" onClick={() => navigate(-1)}><BackOutlined /></Button> <h1 className={`text-lg sm:text-xl md:text-2xl font-extrabold uppercase mb-5`}>View User</h1>
            </div>
            <div className="p-4 border rounded-xl shadow-md space-y-2 bg-white max-w-lg">
                <h2 className="text-xl font-bold text-black">{user!.name}</h2>
                <p><span className="font-medium text-gray-500">Email:</span> <span className="ms-2 text-black font-bold">{user.email}</span></p>
                <p><span className="font-medium text-gray-500">Phone:</span> <span className="ms-2 text-black font-bold">{user.phone}</span></p>
                <p className="font-medium text-gray-500">
                    Status:
                    <span className={`ms-2 inline-block px-2 py-1 text-xs rounded text-white ${user.status ? 'bg-green-600' : 'bg-red-600'}`}>
                        {user.status ? 'Active' : 'Inactive'}
                    </span>
                </p>
            </div>
        </Section>

    )
}

export default ViewUserPage
