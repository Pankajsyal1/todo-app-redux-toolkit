import React from 'react'

interface PostItemProps {
    id: string, title: string, body: string
}
const PostItem: React.FC<PostItemProps> = ({ id, title, body }) => {
    return (
        <div className='bg-white  shadow-sm p-4 rounded-xl hover:shadow cursor-pointer' key={id}>
            <h2 className='text-xl font-semibold line-clamp-1 mb-2'>{title}</h2>
            <p className='font-light text-gray-500 leading-5'>{body}</p>
        </div>
    )
}

export default PostItem
