import React from "react";
import { IoPencil, IoTrash } from "react-icons/io5";

const Carditems = ({ vedios, onEdit, onDelete }) => {
  if (!vedios || vedios.length === 0) return null;
  return (
    <section className="max-w-6xl text-white mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10 cursor-pointer mt-12">
        {vedios.map((vedio) => (
          <div
            key={vedio.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden relative"
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
              <h3 className="text-base font-semibold text-gray-800 text-center line-clamp-2">
                {vedio.videoTitle}
              </h3>

              <div className="flex justify-between text-sm text-gray-500">
                <span>{vedio.date}</span>
                <span>{vedio.views} views</span>
              </div>

              <p className="text-sm text-gray-600 line-clamp-3">
                {vedio.description}
              </p>

              <a
                href={vedio.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-3 text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
              >
                Watch Video
              </a>
              {/* Edit/Delete icons */}
              <div className="absolute top-5 right-5 flex space-x-2">
                <button
                  onClick={() => onEdit(vedio)}
                  className="text-blue-600 hover:text-blue-800"
                  title="Edit Video"
                >
                  <IoPencil size={20} />
                </button>
                <button
                  onClick={() => onDelete(vedio.id)}
                  className="text-red-600 hover:text-red-800"
                  title="Delete Video"
                >
                  <IoTrash size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carditems;
