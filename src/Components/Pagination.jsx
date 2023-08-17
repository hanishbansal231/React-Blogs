import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

function Pagination() {
  const { page, changeHandler, totalPage } = useContext(AppContext);
  return (
    <div className='w-full flex justify-center items-center border-2 fixed bottom-0 bg-white'>
      <div className='w-11/12 max-w-[670px] flex justify-between py-2'>
        <div className='flex gap-x-2'>
          {
            page > 1 &&
            (<button className='rounded-md border-2 px-4 py-1' onClick={() => changeHandler(page - 1)}>Prev</button>)
          }
          {
            page < totalPage &&
            (<button className='rounded-md border-2 px-4 py-1' onClick={() => changeHandler(page + 1)}>Next</button>)
          }
        </div>
        <p className='font-bold text-sm'>
          Page {page} of {totalPage}
        </p>
      </div>
    </div>
  )
}

export default Pagination