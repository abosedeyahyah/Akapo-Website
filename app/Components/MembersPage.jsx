import React from "react";
import Card from "./Card";

export default function MembersPage() {
  return (
    <main>
      <section className="bg-[#B3D4BC] px-20 h-full">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center py-6">Members Reviews</h1>
          <p className="text-xl md:text-xl lg:text-xl font-medium text-center">
            Hear what our members have to say about their experiences with
            AkapoCoop.
          </p>
<div className="py-20">
<Card/>
</div>
        {/* <div className="flex justify-between gap-8 py-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-xl md:text-xl lg:text-xl font-medium">
              “AkapoCoop has helped me save for my dream vacation. The Target
              Savings plan is fantastic!
            </p>
            <div className=" mt-3 border"></div>
            <div className="flex mt-6">
              <img className="h-20 w-20" src="Images/member-img.png" alt="" />
              <div className="px-3 mt-3">
                <h3 className="text-xl md:text-xl lg:text-xl font-medium">Emma Brown</h3>
                <p className="text-xl">Member</p>
               <div className="flex mt-2">
               <img src="Images/star.png" alt="" />
               <img src="Images/star.png" alt="" />
               <img src="Images/star.png" alt="" />
               <img src="Images/star.png" alt="" />
               <img src="Images/star.png" alt="" />
               </div>
              </div>
            </div>
          </div>
          <div className="bg-white/50 h-96 p-6 rounded-lg shadow-md">
          <p className="text-xl md:text-xl lg:text-xl font-medium">
              “AkapoCoop has helped me save for my dream vacation. The Target
              Savings plan is fantastic!
            </p>
            <div className=" mt-3 border"></div>
            <div className="flex mt-6">
              <img className="h-20 w-20" src="Images/member-img.png" alt="" />
              <div className="px-3 mt-3">
                <h3 className="text-xl md:text-xl lg:text-xl font-medium">Emma Brown</h3>
                <p className="text-xl">Member</p>
               <div className="flex mt-2">
               <img src="Images/star.png" alt="" />
               <img src="Images/star.png" alt="" />
               <img src="Images/star.png" alt="" />
               <img src="Images/star.png" alt="" />
               <img src="Images/star.png" alt="" />
               </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg">
          <p className="text-xl md:text-xl lg:text-xl font-medium">
              “AkapoCoop has helped me save for my dream vacation. The Target
              Savings plan is fantastic!
            </p>
            <div className=" mt-3 border"></div>
            <div className="flex mt-6">
              <img className="h-20 w-20" src="Images/member-img.png" alt="" />
              <div className="px-3 mt-3">
                <h3 className="text-xl md:text-xl lg:text-xl font-medium">Emma Brown</h3>
                <p className="text-xl">Member</p>
               <div className="flex mt-2">
               <img src="Images/star.png" alt="" />
               <img src="Images/star.png" alt="" />
               <img src="Images/star.png" alt="" />
               <img src="Images/star.png" alt="" />
               <img src="Images/star.png" alt="" />
               </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </main>
  );
}
