import React, { useContext, useEffect } from 'react'
import Header from './Components/Header'
import Blogs from './Components/Blogs'
import Pagination from './Components/Pagination'
import { AppContext } from './Context/AppContext'
import './App.css';
function App() {
  const {fetchData} = useContext(AppContext);
  useEffect(() => {
    fetchData();
  },[]);
  return (
    <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
      <Header />
      <Blogs />
      <Pagination />
    </div>
  )
}

export default App