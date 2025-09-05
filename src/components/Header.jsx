
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from '../assets/logo.png'


export default function Header({ setIsSignUp, setIsLogin }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="flex items-center justify-between px-4 sm:px-6 py-4 ">
            {/* Logo */}
            <div className="flex items-center z-20">
                <img src={Logo} alt="North Star Logo" className="w-30 h-auto mr-2" />

            </div>

            {/* Mobile menu button */}
            <button
                className="md:hidden z-20 p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? (
                    <X className="w-6 h-6 text-white" />
                ) : (
                    <Menu className="w-6 h-6 text-white" />
                )}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
                <a href="#" className="text-blue-400 border-b-2 border-blue-400 pb-1 text-sm">Home</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Investor</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Products</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Roadmap</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">About</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Support</a>
                <button className="px-6 py-2 text-white font-bold rounded-md hover:text-blue-300 transition-colors text-sm bg-[#00A3FF]" onClick={setIsLogin}>Log In</button>
                <button className="px-6 py-2 bg-[#202E48] hover:bg-blue-600 rounded-md text-white font-bold transition-colors text-sm" onClick={setIsSignUp}>Sign Up</button>
            </nav>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-800 border-t border-slate-700 z-10">
                    <nav className="flex flex-col px-4 py-6 space-y-4">
                        <a href="#" className="text-blue-400 border-b border-blue-400 pb-2">Home</a>
                        <a href="#" className="text-gray-300 hover:text-white transition-colors py-2">Investor</a>
                        <a href="#" className="text-gray-300 hover:text-white transition-colors py-2">Products</a>
                        <a href="#" className="text-gray-300 hover:text-white transition-colors py-2">Roadmap</a>
                        <a href="#" className="text-gray-300 hover:text-white transition-colors py-2">About</a>
                        <a href="#" className="text-gray-300 hover:text-white transition-colors py-2">Support</a>
                        <div className="flex flex-col space-y-3 pt-4 border-t border-slate-700">
                            <button className="px-4 py-2 text-blue-400 hover:text-blue-300 transition-colors text-left" onClick={setIsLogin} >Log In</button>
                            <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white transition-colors" onClick={setIsSignUp} >Sign Up</button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};


