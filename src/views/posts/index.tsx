import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../store/feature/posts/postSlice";
import { RootState, AppDispatch } from "../../store"; // Ensure that this path is correct
import "./App.css";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  
  // Type the state using RootState
  const state = useSelector((state: RootState) => state);

  console.log("State", state);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (state.posts.isLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="App">
      <button onClick={() => dispatch(fetchPosts())}>Fetch Posts</button>
      {state.posts.data &&
        state.posts.data.map((post) => <li key={post.id}>{post.title}</li>)}
    </div>
  );
}

export default App;
