import React from 'react'

const Bookcards = () => {
  return (
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <a
         href="/" 
         className=""
         >
        <div className="bg-amber-800/10 flex flex-col items-center p-4 rounded-[5px] gap-2">
                <img
                 src="images/AOT.jpg" 
                 alt="img"
                 width={200}
                 height={80} 
                 className="rounded-[5px]" 
                 />
              
              <span className="text-amber-800 font-bold text-md">Attack on Titans</span>
            </div>
        </a>
            
       </div>
  )
}

export default Bookcards
