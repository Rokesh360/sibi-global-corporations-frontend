// Contact.jsx
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
    Briefcase,
    ChevronRight,
    Calendar,
    MapPin as MapPinIcon,
    Building,
    Ruler,
    ClipboardCheck,
    ExternalLink,
    Download,
    Share2,
    Printer,
    ChevronLeft,
    CheckCircle2,
    Circle,
    Cpu,
    FileText,
    Grid,
    Maximize,
    Minimize,
    RefreshCw,
    PenTool as PenToolIcon,
    Calculator,
    Layout,
    Compass,
    Box,
    Scissors,
    Layers as LayersIcon,
    Flame,
    PaintRoller,
    SprayCan,
    ClipboardCheck as ClipboardCheckIcon,
    Package,
    Headphones,
    Globe,
    X,
} from "lucide-react";
import ContactBannerImg from "../../../public/assets/img/solutions-banner.png";
import { LinkedinFilled, YoutubeFilled } from "@ant-design/icons";

/* ---------------------------------------------------------
   DATA
--------------------------------------------------------- */

const CONTACT_INFO = [
    {
        icon: "location",
        title: "Our Office",
        details: [
            "No. 78, A, SIPCOT Industrial Complex, Irrungattukottai, Chennai – 602105, Tamil Nadu, India.",
           
        ],
        color: "#0b2350",
        gradient: "linear-gradient(135deg, #0b2350, #1a3d6b)",
    },
    {
        icon: "phone",
        title: "Call Us",
        details: ["+91 89391 17555", "+91 94444 07866"],
        color: "#25d366",
        gradient: "linear-gradient(135deg, #25d366, #128C7E)",
    },
    {
        icon: "email",
        title: "Email Us",
        details: ["info@sibieng.com", "projects@sibieng.com"],
        color: "#ea4335",
        gradient: "linear-gradient(135deg, #ea4335, #c5221f)",
    },
    {
        icon: "hours",
        title: "Business Hours",
        details: ["Mon – Sat : 9:00 AM – 6:00 PM", "Sunday : Closed"],
        color: "#f2a022",
        gradient: "linear-gradient(135deg, #f2a022, #d48a1a)",
    },
];

const TRUST_FEATURES = [
    {
        icon: "team",
        title: "Expert Team",
        description: "Skilled professionals ready to support you.",
    },
    {
        icon: "quality",
        title: "Quality Assured",
        description: "Committed to safety and excellence.",
    },
    {
        icon: "delivery",
        title: "Timely Delivery",
        description: "On-time execution for every project.",
    },
    {
        icon: "client",
        title: "Client Focused",
        description: "Your satisfaction is our priority.",
    },
];

