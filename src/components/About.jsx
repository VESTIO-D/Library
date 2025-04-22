import React from 'react'

const About = () => {
  return (
    <section
     id="about"
     className="pt-28 lg:pt-36 justify-center flex">

        <div className="container py-12 lg:py-8 grid justify-center items-center">
          <h1 className="head mb-10">About US</h1>
          <div className="p-4">
            
            <p className="text-sm lg:text-md mb-5">Discover a world of books at your fingertips. Our Library App brings the joy of reading to you with easy access to thousands of titles across various genres. Join our community of readers and start your literary journey today!
            </p>
          </div>

          <div className="flex flex-col gap-5 justify-center items-center p-4">
            <h1 className="head">Mission & Vission</h1>

            <div>
              <h1 className="subhead mb-4">
                Our Vision
              </h1>

              <p className="text-sm lg:text-md mb-5">
              To be a beacon of knowledge and inspiration, fostering a community where everyone has access to a wealth of information and resources, empowering lifelong learning and personal growth.
              </p>
            </div>

            <div>
              <h1 className="subhead mb-4">
                Our Mission 
              </h1>

              <p className="text-sm lg:text-md mb-5">
                Our mission is to provide an inclusive and welcoming space where individuals of all ages can explore, discover, and connect. We strive to offer a diverse collection of books and digital resources, promote literacy and education, and support the cultural and intellectual growth of our community.
              </p>
            </div>

          </div>
            
        </div>

    </section>
  )
}

export default About
