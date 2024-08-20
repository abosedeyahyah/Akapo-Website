import React from "react";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <div>
     <main>
     <Navbar />
      <section className="bg-[#EFF5FA] text-[#000000F] py-12">
        <div className="container mx-auto ">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <img
                src="/Images/Home-img.png"
                alt=""
                className="w-[666px] h-[638px] object-cover"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-8 lg:mt-20">
              <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl Montserrat font-medium">Welcome to</h1>  
              <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl Montserrat font-medium"> AkapoCoop</h1>
              <p className="mt-5 text-base md:text-lg lg:text-2xl max-w-2xl">
                Explore our variety of savings plans designed to help you
                achieve your financial goals. Join us today and begin building a
                brighter future.
              </p>
              <div className="mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <a
                  href="#learn-more"
                  className="px-6 py-3 bg-[#00A874] text-white rounded-full text-sm md:text-base lg:text-lg"
                >
                  Google Play
                </a>
                <a
                  href="#chat"
                  className="text-[#00A874] bg-[#F2F7F4] px-6 py-3 rounded-full flex items-center gap-2 text-sm md:text-base lg:text-lg"
                >
                  Learn more
                  <img
                    src="/Images/Arrow1.png"
                    alt="Chat"
                    className="w-5 h-5"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="px-8 bg-white py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex">
              <div className="bg-[#89B0A4] p-6 rounded-lg text-center shadow-md">
                <img src="Images/Happy.png" alt="" />
              </div>
              <div className="px-3">
                <h3 className="text-lg md:text-2xl max-w-xl text-black font-medium">Happy Client</h3>
                <p className="">
                  This is one of the most rewarding ways to see you happy and
                  thriving.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="bg-[#EFF5FA] p-6 rounded-lg text-center shadow-md">
                <img src="Images/Protect.png" alt="" />
              </div>
              <div className="px-3">
              <h3 className="text-lg md:text-2xl max-w-xl text-black font-medium">Happy Client</h3>
                <p className="">
                  This is one of the most rewarding ways to see you happy and
                  thriving.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="bg-[#BBA2A2] p-6 rounded-lg text-center shadow-md">
                <img src="Images/Delivery.png" alt="" />
              </div>
              <div className="px-3">
              <h3 className="text-lg md:text-2xl max-w-xl text-black font-medium">Happy Client</h3>
                <p className="">
                  This is one of the most rewarding ways to see you happy and
                  thriving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
     </main>
    </div>
  );
};

export default HomePage;
