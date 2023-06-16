import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DoctorsContext } from "../../Context/DoctorsContext/DoctorsProvider";
import logo from "../../assets/images/FliqaIndia-Logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userDoctor, userLogout } = useContext(DoctorsContext);

  const handleLogout = () => {
    userLogout()
      .then(() => {})
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="bg-black">
      <div className="px-4 py-5 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <Link
              to="/"
              aria-label="Company"
              title="Cardiologist"
              className="inline-flex items-center mr-8"
            >
              {/* <svg
                width='48'
                height='48'
                viewBox='0 0 48 48'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M9 6C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6H9ZM34.2734 19.8684L33.4886 19.4912C36.7449 22.5608 35.9154 27.1867 33.8812 30.7049C32.8211 32.5383 31.3746 34.2052 29.7906 35.4233C28.2226 36.6291 26.4234 37.467 24.6674 37.467C22.9056 37.467 21.149 36.6236 19.6358 35.4225C18.1084 34.2103 16.7345 32.5613 15.7248 30.7725C14.7179 28.9886 14.0387 27.0037 13.9751 25.1126C13.9379 24.0043 14.1138 22.9121 14.5693 21.9235C14.5598 21.9117 14.5496 21.8992 14.5387 21.8861C14.4399 21.767 14.2877 21.6003 14.0847 21.4249C13.6758 21.0713 13.0916 20.7076 12.3418 20.5875C12.0751 20.5447 11.8371 20.396 11.6818 20.175C11.5265 19.954 11.4672 19.6796 11.5174 19.4142C11.8517 17.6468 12.1536 16.5964 12.3873 15.9678C12.5046 15.6524 12.6092 15.4311 12.6993 15.2728C12.7447 15.1931 12.7882 15.1263 12.8298 15.07C12.8508 15.0416 12.8716 15.0155 12.8924 14.9913C12.9028 14.9791 12.9133 14.9675 12.9238 14.9562L12.9396 14.9396L12.9475 14.9315L12.9515 14.9275L12.9535 14.9255C12.9545 14.9246 12.9555 14.9236 13.6567 15.6365C13.9394 14.6773 13.9396 14.6774 13.9399 14.6775L13.942 14.6781L13.9464 14.6794L13.9605 14.6836L14.0088 14.6985C14.0497 14.7112 14.1078 14.7296 14.1805 14.7537C14.326 14.8017 14.5311 14.8723 14.7771 14.965C15.2666 15.1493 15.9298 15.4254 16.6105 15.7898C17.1356 16.0709 17.6941 16.4166 18.197 16.8294L17.1613 15.234C16.8663 14.7796 16.9867 14.173 17.4329 13.8658L20.6418 11.6565C21.0852 11.3513 21.6905 11.4517 22.0116 11.8837L22.5074 12.551V11.5333C22.5074 10.981 22.9552 10.5333 23.5074 10.5333H27.5C28.0523 10.5333 28.5 10.981 28.5 11.5333V12.8793C28.5194 12.8966 28.5393 12.9145 28.5596 12.9331C28.745 13.1028 28.966 13.3277 29.2018 13.6146C30.8869 13.3175 32.9211 13.486 35.3468 14.3828L36.2575 14.7195L35.9478 15.6397C35.7247 16.3026 35.4792 16.8291 35.2557 17.3084L35.2497 17.3214C35.0233 17.8068 34.8197 18.2451 34.6344 18.7959L34.2734 19.8684ZM13.6567 15.6365L12.9555 14.9236C13.2144 14.6689 13.5915 14.5748 13.9399 14.6775L13.6567 15.6365ZM16.1547 19.8604C16.572 19.52 17.0317 19.2777 17.5115 19.1118L17.5959 19.0705C17.4977 18.9298 17.3724 18.7836 17.2169 18.6325C16.8055 18.2324 16.2534 17.8672 15.6666 17.5531C15.1351 17.2686 14.6061 17.0423 14.1859 16.88C14.0478 17.2902 13.869 17.9228 13.6648 18.8783C14.3947 19.1504 14.9721 19.5482 15.3929 19.912C15.4931 19.9986 15.5853 20.0841 15.6694 20.1664C15.7613 20.1065 15.8601 20.0432 15.9653 19.9774C16.0262 19.9393 16.0894 19.9002 16.1547 19.8604ZM18.2733 20.9669C17.9318 21.1395 17.6125 21.3185 17.3281 21.4883C16.3468 22.3696 15.9252 23.5925 15.974 25.0454C16.0238 26.5285 16.5689 28.199 17.4665 29.7894C18.3614 31.3747 19.5723 32.8188 20.8791 33.856C22.2 34.9044 23.527 35.467 24.6674 35.467C25.8136 35.467 27.1901 34.9001 28.5714 33.8379C29.9367 32.788 31.2132 31.3236 32.1498 29.7038C34.0729 26.3778 34.3388 22.9112 31.9854 20.8265C31.7018 20.5753 31.5061 20.4599 31.2445 20.3275C31.1832 20.2964 31.1149 20.263 31.0395 20.2261C30.8684 20.1424 30.6605 20.0407 30.4141 19.908C29.8008 20.2259 29.1052 20.7838 28.4804 21.3697C28.1163 21.7113 27.8044 22.0352 27.5836 22.2737C27.4735 22.3926 27.3868 22.4894 27.3286 22.5556C27.2994 22.5886 27.2774 22.6139 27.2632 22.6304L27.2478 22.6484L27.2446 22.6521L27.1004 22.8224L27.0248 22.9459L25.8624 27.1188L26.2694 28.0594L28.3877 27.8135L28.6183 29.8002L26.7093 30.0218L26.8323 31.8242L24.8369 31.9603L24.6607 29.3779L23.7459 27.2636L23.7911 27.1014L23.1885 27.3739L22.3449 29.5063L20.4851 28.7706L21.052 27.3376L19.2677 26.9172L19.7264 24.9705L22.3056 25.5782L24.4907 24.59L25.0977 22.411C25.0469 22.3861 24.9943 22.3607 24.9399 22.3347C24.2826 22.0202 23.3843 21.6314 22.4056 21.3236C21.4193 21.0134 20.3981 20.8004 19.4824 20.8036C19.0299 20.8052 18.6264 20.859 18.2733 20.9669ZM26.165 20.6334C26.1921 20.598 26.2201 20.5617 26.249 20.5247C26.6457 20.0163 27.2269 19.3483 27.9534 18.7373C29.1811 17.7048 31.0156 16.693 33.1049 17.2079C33.2154 16.9516 33.3257 16.7151 33.431 16.489L33.437 16.4762C33.5228 16.2924 33.6052 16.1153 33.6846 15.9363C30.2774 14.9328 28.1461 15.7382 26.8127 16.8409C25.6797 17.778 25.0266 19.011 24.7076 19.8522C25.1529 20.0816 25.5915 20.318 25.9591 20.5198C26.0304 20.559 26.0992 20.597 26.165 20.6334ZM20.3503 17.5776C20.3575 17.5414 20.3638 17.5146 20.3686 17.4959C20.5493 17.1792 20.5478 16.7775 20.3388 16.4555L19.3687 14.9612L20.9816 13.8508L22.0481 15.2859C22.2402 15.5444 22.545 15.6946 22.8671 15.6893C23.1891 15.6841 23.4889 15.524 23.6724 15.2594L24.3291 14.3125C24.4452 14.1452 24.5074 13.9463 24.5074 13.7426V12.5333H26.5V13.362C26.5 13.6902 26.6609 13.9964 26.9287 14.1827C26.1889 14.5651 25.4993 15.13 24.9205 15.7327C24.0631 16.6255 23.3029 17.7501 22.8367 18.909C21.8254 18.7415 21.2191 18.7393 20.7574 18.7393C20.5024 18.7393 20.3713 18.7373 20.2494 18.7199C20.2697 18.1023 20.3149 17.7568 20.3503 17.5776Z'
                  fill='#ffffff'
                />
              </svg> */}
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                <img src={logo} alt="" className="h-[94px] w-[196px]" />
              </span>
            </Link>
            <ul className="flex items-center hidden space-x-8 lg:flex">
              <li>
                <Link
                  to="/"
                  aria-label="Our product"
                  title="home"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  aria-label="Our product"
                  title="services"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  aria-label="Our product"
                  title="services"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  aria-label="About us"
                  title="About us"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  aria-label="Product pricing"
                  title="blog"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            {userDoctor?.uid ? (
              <>
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide 
                  text-white transition duration-200 rounded shadow-md
                   bg-gradient-to-r 
                     from-[#017B96] from-0%  to-[#1E4047] 
                  to-100% focus:shadow-outline focus:outline-none"
                >
                  LogOut
                </button>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/register"
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide
                     text-white transition duration-200 rounded-3xl shadow-md bg-gradient-to-r 
                     from-[#017B96] from-0%  to-[#1E4047] 
                  to-100%
                      focus:shadow-outline focus:outline-none"
                    aria-label="Sign up"
                    title="register"
                  >
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    aria-label="Sign in"
                    title="log in"
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide
                     text-white transition duration-200 rounded-3xl shadow-md
                     bg-gradient-to-r 
                     from-[#4e99a4] from-0%  to-[#004D58] 
                  to-100%
                      focus:shadow-outline focus:outline-none"
                  >
                    Sign In
                  </Link>
                </li>
              </>
            )}
          </ul>
          <div className="lg:hidden mb-28 bg-black">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-black border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Cardiologists"
                        className="inline-flex items-center"
                      >
                        {/* <svg
                          className="w-8 text-purple-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg> */}
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          <img
                            src={logo}
                            alt=""
                            className="h-[94px] w-[196px]"
                          />
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/"
                          aria-label="Our product"
                          title="home"
                          className="font-medium tracking-wide text-gray-100 transition-colors 
                          duration-200 hover:text-purple-400"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services"
                          aria-label="Our product"
                          title="services"
                          className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-purple-400"
                        >
                          Service
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services"
                          aria-label="Our product"
                          title="services"
                          className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-purple-400"
                        >
                          Portfolio
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          aria-label="About us"
                          title="About us"
                          className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-purple-400"
                        >
                          Community
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blog"
                          aria-label="Product pricing"
                          title="blog"
                          className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-purple-400"
                        >
                          Blog
                        </Link>
                      </li>

                      {userDoctor?.uid ? (
                        <>
                          <button
                            onClick={handleLogout}
                            className="inline-flex items-center justify-center h-12 px-6 font-medium
                             tracking-wide text-white transition duration-200 rounded shadow-md
                              bg-gradient-to-r 
                     from-[#017B96] from-0%  to-[#1E4047] 
                  to-100% focus:shadow-outline focus:outline-none"
                          >
                            LogOut
                          </button>
                        </>
                      ) : (
                        <>
                          <li>
                            <Link
                              to="/register"
                              className="inline-flex items-center justify-center w-full h-12 px-6 
                              font-medium tracking-wide text-white transition duration-200 rounded 
                              shadow-md bg-gradient-to-r 
                     from-[#017B96] from-0%  to-[#1E4047] 
                  to-100% focus:shadow-outline focus:outline-none"
                              aria-label="Sign up"
                              title="register"
                            >
                              Sign Up
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/login"
                              aria-label="Sign in"
                              title="log in"
                              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium
                               tracking-wide text-white transition duration-200 rounded shadow-md 
                               bg-gradient-to-r 
                     from-[#4e99a4] from-0%  to-[#004D58] 
                  to-100% focus:shadow-outline focus:outline-none"
                            >
                              Sign In
                            </Link>
                          </li>
                        </>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
