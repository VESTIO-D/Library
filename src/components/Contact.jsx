import React from 'react'

const Contact = () => {
  return (
    <>
     <section 
      className="flex justify-center pt-28 lg:pt-36"
      id='contact'
     >

        <div className="container flex flex-col justify-center items-center">
            <div className="bg-amber-800/10 p-10 rounded-2xl">
            <div className="mb-10">
                <h1 className="head">Get in Touch</h1>
            </div>

            <div className="flex justify-center">
                <div className="frm">
                    <div className="grid grid-cols-2 gap-2 lg:gap-5 justify-between">
                    <input type="text" className="inp" placeholder="First Name" />
                    <input type="text" className="inp" placeholder="Last Name" />
                    </div>
                    <input type="text" className="inp" placeholder="Email" />
                    <input type="text" className="inp" placeholder="phone" />
                    <textarea name="" id="" cols="30" className="bg-zinc-100 rounded-sm h-20
                    lg:h-30"></textarea>
                    <input type="button" value="Submit" className="rounded-sm bg-amber-900 w-20 p-2 text-zinc-50 font-semibold uppercase text-sm" />
                </div>
            </div>
            </div>
        </div>
        
     </section>
    </>
  )
}

export default Contact
