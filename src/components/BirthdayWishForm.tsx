import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

const BirthdayWishForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to handle form submission
    console.log("Submitted", { title, message });
    setSubmitted(true);
  };

  return (
    <div className="h-dvh border-4  border-[#411E31] border-double flex flex-col items-center justify-center bg-white px-4 xmd:px-6 xl:px-10 py-8 tab:py-12 aboutMeGrad ">
      <div
        className="fixed top-6 lg:top-12 left-4 tab:left-6 xl:left-10 "
        data-aos="fade-down"
        data-aos-duration="1200"
      >
        <Link
          to="/"
          className="self-start text-sm text-gray-700 hover:underline underline-offset-4 mb-4"
        >
          <div className="instruFont flex flex-row sborder-2 items-center gap-2 lg:text-base transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.02]">
            <FaLongArrowAltLeft color="#2A2A2A" /> Back to homepage
          </div>
        </Link>
      </div>{" "}
      {!submitted ? (
        <div className="relative top-4 sborder-2 w-full flex flex-col items-center">
          <h1 className="text-2xl tab:text-3xl lg:text-4xl xl:text-5xl    font-semibold text-center text-[#411E31] playfairFont ">
            Send a Birthday Wish
          </h1>
          <p className="text-sm md:text-base text-center text-gray-600 mb-6 mt-[3px]">
            Write a birthday wish to Shola
          </p>
          <form
            onSubmit={handleSubmit}
            className="w-full lg:max-w-5xl bg-white border border-pink-200 shadow-lg  p-4 tab:p-6 xl:p-10 rounded-md"
          >
            <div className="mb-4" data-aos="zoom-in" data-aos-duration="1200">
              <label className="block text-gray-700 font-medium mb-1">
                Birthday Title
              </label>
              <input
                type="text"
                placeholder="e.g. “Wishing a special queen happy birthday”"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-100 bg-[#FFFCFC] text-gray-600 placeholder-gray-600 shadow-md transition ease-in-out duration-500 delay-10 hover:scale-[1.02]"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-6" data-aos="zoom-in" data-aos-duration="1200">
              <label className="block text-gray-700 font-medium mb-1">
                Write a birthday wish
              </label>
              <textarea
                rows={5}
                placeholder="I'd love to hear your birthday wish for me."
                className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-pink-100 bg-[#FFFCFC] text-gray-600 placeholder-gray-600 shadow-md transition ease-in-out duration-500 delay-10 hover:scale-[1.02]"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#863373] text-white py-2 rounded-md hover:bg-[#5c1f4e] shadow-md w3-animate-zooms transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.02]"
            >
              Send A Birthday Wish
            </button>
          </form>
        </div>
      ) : (
        <div className="text-center space-y-4 w-full lg:max-w-5xl bg-white border border-pink-200 shadow-lg  p-4 tab:p-6 xl:p-10 rounded-md">
          <div className="text-4xl">🎉</div>
          <h3 className="text-3xl lg:text-4xl xl:text-5xl font-semibold playfairFont text-[#411E31]">
            Your Wish Made My Day!
          </h3>
          <p className="text-gray-600">
            Thank you so much for taking a moment to share that lovely birthday
            message with me. It means the world that you chose to brighten my
            celebration.
          </p>
          <div>
            <Link to="/" className="">
              <button
                className="px-6 py-2 bg-[#863373] text-white rounded-md hover:bg-[#702a5a] transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.02]"
                onClick={() => console.log("Navigate to dashboard")} // replace with your navigation logic
              >
                {" "}
                Go Back To Dashboard
              </button>{" "}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default BirthdayWishForm;
