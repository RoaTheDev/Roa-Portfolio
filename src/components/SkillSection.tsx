import {Brain, Coffee, Heart, Mail, Server, Star, Users} from "lucide-react";
import {SkillItem} from "./SkillItem.tsx";
import {SiDotnet, SiGit, SiJavascript, SiSpring, SiTailwindcss, SiTypescript} from "react-icons/si";
import {DiCss3, DiHtml5, DiMsqlServer, DiRedis} from "react-icons/di";
import {FaReact} from "react-icons/fa";

export const SkillSection = () => {
    return (<>
        <section id="skills" className="mb-12">
            {/* Technical Skills */}
            <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-pink-500 flex items-center">
                    <Server className="mr-2"/> TECHNICAL_SKILLS
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <SkillItem name=" (C# & ASP.NET Core)" level={85} color="purple-400" icon={<SiDotnet/>}/>
                    <SkillItem name=" Java & Spring" level={65} color="green-400" icon={<SiSpring/>}/>
                    <SkillItem name="SQL Server" level={65} color="pink-500" icon={<DiMsqlServer/>}/>
                    <SkillItem name="Redis" level={60} color="red-400" icon={<DiRedis/>}/>
                    <SkillItem name="React" level={68} color="blue-400" icon={<FaReact/>}/>
                    <SkillItem name="Javascript" level={69} color="yellow-400" icon={<SiJavascript/>}/>
                    <SkillItem name="Typescript" level={65} color="blue-400" icon={<SiTypescript/>}/>
                    <SkillItem name="Tailwind" level={59} color="blue-400" icon={<SiTailwindcss/>}/>
                    <SkillItem name="HTML/CSS" level={75} color="red-400" icon={<div className={"flex"}><DiHtml5/> <DiCss3 /></div>}/>
                    <SkillItem name="Git" level={67} color="red-400" icon={<div className={"flex"}><SiGit/></div>}/>
                </div>
            </div>

            {/* Soft Skills */}
            <div>
                <h3 className="text-xl font-bold mb-4 text-pink-500 flex items-center">
                    <Users className="mr-2"/> SOFT_SKILLS
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <SkillItem name="Problem Solving" level={70} color="purple-400" icon={<Brain/>}/>
                    <SkillItem name="Teamwork" level={64} color="blue-400" icon={<Users/>}/>
                    <SkillItem name="Communication" level={62} color="cyan-400" icon={<Mail/>}/>
                    <SkillItem name="Attention to Detail" level={74} color="yellow-400" icon={<Star/>}/>
                    <SkillItem name="Adaptability" level={90} color="green-400" icon={<Coffee/>}/>
                    <SkillItem name="Passion" level={99} color="red-400" icon={<Heart/>}/>
                </div>
            </div>
        </section>
    </>)
}