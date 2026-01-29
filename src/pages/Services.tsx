import { motion, useScroll, useTransform } from 'framer-motion';
import { MotionWrapper } from '../components/motion/MotionWrapper';
import { TiltCard } from '../components/motion/TiltCard';
import { Spotlight } from '../components/motion/Spotlight';
import { MagneticButton } from '../components/ui/MagneticButton';
import { servicesData } from '../data/mockData';


export const Services = () => {
    const { scrollYProgress } = useScroll();

    return (
        <div className="w-full bg-white dark:bg-slate-950 min-h-screen relative overflow-hidden">
            <Spotlight />
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 glow-blur -z-10" />

            {/* Page Header */}
            <section className="bg-slate-50 dark:bg-slate-900 py-20 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-slate text-slate-300 dark:text-slate-800 opacity-20" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <MotionWrapper>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                            {"Comprehensive IT Solutions".split(" ").map((word, i) => (
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
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
                            From strategic cloud migration to 24/7 reliability engineering, we deliver the full spectrum of technical capabilities required by the modern enterprise.
                        </p>
                    </MotionWrapper>
                </div>
            </section>

            {/* Service Grid */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-12">
                        {servicesData.map((service, index) => (
                            <MotionWrapper
                                key={index}
                                className="sticky top-24"
                                delay={0.1}
                            >
                                <TiltCard className="w-full">
                                    <motion.div
                                        style={{
                                            scale: useTransform(scrollYProgress, [0, 1], [1, 0.95 + (index * 0.01)])
                                        }}
                                        className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-12 border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col md:flex-row gap-12 group hover:border-blue-500/30 glass-card min-h-[400px] items-center"
                                    >
                                        <div className="flex-1">
                                            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-blue-500/20">
                                                <service.icon className="h-8 w-8 text-white" />
                                            </div>
                                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">{service.title}</h3>
                                            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                                {service.description}
                                            </p>
                                            <div className="grid grid-cols-2 gap-4">
                                                {service.features.map((feature, fIdx) => (
                                                    <div key={fIdx} className="flex items-center text-slate-500 dark:text-slate-400 font-medium">
                                                        <div className="h-2 w-2 rounded-full bg-blue-500 mr-3" />
                                                        {feature}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2 aspect-video bg-slate-100 dark:bg-slate-800 rounded-3xl flex items-center justify-center border border-slate-200 dark:border-slate-800 relative overflow-hidden group/img shrink-0 self-stretch">
                                            <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 z-10" />
                                            {service.image ? (
                                                <img
                                                    src={service.image}
                                                    alt={service.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                            ) : (
                                                <service.icon className="w-24 h-24 text-slate-300 dark:text-slate-700 opacity-20" />
                                            )}
                                        </div>
                                    </motion.div>
                                </TiltCard>
                            </MotionWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* Differentiator Strip */}
            <section className="py-20 bg-navy-900 dark:bg-slate-950 border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <MotionWrapper>
                        <h2 className="text-3xl font-bold text-white mb-8">Why Enterprise Leaders Choose Us</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div>
                                <div className="text-4xl font-bold text-blue-500 mb-2">99.99%</div>
                                <div className="heading font-semibold text-white">Uptime SLA</div>
                                <div className="text-sm text-slate-400 mt-2">Guaranteed reliability for critical workloads</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-blue-500 mb-2">ISO</div>
                                <div className="heading font-semibold text-white">27001 Certified</div>
                                <div className="text-sm text-slate-400 mt-2">Global standard information security</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-blue-500 mb-2">24/7</div>
                                <div className="heading font-semibold text-white">Engineering Support</div>
                                <div className="text-sm text-slate-400 mt-2">Always-on expert response teams</div>
                            </div>
                        </div>
                    </MotionWrapper>
                </div>
            </section>
        </div>
    );
};
