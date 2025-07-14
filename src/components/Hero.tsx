import {Code, Server} from "lucide-react";
import {PixelBlock} from "./PixelBlock.tsx";
import {TechIcon} from "./TechIcon.tsx";
import {TbBrandCSharp} from "react-icons/tb";
import {DiCss3, DiDotnet, DiHtml5, DiMsqlServer, DiRedis} from "react-icons/di";
import {FaReact} from "react-icons/fa";
import {
    SiGit,
    SiGithub,
    SiJavascript,
    SiNextdotjs,
    SiPostman,
    SiPython,
    SiTailwindcss,
    SiTypescript
} from "react-icons/si";
import {RetroGameDecorations} from "./RetroGameDecorations.tsx";

export const Hero = () => {
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
    return (
        <>
            <header id={"home"}
                    className="relative bg-gradient-to-b from-purple-950 to-purple-900 overflow-hidden border-b-4 border-cyan-400">
                {/* Animated Pixel Background */}
                <div className="absolute inset-0 opacity-20">
                    {backgroundPixels.map((pixel, i) => (
                        <PixelBlock key={i} x={pixel.x} y={pixel.y} delay={pixel.delay}/>
                    ))}
                </div>

                <div className="absolute inset-0 grid grid-cols-12 opacity-10">
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className="border-r border-cyan-400 h-full"></div>
                    ))}
                </div>

                <div className="relative container mx-auto py-8 px-4">
                    <div className="flex flex-col items-center">
                        <div className="relative mb-8 px-6 py-3">
                            <div className="absolute -top-2 -left-2 w-4 h-4 bg-green-400 animate-glow"></div>
                            <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-300 animate-glow"></div>
                            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-400 animate-glow"></div>
                            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-red-400 animate-glow"></div>
                            <div className="absolute top-0 left-2 right-2 h-0.5 bg-pink-500"></div>
                            <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-pink-500"></div>
                            <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-pink-500"></div>
                            <div className="absolute right-0 top-2 bottom-2 w-0.5 bg-pink-500"></div>

                            <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 animate-glow">ROA-THE-DEV</h1>
                            <p className="text-pink-500 font-bold text-2xl text-center animate-glow"> Software
                                Developer</p>
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
                                        <Server className="mr-2" size={20}/> Backend & Tools
                                    </h3>
                                    <div className="grid grid-cols-3 md:grid-cols-4 gap-3 justify-items-center">
                                        {/* Backend Technologies */}
                                        <TechIcon icon={<TbBrandCSharp className="text-purple-500 text-3xl"/>}
                                                  label="C#" category="backend"/>
                                        <TechIcon icon={<DiDotnet className="text-blue-300 text-3xl"/>}
                                                  label="ASP.NET Core" category="backend"/>
                                        <TechIcon icon={<DiMsqlServer className="text-white text-3xl"/>}
                                                  label="MSSQL" category="backend"/>
                                        <TechIcon icon={<DiRedis className="text-red-500 text-3xl"/>}
                                                  label="Redis" category="backend"/>
                                        <TechIcon icon={<SiPython className="text-yellow-500 text-3xl"/>}
                                                  label="Redis" category="backend"/>
                                        {/* Development Tools */}
                                        <TechIcon icon={<SiGit className="text-orange-500 text-3xl"/>}
                                                  label="Git" category="other"/>
                                        <TechIcon icon={<SiGithub className="text-white text-3xl"/>}
                                                  label="GitHub" category="other"/>
                                        <TechIcon icon={<SiPostman className="text-orange-400 text-3xl"/>}
                                                  label="Postman" category="other"/>
                                    </div>
                                </div>

                                {/* Frontend Category */}
                                <div className="bg-purple-800 bg-opacity-50 border-2 border-pink-500 rounded-lg p-4">
                                    <h3 className="text-2xl font-bold text-pink-500 mb-4 text-center flex items-center justify-center">
                                        <Code className="mr-2" size={20}/> Frontend
                                    </h3>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 justify-items-center">
                                        <TechIcon icon={<SiNextdotjs className="text-black "/>} label="NextJS"
                                                  category="frontend"/>
                                        <TechIcon icon={<FaReact className="text-blue-400 "/>} label="React"
                                                  category="frontend"/>
                                        <TechIcon icon={<SiJavascript className="text-yellow-300 "/>} label="Javascript"
                                                  category="frontend"/>
                                        <TechIcon icon={<SiTailwindcss className="text-blue-500 "/>}
                                                  label="Tailwind" category="frontend"/>
                                        <TechIcon icon={<div className={"flex"}><DiHtml5 className="text-red-400 "/>
                                            <DiCss3 className="text-blue-500"/> </div>} label="HTML&CSS"
                                                  category="frontend"/>

                                        <TechIcon icon={<SiTypescript className=" text-blue-500 "></SiTypescript>}
                                                  label=" Typescript"
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
        </>
    )
}