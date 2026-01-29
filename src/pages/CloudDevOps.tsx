import { motion } from 'framer-motion';
import { MotionWrapper } from '../components/motion/MotionWrapper';
import { TiltCard } from '../components/motion/TiltCard';
import { Spotlight } from '../components/motion/Spotlight';
import { CheckCircle2, Box, Layers, Cpu, Cloud, Rocket, Activity } from 'lucide-react';
import { techToolchain } from '../data/mockData';


export const CloudDevOps = () => (
    <div className="w-full bg-white dark:bg-slate-950 min-h-screen">
        <Spotlight />
        {/* Page Header */}
        <section className="relative bg-slate-900 py-20 border-b border-slate-800 overflow-hidden">
            <div className="absolute inset-0 bg-grid-slate opacity-10" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <MotionWrapper>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wide mb-4">
                                Technical Excellence
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                {"Cloud & DevOps Solutions".split(" ").map((word, i) => (
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
                                We architect immutable, scalable infrastructure using industry-standard toolchains.
                                Our focus is on automation, repeatability, and security-first delivery.
                            </p>
                        </div>
                        {/* Abstract visual for header */}
                        <div className="hidden lg:block relative w-64 h-64 opacity-80">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-slate-400 rounded-full opacity-20 blur-2xl animate-pulse" />
                            <div className="absolute inset-4 border border-slate-300 dark:border-slate-700 rounded-lg flex items-center justify-center">
                                <Layers className="w-24 h-24 text-slate-400 dark:text-slate-600" />
                            </div>
                        </div>
                    </div>
                </MotionWrapper>
            </div>
        </section>

        {/* Core Capabilities */}
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <MotionWrapper>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                            Infrastructure as Code (IaC)
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                            We treat infrastructure with the same discipline as application code. By defining your entire stack in Terraform or Pulumi, we eliminate configuration drift and enable rapid, safe environment replication.
                        </p>
                        <ul className="space-y-4">
                            {['Immutable Infrastructure Patterns', 'Automated Drift Detection', 'Multi-Region Disaster Recovery', 'Self-Healing Architectures'].map(item => (
                                <li key={item} className="flex items-start">
                                    <CheckCircle2 className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" />
                                    <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </MotionWrapper>

                    <MotionWrapper delay={0.2} className="bg-slate-900 rounded-xl p-8 shadow-2xl overflow-hidden relative group">
                        {/* Visual Code Block Representation */}
                        <div className="absolute top-0 left-0 w-full h-8 bg-slate-800 flex items-center px-4 space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="mt-8 font-mono text-sm text-slate-300 space-y-2 opacity-80 group-hover:opacity-100 transition-opacity">
                            <p><span className="text-purple-400">module</span> <span className="text-green-400">"kubernetes_cluster"</span> &#123;</p>
                            <p className="pl-4">source = <span className="text-green-400">"./modules/eks"</span></p>
                            <p className="pl-4">region = <span className="text-green-400">"us-east-1"</span></p>
                            <p className="pl-4">node_groups = &#123;</p>
                            <p className="pl-8">general = &#123;</p>
                            <p className="pl-12">instance_types = [<span className="text-green-400">"m6g.xlarge"</span>]</p>
                            <p className="pl-12">min_size      = <span className="text-orange-400">3</span></p>
                            <p className="pl-8">&#125;</p>
                            <p className="pl-4">&#125;</p>
                            <p>&#125;</p>
                        </div>
                    </MotionWrapper>
                </div>
            </div>
        </section>

        {/* Tech Stack Horizontal Scroll/Grid */}
        <section className="py-24 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <MotionWrapper>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Our Engineering Toolchain</h2>
                        <p className="text-slate-600 dark:text-slate-400">Best-in-class technologies selected for stability and scale.</p>
                    </div>
                </MotionWrapper>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {techToolchain.map((tech, idx) => (
                        <MotionWrapper key={tech.category} delay={idx * 0.1}>
                            <TiltCard className="h-full">
                                <div className="h-full bg-white dark:bg-slate-900/60 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-colors glass-card">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex items-center justify-center mr-4">
                                            {idx === 0 && <Cloud className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                                            {idx === 1 && <Box className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                                            {idx === 2 && <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                                            {idx === 3 && <Rocket className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                                            {idx === 4 && <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                                        </div>
                                        {tech.category}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {tech.stack.map(tool => (
                                            <span key={tool} className="px-3 py-1 bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-lg border border-slate-200/50 dark:border-slate-700/50">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </TiltCard>
                        </MotionWrapper>
                    ))}
                </div>
            </div>
        </section>
    </div>
);
