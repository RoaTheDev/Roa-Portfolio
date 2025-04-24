import {SkillItem} from "../components/SkillItem";
import roaImg from '../assets/roa.jpg';
import * as React from 'react';
import {useEffect, useState} from 'react';
import {TechIcon} from "../components/TechIcon";
import {PixelBlock} from "../components/PixelBlock";
import {FaDocker, FaGithub, FaLinkedin, FaReact, FaServer} from 'react-icons/fa';
import {SiDotnet, SiElasticsearch, SiRedis, SiShadcnui, SiTailwindcss, SiTypescript} from 'react-icons/si';
import {Brain, Code, Coffee, Cpu, Gamepad, Heart, Mail, Server, Star, Users} from 'lucide-react';
import {DiMsqlServer, DiRedis} from "react-icons/di";
import {RetroGameDecorations} from "../components/RetroGameDecorations.tsx";
import {VscAzure} from "react-icons/vsc";

const PixelPortfolio: React.FC = () => {
    const [, setIsAnimating] = useState(false);
    const [hoverNav, setHoverNav] = useState<string | null>(null);

    // Generate random pixels for background effect
    const generateRandomPixels = (count: number) => {
        const pixels = [];
        for (let i = 0; i < count; i++) {
            pixels.push({
                x: Math.random() * 100,
                y: Math.random() * 100,
                delay: Math.random() * 2000
            });
        }
        return pixels;
    };

    const backgroundPixels = generateRandomPixels(50);

    // Pixel character animation effect
    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating((prev) => !prev);
        }, 500);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="bg-purple-900 text-gray-100 min-h-screen font-mono">
            {/* Pixel Art Header */}
            {/* Completely Redesigned Pixel Art Header */}
            <header
                className="relative bg-gradient-to-b from-purple-950 to-purple-900 overflow-hidden border-b-4 border-cyan-400">
                {/* Animated Pixel Background */}
                <div className="absolute inset-0 opacity-20">
                    {backgroundPixels.map((pixel, i) => (
                        <PixelBlock key={i} x={pixel.x} y={pixel.y} delay={pixel.delay}/>
                    ))}
                </div>

                {/* Grid Lines Overlay */}
                <div className="absolute inset-0 grid grid-cols-12 opacity-10">
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className="border-r border-cyan-400 h-full"></div>
                    ))}
                </div>

                <div className="relative container mx-auto py-8 px-4">
                    {/* Main Header Content */}
                    <div className="flex flex-col items-center">
                        {/* Title Section with Pixel Frame */}
                        <div className="relative mb-8 px-6 py-3">
                            {/* Pixel Frame */}
                            <div className="absolute -top-2 -left-2 w-4 h-4 bg-pink-500"></div>
                            <div className="absolute -top-2 -right-2 w-4 h-4 bg-pink-500"></div>
                            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-pink-500"></div>
                            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-pink-500"></div>
                            <div className="absolute top-0 left-2 right-2 h-0.5 bg-pink-500"></div>
                            <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-pink-500"></div>
                            <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-pink-500"></div>
                            <div className="absolute right-0 top-2 bottom-2 w-0.5 bg-pink-500"></div>

                            {/* Title */}
                            <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 animate-glow">ROA-THE-DEV</h1>
                            <p className="text-pink-500 font-bold text-2xl text-center animate-glow">.NET Backend
                                Engineer</p>
                        </div>

                        {/* Developer Avatar and Character */}
                        <div className="flex flex-col md:flex-row items-center justify-center mb-8 md:space-x-12">
                            {/* Avatar in Pixel Frame */}


                            {/* Animated Character */}
                            <div
                                className="w-16 h-16 bg-green-400 rounded-md"
                                style={{
                                    animation: "bounce 2s infinite ease-in-out"
                                }}
                            >
                                <div className="absolute w-4 h-4 bg-black rounded-full left-3 top-3"></div>
                                <div className="absolute w-4 h-4 bg-black rounded-full right-3 top-3"></div>
                                <div className="absolute w-8 h-2 bg-black rounded-full left-4 top-8"></div>
                                <div className="absolute w-3 h-6 bg-green-400 left-2 bottom-0"></div>
                                <div className="absolute w-3 h-6 bg-green-400 right-2 bottom-0"></div>
                            </div>
                        </div>

                        <div className="w-full max-w-4xl px-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Backend Category */}
                                <div className="bg-purple-800 bg-opacity-50 border-2 border-cyan-400 rounded-lg p-4">
                                    <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center flex items-center justify-center">
                                        <Server className="mr-2" size={20}/> Backend
                                    </h3>
                                    <div className="grid grid-cols-3 md:grid-cols-5 gap-3 justify-items-center">
                                        <TechIcon icon={<SiDotnet className="text-purple-400 text-3xl"/>} label=".NET"
                                                  category="backend"/>
                                        <TechIcon icon={<DiMsqlServer className="text-white text-3xl"/>} label="MSSQL"
                                                  category="backend"/>
                                        <TechIcon icon={<VscAzure className="text-blue-400 text-3xl"/>} label="Azure"
                                                  category="backend"/>
                                        <TechIcon icon={<DiRedis className="text-red-500 text-3xl"/>} label="Redis"
                                                  category="backend"/>
                                        <TechIcon icon={<SiElasticsearch className="text-yellow-300 text-3xl"/>}
                                                  label="ELK" category="backend"/>
                                        <TechIcon icon={<FaDocker className="text-blue-400 text-3xl"/>} label="Docker"
                                                  category="backend"/>
                                    </div>
                                </div>

                                {/* Frontend Category */}
                                <div className="bg-purple-800 bg-opacity-50 border-2 border-pink-500 rounded-lg p-4">
                                    <h3 className="text-2xl font-bold text-pink-500 mb-4 text-center flex items-center justify-center">
                                        <Code className="mr-2" size={20}/> Frontend
                                    </h3>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 justify-items-center">
                                        <TechIcon icon={<FaReact className="text-blue-300 text-3xl"/>} label="React"
                                                  category="frontend"/>
                                        <TechIcon icon={<SiTypescript className="text-blue-500 text-3xl"/>} label="TS"
                                                  category="frontend"/>
                                        <TechIcon icon={<SiTailwindcss className="text-blue-500 text-3xl"/>}
                                                  label="Tailwind" category="frontend"/>
                                        <TechIcon icon={<SiShadcnui className="text-cyan-50 text-3xl"/>} label="Shadcn"
                                                  category="frontend"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Pixel Decorations */}

                    <RetroGameDecorations/>
                </div>


            </header>

            {/* Navigation */}
            <nav className="bg-gray-900 border-b-4 border-pink-500 sticky top-0 z-50">
                <div className="container mx-auto px-4">
                    <ul className="flex flex-wrap justify-center md:justify-start space-x-1 md:space-x-4">
                        {[
                            {label: 'HOME', id: 'home'},
                            {label: 'PROJECTS', id: 'projects'},
                            {label: 'SKILLS', id: 'skills'},
                            {label: 'ABOUT', id: 'about'},
                            {label: 'CONTACT', id: 'contact'}
                        ].map((item, index) => (
                            <li
                                key={item.id}
                                className={`py-3 px-4 cursor-pointer transition-colors duration-300 
                  ${index < 4 ? 'border-r-2 border-purple-700' : ''}
                  ${hoverNav === item.id ? 'bg-pink-500' : 'hover:bg-pink-500'}`}
                                onMouseEnter={() => setHoverNav(item.id)}
                                onMouseLeave={() => setHoverNav(null)}
                                onClick={() => document.getElementById(item.id)?.scrollIntoView({behavior: 'smooth'})}
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                {/* About Section */}
                <section id="about" className="mb-12 relative">
                    <div
                        className="bg-purple-800 p-6 rounded-lg border-2 border-cyan-400 shadow-lg transform transition-transform hover:scale-[1.01]">
                        <h2 className="text-2xl font-bold mb-4 text-cyan-400 flex items-center">
                            <Code className="mr-2"/> ABOUT_ME
                        </h2>

                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="md:w-2/3">
                                <p className="mb-4">
                                    Welcome to my pixel dev world! I'm a Backend Engineer specializing in
                                    &nbsp;<b className="text-purple-400 text-xl">
                                    .NET
                                </b>&nbsp;
                                    development with some

                                    &nbsp;<b className="text-blue-300 text-lg">
                                    React
                                </b>&nbsp; skills on the side. My code is
                                    clean, efficient, and battle-tested - just like the best retro
                                    games!
                                </p>
                                <p className="mb-4">
                                    When I'm not coding, I'm immersed in the world of indie games, vtubers, and anime.
                                    I also hit the gym - my current max bench press is 75kg. These passions fuel my approach to development
                                    and influence the aesthetic style I bring to every project.
                                </p>

                                <div className="flex flex-wrap gap-3 mb-5 mt-4 ">

                                    <button
                                        className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded transition-colors duration-300 flex items-center">
                                        <span className="mr-2">⬇️</span> DOWNLOAD_CV.exe
                                    </button>
                                    <button
                                        className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 px-4 py-2 rounded transition-colors duration-300 flex items-center">
                                        <Mail className="mr-2" size={16}/> CONTACT_ME
                                    </button>
                                </div>
                            </div>
                            <div className="md:w-1/3 flex justify-center md:justify-end mr-4">
                                <div
                                    className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 group transition-transform duration-300 hover:rotate-1 hover:scale-[1.03] -top-4 md:-top-6">

                                    <div
                                        className="w-full h-full bg-purple-800 border-4 border-cyan-400 rounded-lg flex items-center justify-center overflow-hidden shadow-[0_0_25px_#22d3ee] animate-glowSlow">
                                        <img src={roaImg} alt="👾" className="w-full h-full object-cover rounded-lg"/>
                                    </div>
                                    <br/>

                                    {/* Pixel Corners with glow ping */}
                                    <div
                                        className="absolute -top-2 -left-2 w-6 h-6 bg-pink-500 animate-ping-once"></div>
                                    <div
                                        className="absolute -top-2 -right-2 w-6 h-6 bg-pink-500 animate-ping-once delay-100"></div>
                                    <div
                                        className="absolute -bottom-2 -left-2 w-6 h-6 bg-pink-500 animate-ping-once delay-200"></div>
                                    <div
                                        className="absolute -bottom-2 -right-2 w-6 h-6 bg-pink-500 animate-ping-once delay-300"></div>
                                </div>
                            </div>


                            {/*<div className="md:w-1/3 flex items-center justify-center">*/}
                            {/*    <div className="w-40 h-40 relative">*/}
                            {/*        /!* Pixel art representation of interests *!/*/}
                            {/*        <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">*/}
                            {/*            {[...Array(64)].map((_, i) => (*/}
                            {/*                <div*/}
                            {/*                    key={i}*/}
                            {/*                    className="border border-purple-900"*/}
                            {/*                    style={{*/}
                            {/*                        backgroundColor: [12, 13, 20, 21, 28, 29, 36, 37].includes(i)*/}
                            {/*                            ? '#F472B6' // Pink for gaming controller*/}
                            {/*                            : [22, 23, 30, 31, 38, 39, 46, 47].includes(i)*/}
                            {/*                                ? '#00E0FF' // Cyan for anime/vtuber representation*/}
                            {/*                                : [41, 42, 43, 44, 49, 50, 51, 52].includes(i)*/}
                            {/*                                    ? '#10B981' // Green for code representation*/}
                            {/*                                    : 'transparent',*/}
                            {/*                    }}*/}
                            {/*                />*/}
                            {/*            ))}*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </section>
                <p className="text-xl text-right italic text-cyan-300 mt-6">
                    — Roern Chamreun // ROA 👾
                </p>
                {/* Skills Section */}
                <section id="skills" className="mb-12">
                    {/* Technical Skills */}
                    <div className="mb-8">
                        <h3 className="text-xl font-bold mb-4 text-pink-500 flex items-center">
                            <Server className="mr-2"/> TECHNICAL_SKILLS
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <SkillItem name=".NET Core" level={95} color="purple-400" icon={<SiDotnet/>}/>
                            <SkillItem name="SQL Server" level={90} color="pink-500" icon={<DiMsqlServer/>}/>
                            <SkillItem name="Redis" level={85} color="red-400" icon={<SiRedis/>}/>
                            <SkillItem name="Elastic Search" level={80} color="yellow-400" icon={<SiElasticsearch/>}/>
                            <SkillItem name="Docker" level={75} color="blue-500" icon={<FaDocker/>}/>
                            <SkillItem name="React" level={60} color="pink-500" icon={<FaReact/>}/>
                        </div>
                    </div>

                    {/* Soft Skills */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-pink-500 flex items-center">
                            <Users className="mr-2"/> SOFT_SKILLS
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <SkillItem name="Problem Solving" level={92} color="purple-400" icon={<Brain/>}/>
                            <SkillItem name="Teamwork" level={88} color="blue-400" icon={<Users/>}/>
                            <SkillItem name="Communication" level={85} color="cyan-400" icon={<Mail/>}/>
                            <SkillItem name="Attention to Detail" level={90} color="yellow-400" icon={<Star/>}/>
                            <SkillItem name="Adaptability" level={87} color="green-400" icon={<Coffee/>}/>
                            <SkillItem name="Passion" level={99} color="red-400" icon={<Heart/>}/>
                        </div>
                    </div>
                </section>

                {/* Projects Section Preview */}
                <section id="projects" className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center">
                        <Gamepad className="mr-2"/> FEATURED_PROJECTS
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Project Card 1 */}
                        <div
                            className="bg-purple-800 rounded-lg overflow-hidden border-2 border-cyan-400 shadow-lg hover:border-pink-500 transition-all duration-300 transform hover:scale-105">
                            <div className="h-48 bg-gray-800 relative">
                                <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
                                    {[...Array(64)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="border border-gray-800"
                                            style={{
                                                backgroundColor:
                                                    Math.random() > 0.7
                                                        ? '#00E0FF'
                                                        : Math.random() > 0.5
                                                            ? '#5A189A'
                                                            : 'transparent',
                                                opacity: Math.random() * 0.6 + 0.2,
                                            }}
                                        />
                                    ))}
                                </div>
                                <div
                                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900 to-transparent h-16"/>
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2 text-cyan-400">
                                    API_QUEST
                                </h3>
                                <p className="text-gray-300 mb-4">
                                    A robust RESTful API using .NET 8 with advanced caching and
                                    authentication.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-2 py-1 bg-pink-500 text-xs rounded flex items-center">
                                        <SiDotnet className="mr-1"/> .NET 8
                                    </span>
                                    <span
                                        className="px-2 py-1 bg-cyan-400 text-gray-900 text-xs rounded flex items-center">
                                        <Code className="mr-1" size={12}/> C#
                                    </span>
                                    <span
                                        className="px-2 py-1 bg-green-400 text-gray-900 text-xs rounded flex items-center">
                                        <DiMsqlServer className="mr-1"/> SQL
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Project Card 2 */}
                        <div
                            className="bg-purple-800 rounded-lg overflow-hidden border-2 border-cyan-400 shadow-lg hover:border-pink-500 transition-all duration-300 transform hover:scale-105">
                            <div className="h-48 bg-gray-800 relative">
                                <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
                                    {[...Array(64)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="border border-gray-800"
                                            style={{
                                                backgroundColor:
                                                    Math.random() > 0.7
                                                        ? '#FF3399'
                                                        : Math.random() > 0.5
                                                            ? '#5A189A'
                                                            : 'transparent',
                                                opacity: Math.random() * 0.6 + 0.2,
                                            }}
                                        />
                                    ))}
                                </div>
                                <div
                                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900 to-transparent h-16"/>
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2 text-cyan-400">
                                    PIXEL_DASHBOARD
                                </h3>
                                <p className="text-gray-300 mb-4">
                                    A retro-styled admin dashboard with React frontend and .NET
                                    backend.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-2 py-1 bg-pink-500 text-xs rounded flex items-center">
                                        <FaReact className="mr-1"/> React
                                    </span>
                                    <span
                                        className="px-2 py-1 bg-cyan-400 text-gray-900 text-xs rounded flex items-center">
                                        <SiDotnet className="mr-1"/> .NET Core
                                    </span>
                                    <span
                                        className="px-2 py-1 bg-green-400 text-gray-900 text-xs rounded flex items-center">
                                        <FaServer className="mr-1"/> REST API
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center">
                        <Mail className="mr-2"/> CONTACT_ME
                    </h2>
                    <div className="bg-purple-800 p-6 rounded-lg border-2 border-pink-500 shadow-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4 text-pink-500">SEND_MESSAGE.exe</h3>
                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-bold mb-2 text-cyan-400">YOUR_NAME:</label>
                                        <input
                                            type="text"
                                            className="w-full bg-gray-800 border-2 border-purple-600 rounded px-3 py-2 focus:outline-none focus:border-cyan-400 text-white"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            className="block text-sm font-bold mb-2 text-cyan-400">YOUR_EMAIL:</label>
                                        <input
                                            type="email"
                                            className="w-full bg-gray-800 border-2 border-purple-600 rounded px-3 py-2 focus:outline-none focus:border-cyan-400 text-white"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold mb-2 text-cyan-400">MESSAGE:</label>
                                        <textarea
                                            className="w-full bg-gray-800 border-2 border-purple-600 rounded px-3 py-2 focus:outline-none focus:border-cyan-400 text-white h-32"
                                            placeholder="Type your message here"
                                        ></textarea>
                                    </div>
                                    <div>
                                        <button
                                            className="bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded transition-colors duration-300 w-full md:w-auto">
                                            {"SEND >_"}
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-bold mb-4 text-cyan-400">CONNECT_WITH_ME</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-center">
                                            <FaGithub className="mr-3 text-pink-500"/>
                                            <span>github.com/dev-name</span>
                                        </li>
                                        <li className="flex items-center">
                                            <FaLinkedin className="mr-3 text-pink-500"/>
                                            <span>linkedin.com/in/dev-name</span>
                                        </li>
                                        <li className="flex items-center">
                                            <Mail className="mr-3 text-pink-500"/>
                                            <span>dev@email.com</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-6 md:mt-0">
                                    <div className="text-center md:text-right">
                                        <div
                                            className="inline-block p-4 border-2 border-cyan-400 rounded-lg bg-purple-900">
                                            <p className="mb-2 text-pink-500">STATUS:</p>
                                            <p className="text-cyan-400 animate-pulse">READY_FOR_NEW_QUESTS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer with Floating Pixel */}
            <footer className="bg-gray-900 border-t-4 border-cyan-400 py-6 relative">
                {/* Floating pixel character */}
                <div
                    className="absolute right-10 bottom-8 w-8 h-8 animate-bounce"
                    style={{
                        animationDuration: '2s',
                    }}
                >
                    <div className="w-full h-full bg-cyan-400 relative">
                        <div className="absolute w-2 h-2 bg-black rounded-full left-1 top-1"></div>
                        <div className="absolute w-2 h-2 bg-black rounded-full right-1 top-1"></div>
                        <div className="absolute w-4 h-1 bg-black rounded-full left-2 bottom-2"></div>
                    </div>
                </div>

                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0 text-center md:text-left">
                            <p className="text-sm">© 2025 ROA-THE-DEV | All rights reserved</p>
                            <p className="text-xs text-gray-400">Made with pixel love 👾</p>
                        </div>

                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-gray-300 hover:text-pink-500 transition-colors duration-300"
                            >
                                <FaGithub size={24}/>
                            </a>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-pink-500 transition-colors duration-300"
                            >
                                <FaLinkedin size={24}/>
                            </a>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-pink-500 transition-colors duration-300"
                            >
                                <Mail size={24}/>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default PixelPortfolio;