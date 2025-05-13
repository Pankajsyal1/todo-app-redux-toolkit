import PencilFilled from '@/components/icons/PencilFilled';
import ShowFilled from '@/components/icons/ShowFilled';
import TrashFilled from '@/components/icons/TrashFilled';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

interface PostItemProps {
    id: string, title: string, body: string
}
const PostItem: React.FC<PostItemProps> = ({ id, title, body }) => {
    const navigate = useNavigate();

    const handleDelete = (id: string) => {
        console.log(id)
    }

    return (
        <div className='bg-white flex flex-col h-full shadow-sm p-4 rounded-xl hover:shadow-lg hover:scale-105 transition-all cursor-pointer' key={id} onClick={() => navigate(`/posts/view/${id}`)}>
            <div className='flex-grow'>
                <h2 className='text-xl font-semibold line-clamp-1 mb-2'>{title}</h2>
                <p className='font-light text-gray-500 leading-5'>{body}</p>
            </div>
            <div className="flex gap-2 mt-4">
                <button
                    type="button"
                    onClick={() => handleDelete(id)}
                    className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition duration-200"
                    title="Delete"
                >
                    <TrashFilled />
                </button>

                <Link
                    to={`/posts/${id}/edit`}
                    className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition duration-200"
                    title="Edit"
                >
                    <PencilFilled />
                </Link>

                <Link
                    to={`/posts/${id}`}
                    className="p-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md transition duration-200"
                    title="View"
                >
                    <ShowFilled />
                </Link>
            </div>
        </div>
    )
}

export default PostItem
