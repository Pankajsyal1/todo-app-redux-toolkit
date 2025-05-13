import { ADD_USER, DELETE_USER, EDIT_USER, TOGGLE_USER } from "./actions"

export interface UserProps {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: boolean;
}


export interface UserStateProps {
  users: UserProps[];
  loading: boolean;
  error: string;
}

// Define individual actions
export interface AddUserActions {
  type: typeof ADD_USER;
  payload: UserProps;
}

export interface EditUserActions {
  type: typeof EDIT_USER;
  id: string;
  payload: UserProps;
}

export interface DeleteUserActions {
  type: typeof DELETE_USER;
  payload: string;
}

export interface ToggleUserActions {
  type: typeof TOGGLE_USER;
  payload: string;
}

// Add index signature to handle any future actions
export type UserActions =
  | AddUserActions
  | EditUserActions
  | DeleteUserActions
  | ToggleUserActions;