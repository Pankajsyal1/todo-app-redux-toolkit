import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { useNavigate } from "react-router-dom";
import { addPost } from "@/store/feature/posts/postSlice";
import Section from "@/components/ui/section/Section";
import Button from "@/components/ui/button/Button";
import BackOutlined from "@/components/icons/BackOutlined";

const CreatePost: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!title || !body) {
            alert("Please fill in all fields.");
            return;
        }

        try {
            await dispatch(addPost({ title, body, userId: 1 })).unwrap(); // dummy userId
            navigate("/posts");
        } catch (error) {
            console.error("Failed to create post:", error);
            alert("Something went wrong!");
        }
    };

    return (
        <Section>
            <div className='flex gap-2 items-center'>
                <Button className="px-4 py-2 rounded-md text-white font-semibold transition-all duration-200 bg-green-500 hover:bg-green-600" onClick={() => navigate(-1)}><BackOutlined /></Button>
                <h1 className={`text-lg sm:text-xl md:text-2xl font-extrabold uppercase`}>Add Post</h1>
            </div>
            <div className="max-w-xl p-6 bg-white rounded-xl shadow-md mt-6">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                        Create Post
                    </button>
                </form>
            </div>
        </Section>
    );
};

export default CreatePost;
