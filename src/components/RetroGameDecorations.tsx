const PixelCloud = () => (
    <div className="absolute top-2.5 right-50 w-16 h-10 animate-float">
        <svg viewBox="0 0 32 20" fill="currentColor" className="text-cyan-200">
            <rect x="8" y="4" width="4" height="4"/>
            <rect x="12" y="4" width="4" height="4"/>
            <rect x="16" y="4" width="4" height="4"/>
            <rect x="4" y="8" width="4" height="4"/>
            <rect x="8" y="8" width="4" height="4"/>
            <rect x="12" y="8" width="4" height="4"/>
            <rect x="16" y="8" width="4" height="4"/>
            <rect x="20" y="8" width="4" height="4"/>
            <rect x="24" y="8" width="4" height="4"/>
            <rect x="4" y="12" width="4" height="4"/>
            <rect x="8" y="12" width="4" height="4"/>
            <rect x="12" y="12" width="4" height="4"/>
            <rect x="16" y="12" width="4" height="4"/>
            <rect x="20" y="12" width="4" height="4"/>
            <rect x="24" y="12" width="4" height="4"/>
        </svg>
    </div>
);

 const PixelCoin = () => (
    <div className="absolute bottom-20 left-44 w-10 h-10 animate-spin-slow">
        <svg viewBox="0 0 24 24" className="text-yellow-400">
            <g fill="currentColor">
                <rect x="8" y="4" width="8" height="2"/>
                <rect x="6" y="6" width="12" height="2"/>
                <rect x="4" y="8" width="16" height="2"/>
                <rect x="4" y="10" width="16" height="2"/>
                <rect x="4" y="12" width="16" height="2"/>
                <rect x="4" y="14" width="16" height="2"/>
                <rect x="6" y="16" width="12" height="2"/>
                <rect x="8" y="18" width="8" height="2"/>
            </g>
        </svg>
    </div>
);

 const PixelHeart = () => (
    <div className="absolute top-18 left-10 w-12 h-12 animate-pixel-pulse">
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-red-500">
            <path
                d="M6,6 h2 v2 h2 v2 h4 v-2 h2 v-2 h2 v2 h2 v2 h2 v4 h-2 v2 h-2 v2 h-2 v2 h-4 v-2 h-2 v-2 h-2 v-2 h-2 v-4 h2 v-2 h2 z"/>
        </svg>
    </div>
);
 const PixelGlowingLight = () => {
    return <>
        <div className="absolute bottom-4 left-8 w-4 h-4 bg-cyan-400 animate-pulse"></div>
        <div className="absolute top-8 right-8 w-4 h-4 bg-pink-500 animate-pulse"
             style={{animationDelay: "0.5s"}}></div>
        <div className="absolute bottom-12 right-12 w-3 h-3 bg-purple-400 animate-pulse"
             style={{animationDelay: "1s"}}></div>
    </>
}

 const PixelSword = () => (
    <div className="absolute bottom-12 right-9 w-12 h-12 animate-float">
        <svg viewBox="0 0 24 24" fill="none" className="text-cyan-400">
            <g fill="currentColor">
                <rect x="11" y="4" width="2" height="2"/>
                <rect x="11" y="6" width="2" height="2"/>
                <rect x="11" y="8" width="2" height="2"/>
                <rect x="11" y="10" width="2" height="2"/>
                <rect x="11" y="12" width="2" height="2"/>
                <rect x="9" y="12" width="2" height="2"/>
                <rect x="13" y="12" width="2" height="2"/>
                <rect x="11" y="14" width="2" height="6"/>
                <rect x="9" y="16" width="2" height="2"/>
                <rect x="13" y="16" width="2" height="2"/>
            </g>
        </svg>
    </div>
);

 const PixelPowerUp = () => (
    <div className="absolute top-24 right-12 w-12 h-12 animate-power-up">
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-green-400">
            <path d="M8,6 h8 v2 h2 v8 h-2 v2 h-8 v-2 h-2 v-8 h2 z M10,10 h4 v4 h-4 z"/>
        </svg>
    </div>
);

 const PixelGhost = () => (
    <div className="absolute top-40 left-12 w-14 h-14 animate-ping delay-500">
        <svg viewBox="0 0 32 32" fill="currentColor" className="text-purple-300">
            <path
                d="M12,4 h8 v4 h4 v12 h-4 v4 h-2 v-2 h-4 v2 h-2 v-4 h-4 v-12 h4 z M12,12 h4 v4 h-4 z M20,12 h4 v4 h-4 z"/>
        </svg>
    </div>
);





 const PixelFireball = () => (
    <div className="absolute bottom-24 right-8 w-10 h-10 animate-glow">
        <svg viewBox="0 0 20 20" fill="currentColor" className="text-orange-500">
            <path d="M8,4 h4 v2 h2 v2 h2 v4 h-2 v2 h-2 v2 h-4 v-2 h-2 v-2 h-2 v-4 h2 v-2 h2 z"/>
        </svg>
    </div>
);

 const PixelChest = () => (
    <div className="absolute top-60 right-12 w-16 h-12 animate-bounce delay-200">
        <svg viewBox="0 0 32 24" fill="currentColor" className="text-amber-600">
            <path d="M4,6 h24 v12 h-24 z M4,10 h24 v2 h-24 z M14,12 h4 v4 h-4 z"/>
            <rect x="14" y="12" width="4" height="4" className="text-yellow-300"/>
        </svg>
    </div>
);

 const PixelGem = () => (
    <div className="absolute bottom-32 left-10 w-10 h-12 animate-power-up delay-100">
        <svg viewBox="0 0 20 24" fill="currentColor" className="text-blue-400">
            <path d="M8,4 h4 v2 h2 v2 h2 v4 h-2 v4 h-2 v2 h-4 v-2 h-2 v-4 h-2 v-4 h2 v-2 h2 z"/>
        </svg>
    </div>
);



 const PixelStar = () => {
    return (<div className="absolute top-90 left-8 w-10 h-10 animate-float" style={{animationDelay: "0.6s"}}>
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400">
            <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"/>
        </svg>
    </div>)
}

 export const RetroGameDecorations = () => (
    <>
        <PixelCloud/>
        <PixelCoin/>
        <PixelHeart/>
        <PixelSword/>
        <PixelPowerUp/>
        <PixelGhost/>
        <PixelFireball/>
        <PixelChest/>
        <PixelGem/>
        <PixelStar/>
        <PixelGlowingLight/>

    </>
);