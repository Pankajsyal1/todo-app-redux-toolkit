import { ADD_USER, DELETE_USER, EDIT_USER, TOGGLE_USER } from "./actions";
import { UserActions, UserStateProps } from "./types";

const initialState: UserStateProps = {
  users: [
    { id: '1', name: 'John', email: 'john@gmail.com', phone: 12345678901, status: true },
    { id: '2', name: 'Paul', email: 'paul@gmail.com', phone: 98765432101, status: false },
  ], loading: false, error: ''
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