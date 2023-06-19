"use client"
import React from "react"

const About = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        width={290}
        height={290}
        src="/assets/foto/Jahfal.jpg"
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      Jahfal Mudrik Ramadhan
      </h1>
      <p className="mb-8 leading-relaxed">
      I am a 6th semester student majoring in Software Engineering from Telkom University, results oriented with good communication skills, as well as an understanding of frontend developer, software testing, and entrepreneurship.
      </p>
      <div className="flex justify-center">
      </div>
    </div>
  </div>
</section>
        </div>
    )
}
export default About