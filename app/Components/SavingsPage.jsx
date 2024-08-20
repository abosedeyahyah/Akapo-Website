import Link from "next/link";
import React from "react";

const SavingsPage = () => {
  return (
    <main className="bg-[#EFF5FA]">
      <section className="h-90 p-3 mb-10">
        <div className="container mx-auto justify-center">
          <p className="text-[#2F9B7A]text-3xl font-bold text-center mb-5">
            Our Savings Plans
          </p>
          <h1 className="text-lg md:text-2xl max-w-xl mb-3 text-black text-center mx-auto font-bold">
            Explore AkapoCoop’s savings options and find the perfect fit for
            your financial goals.
          </h1>
          <p className="text-center text-xl md:text-[15px] font-bold text-black mb-8">
            Find the best savings plan to match your financial goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
          <div className="bg-white p-6 rounded-lg text-center shadow-md">
            <img
              src="/Images/Goal.png"
              alt=""
              className="h-auto max-w-lg mx-auto bg-[#D9D9D9] rounded-full p-2"
            />
            <h2 className="text-3xl md:text-4xl lg:text-2xl Montserrat font-medium">
              Target Savings
            </h2>
            <p className=" text-xl Montserrat">
              Set clear goals and track your progress to reach your savings
              targets efficiently..
            </p>
            <a
              href="#chat"
              className="text-[#FEFFFF] mt-4 bg-[#3D3D3D] px-4 py-2 rounded-full flex items-center  gap-2 text-sm md:text-base lg:text-lg ml-10 mr-10"
            >
              Learn more
              <img src="/Images/Arrow.png" alt="Chat" className="w-5 h-5" />
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg text-center shadow-md">
            <img
              src="/Images/User.png"
              alt="Computer Merchandise"
              className="h-auto max-w-lg mx-auto bg-[#D9D9D9] rounded-full p-2"
            />
            <h2 className="text-3xl md:text-4xl lg:text-2xl Montserrat font-medium">
              Group Savings
            </h2>
            <p className=" Montserrat text-xl">
              Set clear goals and track your progress to reach your savings
              targets efficiently.
            </p>
            <a
              href="#chat"
              className="text-[#FEFFFF] mt-4 bg-[#3D3D3D] px-4 py-2 rounded-full flex items-center  gap-2 text-sm md:text-base lg:text-lg ml-10 mr-10"
            >
              Learn more
              <img src="/Images/Arrow.png" alt="Chat" className="w-5 h-5" />
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg text-center">
            <img
              src="/Images/End.png"
              alt="Computer Merchandise"
              className="h-auto max-w-lg mx-auto bg-[#D9D9D9] rounded-full p-2"
            />
            <h2 className="text-3xl md:text-4xl lg:text-2xl Montserrat font-medium">
              Fixed Deposit
            </h2>
            <p className="Montserrat text-xl ">
              Set clear goals and track your progress to reach your savings
              targets efficiently.
            </p>
            <a
              href="#chat"
              className="text-[#FEFFFF] mt-4 bg-[#3D3D3D] px-4 py-2 rounded-full flex items-center  gap-2 text-sm md:text-base lg:text-lg ml-10 mr-10"
            >
              Learn more
              <img src="/Images/Arrow.png" alt="Chat" className="w-5 h-5" />
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg text-center">
            <img
              src="/Images/Same-img.png"
              alt="Computer Merchandise"
              className="h-auto max-w-lg mx-auto bg-[#D9D9D9] rounded-full p-2"
            />
            <h2 className="text-5xl md:text-5xl lg:text-2xl Montserrat font-medium mt-3">
              Endwell Savings
            </h2>
            <p className="Montserrat text-xl">
              Set clear goals and track your progress to reach your savings
              targets efficiently.
            </p>
            <a
              href="#chat"
              className="text-[#FEFFFF] mt-4 bg-[#3D3D3D] px-4 py-2 rounded-full flex items-center  gap-2 text-sm md:text-base lg:text-lg ml-10 mr-10"
            >
              Learn more
              <img src="/Images/Arrow.png" alt="Chat" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
      <section className="bg-[#2F9B7A] justify-center rounded-br-[250px] h-[400px] p-6">
        <h3 className="text-3xl font-bold text-center mb-8 text-white">Our Story</h3>
        <p className="max-w-5xl mx-auto text-white py-3">
          In the lively town of Akapoco, AkapoCoop Savings is more than just a
          place to manage money-it’s a community lifeline. With a mission to
          enrich lives through innovative savings plans, AkapoCoop has become a
          cornerstone of local success and unity.
        </p>
        <p className="max-w-5xl text-white mx-auto py-3">
          Take Mia, for example. Mia dreamed of starting a bakery but struggled
          to find the funds. She turned to AkapoCoop’s “Dream Builders Account,”
          which offered personalized savings plans and community support. With
          tailored advice and a little help from her fellow members, Mia’s
          bakery is now a beloved spot where the aroma of fresh bread fills the
          air, and her success is a testament to the cooperative’s impact.
        </p>
        <p className="max-w-5xl mx-auto text-white py-3">
          Then there’s the “Community Investment Fund,” a plan where members
          contribute to support local projects. Recently, the fund helped build
          a new playground, transforming a vacant lot into a vibrant space for
          children and families to gather and enjoy.
        </p>
      </section>
    </main>
  );
};

export default SavingsPage;
