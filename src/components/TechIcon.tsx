import * as React from "react";
import { useState } from "react";

interface TechIconProps {
    icon: React.ReactNode;
    label: string;
    category?: 'backend' | 'frontend' | 'other';
}

export const TechIcon: React.FC<TechIconProps> = ({icon, label, category = 'other'}) => {
    const [isHovered, setIsHovered] = useState(false);

    // Define category-based colors
    const getCategoryColor = () => {
        switch(category) {
            case 'backend':
                return 'text-cyan-400';
            case 'frontend':
                return 'text-pink-500';
            default:
                return 'text-white';
        }
    };

    return (
        <div
            className={`flex flex-col items-center mx-2 ${isHovered ? '' : 'animate-pulse'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`text-2xl mb-1 transition-transform duration-300 ${isHovered ? 'scale-125' : ''}`}>
                {icon}
            </div>
            <span className={`text-xs ${getCategoryColor()}`}>{label}</span>
        </div>
    );
};