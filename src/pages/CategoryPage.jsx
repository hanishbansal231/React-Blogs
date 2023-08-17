import React from 'react'
import Header from '../Components/Header'
import Blogs from '../Components/Blogs'
import Pagination from '../Components/Pagination';
import { useLocation, useNavigate } from 'react-router-dom'

function CategoryPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);
  return (
    <div>
        <Header />
        <div className='mt-[100px] flex gap-x-3 items-center m-auto max-w-[670px]'>
            <button className='rounded-md border-2 px-4 py-1' onClick={() => navigate(-1)}>Back</button>
            <h2 className='font-bold uppercase text-sm'>Blogs On <span>{category}</span></h2>
        </div>
        <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
        <Blogs />
        </div>
        <Pagination />
    </div>
  )
}

export default CategoryPage