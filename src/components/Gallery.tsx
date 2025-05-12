import React, { useState } from "react";
import port1 from "../assets/images/port1.png";
import port2 from "../assets/images/port2.png";
import port3 from "../assets/images/port3.png";
import port4 from "../assets/images/port4.png";
import port5 from "../assets/images/port5.png";
import port6 from "../assets/images/port6.png";
import port7 from "../assets/images/port7.png";
import port8 from "../assets/images/port8.png";
import { Link } from "react-router-dom";

const categories = ["All", "Childhood", "Family and friends", "DSA", "Shola ♡"];

const photos = [
  {
    src: port4,
    alt: "Shola in purple",
    category: "Childhood",
    caption: {
      title: "Childhood",
      subtitle: "Shola Coker appointed as DSA",
    },
    span: "row-span-2",
  },
  {
    src: port6,
    alt: "Shola in patterned outfit",
    category: "Childhood",
    caption: {
      title: "Childhood",
      subtitle: "Shola Coker appointed as DSA",
    },
    span: "row-span-1",
  },
  {
    src: port3,
    alt: "Shola in blue wrap",
    category: "Family and friends",
    span: "row-span-1",
  },
  {
    src: port2,
    alt: "Smiling in green attire",
    category: "DSA",
    span: "row-span-2",
  },
  {
    src: port5,
    alt: "Smiling in green dress again",
    category: "Childhood",
    span: "row-span-1",
  },
  {
    src: port1,
    alt: "Shola posing in light blue dress",
    category: "Shola ♡",
    span: "row-span-1",
  },
  {
    src: port7,
    alt: "Shola in red dress",
    category: "Shola ♡",
    span: "row-span-2",
  },
  // {
  //   src: port5,
  //   alt: "Shola posing in light blue dress",
  //   category: "Childhood",
  //   span: "col-span-2 hidden lg:block",
  // },
  {
    src: port5,
    alt: "Smiling in green dress again",
    category: "Family and friends",
    span: "row-span-1",
  },
  {
    src: port4,
    alt: "Shola posing in light blue dress",
    category: "Childhood",
    span: "row-span-1",
  },
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredPhotos =
    activeTab === "All"
      ? photos
      : photos.filter((photo) => photo.category === activeTab);

  return (
    <>
      <div className="px-4 tab:px-6 xl:px-10 py-8 tab:py-12 sborder-2">
        {/* Header */}
        <div className="flex flex-col tab:flex-row justify-between items-start tab:items-center mb-8 gap-4">
          {/* Title section */}
          <div className="sborder-4 w3-animate-left">
            <div className="flex items-center mb-1 text-sm text-gray-600 font-medium">
              <div className="w-full h-0.5 bg-[#150061] mr-2" />
              <div className="whitespace-nowrap instruFont lg:text-base xl:text-lg">
                Sola Coker
              </div>
            </div>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 playfairFont">
              Photo Gallery
            </h1>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 text-sm lg:text-base xl:text-lg font-medium text-gray-600 w3-animate-right">
            {categories.map((cat, idx) => (
              <React.Fragment key={cat}>
                {idx > 0 && <span className="text-gray-400">||</span>}
                <button
                  onClick={() => setActiveTab(cat)}
                  className={`${
                    activeTab === cat
                      ? "text-[#863373] font-semibold"
                      : "hover:text-[#863373] transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.02]"
                  } transition`}
                >
                  {cat}
                </button>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        {/* <div className="flex flex-wrap border-4 justify-evenly gap-4 mb-6 text-sm font-medium text-gray-700">
          {["All", "Childhood", "Family and friends", "DSA", "Shola ♡"].map(
            (tag) => (
              <button key={tag} className="hover:text-[#863373]">
                {tag}
              </button>
            )
          )}
        </div> */}

        {/* Uneven Photo Grid */}
        <div className="grid grid-cols-1 tab:grid-cols-2 lg:grid-cols-3 auto-rows-[220px] gap-4">
          {filteredPhotos.map((photo, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded shadow-2xl shadow-[#3F014733] ${photo.span}`}
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04]"
              />
              {photo.caption && (
                <div className="absolute bottom-0 left-0 w-full  bg-[#3F014733] text-white text-xs py-2 px-3 transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.01]">
                  <p className="font-bold">{photo.caption.title}</p>
                  <p>{photo.caption.subtitle}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Floating Button */}
        <Link to="/wishme">
          <button
            className="flex items-center justify-center gap-2 px-6 py-2 rounded-full text-[10px] tab:text-xs text-white border-[#B79D52] mt-4 fixed bottom-4 animate-pulses backdrop-blur-sm backdrop-invert mix-blend-differences bg-[#852F72]/60 z-40 right-2 md:right-4 transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] h-[68px] w-[68px] tab:h-20 tab:w-20 lg:h-24 lg:w-24 z-10"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Send a Birthday Wish
          </button>
        </Link>

        {/* <button className="fixed bottom-6 right-6 bg-[#7E1465] text-white px-4 py-2 rounded-full shadow-lg  text-sm">
          Send a birthday wish
        </button> */}
      </div>
    </>
  );
};

export default Gallery;
