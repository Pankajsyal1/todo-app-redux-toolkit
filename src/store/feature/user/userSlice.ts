import { createSlice, nanoid } from "@reduxjs/toolkit";
import { UserState } from "@/types/user/userTypes";


const initialState: UserState = {
    items: [
        {
            id: nanoid(),
            name: "test kumar",
            email: "test101@example.com",
            phone: 1237894560,
            dob: "20-12-2002",
            bio: "dhs sdh ashdkjash kdhasjdh kajhd",
            status: 'ACTIVE'
        },
        {
            id: nanoid(),
            name: "test singh",
            email: "test102@example.com",
            phone: 1234567989,
            dob: "12-08-2002",
            bio: "j kjhedkwh djkwehkdhwkj rhkwe jkerwhkwehrklweh",
            status: 'INACTIVE'
        },
        {
            id: nanoid(),
            name: "test syal",
            email: "test103@example.com",
            phone: 147852390,
            dob: "14-01-2001",
            bio: "kjefhjkgsdjkhgjksdhjksdhfhwik skjhdfjksahfuk kjdshjk",
            status: 'ACTIVE'
        }
    ],
    filter: 'INACTIVE',
};

const userSlice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {
        addUser: (state, action) => {
            const { name, email, phone, dob, bio, status } = action.payload
            state.items.push({
                id: nanoid(), name, email, phone, dob, bio, status
            })
        },
        editUser: (state, action) => {
            const { name, email, phone, dob, bio, status, id } = action.payload;
            state.items = state.items.map(item => item.id === id ? { ...item, name, email, phone, dob, bio, status } : item);

        },
        deleteUser: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        toggleUser: (state, action) => {
            const { id, status } = action.payload
            state.items = state.items.map(item => item.id === id ? { ...item, status: status } : item)
        },
        filterUser: (state, action) => {
            console.log(state, action);
        },
    }
})

export const {
    addUser,
    editUser,
    deleteUser,
    toggleUser,
    filterUser
} = userSlice.actions

export default userSlice.reducer