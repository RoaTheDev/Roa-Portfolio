import {
    Briefcase,
    Calendar,
    Coffee,
    Crown,
    MapPin,
    Play,
    Star,
    Sword,
    Zap,
} from "lucide-react";
import {
    SiCloudinary,
    SiFirebase,
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import React from "react";

// ===== TYPES =====
type Technology = {
    icon: React.ReactNode;
    name: string;
};

type Experience = {
    title: string;
    company: string;
    location: string;
    period: string;
    level?: number;
    description: string;
    technologies: Technology[];
    achievements: string[];
};

type FreelanceExperience = Omit<Experience, "level">;

export const ExperienceSection: React.FC = () => {
    const mainPath: Experience[] = [
        {
            title: "Volunteer React Developer",
            company: "Cambodia Ministry Of Interior",
            location: "Phnom Penh, Cambodia",
            period: "2025 - Present",
            level: 1,
            description:
                "Started my journey in web development by working on a legacy React project, gaining hands-on experience with modern front-end tooling.",
            technologies: [
                { icon: <SiReact className="text-blue-500" />, name: "React" },
                { icon: <SiTypescript className="text-blue-500" />, name: "TypeScript" },
                { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
                { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
                { icon: <SiTailwindcss className="text-blue-400" />, name: "Tailwind CSS" },
            ],
            achievements: [
                "Maintained and contributed to a legacy React application.",
                "Resolved issues related to API rate limits and optimized API usage.",
                "Collaborated with supervisors to implement user-requested features.",
            ],
        },
    ];

    const freelanceQuest: FreelanceExperience = {
        title: "Freelance Website",
        company: "A Bass Shop",
        location: "Phnom Penh",
        period: "2022 - 2023",
        description:
            "Developed a modern and responsive e-commerce website using Next.js, supporting multiple currencies and PWA capabilities to meet client demands.",
        technologies: [
            { icon: <SiNextdotjs />, name: "Next.js" },
            { icon: <SiTypescript className="text-blue-500" />, name: "TypeScript" },
            { icon: <SiTailwindcss className="text-blue-500" />, name: "Tailwind CSS" },
            { icon: <SiFirebase className="text-orange-400" />, name: "Firebase" },
            { icon: <SiCloudinary className="text-blue-400" />, name: "Cloudinary" },
        ],
        achievements: [
            "Adapted quickly to changing client requirements.",
            "Maintained a 100% client satisfaction rate.",
            "Implemented a polished UI with PWA support and real-time currency conversion (USD, THB, KHR).",
        ],
    };

    // ===== UTILITIES =====
    const getLevelIcon = (level?: number) => {
        switch (level) {
            case 1:
                return <Star className="w-5 h-5 text-gray-900" />;
            case 2:
                return <Sword className="w-5 h-5 text-gray-900" />;
            case 3:
                return <Crown className="w-5 h-5 text-gray-900" />;
            default:
                return <Zap className="w-5 h-5 text-gray-900" />;
        }
    };

    const getLevelColor = (level?: number) => {
        switch (level) {
            case 1:
                return "bg-green-400 border-green-400";
            case 2:
                return "bg-blue-400 border-blue-400";
            case 3:
                return "bg-pink-500 border-pink-500";
            default:
                return "bg-cyan-400 border-cyan-400";
        }
    };

    const getLevelGlow = (level?: number) => {
        switch (level) {
            case 1:
                return "shadow-lg shadow-green-400/30";
            case 2:
                return "shadow-lg shadow-blue-400/30";
            case 3:
                return "shadow-lg shadow-pink-500/30";
            default:
                return "shadow-lg shadow-cyan-400/30";
        }
    };

    // ===== RENDER =====
    return (
        <section id="experience" className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center">
                <Briefcase className="mr-2" /> EXPERIENCE_LOG
            </h2>

            {/* Journey Start Badge */}
            <div className="text-center mb-8">
                <div className="inline-flex items-center bg-gray-800 px-4 py-2 rounded-lg border-2 border-green-400 shadow-lg shadow-green-400/20">
                    <Play className="mr-2 text-green-400" size={20} />
                    <span className="text-green-400 font-mono">JOURNEY_START</span>
                </div>
            </div>

            {/* Main Timeline */}
            <div className="max-w-4xl mx-auto">
                <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 via-blue-400 to-pink-500 opacity-60 hidden md:block" />

                    <div className="space-y-12">
                        {mainPath.map((exp, index) => (
                            <div key={index} className="relative">
                                {/* Timeline Node */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 -mt-8 z-10 hidden md:block">
                                    <div
                                        className={`w-full h-full rounded-full border-4 border-gray-900 flex items-center justify-center ${getLevelColor(
                                            exp.level
                                        )} ${getLevelGlow(exp.level)} relative`}
                                    >
                                        <div className="absolute inset-2 rounded-full bg-gray-900 flex items-center justify-center">
                                            {getLevelIcon(exp.level)}
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 px-2 py-1 rounded border border-cyan-400 whitespace-nowrap">
                    <span className="text-xs font-mono text-cyan-400">
                      LVL.{exp.level}
                    </span>
                                    </div>
                                </div>

                                {/* Experience Card */}
                                <div
                                    className={`flex ${
                                        index % 2 === 0
                                            ? "md:flex-row"
                                            : "md:flex-row-reverse"
                                    } items-center gap-8`}
                                >
                                    <div className="flex-1">
                                        <div className={index % 2 === 0 ? "md:pr-8" : "md:pl-8"}>
                                            <ExperienceCard exp={exp} isMainPath />
                                        </div>
                                    </div>

                                    {/* Mobile LVL */}
                                    <div className="md:hidden">
                                        <div
                                            className={`w-12 h-12 rounded-full border-4 border-gray-900 flex items-center justify-center ${getLevelColor(
                                                exp.level
                                            )} ${getLevelGlow(exp.level)}`}
                                        >
                                            <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center">
                                                {getLevelIcon(exp.level)}
                                            </div>
                                        </div>
                                        <div className="text-center mt-2">
                      <span className="text-xs font-mono text-cyan-400">
                        LVL.{exp.level}
                      </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Current Status */}
            <div className="mt-12 text-center">
                <div className="inline-flex items-center bg-gray-800 px-4 py-2 rounded-lg border-2 border-pink-500 shadow-lg shadow-pink-500/20">
                    <Crown className="mr-2 text-pink-500" size={20} />
                    <span className="text-pink-500 font-mono">CURRENT_POSITION</span>
                </div>
            </div>

            {/* Side Quest */}
            <div className="mt-16">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center bg-gray-800 px-4 py-2 rounded-lg border-2 border-yellow-400 shadow-lg shadow-yellow-400/20">
                        <Coffee className="mr-2 text-yellow-400" size={20} />
                        <span className="text-yellow-400 font-mono">SIDE_QUEST_UNLOCKED</span>
                    </div>
                </div>

                <div className="max-w-2xl mx-auto relative">
                    <FreelanceCard freelanceQuest={freelanceQuest} />
                </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-12 bg-gray-900 border-2 border-green-400 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-green-400 font-mono text-sm">SKILL_PROGRESSION</span>
                    <span className="text-green-400 font-mono text-sm">Level 1 / ∞</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
                    <div
                        className="bg-gradient-to-r from-green-400 via-blue-400 to-pink-500 h-2 rounded-full"
                        style={{ width: "75%" }}
                    ></div>
                </div>
                <div className="flex justify-center items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                    <span className="text-gray-300 text-xs">Continue grinding for next level...</span>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-ping delay-100"></div>
                </div>
            </div>
        </section>
    );
};

// ===== EXPERIENCE CARD COMPONENT =====
const ExperienceCard: React.FC<{ exp: Experience; isMainPath?: boolean }> = ({
                                                                                 exp,
                                                                                 isMainPath = true,
                                                                             }) => (
    <div
        className={`bg-purple-800 rounded-lg border-2 shadow-lg hover:border-pink-500 transition-all duration-300 transform hover:scale-[1.02] relative ${
            isMainPath ? "border-cyan-400 hover:shadow-cyan-400/20" : "border-yellow-400 hover:shadow-yellow-400/20"
        }`}
    >
        <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                    <h3 className="text-xl font-bold text-pink-500 flex items-center">
                        <Zap className="mr-2 text-yellow-400" size={20} />
                        {exp.title}
                    </h3>
                    <p className="text-cyan-400 font-semibold">{exp.company}</p>
                </div>
                <div className="md:text-right text-sm text-gray-300 space-y-1">
                    <div className="flex items-center">
                        <Calendar className="mr-1" size={14} />
                        {exp.period}
                    </div>
                    <div className="flex items-center">
                        <MapPin className="mr-1" size={14} />
                        {exp.location}
                    </div>
                </div>
            </div>

            <p className="text-gray-300 mb-4">{exp.description}</p>

            <div className="mb-4">
                <h4 className="text-sm font-bold text-cyan-400 mb-2">TECH_STACK:</h4>
                <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-800 border border-purple-600 rounded-full text-xs flex items-center hover:border-cyan-400">
              <span className="mr-1">{tech.icon}</span>
                            {tech.name}
            </span>
                    ))}
                </div>
            </div>

            <div>
                <h4 className="text-sm font-bold text-cyan-400 mb-2">ACHIEVEMENTS:</h4>
                <div className="grid grid-cols-1 gap-2">
                    {exp.achievements.map((item, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                            <div className="w-2 h-2 bg-pink-500 rounded-full mr-2 animate-pulse"></div>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

// ===== FREELANCE CARD COMPONENT =====
const FreelanceCard: React.FC<{ freelanceQuest: FreelanceExperience }> = ({
                                                                              freelanceQuest,
                                                                          }) => (
    <div className="bg-gray-800 rounded-lg border-2 border-yellow-400 shadow-lg hover:border-orange-400 transition-all duration-300 transform hover:scale-[1.02] relative">
        <div className="absolute -top-2 -right-2 px-2 py-1 bg-yellow-400 text-gray-900 rounded-full text-xs font-bold">
            SIDE_QUEST
        </div>

        <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                    <h3 className="text-xl font-bold text-yellow-400 flex items-center">
                        <Coffee className="mr-2 text-orange-400" size={20} />
                        {freelanceQuest.title}
                    </h3>
                    <p className="text-orange-400 font-semibold">{freelanceQuest.company}</p>
                </div>
                <div className="md:text-right text-sm text-gray-300 space-y-1">
                    <div className="flex items-center">
                        <Calendar className="mr-1" size={14} />
                        {freelanceQuest.period}
                    </div>
                    <div className="flex items-center">
                        <MapPin className="mr-1" size={14} />
                        {freelanceQuest.location}
                    </div>
                </div>
            </div>

            <p className="text-gray-300 mb-4">{freelanceQuest.description}</p>

            <div className="mb-4">
                <h4 className="text-sm font-bold text-yellow-400 mb-2">TECH_STACK:</h4>
                <div className="flex flex-wrap gap-2">
                    {freelanceQuest.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-900 border border-yellow-600 rounded-full text-xs flex items-center hover:border-orange-400">
              <span className="mr-1">{tech.icon}</span>
                            {tech.name}
            </span>
                    ))}
                </div>
            </div>

            <div>
                <h4 className="text-sm font-bold text-yellow-400 mb-2">QUEST_REWARDS:</h4>
                <div className="grid grid-cols-1 gap-2">
                    {freelanceQuest.achievements.map((item, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></div>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);
