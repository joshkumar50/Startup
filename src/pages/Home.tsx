import { Cloud, Shield, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MotionWrapper } from '../components/motion/MotionWrapper';
import { TiltCard } from '../components/motion/TiltCard';
import { Spotlight } from '../components/motion/Spotlight';
import { MagneticButton } from '../components/ui/MagneticButton';
import { HeroCanvas } from '../components/motion/HeroCanvas';
import { heroData } from '../data/mockData';

export const Home = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);
    const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <div className="w-full relative overflow-x-hidden bg-white dark:bg-slate-950">
            <Spotlight />
            <HeroCanvas />
            {/* Ambient Background Elements with Parallax */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
                <motion.div
                    style={{ y: y1 }}
                    className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-blue-500/10 dark:bg-blue-600/20 rounded-full glow-blur animate-pulse"
                />
                <motion.div
                    style={{ y: y2 }}
                    className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] bg-indigo-500/10 dark:bg-indigo-600/20 rounded-full glow-blur animate-pulse"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-dot-pattern opacity-30" />
            </div>

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center bg-slate-50/50 dark:bg-slate-950/50 overflow-hidden transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <motion.div style={{ opacity: opacityHero }}>
                        <div className="max-w-4xl">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
                                    {heroData.title.split(heroData.highlightText)[0].split(" ").map((word, i) => (
                                        <motion.span
                                            key={i}
                                            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                                            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                            transition={{ duration: 0.5, delay: i * 0.1 }}
                                            className="inline-block mr-3"
                                        >
                                            {word}
                                        </motion.span>
                                    ))}
                                    <motion.span
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6, delay: 0.8 }}
                                        className="text-blue-600 dark:text-blue-500"
                                    >
                                        {heroData.highlightText}
                                    </motion.span>
                                    {heroData.title.split(heroData.highlightText)[1]}
                                </h1>
                            </motion.div>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mb-10 leading-relaxed text-balance"
                            >
                                {heroData.subtitle}
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                                className="flex flex-col sm:flex-row gap-6 mt-10"
                            >
                                <MagneticButton distance={0.3}>
                                    <Link
                                        to="/contact"
                                        className="inline-flex justify-center items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/25"
                                    >
                                        {heroData.ctaPrimary}
                                    </Link>
                                </MagneticButton>

                                <MagneticButton distance={0.2}>
                                    <Link
                                        to="/services"
                                        className="inline-flex justify-center items-center px-8 py-4 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all hover:text-slate-900 dark:hover:text-white"
                                    >
                                        {heroData.ctaSecondary}
                                    </Link>
                                </MagneticButton>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Trust/stack bar */}
            <section className="py-10 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-8">
                        Enterprise Technology Stack
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        {heroData.techStack.map((tech) => (
                            <span key={tech} className="text-xl md:text-2xl font-bold text-slate-400 dark:text-slate-500 font-heading">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="py-24 bg-white dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <MotionWrapper>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                                Infrastructure as a Competitive Advantage
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                                We move beyond simple maintenance to provide strategic architecture that drives business agility.
                            </p>
                        </div>
                    </MotionWrapper>

                    <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:grid-rows-2 h-auto md:h-[600px]">
                        {/* Box 1: Large Feature */}
                        <MotionWrapper delay={0.1} className="md:col-span-4 md:row-span-2 h-full">
                            <TiltCard className="h-full">
                                <div className="p-8 md:p-12 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 h-full flex flex-col justify-end group glass-card relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Cloud className="w-48 h-48 -rotate-12" />
                                    </div>
                                    <div className="relative z-10 max-w-xl">
                                        <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/30">
                                            <Cloud className="h-8 w-8 text-white" />
                                        </div>
                                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                                            Cloud Native First Architecture
                                        </h3>
                                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                                            We architect specifically for the elasticity and resilience of modern cloud platforms. Our solutions aren't just hosted in the cloud; they are built to exploit every advantage of AWS and Azure ecosystems for maximum business agility.
                                        </p>
                                        <div className="flex flex-wrap gap-3">
                                            {['Multi-Region HA', 'Auto-Scaling', 'Serverless', 'Edge Computing'].map(tag => (
                                                <span key={tag} className="px-3 py-1 bg-white/50 dark:bg-slate-800/50 rounded-full text-xs font-semibold text-slate-500 dark:text-slate-400 border border-slate-200/50 dark:border-slate-700/50">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </TiltCard>
                        </MotionWrapper>

                        {/* Box 2: Security */}
                        <MotionWrapper delay={0.2} className="md:col-span-2 md:row-span-1 h-full">
                            <TiltCard className="h-full">
                                <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 h-full flex flex-col group glass-card">
                                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                                        <Shield className="h-6 w-6 text-indigo-600 dark:text-indigo-400 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                        Security by Design
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                        Embedding compliance and security controls directly into the infrastructure code pipelines for zero-trust environments.
                                    </p>
                                </div>
                            </TiltCard>
                        </MotionWrapper>

                        {/* Box 3: Performance */}
                        <MotionWrapper delay={0.3} className="md:col-span-2 md:row-span-1 h-full">
                            <TiltCard className="h-full">
                                <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 h-full flex flex-col group glass-card">
                                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                                        <Activity className="h-6 w-6 text-emerald-600 dark:text-emerald-400 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                        Operational Excellence
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                        24/7 monitoring, proactive healing, and strict SLAs for mission-critical workloads across all clusters.
                                    </p>
                                </div>
                            </TiltCard>
                        </MotionWrapper>
                    </div>
                </div>
            </section>

            {/* Global Impact Section */}
            <section className="py-24 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <MotionWrapper>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Our Global Impact</h2>
                            <p className="text-slate-600 dark:text-slate-400">Engineering excellence at a global scale.</p>
                        </div>
                    </MotionWrapper>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { label: "10M+", sub: "Managed Requests/sec", icon: "⚡" },
                            { label: "99.99%", sub: "Uptime Commitment", icon: "🛡️" },
                            { label: "50+", sub: "Data Centers Worldwide", icon: "🌐" },
                            { label: "24/7", sub: "Expert Engineering", icon: "👨‍💻" },
                            { label: "Zero", sub: "Security Breaches", icon: "🔒" },
                            { label: "100+", sub: "Certified Architects", icon: "🏗️" },
                        ].map((stat, i) => (
                            <MotionWrapper key={i} delay={i * 0.1}>
                                <TiltCard className="h-full">
                                    <div className="p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 glass-card flex flex-col justify-center h-full group hover:border-blue-500/50 transition-all">
                                        <div className="text-5xl mb-6">{stat.icon}</div>
                                        <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">{stat.label}</div>
                                        <div className="text-slate-500 dark:text-slate-400 font-medium uppercase tracking-widest text-xs">{stat.sub}</div>
                                    </div>
                                </TiltCard>
                            </MotionWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-navy-900 dark:bg-slate-900 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <MotionWrapper>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                            Ready to modernize your infrastructure?
                        </h2>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <Link to="/contact" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-colors">
                                Book a Technical Review
                            </Link>
                        </div>
                    </MotionWrapper>
                </div>
            </section>
        </div>
    );
};
