import React from 'react'

const Search = () => {
  return (
    <>
      <div className="w-full items-center justify-center flex gap-2">

        <form
         action="" 
         className="flex gap-2"
         >

            <input type="text" className="inpt-feild" />
            <button className="bg-amber-800/70 rounded-3xl w-8 flex items-center justify-center">
                <img
                 src="images/search.png"
                  alt="search"
                  className="" />
            </button>
        </form>
      </div>
    </>
  )
}

export default Search
