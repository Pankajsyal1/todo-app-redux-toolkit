import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { useNavigate, useParams } from "react-router-dom";
import { editPost, fetchPostById } from "@/store/feature/posts/postSlice";
import Section from "@/components/ui/section/Section";
import Button from "@/components/ui/button/Button";
import BackOutlined from "@/components/icons/BackOutlined";

const EditPost: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const post = useSelector((state: RootState) => state.posts.single);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    useEffect(() => {
        if (id) {
            dispatch(fetchPostById(Number(id)));
        }
    }, [dispatch, id]);

    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setBody(post.body);
        }
    }, [post]);

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !body) {
            alert("All fields are required.");
            return;
        }

        try {
            await dispatch(editPost({ id: Number(id), updatedData: { title, body } })).unwrap();
            navigate("/posts");
        } catch (error) {
            console.error("Failed to update post:", error);
            alert("Error updating post");
        }
    }

    return (
        <Section>
            <div className='flex gap-2 items-center'>
                <Button  className="px-4 py-2 rounded-md text-white font-semibold transition-all duration-200 bg-green-500 hover:bg-green-600" onClick={() => navigate(-1)}><BackOutlined /></Button>
                <h1 className={`text-lg sm:text-xl md:text-2xl font-extrabold uppercase`}>Edit Post</h1>
            </div>
            <div className="max-w-xl p-6 bg-white rounded-xl shadow-md mt-6">
                <form onSubmit={handleUpdate} className="flex flex-col gap-4">
                    <div>
                        <label className="block font-semibold mb-1">Title</label>
                        <input
                            type="text"
                            className="w-full border px-3 py-2 rounded-md"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter title"
                        />
                    </div>
                    <div>
                        <label className="block font-semibold mb-1">Body</label>
                        <textarea
                            className="w-full border px-3 py-2 rounded-md"
                            rows={5}
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            placeholder="Enter body"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md"
                    >
                        Update Post
                    </button>
                </form>
            </div>
        </Section>
    );
};

export default EditPost;
