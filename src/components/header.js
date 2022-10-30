import { React, useState } from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  const [navbar, setNavbar] = useState(false);
  // const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [showRegis, setShowRegis] = useState(false);

  // }

  return (
    <div>
      <nav className="w-full bg-white shadow">
        <div className="space-x-10 px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <img src={Logo} />

              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex justify-center w-full md:h-auto h-[1000px] pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 ">
                <li className="text-gray-600 hover:text-blue-600 cursor-pointer">
                  <Link to="/">Home</Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600 cursor-pointer">
                  <Link to="/article"> Article</Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600 cursor-pointer">
                  <Link to="/create"> Create</Link>
                </li>
                <li
                  type="button"
                  className="text-blue-500 hover:text-blue-600 cursor-pointer md:hidden font-bold"
                  onClick={() => setShowModal(true)}
                >
                  Login
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="items-end justify-end">
              <h1
                className="md:block xl:ml-[640px] md:ml-96 hidden text-blue-500 hover:text-blue-600 cursor-pointer"
                onClick={() => setShowModal(true)}
              >
                Login
              </h1>
            </div>
          </div>
          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex flex-col items-start justify-between p-5  border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold px-20 pt-10">
                        Login
                      </h3>
                      <p className="px-20 pt-3">
                        Don't have an account ?{' '}
                        <span
                          className="text-red-500 cursor-pointer"
                          // onClick={() => setShowRegis(true)}
                          onClick={() => {
                            setShowRegis(true);
                            setShowModal(false);
                          }}
                        >
                          {' '}
                          Create Account
                        </span>
                      </p>
                    </div>

                    <div className="flex flex-col px-[100px] flex-auto">
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        Email
                      </p>
                      <input
                        type="text"
                        placeholder="Entry your email"
                        className="w-50 border px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm  shadow outline-none focus:outline-none focus:ring"
                      />
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        Password
                      </p>
                      <input
                        type="text"
                        placeholder="Entry your password"
                        className="w-50 border px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm  shadow outline-none focus:outline-none focus:ring"
                      />
                    </div>
                    {/*footer*/}
                    <div className="flex justify-between p-6 border-slate-200 rounded-b">
                      <button
                        className="bg-[#ED3237] text-white active:bg-emerald-600 font-bold mx-20 text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Log in
                      </button>
                      <button
                        className="text-red-500 mr-14 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}

          {showRegis ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex flex-col items-start justify-between p-5  border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold px-20 pt-10">
                        Create Account
                      </h3>
                      <p className="px-20 pt-3">
                        Have an account{' '}
                        <span
                          className="text-red-500 cursor-pointer"
                          onClick={() => {
                            setShowRegis(false);
                            setShowModal(true);
                          }}
                        >
                          {' '}
                          Login
                        </span>
                      </p>
                    </div>

                    <div className="flex flex-col px-[100px] flex-auto">
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        Fullname
                      </p>
                      <input
                        type="text"
                        placeholder="Entry your email"
                        className="w-50 border px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm  shadow outline-none focus:outline-none focus:ring"
                      />
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        Email
                      </p>
                      <input
                        type="text"
                        placeholder="Entry your email"
                        className="w-50 border px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm  shadow outline-none focus:outline-none focus:ring"
                      />
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        Password
                      </p>
                      <input
                        type="text"
                        placeholder="Entry your password"
                        className="w-50 border px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm  shadow outline-none focus:outline-none focus:ring"
                      />
                    </div>
                    {/*footer*/}
                    <div className="flex justify-between p-6 border-slate-200 rounded-b">
                      <button
                        className="bg-[#ED3237] text-white active:bg-emerald-600 font-bold mx-20 text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Log in
                      </button>
                      <button
                        className="text-red-500 mr-14 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowRegis(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
      </nav>
    </div>
  );
}

export default Header;
