import React, { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const InteractiveGrid: React.FC = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden">
            <motion.div
                className="absolute inset-0 opacity-[0.15] dark:opacity-[0.2]"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px), 
                                     linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: `radial-gradient(400px circle at ${springX}px ${springY}px, black, transparent 80%)`,
                    WebkitMaskImage: `radial-gradient(400px circle at ${springX}px ${springY}px, black, transparent 80%)`,
                }}
            />
        </div>
    );
};
