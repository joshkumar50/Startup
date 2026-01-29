import { Cloud, Terminal, Lock, Database, Server, Monitor, ClipboardCheck, Code2, Rocket, HeartHandshake, Target, Users, Award } from 'lucide-react';

export const brandData = {
    name: "DigiStack",
    fullName: "DigiStack Solutions Pvt Ltd",
    tagline: "Engineering Resilience for the Modern Enterprise",
    description: "Enterprise-grade cloud infrastructure, DevOps engineering, and managed services for the modern enterprise.",
    email: "enterprise@digistack.com",
    careersEmail: "careers@digistack.com",
    phone: "+1 (555) 123-4567",
    address: {
        street: "123 Enterprise Plaza",
        city: "Tech City",
        state: "TC",
        zip: "90210",
        country: "United States"
    },
    socials: {
        linkedin: "https://linkedin.com/company/digistack",
        twitter: "https://twitter.com/digistack",
        github: "https://github.com/digistack"
    },
    contactFormEndpoint: "https://formspree.io/f/your-form-id" // Placeholder
};

export const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'IT Services', path: '/services' },
    { name: 'Cloud & DevOps', path: '/cloud-devops' },
    { name: 'Delivery Model', path: '/delivery-model' },
    { name: 'About', path: '/about' },
];

export const heroData = {
    title: "Engineering Resilience for the Modern Enterprise",
    highlightText: "Resilience",
    subtitle: "We deliver premium cloud infrastructure, DevOps automation, and managed IT services. Built for scale, security, and operational excellence.",
    ctaPrimary: "Schedule Consultation",
    ctaSecondary: "Explore Capabilities",
    techStack: ['AWS', 'Azure', 'Kubernetes', 'Terraform', 'Docker', 'Linux']
};

export const servicesData = [
    {
        title: 'Cloud Infrastructure',
        description: 'Scalable, secure, and cost-optimized cloud architectures on AWS and Azure.',
        icon: Cloud,
        image: '/assets/images/services/cloud.png',
        features: ['Cloud Migration Strategy', 'Multi-Cloud Architecture', 'Cost Optimization (FinOps)', 'Serverless Computing']
    },
    {
        title: 'DevOps & Automation',
        description: 'Accelerate delivery with robust CI/CD pipelines and Infrastructure as Code.',
        icon: Terminal,
        image: '/assets/images/services/devops.png',
        features: ['CI/CD Pipeline Design', 'Infrastructure as Code (Terraform)', 'Container Orchestration (K8s)', 'Configuration Management']
    },
    {
        title: 'Cybersecurity & Compliance',
        description: 'Enterprise-grade security controls integrated directly into your infrastructure.',
        icon: Lock,
        image: '/assets/images/services/security.png',
        features: ['Identity & Access Management', 'Compliance Audits (SOC2, HIPAA)', 'Penetration Testing', 'Zero Trust Architecture']
    },
    {
        title: 'Data Engineering',
        description: 'Transform raw data into actionable insights with modern data pipelines.',
        icon: Database,
        image: '/assets/images/services/data.png',
        features: ['Data Lake Implementation', 'ETL/ELT Pipelines', 'Real-time Analytics', 'Database Migration']
    },
    {
        title: 'Managed IT Services',
        description: '24/7 reliability engineering and proactive system monitoring.',
        icon: Server,
        image: '/assets/images/services/managed.png',
        features: ['24/7 SRE Support', 'Incident Response', 'Patch Management', 'Performance Tuning']
    },
    {
        title: 'Digital Transformation',
        description: 'Modernizing legacy applications for the cloud-native era.',
        icon: Monitor,
        image: '/assets/images/services/transformation.png',
        features: ['Legacy Modernization', 'Microservices Architecture', 'API Management', 'Mobile App Development']
    }
];

export const processSteps = [
    {
        icon: ClipboardCheck,
        title: "Discovery & Strategy",
        desc: "We analyze your current infrastructure, audit compliance needs, and define success metrics before writing a single line of code."
    },
    {
        icon: Code2,
        title: "Architecture & Design",
        desc: "Creating detailed technical specifications, low-level designs, and proof-of-concept validations for critical path components."
    },
    {
        icon: Rocket,
        title: "Implementation & Migration",
        desc: "Agile execution using sprint-based delivery. Zero-downtime migration strategies prioritized for live production systems."
    },
    {
        icon: HeartHandshake,
        title: "Managed Operation",
        desc: "Transition to 24/7 support with defined service level agreements (SLAs) and continuous optimization loops."
    }
];

export const techToolchain = [
    { category: 'Cloud Platforms', stack: ['AWS', 'Microsoft Azure', 'Google Cloud'] },
    { category: 'Containerization', stack: ['Docker', 'Kubernetes', 'Helm', 'Istio'] },
    { category: 'IaC & Config', stack: ['Terraform', 'Ansible', 'Pulumi', 'CloudFormation'] },
    { category: 'CI/CD', stack: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'ArgoCD'] },
    { category: 'Monitoring', stack: ['Prometheus', 'Grafana', 'Datadog', 'ELK Stack'] },
];

export const aboutData = {
    title: "Engineered by Values",
    subtitle: "Founded on the principle that IT infrastructure is the backbone of modern business. We are a team of senior engineers, architects, and strategists.",
    dna: [
        "DigiStack was established to bridge the gap between temporary staffing solutions and high-end consultancy. We believe in ownership, long-term thinking, and technical integrity.",
        "Unlike generalist firms, we specialize exclusively in Cloud and DevOps. Our engineers are certified experts who contribute to open-source projects and regularly speak at industry conferences."
    ],
    stats: [
        { label: 'Years Experience', value: '15+' },
        { label: 'Enterprise Clients', value: '50+' },
        { label: 'Certifications', value: '200+' },
        { label: 'Projects Delivered', value: '500+' }
    ],
    values: [
        { icon: Target, title: "Precision", desc: "We measure twice and cut once. Accuracy in architecture is non-negotiable." },
        { icon: Users, title: "Partnership", desc: "We embed with your teams, transferring knowledge rather than creating dependency." },
        { icon: Award, title: "Excellence", desc: "We hold ourselves to the highest standards of code quality and security." }
    ]
};

export const governanceData = [
    'Weekly Sprint Reviews',
    'Monthly Executive Updates',
    'Real-time Dashboard Access',
    'Risk Register Management'
];
