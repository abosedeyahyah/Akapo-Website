"use client";
import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const click = () => setNav(!nav);
  const close = () => setNav(false); 
  return (
    <div>
      <nav className="bg-[#EFF5FA] py-2 justify-center border-b-2 ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="px-3 mt-2 flex justify-between items-center w-full lg:w-auto">
          <img
            src="/Images/Nav-img.png"
            alt=""
            srcset=""
            className="w-10 h-10"
          />
              <button className="lg:hidden block text-black" onClick={click}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40"
              height="40"
              viewBox="0 0 30 30"
            >
              <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
            </svg>
          </button>
        </div>
        <div className="max-w-7xl mx-auto hidden md:flex justify-between items-center space-x-6 ">
          <Link href="#home" className="text-black">
            Home
          </Link>
          <Link href="#about" className="text-black">
          Invest
          </Link>
          <Link href="#services" className="text-black">
          Savings
          </Link>
          <Link href="#services" className="text-black">
          Loan
          </Link>
          <Link href="#services" className="text-black">
          FAQs
          </Link>
        </div>
        <Link
          href="#chat"
          className="hidden lg:flex text-white bg-green-600 px-3 p-2 rounded -center gap-2"
        >
         Create free account
        </Link>
      </div>

         {/* mobile view */}
         <div
        className={
          nav
            ? "md:hidden flex left-0 top-0 h-screen bg-black/80 w-full absolute"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed top-0 left-0 w-[72%] h-full bg-white text-black transition-all duration-300"
              : "fixed top-0 left-[100%] w-[72%] h-full bg-white text-black transition-all duration-300"
          }
        >
          <div className="p-4">
            <div onClick={close} className="cursor-pointer">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </div>
            <div className="flex flex-col space-y-6 text-black text-center mt-8">
            <Link  onClick={close} href="#home" className="text-black">
            Home
          </Link>
          <Link  onClick={close}href="#about" className="text-black">
          Invest
          </Link>
          <Link onClick={close} href="#services" className="text-black">
          Savings
          </Link>
          <Link onClick={close} href="#services" className="text-black">
          Loan
          </Link>
          <Link onClick={close} href="#services" className="text-black">
          FAQs
          </Link>
        </div>
        <Link
          href="#chat"
          className="text-white bg-green-600 px-3 p-2 rounded flex items-center gap-2"
        >
         Create free account
        </Link>
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
