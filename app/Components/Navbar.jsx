import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-[#EFF5FA] py-2  justify-center">
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
          <a href="#home" className="text-black">
            Home
          </a>
          <a href="#about" className="text-black">
          Invest
          </a>
          <a href="#services" className="text-black">
          Savings
          </a>
          <a href="#services" className="text-black">
          Loan
          </a>
          <a href="#services" className="text-black">
          FAQs
          </a>
        </div>
        <a
          href="#chat"
          className="text-white bg-green-600 px-4 p-3 rounded-full flex items-center gap-2"
        >
         Create free account
        </a>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
