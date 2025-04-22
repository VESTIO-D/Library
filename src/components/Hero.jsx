import React from 'react'
import Books from './Books'

const Hero = () => {
  return (
    <>
      <section 
      className="pt-28 lg:pt-36 justify-center flex"
      id="home"
      >
        
        <div className="container lg:grid lg:grid-cols-2 flex items-center justify-center
        lg:gap-15 mt-10 p-5 md:p-0">

            <div>
                    <div className="grid xl:ml-[200px] p-2 xl:px-4">
                       
                        <h2 className="font-bold text-3xl text-amber-900 mb-3 md:text-5xl xl:text-6xl">Explore our collections</h2>
                        <span className="mb-7 md:mb-10  text-amber-900/90">
                            We have a large collections of book that you can check by clicking below
                        </span>

                        <div className="btn-main">
                            <button className="">
                                EXPLORE
                            </button>
                        </div>
                    </div>
            </div>
            <div className="">
                        <figure className="hidden sm:block">
                            <img src="images/hero.png"
                            height={20}
                            width={350} alt="" className="" />
                        </figure>
            </div>
        </div>
      </section>

      <Books />
    </>
  )
}

export default Hero
