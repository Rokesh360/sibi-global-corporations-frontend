import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Building2,
    Factory,
    Users,
    Clock,
    ShieldCheck,
    Settings,
    Wrench,
    Target,
    Award,
    Zap,
    TrendingUp,
    CheckCircle,
    PenTool,
    HardHat,
    Truck,
    Clipboard,
    Layers,
    Phone,
    Mail,
    MapPin,
    Star,
    Send,
    User,
    MessageSquare,
} from "lucide-react";
import WhyChooseBannerImg from "../../../public/assets/img/why-choose-banner.jpg";

/* ---------------------------------------------------------
   DATA
--------------------------------------------------------- */

const REASONS = [
    {
        id: "01",
        title: "Engineering-Led Approach",
        description:
            "Every project begins with understanding the application, site conditions and structural requirements before developing the right solution.",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
        theme: "navy",
    },
    {
        id: "02",
        title: "Precision Fabrication",
        description:
            "Controlled fabrication processes help maintain consistency, dimensional accuracy and structural quality.",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop",
        theme: "white",
    },
    {
        id: "03",
        title: "Project-Focused Execution",
        description:
            "We plan fabrication and site activities around project schedules to support efficient execution.",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop",
        theme: "white",
    },
    {
        id: "04",
        title: "Quality Control",
        description:
            "Quality checks are incorporated across material handling, fabrication, assembly and erection stages.",
        image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=600&h=400&fit=crop",
        theme: "navy",
    },
    {
        id: "05",
        title: "Customised Solutions",
        description:
            "We don't believe every industrial project needs the same structure. Our solutions are developed according to individual project requirements.",
        image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop",
        theme: "navy",
    },
    {
        id: "06",
        title: "Single-Point Coordination",
        description:
            "From engineering and fabrication to site erection, our integrated approach simplifies project coordination.",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop",
        theme: "white",
    },
];

const PROCESS_STEPS = [
    {
        title: "ENGINEERING",
        icon: (
            <svg viewBox="0 0 64 64">
                <rect x="19" y="17" width="26" height="30" rx="2" fill="none" stroke="currentColor" strokeWidth="3"/>
                <line x1="25" y1="23" x2="25" y2="41" stroke="currentColor" strokeWidth="3"/>
                <line x1="39" y1="23" x2="39" y2="41" stroke="currentColor" strokeWidth="3"/>
                <circle cx="31.5" cy="27" r="2" fill="currentColor"/>
                <circle cx="31.5" cy="37" r="2" fill="currentColor"/>
                <path d="M14 49h36" stroke="currentColor" strokeWidth="3"/>
            </svg>
        ),
    },
    {
        title: "FABRICATION",
        icon: (
            <svg viewBox="0 0 64 64">
                <path d="M17 44h30" fill="none" stroke="currentColor" strokeWidth="3"/>
                <path d="M20 44V29h24v15" fill="none" stroke="currentColor" strokeWidth="3"/>
                <path d="M25 29v-7h14v7" fill="none" stroke="currentColor" strokeWidth="3"/>
                <circle cx="24" cy="48" r="3" fill="none" stroke="currentColor" strokeWidth="3"/>
                <circle cx="40" cy="48" r="3" fill="none" stroke="currentColor" strokeWidth="3"/>
                <path d="M29 35h6" stroke="currentColor" strokeWidth="3"/>
            </svg>
        ),
    },
    {
        title: "QUALITY",
        icon: (
            <svg viewBox="0 0 64 64">
                <path d="M32 12l17 7v12c0 11-7 19-17 23 C22 50 15 42 15 31V19l17-7z" fill="none" stroke="currentColor" strokeWidth="3"/>
                <path d="M25 32l5 5 10-11" fill="none" stroke="currentColor" strokeWidth="3"/>
            </svg>
        ),
    },
    {
        title: "ASSEMBLY",
        icon: (
            <svg viewBox="0 0 64 64">
                <circle cx="22" cy="24" r="5" fill="none" stroke="currentColor" strokeWidth="3"/>
                <circle cx="42" cy="24" r="5" fill="none" stroke="currentColor" strokeWidth="3"/>
                <circle cx="32" cy="20" r="5" fill="none" stroke="currentColor" strokeWidth="3"/>
                <path d="M13 45c0-7 4-11 9-11s9 4 9 11" fill="none" stroke="currentColor" strokeWidth="3"/>
                <path d="M33 45c0-7 4-11 9-11s9 4 9 11" fill="none" stroke="currentColor" strokeWidth="3"/>
                <path d="M23 39c0-7 4-11 9-11s9 4 9 11" fill="none" stroke="currentColor" strokeWidth="3"/>
            </svg>
        ),
    },
    {
        title: "ERECTION",
        icon: (
            <svg viewBox="0 0 64 64">
                <path d="M13 20h37" stroke="currentColor" strokeWidth="3"/>
                <path d="M22 20l-8 27" stroke="currentColor" strokeWidth="3"/>
                <path d="M22 20l11 27" stroke="currentColor" strokeWidth="3"/>
                <path d="M22 20l15 9h13" fill="none" stroke="currentColor" strokeWidth="3"/>
                <path d="M44 29v11" stroke="currentColor" strokeWidth="3"/>
                <rect x="40" y="40" width="9" height="7" fill="none" stroke="currentColor" strokeWidth="3"/>
                <path d="M9 47h44" stroke="currentColor" strokeWidth="3"/>
            </svg>
        ),
    },
    {
        title: "PROJECT DELIVERY",
        icon: (
            <svg viewBox="0 0 64 64">
                <rect x="10" y="22" width="30" height="21" rx="2" fill="none" stroke="currentColor" strokeWidth="3"/>
                <path d="M40 29h9l7 8v6H40" fill="none" stroke="currentColor" strokeWidth="3"/>
                <circle cx="21" cy="45" r="5" fill="none" stroke="currentColor" strokeWidth="3"/>
                <circle cx="47" cy="45" r="5" fill="none" stroke="currentColor" strokeWidth="3"/>
                <path d="M45 29v8h11" stroke="currentColor" strokeWidth="3"/>
            </svg>
        ),
    },
];

