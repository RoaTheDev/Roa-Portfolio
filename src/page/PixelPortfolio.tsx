import roaImg from '../assets/roa.jpg';
import * as React from 'react';
import {useState} from 'react';
import {Code, Mail} from 'lucide-react';
import {UnderConstructionPopup} from "../components/UnderConstructionPopUp.tsx";
import {Navbar} from "../components/Navbar.tsx";
import {SkillSection} from "../components/SkillSection.tsx";
import {Hero} from "../components/Hero.tsx";
import {ExperienceSection} from "../components/ExperienceSection.tsx";
import {ProjectSection} from "../components/ProjectSection.tsx";
import {Footer} from "../components/Footer.tsx";

const PixelPortfolio: React.FC = () => {
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

    const openPopup = (): void => setIsPopupOpen(true);
    const closePopup = (): void => setIsPopupOpen(false);


    return (

        <div className="bg-purple-900 text-gray-100 min-h-screen font-mono">
            <Navbar/>
            <Hero/>
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
                                    Welcome to my pixel dev world! I'm a Fullstack Developer specializing in
                                    <b className="text-purple-400 text-xl">
                                        .NET
                                    </b>&nbsp;
                                    development with some
                                    &nbsp;<b className="text-blue-300 text-lg">
                                    React
                                </b>&nbsp;based skills on the side. My code is
                                    clean, efficient, and battle-tested - just like the best retro
                                    games!
                                </p>
                                <p className="mb-4">
                                    When I'm not coding, I'm immersed in the world of indie games, vtubers, and anime.
                                    I also hit the gym - my current max bench press is 75kg. These passions fuel my
                                    approach to development
                                    and influence the aesthetic style I bring to every project.
                                </p>

                                <div className="flex flex-wrap gap-3 mb-5 mt-4 ">

                                    <button onClick={() => {
                                        const url = `${import.meta.env.BASE_URL}/Roern_Chamreun_CV.pdf`;
                                        const windowFeatures = "width=800,height=600,resizable=yes,scrollbars=yes";
                                        window.open(url, "PDFViewer", windowFeatures);
                                    }}
                                            className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded transition-colors duration-300 flex items-center">
                                        <span className="mr-2">⬇️</span> VIEW_CV.exe
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

                        </div>
                    </div>
                </section>
                <p className="text-2xl text-right italic text-cyan-300 mt-6">
                    — Roern Chamreun // ROA 👾
                </p>
                {/*Experience Section*/}
                <ExperienceSection/>

                {/* Skills Section */}
                <SkillSection/>

                {/* Projects Section Preview */}
                <ProjectSection/>

                {/* Contact Section */}
                <section id="contact" className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center">
                        <Mail className="mr-2"/> CONTACT_ME
                    </h2>
                    <div className="bg-purple-800 p-6 rounded-lg border-2 border-pink-500 shadow-lg max-w-3xl mx-auto">
                        <div className="text-center mb-4">
                            <div className="inline-block p-4 border-2 border-cyan-400 rounded-lg bg-purple-900">
                                <p className="mb-2 text-pink-500">STATUS:</p>
                                <p className="text-cyan-400 animate-pulse">READY_FOR_NEW_QUESTS</p>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold mb-4 text-pink-500 text-center">SEND_MESSAGE.exe</h3>

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
                                <label className="block text-sm font-bold mb-2 text-cyan-400">YOUR_EMAIL:</label>
                                <input
                                    type="email"
                                    className="w-full bg-gray-800 border-2 border-purple-600 rounded px-3 py-2 focus:outline-none focus:border-cyan-400 text-white"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2 text-cyan-400">MESSAGE:</label>
                                <textarea
                                    className="w-full bg-gray-800 border-2 border-purple-600 rounded px-3 py-2 focus:outline-none focus:border-cyan-400 text-white h-40"
                                    placeholder="Type your message here"
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <button onClick={(e) => {
                                    e.preventDefault()
                                    openPopup();
                                }}
                                        className="bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded transition-colors duration-300">
                                    {"SEND >_"}
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>

            {/* Footer with Floating Pixel */}
            <Footer/>
            {isPopupOpen && <UnderConstructionPopup
                isOpen={isPopupOpen}
                onClose={closePopup}
                title="FEATURE_COMING_SOON"
            />}
        </div>

    );
};

export default PixelPortfolio;