import React from 'react'
import { NavLink } from 'react-router-dom'

function BlogDetails({ post }) {
    return (
        <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
            <div key={post.id} className=''>
                <NavLink to={`/blog/${post.id}`}>
                    <p className='font-bold text-lg'>{post.title}</p>
                </NavLink>
                <p className='text-sm mt-[4px]'>By <span className='italic'> {post.author} </span> on <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}> <span className='underline font-bold'> {post.category} </span></NavLink></p>
                <p className='text-sm mt-[4px]'>Posted On {post.date}</p>
                <p className='text-md mt-[14px]'>{post.content}</p>
                <div className='flex gap-x-2'>
                    {
                        post.tags.map((tag, index) => {
                            return <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}><span className='text-xs underline font-bold  text-blue-700 mt-[5px]'>{`#${tag}`}</span></NavLink>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default BlogDetails