export const Footer = () => {
    return (
        <>
            <footer className="bg-gray-900 border-t-4 border-cyan-400 py-6 relative">
                {/* Floating pixel character */}
                <div
                    className="absolute left-100 bottom-8 w-8 h-8 animate-bounce"
                    style={{
                        animationDuration: '2s',
                    }}
                >
                    <div className="w-full h-full bg-cyan-400 relative">
                        <div className="absolute w-2 h-2 bg-black rounded-full left-1 top-1"></div>
                        <div className="absolute w-2 h-2 bg-black rounded-full right-1 top-1"></div>
                        <div className="absolute w-4 h-1 bg-black rounded-full left-2 bottom-2"></div>
                    </div>
                </div>

                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-center items-center">
                        <div className="mb-4 md:mb-0 text-center md:text-left">
                            <p className="text-sm">© 2025 ROA-THE-DEV | All rights reserved</p>
                            <p className="text-xs text-gray-400">Made with pixel love 👾</p>
                        </div>

                    </div>
                </div>
                <div
                    className="absolute right-100 bottom-8 w-8 h-8 animate-bounce"
                    style={{
                        animationDuration: '2s',
                    }}
                >
                    <div className="w-full h-full bg-purple-400 relative">
                        <div className="absolute w-2 h-2 bg-black rounded-full left-1 top-1"></div>
                        <div className="absolute w-2 h-2 bg-black rounded-full right-1 top-1"></div>
                        <div className="absolute w-4 h-1 bg-black rounded-full left-2 bottom-2"></div>
                    </div>
                </div>
            </footer>
        </>
    )
}