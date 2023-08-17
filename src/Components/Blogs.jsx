import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from '../Components/Spinner';
function Blogs() {
  const {posts,loading} = useContext(AppContext);
  return (
    <div className='w-11/12 max-w-[670px] py-8 flex flex-col gap-y-7 mt-[66px] mb-[70px] '>
      {
        loading ? (<Spinner />) : (
          posts.length === 0 ? (<div>Posts Not Found</div>) : (
            posts.map((post)=> (
              <div key={post.id} className=''>
                <p className='font-bold text-lg'>{post.title}</p>
                <p className='text-sm mt-[4px]'>By <span className='italic'> {post.author} </span> on <span className='underline font-bold'> {post.category} </span></p>
                <p className='text-sm mt-[4px]'>Posted On {post.date}</p>
                <p className='text-md mt-[14px]'>{post.content}</p>
                <div className='flex gap-x-2'>
                  {
                    post.tags.map((tag,index) => {
                      return <span className='text-xs underline font-bold  text-blue-700 mt-[5px]' key={index}>{`#${tag}`}</span>
                    })
                  }
                  </div>
              </div>
            ))
          )
        )
      }
    </div>
  )
}

export default Blogs