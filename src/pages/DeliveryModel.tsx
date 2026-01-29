import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { MotionWrapper } from '../components/motion/MotionWrapper';
import { TiltCard } from '../components/motion/TiltCard';
import { ShieldCheck } from 'lucide-react';
import { processSteps, governanceData } from '../data/mockData';

export const DeliveryModel = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="w-full bg-slate-50 dark:bg-slate-950 min-h-screen">
            {/* Page Header */}
            <section className="relative bg-slate-900 py-32 border-b border-slate-800 overflow-hidden">
                <div className="absolute inset-0 bg-grid-slate opacity-10" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <MotionWrapper>
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mb-8 border border-blue-500/20">
                            Engagement Framework
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                            Precision <span className="text-blue-500">Execution</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
                            Our delivery model is engineered for transparency and assured outcomes,
                            governed by strict operational protocols.
                        </p>
                    </MotionWrapper>
                </div>
            </section>

            {/* Interactive Timeline */}
            <section className="py-32 relative overflow-hidden" ref={containerRef}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    {/* Animated Drawing Path */}
                    <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800 lg:-translate-x-1/2 overflow-hidden">
                        <motion.div
                            className="w-full h-full bg-blue-600 origin-top"
                            style={{ scaleY }}
                        />
                    </div>

                    <div className="space-y-24 lg:space-y-32">
                        {processSteps.map((step, idx) => (
                            <div key={idx} className={`relative flex flex-col lg:flex-row items-center justify-between ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                {/* Empty side for layout balance on desktop */}
                                <div className="hidden lg:block w-5/12" />

                                {/* Center Progress Dot */}
                                <div className="absolute left-8 lg:left-1/2 lg:-translate-x-1/2 z-20 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-4 border-slate-200 dark:border-slate-800 group-hover:border-blue-600 transition-colors" />

                                {/* Content Card with Step Icon */}
                                <div className="w-full lg:w-5/12 pl-20 lg:pl-0">
                                    <MotionWrapper delay={0.1}>
                                        <TiltCard>
                                            <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl relative glass-card group hover:border-blue-500/30 transition-all shadow-xl shadow-slate-200/50 dark:shadow-none">
                                                <div className="absolute -left-12 lg:-left-auto lg:-top-6 lg:right-8 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/40 z-30">
                                                    <step.icon className="w-6 h-6 text-white" />
                                                </div>
                                                <div className="text-blue-600 dark:text-blue-500 font-bold text-xs uppercase tracking-widest mb-4">Phase 0{idx + 1}</div>
                                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">{step.title}</h3>
                                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                                                    {step.desc}
                                                </p>
                                            </div>
                                        </TiltCard>
                                    </MotionWrapper>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Governance Excellence */}
            <section className="py-32 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-dot-pattern opacity-5" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <MotionWrapper>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">Accountability is <br /><span className="text-blue-500">Built-in.</span></h2>
                            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                                Our engagement model is built on transparency. Every project includes a dedicated Account Manager and Technical Lead, ensuring clear communication channels and strict adherence to SLAs.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {governanceData.map((item) => (
                                    <div key={item} className="p-4 bg-white/5 dark:bg-slate-800/30 rounded-xl border border-white/10 flex items-center group hover:bg-white/10 transition-colors">
                                        <ShieldCheck className="w-5 h-5 text-blue-500 mr-3 group-hover:scale-110 transition-transform" />
                                        <span className="font-medium text-slate-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </MotionWrapper>

                        <MotionWrapper delay={0.2}>
                            <div className="relative p-1 bg-gradient-to-br from-blue-600/50 to-indigo-600/50 rounded-3xl h-[400px]">
                                <div className="absolute inset-0 bg-slate-900 rounded-3xl flex items-center justify-center overflow-hidden">
                                    <div className="absolute inset-0 bg-grid-slate opacity-20" />
                                    <div className="relative text-center p-12">
                                        <div className="text-6xl font-bold text-white mb-4">99.9%</div>
                                        <div className="text-slate-400 font-medium uppercase tracking-widest text-sm">Service Level Commitment</div>
                                    </div>
                                </div>
                            </div>
                        </MotionWrapper>
                    </div>
                </div>
            </section>
        </div>
    );
};