/* ---------------------------------------------------------
   ANIMATION VARIANTS
--------------------------------------------------------- */

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" },
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

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
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

    // Helper function to render contact icons
    const renderContactIcon = (iconType) => {
        const icons = {
            location: (
                <svg viewBox="0 0 24 24">
                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                </svg>
            ),
            phone: (
                <svg viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>
            ),
            email: (
                <svg viewBox="0 0 24 24">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                </svg>
            ),
            hours: (
                <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                </svg>
            ),
        };
        return icons[iconType] || icons.location;
    };

    // Helper function to render trust icons
    const renderTrustIcon = (iconType) => {
        const icons = {
            team: (
                <svg viewBox="0 0 64 64">
                    <circle cx="32" cy="20" r="9" />
                    <path d="M16 51c1-10 7-16 16-16s15 6 16 16" />
                    <path d="M22 37l-7 6v8" />
                    <path d="M42 37l7 6v8" />
                </svg>
            ),
            quality: (
                <svg viewBox="0 0 64 64">
                    <path d="M32 6l20 8v15c0 13-8 24-20 29C20 53 12 42 12 29V14z" />
                    <path d="M22 31l7 7 14-16" />
                </svg>
            ),
            delivery: (
                <svg viewBox="0 0 64 64">
                    <path d="M32 6v8" />
                    <path d="M32 50v8" />
                    <path d="M6 32h8" />
                    <path d="M50 32h8" />
                    <circle cx="32" cy="32" r="13" />
                    <path d="M32 23v10l7 4" />
                    <path d="M17 17l5 5" />
                    <path d="M42 42l5 5" />
                    <path d="M47 17l-5 5" />
                    <path d="M22 42l-5 5" />
                </svg>
            ),
            client: (
                <svg viewBox="0 0 64 64">
                    <path d="M8 29l15-14 11 10" />
                    <path d="M56 35L41 49 30 39" />
                    <path d="M23 25l8 8" />
                    <path d="M33 35l8 8" />
                    <path d="M20 28c-4-4-8-3-10 0s0 6 3 8l7 6c3 2 6 2 8 0" />
                    <path d="M44 36c4 4 8 3 10 0s0-6-3-8l-7-6c-3-2-6-2-8 0" />
                </svg>
            ),
        };
        return icons[iconType] || icons.team;
    };

    return (
        <div className="contact-page-wrapper">
            {/* ================= BANNER/HERO SECTION ================= */}
            <section className="contact-page-hero">
                <div className="contact-page-hero-bg">
                    <img
                        src={ContactBannerImg || "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1400&h=600&fit=crop"}
                        alt="Contact banner"
                    />
                    <div className="contact-page-hero-bg-overlay" />
                </div>

                <div className="contact-page-hero-container">
                    {/* Left Side - Content */}
                    <motion.div
                        className="contact-page-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="contact-page-hero-badge">
                            <span>✦ Get in Touch</span>
                        </div>
                        <h1>
                            We'd Love To
                            <br />
                            <span className="contact-page-highlight">Hear From You</span>
                        </h1>
                        <p>
                            Have a question, project inquiry, or partnership
                            opportunity? Reach out to us and our team
                            will get back to you.
                        </p>
                    </motion.div>

                    {/* Right Side - Form */}
                    <motion.div
                        className="contact-page-hero-form"
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="contact-page-form-card">
                            <div className="contact-page-form-header">
                                <h3>Send Us a Message</h3>
                                <div className="contact-page-yellow-line"></div>
                            </div>
                            <form onSubmit={handleSubmit} className="contact-page-form">
                                <div className="contact-page-form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name *"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="contact-page-form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address *"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="contact-page-form-group">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number *"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="contact-page-form-group">
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject *"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="contact-page-form-group">
                                    <textarea
                                        name="message"
                                        rows="4"
                                        placeholder="Your Message *"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <motion.button
                                    type="submit"
                                    className="contact-page-form-submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span>SEND MESSAGE</span>
                                    <svg viewBox="0 0 24 24">
                                        <path d="M5 12h14" />
                                        <path d="m13 6 6 6-6 6" />
                                    </svg>
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ================= CONTACT INFO SECTION ================= */}
            <section className="contact-page-info">
                <div className="contact-page-info-container">

                    <motion.div
                        className="contact-page-info-header"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <span className="contact-page-info-badge">
                            CONTACT US
                        </span>

                        <h2>
                            We're Here to Help You{" "}
                            <span className="contact-page-highlight">
                                Every Step of the Way
                            </span>
                        </h2>

                        <p>
                            Connect with our team through any of the channels below.
                        </p>
                    </motion.div>

                    <motion.div
                        className="contact-page-info-grid"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {CONTACT_INFO.map((item, index) => (
                            <motion.div
                                className={`contact-page-info-card contact-card-${item.icon}`}
                                key={index}
                                variants={fadeInUp}
                                whileHover={{
                                    y: -10,
                                    transition: { duration: 0.3 },
                                }}
                            >
                                {/* Floating Icon */}
                                <motion.div
                                    className="contact-page-info-card-icon"
                                    whileHover={{
                                        rotate: 8,
                                        scale: 1.08,
                                        transition: { duration: 0.3 },
                                    }}
                                >
                                    {renderContactIcon(item.icon)}
                                </motion.div>

                                {/* Card Content */}
                                <div className="contact-page-info-card-content">
                                    <h4>{item.title}</h4>

                                    <span className="contact-card-title-line"></span>

                                    <div className="contact-card-details">
                                        {item.details.map((line, idx) => (
                                            <p key={idx}>{line}</p>
                                        ))}
                                    </div>
                                </div>

                                <div className="contact-card-bottom"></div>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </section>

            {/* ================= TRUST SECTION ================= */}
            <section className="contact-page-trust">
                <div className="contact-page-trust-container">
                    {TRUST_FEATURES.map((feature, index) => (
                        <motion.div
                            className="contact-page-trust-card"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{
                                y: -5,
                                backgroundColor: "#f1f3f8",
                                transition: { duration: 0.3 },
                            }}
                        >
                            <motion.div
                                className="contact-page-trust-icon"
                                whileHover={{
                                    borderColor: "#f5ac00",
                                    transform: "translateY(-2px)",
                                    transition: { duration: 0.3 },
                                }}
                            >
                                {renderTrustIcon(feature.icon)}
                            </motion.div>
                            <div className="contact-page-trust-content">
                                <h3>{feature.title}</h3>
                                <span className="contact-page-trust-line"></span>
                                <p>{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ================= LOCATION SECTION ================= */}
            <section className="contact-page-location">
                <div className="contact-page-location-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31101.769601099913!2d79.97143830002136!3d12.989675556773584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f330154c3d4f%3A0xe057c03b04df9e69!2sIrungattukottai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1788504291081!5m2!1sen!2sin"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title="Sibi Global Location"
                    />
                </div>
            </section>
        </div>
    );
}