/* ---------------------------------------------------------
   ANIMATION VARIANTS
--------------------------------------------------------- */

const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.05,
        },
    },
};

/* ---------------------------------------------------------
   MAIN COMPONENT
--------------------------------------------------------- */

export default function WhyChooseUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <div className="why-choose-page-wrapper">
            {/* ================= BANNER/HERO SECTION WITH FORM ================= */}
            <section className="why-choose-hero">
                <div className="why-choose-hero-bg">
                    <img
                        src={WhyChooseBannerImg}
                        alt="Industrial steel construction"
                    />
                    <div className="why-choose-hero-overlay" />
                </div>

                <div className="why-choose-hero-container">
                    {/* Left Side - Content */}
                    <motion.div
                        className="why-choose-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="why-choose-hero-badge">
                            <span>✦ Why Choose Us</span>
                        </div>
                        <h1>
                            Why Choose
                            <br />
                            <span className="why-choose-highlight">Sibi Global Corporation?</span>
                        </h1>
                        <p>
                            We combine engineering expertise, precision fabrication and
                            project-focused execution to deliver steel solutions that meet
                            the highest standards of quality and reliability.
                        </p>
                    </motion.div>

                    {/* Right Side - Form */}
                    <motion.div
                        className="why-choose-hero-form"
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="why-choose-form-card">
                            <div className="why-choose-form-header">
                                <h3>Get a Free Quote</h3>
                                <p>Fill in the form and we'll get back to you within 24 hours</p>
                            </div>
                            <form onSubmit={handleSubmit} className="why-choose-form">
                                <div className="why-choose-form-group">
                                    <label htmlFor="name">
                                        <User size={16} />
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Enter your full name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="why-choose-form-group">
                                    <label htmlFor="email">
                                        <Mail size={16} />
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="why-choose-form-group">
                                    <label htmlFor="phone">
                                        <Phone size={16} />
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="Enter your phone number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="why-choose-form-group">
                                    <label htmlFor="message">
                                        <MessageSquare size={16} />
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="3"
                                        placeholder="Tell us about your project requirements"
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                </div>
                                <motion.button
                                    type="submit"
                                    className="why-choose-form-submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Send Request <Send size={16} />
                                </motion.button>
                            </form>
                            <div className="why-choose-form-footer">
                                <span>🔒 Your information is secure with us</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ================= WHY CHOOSE SECTION - HTML DESIGN ================= */}
            <section className="why-choose-section">
                <div className="why-container">
                    {/* SECTION HEADING */}
                    <motion.div
                        className="why-heading"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <span className="section-line"></span>
                        <span className="section-label">OUR ADVANTAGE</span>
                        <h2>6 Reasons to Choose Sibi Global</h2>
                    </motion.div>

                    {/* REASONS GRID */}
                    <motion.div
                        className="reason-row"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {REASONS.map((reason, index) => (
                            <motion.div
                                className={`reason-card ${reason.theme}-card`}
                                key={reason.id}
                                variants={fadeInUp}
                                whileHover={{
                                    y: -6,
                                    boxShadow: "0 20px 45px rgba(12, 35, 67, 0.15)",
                                    transition: { duration: 0.3 },
                                }}
                            >
                                <div className="reason-content">
                                    <div className="number-badge">{reason.id}</div>
                                    <h3>{reason.title}</h3>
                                    <p>{reason.description}</p>
                                </div>
                                <div className="card-image">
                                    <img src={reason.image} alt={reason.title} />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ================= PROCESS SECTION ================= */}
            <section className="process-section">
                <div className="process-container">
                    {/* LEFT CONTENT */}
                    <motion.div
                        className="process-intro"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2>
                            From Engineering<br />
                            to <strong>Project Delivery</strong>
                        </h2>
                        <p className="process-description">
                            A seamless process that ensures quality,<br />
                            accuracy and timely delivery for every project.
                        </p>
                    </motion.div>

                    {/* PROCESS STEPS */}
                    <motion.div
                        className="process-steps"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {PROCESS_STEPS.map((step, index) => (
                            <React.Fragment key={index}>
                                <motion.div className="process-item" variants={fadeInUp}>
                                    <motion.div
                                        className="process-circle"
                                        whileHover={{
                                            y: -5,
                                            scale: 1.05,
                                            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.25)",
                                            transition: { duration: 0.3 },
                                        }}
                                    >
                                        {step.icon}
                                    </motion.div>
                                    <span className="process-name">{step.title}</span>
                                </motion.div>
                                {index < PROCESS_STEPS.length - 1 && (
                                    <div className="process-arrow">›</div>
                                )}
                            </React.Fragment>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}