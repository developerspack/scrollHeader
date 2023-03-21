import React, { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`sm:px-16 px-6 w-full flex items-center py-4 fixed top-0 z-20 ${
          scrolled ? "bg-[#050816]" : "bg-transparent"
        }`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <div className="items-center">
            <p className="text-white text-[18px] font-bold">Developers' Pack</p>
          </div>

          <ul className="list-none flex gap-10">
            <li className="text-[#aaa6c3] text-[18px] font-medium">About</li>
            <li className="text-[#aaa6c3] text-[18px] font-medium">Work</li>
            <li className="text-[#aaa6c3] text-[18px] font-medium">Contact</li>
          </ul>
        </div>
      </nav>
      {scrolled && (
        <div
          className={`sm:px-16 px-6 w-full flex items-center py-1 fixed top-14 z-20 ${
            scrolled ? "bg-[#0c143b]" : "bg-transparent"
          }`}
        >
          <ul className="w-full flex justify-between items-center max-w-7xl mx-auto font-medium text-gray-400">
            <li>Graphics & Design</li>
            <li>Video & Animation</li>
            <li>Writing & Translation</li>
            <li>AI Services</li>
            <li>Digital Marketing</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
