import { motion } from 'framer-motion';
import { MotionWrapper } from '../components/motion/MotionWrapper';
import { Spotlight } from '../components/motion/Spotlight';
import { MagneticButton } from '../components/ui/MagneticButton';
import { Briefcase } from 'lucide-react';
import { aboutData } from '../data/mockData';

export const About = () => (
    <div className="w-full bg-white dark:bg-slate-950 min-h-screen">
        <Spotlight />
        {/* Page Header */}
        <section className="relative bg-slate-900 py-20 border-b border-slate-800 overflow-hidden">
            <div className="absolute inset-0 bg-dot-pattern opacity-10" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <MotionWrapper>
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            {aboutData.title.split(" ").map((word, i) => (
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
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                            {aboutData.subtitle}
                        </p>
                    </div>
                </MotionWrapper>
            </div>
        </section>

        {/* Philosophy Grid */}
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <MotionWrapper>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Our DNA</h2>
                            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                {aboutData.dna.map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {aboutData.stats.map((stat, idx) => (
                                <div key={idx} className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center hover:border-blue-500 transition-colors">
                                    <span className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.value}</span>
                                    <span className="text-sm text-slate-500 font-medium uppercase tracking-wide">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </MotionWrapper>

                {/* Values */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {aboutData.values.map((val, idx) => (
                        <MotionWrapper key={idx} delay={0.2 * idx}>
                            <div className="p-8 border-l-4 border-blue-500 bg-white dark:bg-slate-900 shadow-sm rounded-r-xl">
                                <val.icon className="w-8 h-8 text-slate-700 dark:text-slate-300 mb-4" />
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{val.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400">{val.desc}</p>
                            </div>
                        </MotionWrapper>
                    ))}
                </div>
            </div>
        </section>

        {/* Leadership Teaser (Generic) */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <MotionWrapper>
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Join Our Engineering Team</h2>
                            <p className="text-slate-600 dark:text-slate-400 max-w-xl">
                                We are always looking for exceptional talent. If you are passionate about cloud infrastructure and automation, we want to hear from you.
                            </p>
                        </div>
                        <div className="mt-8 md:mt-0">
                            <MagneticButton distance={0.2}>
                                <button className="px-8 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-semibold rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center transition-all shadow-lg hover:shadow-slate-200 dark:hover:shadow-none">
                                    <Briefcase className="w-5 h-5 mr-2" />
                                    View Open Positions
                                </button>
                            </MagneticButton>
                        </div>
                    </div>
                </MotionWrapper>
            </div>
        </section>
    </div>
);
