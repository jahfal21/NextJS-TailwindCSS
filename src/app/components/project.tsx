import React from "react"
import Link from "next/link";

const Project = () => {
    return (
      <div id="project">
        <section className="text-gray-500 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        My Projects
      </h1>
    </div>
    <div className="flex flex-wrap -m-4 justify-center items-center">
  <div className="lg:w-1/3 sm:w-1/2 p-4">
    <div className="flex relative">
      <img
        alt="gallery"
        className="absolute inset-0 w-full h-full object-cover object-center"
        src="/assets/Projek/Web.png"
      />
      <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
          Website
        </h2>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
          Swift E-Learning
        </h1>
        <p className="leading-relaxed">
          Website Swift E-Learning merupakan website pembelajaran online untuk membantu pelajar dalam mempersiapkan UTBK. Website ini merupakan proyek tugas besar mata kuliah pemrograman web menggunakan ReactJS, ExpressJS, dan MongoDB.
        </p>
        <Link target="_blank" href={"https://swift-react-js.vercel.app/"} >
            <p className="leading-relaxed text-blue-500 hover:underline">
                View Project..
            </p>
        </Link>
      </div>
    </div>
  </div>
  <div className="lg:w-1/3 sm:w-1/2 p-4">
    <div className="flex relative">
      <img
        alt="gallery"
        className="absolute inset-0 w-full h-full object-cover object-center"
        src="/assets/Projek/mobile.png"
      />
      <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
          Aplikasi Mobile
        </h2>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
          Swift E-Learning
        </h1>
        <p className="leading-relaxed">
          Aplikasi Swift E-Learning merupakan Aplikasi pembelajaran online untuk membantu pelajar dalam mempersiapkan UTBK. Aplikasi ini merupakan proyek tugas besar mata kuliah pemrograman perangkat bergerak menggunakan Flutter, Python, dan FastAPI.
        </p>
        <Link target="_blank" href={"/assets/Projek/APK.rar"} >
            <p className="leading-relaxed text-blue-500 hover:underline">
                View Project..
            </p>
        </Link>
      </div>
    </div>
      </div>
    </div>
  </div>
</section>

      </div>
    )
  }
  export default Project