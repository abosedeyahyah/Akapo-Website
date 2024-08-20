import React from "react";

const SavingsPage = () => {
  return (
    <main className="bg-[#EFF5FA]">
      <section className="py-12 mx-auto px-12">
        <div className="container mx-auto px-4 justify-center">
          <p className="text-[#2F9B7A] text-center">Our Savings Plans</p>
          <h2 className="text-center">
            Explore AkapoCoop’s savings options and find the perfect fit for
            your financial goals.
          </h2>
          <p className="text-center">
            Find the best savings plan to match your financial goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg text-center shadow-md">
            <img
              src="/Images/Ellipse 2.png"
              alt=""
              className="h-auto max-w-lg mx-auto"
            />
            <h2>Target Savings</h2>
            <p className="mb-4 text-xl Montserrat">
              Set clear goals and track your progress to reach your savings
              targets efficiently..
            </p>
            <a
              href="#chat"
              className="text-[#FEFFFF] bg-[#3D3D3D] px-6 py-3 rounded-full flex items-center gap-2 text-sm md:text-base lg:text-lg"
            >
              Learn more
              <img src="/Images/chat-img.png" alt="Chat" className="w-5 h-5" />
            </a>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg text-center shadow-md">
            <img
              src="/Images/Ellipse 2.png"
              alt="Computer Merchandise"
              className="h-auto max-w-lg mx-auto"
            />
            <h2>Group Savings</h2>
            <p className="mb-4 Montserrat text-xl">
              Set clear goals and track your progress to reach your savings
              targets efficiently.
            </p>
            <a
              href="#chat"
              className="text-[#FEFFFF] bg-[#3D3D3D] px-6 py-3 rounded-full flex items-center gap-2 text-sm md:text-base lg:text-lg"
            >
              Learn more
              <img src="/Images/chat-img.png" alt="Chat" className="w-5 h-5" />
            </a>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <img
              src="/Images/Ellipse 2.png"
              alt="Computer Merchandise"
              className="h-auto max-w-lg mx-auto"
            />
            <h2>Fixed Deposit</h2>
            <p className="mb-4 Montserrat text-xl max-w-3xl">
              Set clear goals and track your progress to reach your savings
              targets efficiently.
            </p>
            <a
              href="#chat"
              className="text-[#FEFFFF] bg-[#3D3D3D] px-6 py-3 rounded-full flex items-center gap-2 text-sm md:text-base lg:text-lg"
            >
              Learn more
              <img src="/Images/chat-img.png" alt="Chat" className="w-5 h-5" />
            </a>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <img
              src="/Images/Ellipse 2.png"
              alt="Computer Merchandise"
              className="h-auto max-w-lg mx-auto"
            />
            <h2>Endwell Savings</h2>
            <p className="mb-4 Georama text-xl min-w-xl">
              Set clear goals and track your progress to reach your savings
              targets efficiently.
            </p>
            <a
              href="#chat"
              className="text-[#FEFFFF] bg-[#3D3D3D] px-6 py-3 rounded-full flex items-center gap-2 text-sm md:text-base lg:text-lg"
            >
              Learn more
              <img src="/Images/chat-img.png" alt="Chat" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
      <section className="bg-[#2F9B7A] justify-center">
        <h3 className="text-center">Our Story</h3>
        <p className="text-center">
          In the lively town of Akapoco, AkapoCoop Savings is more than just a
          place to manage money-it’s a community lifeline. With a mission to
          enrich lives through innovative savings plans, AkapoCoop has become a
          cornerstone of local success and unity. Take Mia, for example. Mia
          dreamed of starting a bakery but struggled to find the funds. She
          turned to AkapoCoop’s “Dream Builders Account,” which offered
          personalized savings plans and community support. With tailored advice
          and a little help from her fellow members, Mia’s bakery is now a
          beloved spot where the aroma of fresh bread fills the air, and her
          success is a testament to the cooperative’s impact. Then there’s the
          “Community Investment Fund,” a plan where members contribute to
          support local projects. Recently, the fund helped build a new
          playground, transforming a vacant lot into a vibrant space for
          children and families to gather and enjoy.
        </p>
      </section>
    </main>
  );
};

export default SavingsPage;
