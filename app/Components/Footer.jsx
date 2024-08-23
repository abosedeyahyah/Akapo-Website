import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <main>
      <div className="relative ">
      <footer className="bg-[#F2F7F4] text-[#7C7272] h-full py-2 mt-20">
        <div className="container text-center px-12 mt-64">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 text-[#252525] text-center">
            <div>
              <p className="font-normal text-xl mb-4">About Us</p>
            </div>
            <div>
              <p className="font-normal text-xl mb-4">Our Services</p>
            </div>
            <div>
              <p className="font-normal text-xl mb-4">Privacy Policy</p>
            </div>
            <div>
              <p className="font-normal text-xl mb-4">Term & Condition</p>
            </div>
            <div>
              <h3 className="font-normal text-xl mb-4">Support</h3>
            </div>
          </div>
        </div>
        <div className="text-center  mt-44  mb-0 border-t-2">
          <p className="">
            &copy; Optic IT Solutions 2023. All Rights Reserved.
          </p>
        </div>
      </footer>
      <section className="absolute -top-20 justify-center w-full h-full mx-auto">
        <div className="bg-[#00A874] max-w-[1040px] mx-auto w-full py-6 rounded-lg">
        <div className="text-center py-6">
          <h1 className="text-lg md:text-4xl max-w-xl mb-5 Montserrat text-black text-center mx-auto font-medium">
          Get in Touch with AkapoCoop
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-16">
            <div>
              <img src="/Images/round.png" alt="" srcset="" className="h-auto w-20"/>
              <p className="text-xl text-[#D9D9D9]">Office Hours</p>
              <p className="text-black">Monday-Friday 8:00 am to 5:00 pm</p>
            </div>
            <div>
              <img src="/Images/round.png" alt="" srcset="" className="h-auto w-20" />
              <p className=" text-xl text-[#D9D9D9]">Our Address</p>
              <p className="text-black ">456 Cooperative St. Savings City, 67890</p>
            </div>
            <div>
              <img src="/Images/round.png" alt="" srcset="" className="h-auto w-20"/>
              <p className=" text-xl text-[#D9D9D9]">Contact Us</p>
              <p className="text-black">+1-800-SAVE-NOW +1-800-COOP</p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </main>
  );
};

export default Footer;
