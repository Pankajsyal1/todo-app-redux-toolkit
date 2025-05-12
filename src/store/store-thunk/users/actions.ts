import { UserActions, UserProps } from "./types";

export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";
export const EDIT_USER = "EDIT_USER";
export const TOGGLE_USER = "TOGGLE_USER";

export const addUser = (user: UserProps): UserActions => {
  return {
    type: ADD_USER,
    payload: user
  };
};

export const deleteUser = (id: string): UserActions => ({
  type: DELETE_USER,
  payload: id // Make sure payload holds the user ID
});

export const editUser = (user: UserProps, id: string): UserActions => {
  return {
    type: EDIT_USER,
    id: id,
    payload: user,
  };
};

export const toggleUser = (id: string): UserActions => {
  return {
    type: TOGGLE_USER,
    payload: id
  };
};
