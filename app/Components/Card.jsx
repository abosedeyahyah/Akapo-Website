import React from "react";

const Card = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md max-w-lg h-72">
          <div className="mt-5">
            <p className="text-xl md:text-xl lg:text-xl font-medium">
              “AkapoCoop has helped me save for my dream vacation. The Target
              Savings plan is fantastic!
            </p>
            <div className=" mt-3 border"></div>
            <div className="flex mt-5">
              <img className="h-20 w-20" src="Images/member-img.png" alt="" />
              <div className="px-2 mt-3">
                <h3 className="text-xl md:text-xl lg:text-xl font-medium">
                  Emma Brown
                </h3>
                <p className="text-xl">Member</p>
              </div>
            </div>
            <div className="flex  px-20">
              <img src="Images/star.png" alt="" />
              <img src="Images/star.png" alt="" />
              <img src="Images/star.png" alt="" />
              <img src="Images/star.png" alt="" />
              <img src="Images/star.png" alt="" />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md max-w-lg h-96 relative -top-7">
          <div className="mt-10">
            <p className="text-xl md:text-xl lg:text-xl font-medium">
              “AkapoCoop has helped me save for my dream vacation. The Target
              Savings plan is fantastic!
            </p>
            <div className=" mt-3 border"></div>
            <div className="flex mt-5">
              <img className="h-20 w-20" src="Images/member-img.png" alt="" />
              <div className="px-2 mt-3">
                <h3 className="text-xl md:text-xl lg:text-xl font-medium">
                  Emma Brown
                </h3>
                <p className="text-xl">Member</p>
              </div>
            </div>
          </div>
          <div className="flex px-20">
            <img src="Images/star.png" alt="" />
            <img src="Images/star.png" alt="" />
            <img src="Images/star.png" alt="" />
            <img src="Images/star.png" alt="" />
            <img src="Images/star.png" alt="" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md max-w-lg  h-72">
          <div className="mt-5">
            <p className="text-xl md:text-xl lg:text-xl font-medium">
              “AkapoCoop has helped me save for my dream vacation. The Target
              Savings plan is fantastic!
            </p>
            <div className=" mt-3 border"></div>
            <div className="flex mt-5">
              <img className="h-20 w-20" src="Images/member-img.png" alt="" />
              <div className="px-2 mt-3">
                <h3 className="text-xl md:text-xl lg:text-xl font-medium">
                  Emma Brown
                </h3>
                <p className="text-xl">Member</p>
              </div>
            </div>
            <div className="flex px-20">
              <img src="Images/star.png" alt="" />
              <img src="Images/star.png" alt="" />
              <img src="Images/star.png" alt="" />
              <img src="Images/star.png" alt="" />
              <img src="Images/star.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
