import React from 'react'
import Search from './Search'
import Bookcards from './Bookcards'

const Books = () => {
  return (
    <section 
     id="books"
     className="pt-28 lg:pt-36 justify-center flex"
    >
        <div className=" px-4 py-12 lg:py-8 lg:px-18 xl:max-w-6xl bg-amber-800/5 rounded-xl grid items-center justify-center container">
          <div className="mb-10 py-5 lg:py-10 flex flex-col items-center">
            <h2 className="text-amber-800/40 mb-2">you can search the books here...!</h2>
            <Search />
          </div>
          <Bookcards />
        </div>
    </section>
  )
}

export default Books
