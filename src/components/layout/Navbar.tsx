import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Server } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

import { navLinks } from '../../data/mockData';

export const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Logic for transparent navbar on home page
    const isHomePage = location.pathname === '/';
    // If we are on home page, only show background when scrolled.
    // If NOT on home page, always show background (isScrolled = true).
    const isScrolled = scrolled || !isHomePage;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);


    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b",
                isScrolled
                    ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-sm border-slate-200 dark:border-slate-800"
                    : "bg-transparent border-transparent"
            )}
        >
            {/* Scroll Progress Bar */}
            <motion.div
                className="absolute top-0 left-0 right-0 h-[3px] bg-blue-600 origin-left z-50"
                style={{ scaleX }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 group">
                        <div className={cn(
                            "p-2 rounded-lg transition-colors duration-300",
                            isScrolled ? "bg-navy-900 dark:bg-blue-600" : "bg-blue-600 dark:bg-white/10 dark:backdrop-blur-sm"
                        )}>
                            <Server className="h-6 w-6 text-white" />
                        </div>
                        <span className={cn(
                            "font-heading font-bold text-xl tracking-tight transition-colors",
                            isScrolled ? "text-slate-900 dark:text-white" : "text-slate-900 dark:text-white"
                        )}>
                            Digi<span className={cn(
                                "transition-colors",
                                isScrolled ? "text-blue-600 dark:text-blue-400" : "text-blue-600 dark:text-blue-400"
                            )}>Stack</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={cn(
                                    "text-sm font-medium transition-colors duration-200",
                                    location.pathname === link.path
                                        ? "text-blue-600 dark:text-blue-400"
                                        : isScrolled
                                            ? "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                                            : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <button
                            onClick={toggleTheme}
                            className={cn(
                                "p-2 rounded-full transition-colors",
                                isScrolled
                                    ? "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
                                    : "hover:bg-slate-100 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300"
                            )}
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        </button>

                        <Link
                            to="/contact"
                            className={cn(
                                "px-5 py-2.5 text-sm font-semibold rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5",
                                isScrolled
                                    ? "bg-navy-900 dark:bg-blue-600 text-white hover:bg-slate-800 dark:hover:bg-blue-700"
                                    : "bg-blue-600 dark:bg-white text-white dark:text-navy-900 hover:bg-blue-700 dark:hover:bg-slate-100"
                            )}
                        >
                            Consultation
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={toggleTheme}
                            className={cn(
                                "p-2 rounded-full transition-colors",
                                isScrolled
                                    ? "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
                                    : "hover:bg-slate-100 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300"
                            )}
                        >
                            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={cn(
                                "p-2 rounded-md transition-colors",
                                isScrolled
                                    ? "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white"
                                    : "hover:bg-slate-100 dark:hover:bg-white/10 text-slate-900 dark:text-white"
                            )}
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden overflow-hidden bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 shadow-xl"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={cn(
                                        "block px-3 py-3 rounded-md text-base font-medium transition-colors",
                                        location.pathname === link.path
                                            ? "bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400"
                                            : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4">
                                <Link
                                    to="/contact"
                                    className="block w-full text-center px-4 py-3 bg-navy-900 dark:bg-blue-600 text-white font-semibold rounded-lg hover:bg-slate-800 dark:hover:bg-blue-700"
                                >
                                    Book Consultation
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
