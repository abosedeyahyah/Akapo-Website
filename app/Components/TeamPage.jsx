import React from "react";

const TeamPage = () => {
  return (
    <div>
      <section className="h-screen py-12 bg-[#F2F7F4]">
        <div className="text-center">
          <h1 className="text-lg md:text-4xl max-w-xl mb-5 Montserrat text-black text-center mx-auto font-medium">
            Meet Our Dedicated Team
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mx-auto px-20 mt-8">
          <div className="bg-[#D9D9D9] rounded-br-[150px] shadow-md rounded-lg overflow-hidden h-[500px]">
            <img
              src="/Images/Team-img.png"
              alt=""
              className="w-full h-58 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">John Doe</h3>
              <p>CEO</p>
              <div className="flex">
                <img src="Images/TwitterX.png" alt="" />
                <img src="Images/Linkedin.png" alt="" />
                <img src="Images/Facebook.png" alt="" />
                <img src="Images/Instagram.png" alt="" />
              </div>
            </div>
          </div>
          <div className="bg-[#D9D9D9] rounded-br-[150px] shadow-md rounded-lg overflow-hidden h-[500px]">
            <img
              src="/Images/Team-img2.png"
              alt="Computer Merchandise"
              className="w-full h-58 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">John Doe</h3>
              <p>CEO</p>
              <div className="flex">
                <img src="Images/TwitterX.png" alt="" />
                <img src="Images/Linkedin.png" alt="" />
                <img src="Images/Facebook.png" alt="" />
                <img src="Images/Instagram.png" alt="" />
              </div>
            </div>
          </div>
          <div className="bg-[#D9D9D9] rounded-br-[150px] shadow-md rounded-lg overflow-hidden h-[500px]">
            <img
              src="/Images/Team-img3.png"
              alt=""
              className="w-full h-58 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">John Doe</h3>
              <p>CEO.</p>
              <div className="flex">
                <img src="Images/TwitterX.png" alt="" />
                <img src="Images/Linkedin.png" alt="" />
                <img src="Images/Facebook.png" alt="" />
                <img src="Images/Instagram.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F2F7F4] py-12">
        <div className="">
          <div className="text-center">
            <h1 className="text-lg md:text-4xl max-w-xl mb-5 Montserrat text-[#000000] text-center mx-auto font-medium">
              Meet Our Dedicated Team
            </h1>
          </div>
          <div className="text-center text-[#000000]">
            <p className="text-lg md:text-xl max-w-2xl mb-8 text-[#000000] text-center mx-auto">
              See how AkapoCoop has been making a difference in the lives of our
              members through our innovative savings plans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            <div className="text-center">
              <h4 className="text-4xl font-bold text-[#00A874]">10k+</h4>
              <p className="mt-2 text-base md:text-lg lg:text-xl max-w-xl">
                Years of Service
              </p>
              <p className="mt-2 text-base md:text-lg lg:text-xl max-w-xl">
                Providing reliable financial solutions
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-4xl font-bold text-[#00A874]">1000+</h4>
              <p className="mt-2 text-base md:text-lg lg:text-xl max-w-xl">
                Happy Members
              </p>
              <p className="mt-2 text-base md:text-lg lg:text-xl max-w-xl">
                Helping members achieve their financial goals
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-4xl font-bold text-[#00A874]">100M+</h4>
              <p className="mt-2 text-base md:text-lg lg:text-xl max-w-xl">
                Save Funds
              </p>
              <p className="mt-2 text-base md:text-lg lg:text-xl max-w-xl">
                Helping members achieve their financial goals
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}; 

export default TeamPage;
