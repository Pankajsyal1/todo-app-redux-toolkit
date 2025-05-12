// Importing React Router and Redux essentials
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Provider } from "react-redux";

// Importing two separate Redux stores
import { store } from "./store"; // Main Redux store
import storeThunk from "./store/store-thunk"; // Separate store for /users route

// Importing layout components
import AuthLayout from "./layouts/AuthLayout";
import RootLayouts from "./layouts/RootLayout";
import UsersLayout from "./layouts/UsersLayout";

// Importing views/components for different routes
import AddBook from "./views/books/add";
import BookApp from "./views/books";
import EditBook from "./views/books/edit";
import PostsPage from "./views/posts";
import TodoApp from "./views/todos";
import UsersPage from "./views/user";
import ViewPost from "./views/posts/view";
import AddUserPage from "./views/user/add";
import LoginPage from "./views/login";

// Define all main routes except /users
const MainRoutes = () => (
  <Provider store={store}>
    <Routes>
      {/* Auth routes */}
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<LoginPage />} />
      </Route>
      <Route path="/" element={<RootLayouts />}>
        <Route path='todos' element={<TodoApp />} />
        <Route path="books">
          <Route index element={<BookApp />} />
          <Route path="add" element={<AddBook />} />
          <Route path=":id/edit" element={<EditBook />} />
        </Route>
        <Route path="posts">
          <Route index element={<PostsPage />} />
          <Route path="view/:id" element={<ViewPost />} />
        </Route>
      </Route>
    </Routes>
  </Provider>
);

const UsersRoutes = () => (
  <Provider store={storeThunk}>
    <Routes>
      <Route path="/users" element={<UsersLayout />}>
        <Route index element={<UsersPage />} />
        <Route path="/users/add" element={<AddUserPage />} />
      </Route>
    </Routes>
  </Provider>
);

const RouterSelector = () => {
  const location = useLocation();

  // If URL starts with /users → render UsersRoutes with storeThunk
  if (location.pathname.startsWith("/users")) {
    return <UsersRoutes />;
  }

  // Else render everything else with normal store
  return <MainRoutes />;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <RouterSelector />
    </BrowserRouter>
  );
};

export default App;
