import React, { useState } from 'react'; // Import useState here
import logo from '../assets/logo.png';
import {leetcode,
    github,
    linkedin,
    code360,
    codeforces,
    portfolio,
} from '../assets';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="border-b-2 border-gray-300 bg-cyan-50 shadow-md sticky top-0 z-50">
            <div className="mx-auto max-w-screen-xl px-6 sm:px-8 lg:px-8">
                <div className="flex items-center justify-between h-14">
                    <div className="flex items-center">
                        <img
                            src={logo}
                            alt="Company Logo"
                            className="w-12 h-auto object-contain rounded-lg"
                        />
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <nav aria-label="Main Navigation">
                            <ul className="flex space-x-8 text-sm font-medium">
                                <li className="flex flex-col items-center gap-2 text-center">
                                    <a
                                        href="https://leetcode.com/u/gyaneshkr/"
                                        className="text-gray-800 hover:text-indigo-600 transition duration-200 ease-in-out flex flex-col items-center"
                                    >
                                        <img src={leetcode} alt="Leetcode" className="w-6 h-6" />
                                        <span className="mt-1 font-medium">Leetcode</span>
                                    </a>
                                    </li>

                                    <li className="flex flex-col items-center gap-2 text-center">
                                    <a
                                        href="https://github.com/Gyaneshkr5009"
                                        className="text-gray-800 hover:text-indigo-600 transition duration-200 ease-in-out flex flex-col items-center"
                                    >
                                        <img src={github} alt="Github" className="w-6 h-6" />
                                        <span className="mt-1 font-medium">Github</span>
                                    </a>
                                    </li>

                                    <li className="flex flex-col items-center gap-2 text-center">
                                    <a
                                        href="https://www.linkedin.com/in/gyanesh-kumar-a73114213/"
                                        className="text-gray-800 hover:text-indigo-600 transition duration-200 ease-in-out flex flex-col items-center"
                                    >
                                        <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
                                        <span className="mt-1 font-medium">LinkedIn</span>
                                    </a>
                                    </li>

                                    <li className="flex flex-col items-center gap-2 text-center">
                                    <a
                                        href="https://www.naukri.com/code360/profile/gyaneshkr2002"
                                        className="text-gray-800 hover:text-indigo-600 transition duration-200 ease-in-out flex flex-col items-center"
                                    >
                                        <img src={code360} alt="Code360" className="w-6 h-6" />
                                        <span className="mt-1 font-medium">Code360</span>
                                    </a>
                                    </li>

                                    <li className="flex flex-col items-center gap-2 text-center">
                                    <a
                                        href="https://codeforces.com/profile/Gyaneshkr"
                                        className="text-gray-800 hover:text-indigo-600 transition duration-200 ease-in-out flex flex-col items-center"
                                    >
                                        <img src={codeforces} alt="Codeforces" className="w-6 h-6" />
                                        <span className="mt-1 font-medium">Codeforces</span>
                                    </a>
                                    </li>

                                    <li className="flex flex-col items-center gap-2 text-center">
                                    <a
                                        href="https://gyaneshkr5009.github.io/portfolio_v2/"
                                        className="text-gray-800 hover:text-indigo-600 transition duration-200 ease-in-out flex flex-col items-center"
                                    >
                                        <img src={portfolio} alt="Portfolio" className="w-6 h-6" />
                                        <span className="mt-1 font-medium">Portfolio</span>
                                    </a>
                                    </li>
                            </ul>
                        </nav>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-800 hover:text-indigo-600 focus:outline-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white shadow-lg mt-4">
                        <nav aria-label="Mobile Navigation">
                            <ul className="flex flex-col space-y-4 px-6 py-4">
                                <li>
                                    <a
                                        href="https://leetcode.com/u/gyaneshkr/"
                                        className="text-gray-800 hover:text-indigo-600 transition duration-200 ease-in-out"
                                    >
                                        Leetcode
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://github.com/Gyaneshkr5009"
                                        className="text-gray-800 hover:text-indigo-600 transition duration-200 ease-in-out"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/gyanesh-kumar-a73114213/"
                                        className="text-gray-800 hover:text-indigo-600 transition duration-200 ease-in-out"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.naukri.com/code360/profile/gyaneshkr2002"
                                        className="text-gray-800 hover:text-indigo-600 transition duration-200 ease-in-out"
                                    >
                                        Code360
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://codeforces.com/profile/Gyaneshkr"
                                        className="text-gray-800 hover:text-indigo-600 transition duration-200 ease-in-out"
                                    >
                                        Codeforces
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://gyaneshkr5009.github.io/portfolio_v2/"
                                        className="text-gray-800 hover:text-indigo-600 transition duration-200 ease-in-out"
                                    >
                                        Portfolio
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
