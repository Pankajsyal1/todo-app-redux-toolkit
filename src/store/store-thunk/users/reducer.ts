import { ADD_USER, DELETE_USER, EDIT_USER, TOGGLE_USER } from "./actions";
import { UserActions, UserStateProps } from "./types";
import { v4 as uuidv4 } from 'uuid'

const initialState: UserStateProps = {
  users: [
    { id: uuidv4(), name: 'John', email: 'john@gmail.com', phone: '12345678901', status: true },
    { id: uuidv4(), name: 'Paul', email: 'paul@gmail.com', phone: '98765432101', status: false },
    { id: uuidv4(), name: 'Lisa', email: 'lisa@gmail.com', phone: '5551234567', status: true },
    { id: uuidv4(), name: 'Emma', email: 'emma@gmail.com', phone: '4449876543', status: true },
    { id: uuidv4(), name: 'Mark', email: 'mark@gmail.com', phone: '3332221110', status: false },
  ],
  loading: false,
  error: ''
}


const userReducer = (state = initialState, action: UserActions): UserStateProps => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      };

    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload)
      };

    case EDIT_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? { ...user, ...action.payload } : user
        )
      };

    case TOGGLE_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload ? { ...user, status: !user.status } : user
        )
      };

    default:
      return state;
  }
};


export default userReducer;