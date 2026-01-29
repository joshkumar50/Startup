import { motion, useReducedMotion } from 'framer-motion';
import React from 'react';

interface MotionWrapperProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export const MotionWrapper = ({ children, className = '', delay = 0 }: MotionWrapperProps) => {
    const shouldReduceMotion = useReducedMotion();

    const variants = {
        hidden: {
            opacity: 0,
            y: shouldReduceMotion ? 0 : 16,
            scale: shouldReduceMotion ? 1 : 0.98,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                delay: delay,
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
};
