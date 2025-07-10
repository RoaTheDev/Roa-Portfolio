import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import {SiTelegram} from "react-icons/si";

export const Navbar = () => {
    const [hoverNav, setHoverNav] = useState<string | null>(null);

    return (
        <nav className="bg-gray-900 border-b-4 border-pink-500 sticky top-0 z-50">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                {/* Navigation Links */}
                <ul className="flex flex-wrap justify-center md:justify-start">
                    {[
                        { label: 'HOME', id: 'home' },
                        { label: 'ABOUT', id: 'about' },
                        { label: 'PROJECTS', id: 'projects' },
                        { label: 'EXPERIENCES', id: 'experience' },
                        { label: 'SKILLS', id: 'skills' },
                        { label: 'CONTACT', id: 'contact' }
                    ].map((item, index) => (
                        <li
                            key={item.id}
                            className={`py-3 px-4 cursor-pointer transition-colors duration-300 
                                ${index < 5 ? 'border-r-2 border-purple-700' : ''}
                                ${hoverNav === item.id ? 'bg-pink-500' : 'hover:bg-pink-500'}`}
                            onMouseEnter={() => setHoverNav(item.id)}
                            onMouseLeave={() => setHoverNav(null)}
                            onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>

                {/* Social Icons */}
                <div className="flex space-x-4 py-3">
                    <a
                        href="https://t.me/RoaTheDev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
                    >
                        <SiTelegram size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/chamreun-roern-2b36b72a7/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                    >
                        <FaLinkedin size={24} />
                    </a>
                    <a
                        href="https://github.com/RoaTheDev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-pink-500 transition-colors duration-300"
                    >
                        <FaGithub size={24} />
                    </a>

                    <a
                        href="https://www.youtube.com/@RoaSimpleCode15"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-red-500 transition-colors duration-300"
                    >
                        <AiFillYoutube size={24} />
                    </a>

                </div>
            </div>
        </nav>
    );
};
