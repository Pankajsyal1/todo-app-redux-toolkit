import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../store/feature/posts/postSlice";
import { RootState, AppDispatch } from "../../store"; // Ensure that this path is correct
import Section from "@/components/ui/section/Section";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/ui/button/Button";
import PostItem from "@/components/features/posts/PostItem";
import Spinner from "@/components/common/Spinner";

function PostsPage() {
  const dispatch = useDispatch<AppDispatch>();

  // Type the state using RootState
  const state = useSelector((state: RootState) => state);

  console.log("State", state);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (state.posts.isLoading) {
    return <Spinner />;
  }

  return (
    <Section>
      <div className="m-3">
        <SectionHeading
         onSort={() => console.log} onSearch={() => console.log}
          title="User List App"
          center
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {state.posts.data &&
            state.posts.data.map((post) => <PostItem {...post} />)}
        </div>
        <div className="tetx-center mt-4">
          <Button className="px-4 py-2 rounded-md text-white font-semibold transition-all duration-200 bg-green-500 hover:bg-green-600" onClick={() => dispatch(fetchPosts())}>Fetch Posts</Button>
        </div>
      </div>
    </Section>
  );
}

export default PostsPage;
