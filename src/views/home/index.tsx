// Placeholder image URLs
const reduxLogo = "https://via.placeholder.com/1500x1500?text=Redux+Logo";
const reduxToolkitLogo = "https://via.placeholder.com/1500x1500?text=Redux+Toolkit+Logo";
const reduxFlowImage = "https://via.placeholder.com/1500x1000?text=Redux+Flow";
const reduxDevToolsImage = "https://via.placeholder.com/1500x1000?text=Redux+DevTools";

const HomeView = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Hero Section */}
      <section
        className="relative w-full h-screen bg-cover bg-center p-8"
        style={{ backgroundImage: 'url("https://via.placeholder.com")' }}
      >
        <div className="absolute inset-0 bg-black flex flex-col items-center justify-center p-8">
          <h1 className="text-5xl font-bold text-white">Redux Documentation</h1>
          <p className="mt-4 text-xl text-[#b3ffe0] max-w-2xl text-center">
            A comprehensive guide to managing state in your applications with Redux and Redux Toolkit.
          </p>
          <a
            href="#get-started"
            className="mt-8 px-6 py-3 bg-[#00d563] text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-[#00b04f]"
          >
            Get Started
          </a>
        </div>
        {/* Images in Hero */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex space-x-4 p-8">
          <img
            src={reduxLogo}
            alt="Redux Logo"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
          />
          <img
            src={reduxToolkitLogo}
            alt="Redux Toolkit Logo"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </section>

      {/* Main Content */}
      <main id="get-started" className="flex-grow container mx-auto py-12 px-4">
        <section className="text-center my-12 px-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            Manage State with Confidence
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Redux and Redux Toolkit help you write applications that behave consistently, run in different environments, and are easy to test. They are powerful tools for managing state in complex applications.
          </p>
        </section>

        {/* History Section */}
        <section className="bg-gray-200 py-12 mb-12 px-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">History of Redux and Redux Toolkit</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-8">
              Redux was created by Dan Abramov and Andrew Clark in 2015 as a predictable state container for JavaScript apps. Redux Toolkit was introduced to streamline Redux development by reducing boilerplate and improving developer experience.
            </p>
            <div className="flex justify-center space-x-6">
              <img
                src={reduxFlowImage}
                alt="Redux Flow"
                className="w-1/2 h-auto object-cover rounded-lg shadow-md"
              />
              <img
                src={reduxToolkitLogo}
                alt="Redux Toolkit"
                className="w-1/4 h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Features and Benefits Section */}
        <section className="py-12 mb-12 bg-gray-100 px-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
              Features and Benefits
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-300 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800">Redux</h3>
                <ul className="mt-4 text-left text-gray-600 list-disc list-inside">
                  <li>Predictable State Management</li>
                  <li>Centralized State</li>
                  <li>Server-Side Rendering Support</li>
                  <li>Extensive Ecosystem and Middleware</li>
                </ul>
              </div>
              <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800">Redux Toolkit</h3>
                <ul className="mt-4 text-left text-gray-600 list-disc list-inside">
                  <li>Reduced Boilerplate Code</li>
                  <li>Integrated Best Practices</li>
                  <li>Better Developer Experience</li>
                  <li>Includes Tools for Slices and Async Logic</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Redux DevTools Section */}
        <section className="py-12 mb-12 bg-gray-300 px-8">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                  Powerful Redux DevTools
                </h2>
                <p className="text-lg text-gray-600">
                  Redux DevTools is a powerful tool that lets you inspect every state and action, time travel through state changes, and even export and import state. This makes debugging and monitoring your application easier than ever.
                </p>
              </div>
              <div className="md:w-1/2">
                <img
                  src={reduxDevToolsImage}
                  alt="Redux DevTools"
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Comparison with Context API */}
        <section className="text-center mb-12 py-12 bg-gray-200 px-8">
          <h2 className="text-3xl font-semibold text-gray-800">Why Choose Redux Over Context API and useReducer?</h2>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
            While the Context API and `useReducer` are great for small to medium applications, Redux shines in larger applications where managing state across many components becomes complex.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800">Redux Advantages</h3>
              <ul className="mt-4 text-left text-gray-600 list-disc list-inside">
                <li>Middleware for Handling Side Effects</li>
                <li>DevTools for Debugging</li>
                <li>Structured State Management</li>
                <li>Proven Scalability</li>
              </ul>
            </div>
            <div className="bg-gray-300 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800">Context API & useReducer</h3>
              <ul className="mt-4 text-left text-gray-600 list-disc list-inside">
                <li>Good for Small to Medium Applications</li>
                <li>Simpler Setup</li>
                <li>No External Dependencies</li>
                <li>Less Boilerplate</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Redux Section */}
        <section className="text-center mb-12 py-12 bg-gray-100 px-8">
          <h2 className="text-3xl font-semibold text-gray-800">Getting Started with Redux</h2>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
            Redux is a predictable state container for JavaScript apps. Here’s a basic example of setting up Redux in your application.
          </p>
          <div className="mt-8 text-left mx-auto max-w-4xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Installation</h3>
            <pre className="bg-black text-white p-4 rounded-lg">
              <code>
                {`$ npm install redux react-redux`}
              </code>
            </pre>
            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Redux Example: Todo App</h3>
            <p className="text-gray-600 mb-4">Below is a simple Todo app implementation using Redux:</p>
            <pre className="bg-black text-white p-4 rounded-lg">
              <code>
                {`import { createStore } from 'redux';
import { Provider } from 'react-redux';

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const addTodo = (todo) => ({ type: ADD_TODO, payload: todo });
const deleteTodo = (id) => ({ type: DELETE_TODO, payload: id });

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};

const store = createStore(todosReducer);

const App = () => (
  <Provider store={store}>
    <div>Todo App</div>
  </Provider>
);
`}
              </code>
            </pre>
          </div>
        </section>

        {/* Redux Toolkit Section */}
        <section className="text-center mb-12 py-12 bg-gray-100 px-8">
          <h2 className="text-3xl font-semibold text-gray-800">Getting Started with Redux Toolkit</h2>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
            Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development. It simplifies common Redux tasks and reduces boilerplate code. Here’s a basic example of setting up Redux Toolkit.
          </p>
          <div className="mt-8 text-left mx-auto max-w-4xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Installation</h3>
            <pre className="bg-black text-white p-4 rounded-lg">
              <code>
                {`$ npm install @reduxjs/toolkit react-redux`}
              </code>
            </pre>
            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Redux Toolkit Example: Todo App</h3>
            <p className="text-gray-600 mb-4">Below is a simple Todo app implementation using Redux Toolkit:</p>
            <pre className="bg-black text-white p-4 rounded-lg">
              <code>
                {`import { createSlice, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    }
  }
});

const store = configureStore({
  reducer: { todos: todosSlice.reducer }
});

const App = () => (
  <Provider store={store}>
    <div>Todo App with Redux Toolkit</div>
  </Provider>
);
`}
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomeView;
