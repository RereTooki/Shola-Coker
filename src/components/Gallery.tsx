import React from "react";
import port1 from "../assets/images/port1.png";
import port2 from "../assets/images/port2.png";
import port3 from "../assets/images/port3.png";
import port4 from "../assets/images/port4.png";
import port5 from "../assets/images/port5.png";
import port6 from "../assets/images/port6.png";
import port7 from "../assets/images/port7.png";
import port8 from "../assets/images/port8.png";

const photos = [
  {
    src: port4,
    alt: "Shola in purple",
    caption: {
      title: "Childhood",
      subtitle: "Shola Coker appointed as DSA",
    },
    span: "row-span-2",
  },
  {
    src: port6,
    alt: "Shola in patterned outfit",
    caption: {
      title: "Childhood",
      subtitle: "Shola Coker appointed as DSA",
    },
    span: "row-span-1",
  },
  {
    src: port3,
    alt: "Shola in blue wrap",
    span: "row-span-1",
  },
  {
    src: port2,
    alt: "Smiling in green attire",
    span: "row-span-2",
  },
  {
    src: port5,
    alt: "Smiling in green dress again",
    span: "row-span-1",
  },
  {
    src: port1,
    alt: "Shola posing in light blue dress",
    span: "row-span-1",
  },
  {
    src: port7,
    alt: "Shola in red dress",
    span: "row-span-2",
  },
];

const Gallery = () => {
  return (
    <>
      <div className="px-4 py-6 border-2">
        {/* Category Tabs */}
        <div className="flex flex-wrap border-4 justify-evenly gap-4 mb-6 text-sm font-medium text-gray-700">
          {["All", "Childhood", "Family and friends", "DSA", "Shola ♡"].map(
            (tag) => (
              <button key={tag} className="hover:text-[#863373]">
                {tag}
              </button>
            )
          )}
        </div>

        {/* Uneven Photo Grid */}
        <div className="grid grid-cols-1 tab:grid-cols-2 lg:grid-cols-3 auto-rows-[220px] gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded shadow-sm ${photo.span}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover"
              />
              {photo.caption && (
                <div className="absolute bottom-0 left-0 w-full  bg-[#3F014733] text-white text-xs p-2">
                  <p className="font-bold">{photo.caption.title}</p>
                  <p>{photo.caption.subtitle}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Floating Button */}
        <button className="fixed bottom-6 right-6 bg-purple-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-purple-700 text-sm">
          Send a birthday wish
        </button>
      </div>
    </>
  );
};

export default Gallery;
