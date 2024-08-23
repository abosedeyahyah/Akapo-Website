
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-[#EFF5FA] py-2 justify-center border-b-2">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="text-black">
          <img
            src="/Images/Nav-img.png"
            alt=""
            srcset=""
            className="w-10 h-10"
          />
        </div>
        <div className="max-w-7xl mx-auto flex justify-between items-center space-x-6">
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
          className="text-white bg-green-600 px-3 p-2 rounded flex items-center gap-2"
        >
         Create free account
        </Link>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
