import SectionHeading from "@/components/common/SectionHeading";
import Spinner from "@/components/common/Spinner";
import BackOutlined from "@/components/icons/BackOutlined";
import Button from "@/components/ui/button/Button";
import Section from "@/components/ui/section/Section";
import { AppDispatch, RootState } from "@/store";
import { fetchPostById } from "@/store/feature/posts/postSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const ViewPost = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>();
    const { isLoading, single } = useSelector((state: RootState) => state.posts);

    useEffect(() => {
        if (id) {
            dispatch(fetchPostById(Number(id)));
        }
    }, [dispatch, id]);

    if (isLoading) return <Spinner />;

    if (!single) return <div className="text-center">No post found.</div>;

    return (
        <Section>
            <div className="m-3">
                <Button className="mb-4 px-4 py-2 rounded-md text-white font-semibold transition-all duration-200 bg-green-500 hover:bg-green-600" onClick={() => navigate(-1)}><BackOutlined/></Button>
                    <SectionHeading
                        onSort={() => console.log}
                        onSearch={() => console.log}
                        title="View Posts"
                    />
                <div className="container">
                    <div className="bg-white shadow-sm p-4 rounded-xl hover:shadow cursor-pointer">
                        <h2 className="text-xl font-semibold line-clamp-1 mb-2">{single.title}</h2>
                        <p className="font-light text-gray-500 leading-5">{single.body}</p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default ViewPost;
