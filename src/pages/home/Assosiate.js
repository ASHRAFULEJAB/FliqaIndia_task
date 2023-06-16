import React from "react";
import asociatepic1 from "../../assets/images/aspic1.png";
import asociatepic2 from "../../assets/images/aspic2.png";
import asociatepic3 from "../../assets/images/aspic3.png";
import asociatepic4 from "../../assets/images/aspic4.png";
import verify from "../../assets/images/verify.png";
import star from '../../assets/images/star.png'
import { Link } from "react-router-dom";
const Assosiate = () => {
  return (
    <div>
      <section class="bg-[#A1E3D8] dark:bg-[#A1E3D8]">
        <div class="container px-6 py-8 mx-auto">
          <h2 class="text-2xl font-semibold  text-gray-800 capitalize lg:text-3xl dark:text-black">
            Find Trusted Associate
          </h2>
          <div className="flex justify-between">
            <p>Find the best Fliqa Associate for your special day.</p>
            <Link className="text-black ">See More </Link>
          </div>

          <div class="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div class="w-full max-w-xs text-center bg-[#2C2C2C] rounded-2xl">
              <img
                class="object-cover object-center w-full h-48 mx-auto rounded-lg"
                src={asociatepic1}
                alt="avatar"
              />

              <div class="bg-[#2C2C2C] flex rounded-2xl">
                <div className="ml-6">
                  <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">
                    Name Title
                  </h3>
                  <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">
                    Location:
                  </span>
                </div>
                <img src={verify} alt="" className="ml-16" />
              </div>
            </div>

            <div class="w-full max-w-xs text-center bg-[#2C2C2C] rounded-2xl">
              <img
                class="object-cover object-center w-full h-48 mx-auto rounded-lg"
                src={asociatepic2}
                alt="avatar"
              />

              <div class="bg-[#2C2C2C] flex rounded-2xl">
                <div className="ml-6">
                  <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">
                    Name Title
                  </h3>
                  <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">
                    Location:
                  </span>
                </div>
                <img src={verify} alt="" className="ml-16" />
              </div>
            </div>

            <div class="w-full max-w-xs text-center bg-[#2C2C2C] rounded-2xl">
              <img
                class="object-cover object-center w-full h-48 mx-auto rounded-lg"
                src={asociatepic3}
                alt="avatar"
              />

              <div class="bg-[#2C2C2C] flex rounded-2xl">
                <div className="ml-6">
                  <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">
                    Name Title
                  </h3>
                  <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">
                    Location:
                  </span>
                </div>
                <img src={star} alt="" className="ml-16" />
              </div>
            </div>

            <div class="w-full max-w-xs text-center bg-[#2C2C2C] rounded-2xl">
              <img
                class="object-cover object-center w-full h-48 mx-auto rounded-lg"
                src={asociatepic4}
                alt="avatar"
              />

              <div class="bg-[#2C2C2C] flex rounded-2xl">
                <div className="ml-6">
                  <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">
                    Name Title
                  </h3>
                  <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">
                    Location:
                  </span>
                </div>
                <img src={verify} alt="" className="ml-16" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Assosiate;
