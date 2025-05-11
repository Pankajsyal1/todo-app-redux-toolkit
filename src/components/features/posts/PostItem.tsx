import React from 'react'
import { useNavigate } from 'react-router-dom'

interface PostItemProps {
    id: string, title: string, body: string
}
const PostItem: React.FC<PostItemProps> = ({ id, title, body }) => {
     const navigate = useNavigate()

    return (
        <div className='bg-white  shadow-sm p-4 rounded-xl hover:shadow cursor-pointer' key={id} onClick={() => navigate(`/posts/view/${id}`)}>
            <h2 className='text-xl font-semibold line-clamp-1 mb-2'>{title}</h2>
            <p className='font-light text-gray-500 leading-5'>{body}</p>
        </div>
    )
}

export default PostItem
