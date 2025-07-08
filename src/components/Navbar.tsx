import {useState} from "react";

export const Navbar = () => {
    const [hoverNav, setHoverNav] = useState<string | null>(null);
    return (
        <>
            <nav className="bg-gray-900 border-b-4 border-pink-500 sticky top-0 z-50">
                <div className="container flex  mx-auto px-4">
                    <ul className="flex flex-wrap justify-center md:justify-start">
                        {[
                            {label: 'HOME', id: 'home'},
                            {label: 'ABOUT', id: 'about'},
                            {label: 'PROJECTS', id: 'projects'},
                            {label: 'SKILLS', id: 'skills'},
                            {label: 'CONTACT', id: 'contact'}
                        ].map((item, index) => (
                            <li
                                key={item.id}
                                className={`py-3 px-4 cursor-pointer transition-colors duration-300 
                  ${index < 4 ? 'border-r-2 border-purple-700' : ''}
                  ${hoverNav === item.id ? 'bg-pink-500' : 'hover:bg-pink-500'}`}
                                onMouseEnter={() => setHoverNav(item.id)}
                                onMouseLeave={() => setHoverNav(null)}
                                onClick={() => document.getElementById(item.id)?.scrollIntoView({behavior: 'smooth'})}
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>

                </div>
            </nav>
        </>
    )
}