import React, { useState } from "react";

const Carditems = ({ vedios }) => {
  console.log(vedios);

  return (
    <>
      <section className="max-w-6xl  text-white mx-auto">
        {/* <h3 className="text-3xl font-bold text-center mb-12">Products List</h3> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10 cursor-pointer mt-12">
          {vedios.map((vedio) => (
            <div
              key={vedio.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              {/* Thumbnail */}
              <div className="overflow-hidden">
                <img
                  src={vedio.thumbnail.fallback}
                  alt={vedio.videoTitle}
                  className="w-full h-44 object-cover transform hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4 space-y-2">
                {/* Title */}
                <h3 className="text-base font-semibold text-gray-800 text-center line-clamp-2">
                  {vedio.videoTitle}
                </h3>

                {/* Meta info */}
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{vedio.date}</span>
                  <span>{vedio.views} views</span>
                </div>

                {/* Description (short) */}
                <p className="text-sm text-gray-600 line-clamp-3">
                  {vedio.description}
                </p>

                {/* Watch button */}
                <a
                  href={vedio.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-3 text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                >
                  Watch Video
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Carditems;
