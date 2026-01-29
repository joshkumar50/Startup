import React, { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const Spotlight: React.FC = () => {
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
        <motion.div
            className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
            style={{
                background: `radial-gradient(600px circle at ${springX}px ${springY}px, rgba(59, 130, 246, 0.08), transparent 80%)`,
            }}
        />
    );
};
