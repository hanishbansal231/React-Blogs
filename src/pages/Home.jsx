import React from 'react'
import Header from '../Components/Header'
import Blogs from '../Components/Blogs'
import Pagination from '../Components/Pagination'
function Home() {
    return (
        <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
            <Header />
            <div className='mt-[66px]'>
            <Blogs />
            </div>
            <Pagination />
        </div>
    )
}

export default Home