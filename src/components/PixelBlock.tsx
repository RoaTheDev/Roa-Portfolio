import * as React from "react";
import { useEffect, useState } from "react";

interface PixelBlockProps {
    x: number;
    y: number;
    delay: number;
}

export const PixelBlock: React.FC<PixelBlockProps> = ({ x, y, delay }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(true);
        }, delay);

        return () => clearTimeout(timeout);
    }, [delay]);

    return (
        <div
            className={`absolute w-4 h-4 bg-cyan-400 transition-opacity duration-1000 ${isVisible ? 'opacity-30' : 'opacity-0'}`}
            style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: `rotate(${Math.random() * 90}deg)`,
            }}
        ></div>
    );
};