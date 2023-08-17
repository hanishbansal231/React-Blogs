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
        <div>
            <button onClick={() => navigate(-1)}>Back</button>
            <h2>Blogs On <span>{category}</span></h2>
        </div>
        <Blogs />
        <Pagination />
    </div>
  )
}

export default CategoryPage