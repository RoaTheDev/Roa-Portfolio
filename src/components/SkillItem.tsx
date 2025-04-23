import * as React from "react";
import {useEffect, useRef, useState} from "react";

interface SkillItemProps {
    name: string;
    level: number;
    color: string;
    icon: React.ReactNode;
}

export const SkillItem: React.FC<SkillItemProps> = ({ name, level, color, icon }) => {
    const [animatedLevel, setAnimatedLevel] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    // Color mapping for Tailwind classes
    const getColorClass = (colorName: string, type: 'border' | 'bg' | 'text' | 'shadow') => {
        const colorMap: Record<string, string> = {
            'green-400': 'green-400',
            'cyan-400': 'cyan-400',
            'red-400': 'red-400',
            'yellow-400': 'yellow-400',
            'blue-500': 'blue-500',
            'pink-500': 'pink-500',
            'purple-400': 'purple-400',
            'blue-400': 'blue-400'
        };

        const baseClass = type === 'border' ? 'border-' :
            type === 'bg' ? 'bg-' :
                type === 'text' ? 'text-' : 'shadow-glow-';

        return `${baseClass}${colorMap[colorName] || 'cyan-400'}`;
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    // Animation effect when the component becomes visible
    useEffect(() => {
        if (isVisible) {
            let start = 0;
            const interval = setInterval(() => {
                start += 2;
                setAnimatedLevel(Math.min(start, level));
                if (start >= level) {
                    clearInterval(interval);
                }
            }, 20);

            return () => clearInterval(interval);
        }
    }, [isVisible, level]);

    // Custom shadow class for hover effect
    const hoverShadowClass = `hover:shadow-lg hover:shadow-${color}/30`;

    return (
        <div
            ref={elementRef}
            className={`bg-purple-800 p-4 rounded-lg border-2 ${getColorClass(color, 'border')} ${hoverShadowClass} transition-all duration-300 transform hover:scale-105`}
        >
            <h3 className={`text-xl font-bold ${getColorClass(color, 'text')} mb-2 flex items-center`}>
                <span className="mr-2">{icon}</span> {name}
            </h3>
            <div className="w-full bg-gray-700 h-4 rounded-full overflow-hidden">
                <div
                    className={`${getColorClass(color, 'bg')} h-4 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${animatedLevel}%` }}
                ></div>
            </div>
            <p className="mt-2 text-sm">Level {animatedLevel}/100</p>
        </div>
    );
};