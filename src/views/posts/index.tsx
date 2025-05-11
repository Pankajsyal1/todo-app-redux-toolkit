import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "@/store/feature/posts/postSlice";
import { RootState, AppDispatch } from "@/store";
import Section from "@/components/ui/section/Section";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/ui/button/Button";
import PostItem from "@/components/features/posts/PostItem";
import Spinner from "@/components/common/Spinner";

function PostsPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, list } = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (isLoading) return <Spinner />;

  return (
    <Section>
      <div className="m-3">
        <SectionHeading
          onSort={() => console.log}
          onSearch={() => console.log}
          title="Book List App"
          center
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {list.map((post) => (
            <Fragment key={post.id}>
              <PostItem {...post} />
            </Fragment>
          ))}
        </div>
        <div className="text-center mt-4">
          <Button
            className="px-4 py-2 rounded-md text-white font-semibold transition-all duration-200 bg-green-500 hover:bg-green-600"
            onClick={() => dispatch(fetchPosts())}
          >
            Fetch Posts
          </Button>
        </div>
      </div>
    </Section>
  );
}

export default PostsPage;
