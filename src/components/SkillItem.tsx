import * as React from "react";
import {useEffect, useRef, useState} from "react";

interface SkillItemProps {
    name: string;
    level: number;
    color: string;
    icon: React.ReactNode;
}

export const SkillItem: React.FC<SkillItemProps> = ({name, level, color, icon}) => {
    const [animatedLevel, setAnimatedLevel] = useState(0);
    const elementRef = useRef<HTMLDivElement>(null);

    // Map color prop to actual Tailwind classes
    const getBorderClass = () => {
        const colorMap: Record<string, string> = {
            "green-400": "border-green-400",
            "cyan-400": "border-cyan-400",
            "red-400": "border-red-400",
            "yellow-400": "border-yellow-400",
            "blue-500": "border-blue-500",
            "pink-500": "border-pink-500",
            "purple-400": "border-purple-400",
            "blue-400": "border-blue-400",
            "gray-300": "border-gray-300"
        };
        return colorMap[color] || "border-cyan-400";
    };

    const getTextClass = () => {
        const colorMap: Record<string, string> = {
            "green-400": "text-green-400",
            "cyan-400": "text-cyan-400",
            "red-400": "text-red-400",
            "yellow-400": "text-yellow-400",
            "blue-500": "text-blue-500",
            "pink-500": "text-pink-500",
            "purple-400": "text-purple-400",
            "blue-400": "text-blue-400",
            "gray-300": "text-gray-300"
        };
        return colorMap[color] || "text-cyan-400";
    };

    const getBgClass = () => {
        const colorMap: Record<string, string> = {
            "green-400": "bg-green-400",
            "cyan-400": "bg-cyan-400",
            "red-400": "bg-red-400",
            "yellow-400": "bg-yellow-400",
            "blue-500": "bg-blue-500",
            "pink-500": "bg-pink-500",
            "purple-400": "bg-purple-400",
            "blue-400": "bg-blue-400",
            "gray-300": "bg-gray-300"
        };
        return colorMap[color] || "bg-cyan-400";
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    let start = 0;
                    const interval = setInterval(() => {
                        start += 2;
                        setAnimatedLevel(start);
                        if (start >= level) {
                            clearInterval(interval);
                        }
                    }, 20);

                    return () => clearInterval(interval);
                }
            },
            {threshold: 0.1}
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [level]);

    return (
        <div
            ref={elementRef}
            className={`bg-purple-800   p-4 rounded-lg border-2 ${getBorderClass()} transition-all duration-300 transform hover:scale-105`}
        >
            <h3 className={`text-xl font-bold ${getTextClass()} mb-2 flex items-center`}>
                <span className="mr-2 text-3xl">{icon}</span> {name}
            </h3>
            <div className="w-full bg-gray-700 h-4 rounded-full overflow-hidden">
                <div
                    className={`${getBgClass()} h-4 rounded-full transition-all duration-1000 ease-out`}
                    style={{width: `${animatedLevel}%`}}
                ></div>
            </div>
            <p className="mt-2 text-sm">Level {level}/100</p>
        </div>
    );
};