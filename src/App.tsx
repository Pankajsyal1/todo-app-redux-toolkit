import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayouts from "./layouts/RootLayouts";
import TodoApp from "./views/todos";
import BookApp from "./views/books";
import EditBook from "./views/books/edit";
// import HomeView from "./views/home";
import AddBook from "./views/books/add";
import PostsPage from "./views/posts";
import ViewPost from "./views/posts/view";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts />,
    children: [
      // { index:true, element: <HomeView /> },
      {
        // path: "todos",
        children: [{ index: true, element: <TodoApp /> }],
      },
      {
        path: "books",
        children: [
          { index: true, element: <BookApp /> },
          { path: "add", element: <AddBook /> },
          { path: ":id/edit", element: <EditBook /> },
        ],
      },
      {
        path: "posts",
        children: [
          { index: true, element: <PostsPage /> },
          { path:"view/:id", element: <ViewPost /> }
        ]
      }
    ],
  },

]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
