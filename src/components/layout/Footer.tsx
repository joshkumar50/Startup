import { Link } from 'react-router-dom';
import { Server, Linkedin, Twitter, Github } from 'lucide-react';
import { brandData } from '../../data/mockData';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center space-x-2 group mb-6">
                            <div className="bg-navy-900 dark:bg-blue-600 p-2 rounded-lg transition-colors duration-300">
                                <Server className="h-6 w-6 text-white" />
                            </div>
                            <span className="font-heading font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                                {brandData.name.replace('Stack', '')}<span className="text-blue-600 dark:text-blue-400">Stack</span>
                            </span>
                        </Link>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                            {brandData.description}
                        </p>
                        <div className="flex space-x-4">
                            <a href={brandData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href={brandData.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href={brandData.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                <Github className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Solutions</h3>
                        <ul className="space-y-3">
                            <li><Link to="/services" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">Cloud Migration</Link></li>
                            <li><Link to="/cloud-devops" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">DevOps Automation</Link></li>
                            <li><Link to="/services" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">Kubernetes Managed</Link></li>
                            <li><Link to="/services" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">Security & Compliance</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li><Link to="/about" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">About Us</Link></li>
                            <li><Link to="/delivery-model" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">Delivery Model</Link></li>
                            <li><Link to="/about" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">Careers</Link></li>
                            <li><Link to="/contact" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li className="text-slate-600 dark:text-slate-400 text-sm">
                                {brandData.address.street}<br />
                                {brandData.address.city}, {brandData.address.state} {brandData.address.zip}
                            </li>
                            <li className="text-slate-600 dark:text-slate-400 text-sm">
                                <a href={`mailto:${brandData.email}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{brandData.email}</a>
                            </li>
                            <li className="text-slate-600 dark:text-slate-400 text-sm">
                                {brandData.phone}
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-slate-500 dark:text-slate-500 text-sm">
                        &copy; {currentYear} {brandData.fullName}. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="/privacy" className="text-slate-500 hover:text-slate-900 dark:hover:text-white text-sm transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="text-slate-500 hover:text-slate-900 dark:hover:text-white text-sm transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
