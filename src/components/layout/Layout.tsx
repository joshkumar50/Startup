import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { SmoothScroll } from './SmoothScroll';
import { GrainOverlay } from '../ui/GrainOverlay';
import { InteractiveGrid } from '../ui/InteractiveGrid';

export const Layout = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <SmoothScroll>
            <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300 relative">
                <GrainOverlay />
                <InteractiveGrid />
                <ScrollToTop />
                <Navbar />

                <main className={`flex-grow ${isHomePage ? '' : 'pt-20'} relative z-10`}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={location.pathname}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                            <Outlet />
                        </motion.div>
                    </AnimatePresence>
                </main>

                <Footer />
            </div>
        </SmoothScroll>
    );
};
