import React from "react";
// Define types for props
type NavigationBarProps = {
  projectsRef: React.RefObject<HTMLDivElement>;
};

const Landing: React.FC<NavigationBarProps> = ({ projectsRef }) => {
  // Function to scroll to a section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="h-dvh lg:h-[75vh] border-4 lg:border-b-0 border-[#411E31] border-double bg-[#FFE3F933] flex flex-col gap-4 md:gap-2 lg:gap-8 justify-center items-center px-2 lg:px-8 shadow-md shadow-[#7E14651A]">
        <div className="sborder-2 instruFont text-[#676565] text-sm md:text-[2.5vw]  lg:text-xl xl:text-2xl">
          June 28 1985
        </div>
        <div className="sborder-2 playfairFont text-[#3A3A3A] text-[9vw] lg:text-6xl xl:text-7xl font-bold text-center">
          OLUSHOLA COKER
        </div>
        <div className="sborder-2 interFont text-[#F4EFEF] bg-gradient-to-r from-[#411E31] from-5% to-[#863373]  bg-[#411E31]s  text-sm lg:text-base xl:text-lgs font-medium p-3 tab:p-4 rounded-lg transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] animate-pulses">
          Send a birthday wish
        </div>
        <div
          className="text-base md:text-[4.5vw] xmd:text-lg lg:hidden lg:text-xl xl:text-2xl  sborder-4 whitespace-nowrap absolute sborder-4 bottom-2 md:bottom-4 lg:tracking-wider text-center self-center animate-bounce select-none hover:underline underline-offset-4 decoration-dotted"
          onClick={() => scrollToSection(projectsRef)}
        >
          <p className="w3-animate-bottom2 cursor-pointer hover:scale-[1.05] ease-in-out duration-500 delay-50">
            View Gallery
          </p>
        </div>
      </div>
    </>
  );
};

export default Landing;
