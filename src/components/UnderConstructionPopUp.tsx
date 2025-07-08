import React, {useEffect, useState} from 'react';
import {Construction, X} from 'lucide-react';

interface UnderConstructionPopupProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
}

type AnimationState = "entering" | "visible" | "exiting";

export const UnderConstructionPopup: React.FC<UnderConstructionPopupProps> = ({
                                                                                  isOpen,
                                                                                  onClose,
                                                                                  title = "UNDER_CONSTRUCTION"
                                                                              }) => {
    const [animationState, setAnimationState] = useState<AnimationState>("entering");
    useEffect(() => {
        if (isOpen) {
            setAnimationState("entering");
            const timer = setTimeout(() => {
                setAnimationState("visible");
            }, 300);
            return () => clearTimeout(timer);
        } else {
            setAnimationState("exiting");
        }
    }, [isOpen]);

    if (!isOpen && animationState === "exiting") {
        return null;
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-purple-900 bg-opacity-80 backdrop-blur-sm">
            <div
                className={`relative w-full max-w-md transform transition-all duration-300 ${
                    animationState === "entering" ? "translate-y-10 opacity-0" :
                        animationState === "exiting" ? "translate-y-10 opacity-0" :
                            "translate-y-0 opacity-100"
                }`}
            >
                <div
                    className="bg-gray-900 border-4 border-cyan-400 rounded-lg shadow-[0_0_15px_#22d3ee] overflow-hidden">
                    <div className="absolute -top-2 -left-2 w-4 h-4 bg-pink-500"></div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-pink-500"></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-pink-500"></div>
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-pink-500"></div>

                    <div className="flex items-center justify-between p-4 border-b-2 border-cyan-400 bg-purple-800">
                        <h3 className="text-2xl font-bold text-cyan-400 flex items-center">
                            <Construction className="mr-2 text-pink-500" size={24}/>
                            {title}
                        </h3>
                        <button
                            onClick={onClose}
                            className="bg-pink-500 hover:bg-pink-600 text-white p-1 rounded-md transition-colors duration-300"
                        >
                            <X size={20}/>
                        </button>
                    </div>

                    <div className="p-6 flex flex-col items-center">
                        <div className="relative w-24 h-24 mb-6">
                            <div className="absolute w-full h-full bg-green-400 animate-bounce"
                                 style={{animationDuration: '2s'}}>
                                <div className="absolute w-4 h-4 bg-black rounded-full left-4 top-4"></div>
                                <div className="absolute w-4 h-4 bg-black rounded-full right-4 top-4"></div>
                                <div className="absolute w-10 h-2 bg-black rounded-full left-7 top-14"></div>
                                <div className="absolute w-28 h-6 bg-yellow-400 -top-6 -left-2"></div>
                                <div className="absolute w-20 h-4 bg-yellow-500 rounded-t-full -top-10 left-2"></div>
                            </div>

                            <div className="absolute w-6 h-20 bg-gray-600 -right-8 top-8 rotate-45"></div>
                        </div>

                        <div className="text-center mb-6">
                            <p className="text-xl text-pink-500 font-bold mb-2">LOADING_MODULE.exe</p>
                            <p className="text-cyan-400 mb-4">This feature is currently under development.</p>
                            <div
                                className="w-full bg-purple-800 h-4 rounded-full overflow-hidden border-2 border-cyan-400">
                                <div className="bg-pink-500 h-full w-2/3 animate-pulse"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

