import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayouts from "./layouts/RootLayouts";
import TodoApp from "./views/todos";
import UserApp from "./views/users";
import EditUser from "./views/users/edit";
import HomeView from "./views/home";
import AddUser from "./views/users/add";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts />,
    children: [
      { index:true, element: <HomeView /> },
      {
        path: "todos",
        children: [{ index: true, element: <TodoApp /> }],
      },
      {
        path: "users",
        children: [
          { index: true, element: <UserApp /> },
          { path: "/users/add", element: <AddUser /> },
          { path: ":id/edit", element: <EditUser /> },
        ],
      },
    ],
  },

]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
