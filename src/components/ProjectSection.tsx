import {ExternalLink, Gamepad} from "lucide-react";
import {SiDotnet, SiGithub, SiJsonwebtokens, SiPostgresql, SiSpring, SiTailwindcss, SiTypescript} from "react-icons/si";
import {DiMsqlServer, DiRedis} from "react-icons/di";
import {FaServer, FaYoutube} from "react-icons/fa";
import springSecurityPng from '../assets/spring_security.png'
import faunaMarket from '../assets/Fuana_market.png'
import {TbBrandNextjs} from "react-icons/tb";

export const ProjectSection = () => {
    const projects = [
        {
            id: 1,
            title: "Spring Security via JWT With Redis",
            description: "This is a custom implementation of Spring security with JWT utilizing Redis cache for Refresh Token.",
            image: springSecurityPng,
            technologies: [
                {name: "Spring", icon: SiSpring, bgColor: "bg-green-600"},
                {name: "Redis", icon: DiRedis, bgColor: "bg-gray-800", textColor: "text-red-400"},
                {name: "Jwt", icon: SiJsonwebtokens, bgColor: "bg-black"},
                {name: "Postgres", icon: SiPostgresql, bgColor: "bg-blue-500"},
                {name: "REST API", icon: FaServer, bgColor: "bg-white", textColor: "text-gray-900"},
            ],
            sourceLinks: [
                {name: "Source Code", url: "https://github.com/RoaTheDev/spring-security-redis"}
            ],
            youtube: "https://www.youtube.com/watch?v=wWrGbOV7ssE&t=7s"
        },
        {
            id: 2,
            title: "Anime Ecommerce Shop",
            description: "A fullstack ecommerce application inspired by Ceres Fauna",
            image: faunaMarket,
            technologies: [
                {name: ".NET", icon: SiDotnet, bgColor: "bg-purple-500"},
                {name: "SQL Server", icon: DiMsqlServer, bgColor: "bg-red-400", textColor: "text-gray-900"},
                {name: "Redis", icon: DiRedis, bgColor: "bg-gray-800", textColor: "text-red-400"},
                {name: "Jwt", icon: SiJsonwebtokens, bgColor: "bg-black"},
                {name: "REST API", icon: FaServer, bgColor: "bg-white", textColor: "text-gray-900"},
                {name: "NextJS", icon: TbBrandNextjs, bgColor: "bg-black"},
                {name: "Typescript", icon: SiTypescript, bgColor: "bg-blue-500"},
                {name: "Tailwindcss", icon: SiTailwindcss, bgColor: "bg-blue-500"},

            ],
            sourceLinks: [
                {name: "Backend", url: "https://github.com/RoaTheDev/Industry_Standard_Eccomerce_V1"},
                {name: "Frontend", url: "https://github.com/RoaTheDev/Ecommerce_NextJS_V1_Frontend"}
            ]
        },

    ];

    return (
        <>
            <section id="projects" className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center">
                    <Gamepad className="mr-2"/> FEATURED_PROJECTS
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-purple-800 rounded-lg overflow-hidden border-2 border-cyan-400 shadow-lg hover:border-pink-500 transition-all duration-300 transform hover:scale-105"
                        >
                            {/* Project Image */}
                            <div className="h-48 bg-gray-800 relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        const img = e.target as HTMLImageElement;
                                        img.style.display = 'none';

                                        const parent = img.parentElement;
                                        if (parent) {
                                            parent.classList.add('bg-gradient-to-br', 'from-purple-700', 'to-pink-600');
                                        }
                                    }}
                                />
                                <div
                                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900 to-transparent h-16"/>
                            </div>

                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2 text-cyan-400">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 mb-4">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, index) => {
                                        const IconComponent = tech.icon;
                                        return (
                                            <span
                                                key={index}
                                                className={`px-2 py-1 ${tech.bgColor} ${tech.textColor || 'text-white'} text-xs rounded flex items-center`}
                                            >
                                                <IconComponent className="mr-1" size={12}/> {tech.name}
                                            </span>
                                        );
                                    })}
                                </div>

                                {/* Source Code Links */}
                                <div className={"flex"}>

                                    <div className="flex flex-wrap gap-2">
                                        {project.sourceLinks.map((link, index) => (
                                            <a
                                                key={index}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-cyan-400 hover:text-pink-400 text-sm rounded flex items-center transition-colors duration-200 border border-gray-600 hover:border-cyan-400"
                                            >
                                                <SiGithub className="mr-1" size={14}/>
                                                {link.name}
                                                <ExternalLink className="ml-1" size={12}/>
                                            </a>
                                        ))}
                                    </div>
                                    <div className="flex flex-wrap ml-2 gap-2">
                                        {project.youtube && <a
                                            href={project.youtube}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-cyan-400 hover:text-pink-400 text-sm rounded flex items-center transition-colors duration-200 border border-gray-600 hover:border-cyan-400"
                                        >
                                            <FaYoutube className="mr-1 text-2xl text-red-500" size={14}/>
                                            <ExternalLink className="ml-1" size={12}/>
                                        </a>}
                                    </div>

                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}