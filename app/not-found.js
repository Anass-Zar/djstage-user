import React from 'react'
import Error from "@/images/404.png"

export default function Custom404() {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="grid items-center gap-8 sm:gap-20 lg:grid-cols-2">
          <div>
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">404 Error</h1>
            <p className="mb-6 max-w-lg text-sm text-gray-500 sm:text-xl md:mb-10 lg:mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus
            </p>
            <a
              href="#"
              className="inline-block items-center rounded-md bg-black px-6 py-3 text-center font-semibold text-white"
            >
              Back Home
            </a>
          </div>
          <div>
            <img
              src={Error}
              alt=""
              className="mx-auto inline-block h-full w-full max-w-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
