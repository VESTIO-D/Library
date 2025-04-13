import React from 'react'
import Search from './Search'

const Books = () => {
  return (
    <section 
     id="Books"
     className="pt-28 lg:pt-36 justify-center flex"
    >
        <div className="container items-center justify-center">
          <div>
            <h2 className="text-amber-800/40 ml-4">you can search the books here...!</h2>
            <Search />
          </div>
          
        </div>
    </section>
  )
}

export default Books
