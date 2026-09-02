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
import WhyChooseImg from "../../../public/assets/img/why-choose.png";
import WhyChooseBannerImg from "../../../public/assets/img/why-choose-banner.jpg";

/* ---------------------------------------------------------
   DATA
--------------------------------------------------------- */

const features = [
    {
        icon: "⚙",
        title: "Engineering-Led Approach",
        description:
            "Every project begins with understanding the application, site conditions and structural requirements before developing the right solution.",
    },
    {
        icon: "♙",
        title: "Precision Fabrication",
        description:
            "Controlled fabrication processes help maintain consistency, dimensional accuracy and structural quality.",
    },
    {
        icon: "✓",
        title: "Project-Focused Execution",
        description:
            "We plan fabrication and site activities around project schedules to support efficient execution.",
    },
    {
        icon: "◉",
        title: "Quality Control",
        description:
            "Quality checks are incorporated across material handling, fabrication, assembly and erection stages.",
    },
    {
        icon: "⚒",
        title: "Customised Solutions",
        description:
            "We don't believe every industrial project needs the same structure. Our solutions are developed according to individual project requirements.",
    },
    {
        icon: "⌁",
        title: "Single-Point Coordination",
        description:
            "From engineering and fabrication to site erection, our integrated approach simplifies project coordination.",
    },
];

/* ---------------------------------------------------------
   ANIMATION VARIANTS
--------------------------------------------------------- */

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const featureVariants = {
    hidden: {
        opacity: 0,
        x: 50,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" },
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
        // Add your form submission logic here
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

            {/* ================= WHY CHOOSE SECTION WITH IMAGE ================= */}
            <section className="why-choose-section">
                {/* LEFT IMAGE */}
                <motion.div
                    className="why-image"
                    initial={{
                        opacity: 0,
                        x: -100,
                        scale: 0.95,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        scale: 1,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 1,
                        ease: "easeOut",
                    }}
                >
                    <motion.img
                        src={WhyChooseImg}
                        alt="SIBI Global Steel Construction"
                        whileHover={{
                            scale: 1.03,
                        }}
                        transition={{
                            duration: 0.4,
                        }}
                    />
                </motion.div>

                {/* RIGHT CONTENT */}
                <div className="why-content">
                    <motion.div
                        className="why-inner"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        variants={containerVariants}
                    >
                        {/* LABEL */}
                        <motion.span
                            className="why-label"
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.5,
                            }}
                        >
                            WHY CHOOSE SIBI GLOBAL
                        </motion.span>

                        {/* HEADING */}
                        <motion.h2
                            initial={{
                                opacity: 0,
                                y: 40,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 0.15,
                                ease: "easeOut",
                            }}
                        >
                            Building <div className="yellow_text_highlight">Stronger Foundations</div>
                            <br />
                            for Your Business
                        </motion.h2>

                        {/* FEATURES */}
                        <motion.div
                            className="why-features"
                            variants={containerVariants}
                        >
                            {features.map((feature, index) => (
                                <motion.div
                                    className="why-feature"
                                    key={index}
                                    variants={featureVariants}
                                    whileHover={{
                                        x: 8,
                                        transition: {
                                            duration: 0.25,
                                        },
                                    }}
                                >
                                    {/* ICON */}
                                    <motion.div
                                        className="feature-icon"
                                        whileHover={{
                                            rotate: 360,
                                            scale: 1.1,
                                        }}
                                        transition={{
                                            duration: 0.6,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        <span>{feature.icon}</span>
                                    </motion.div>

                                    {/* TEXT */}
                                    <div className="feature-text">
                                        <motion.h3
                                            whileHover={{
                                                x: 4,
                                            }}
                                            transition={{
                                                duration: 0.2,
                                            }}
                                        >
                                            {feature.title}
                                        </motion.h3>

                                        <p>{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}