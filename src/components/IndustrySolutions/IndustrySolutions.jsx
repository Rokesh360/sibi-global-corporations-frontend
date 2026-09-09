import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Building2,
    Users,
    TrendingUp,
    ShieldCheck,
    Phone,
    Mail,
    Send,
    User,
    MessageSquare,
} from "lucide-react";
import IndustryBannerImg from "../../../public/assets/img/solutions-banner.png";
import SteelBuildingImg from "../../../public/assets/img/steel-building.png";
import ManufacturingImg from "../../../public/assets/img/Industries/manufacturing.png";
import WarehouseImg from "../../../public/assets/img/Industries/warehouse.png";
import AutomotiveImg from "../../../public/assets/img/Industries/automotive.png";
import HeavyIndustryImg from "../../../public/assets/img/Industries/heavy-industry.png";
import TextileImg from "../../../public/assets/img/Industries/textile.png";
import PharmaceuticalImg from "../../../public/assets/img/Industries/pharmaceutical.png";
import FoodFmcgImg from "../../../public/assets/img/Industries/food-fmcg.png";
import CommercialImg from "../../../public/assets/img/Industries/commercial.png";

/* ---------------------------------------------------------
   DATA
--------------------------------------------------------- */

const INDUSTRY_SECTORS = [
    {
        id: "01",
        title: "MANUFACTURING",
        description: "Robust steel structures for factories and production facilities engineered to support heavy machinery, continuous operations, and future expansion.",
        image: ManufacturingImg,
        features: [
            { label: ["High Strength", "Structures"] },
            { label: ["Optimized", "Efficiency"] },
            { label: ["Scalable", "Designs"] },
        ],
        icon: "🏭",
        type: "manufacturing"
    },
    {
        id: "02",
        title: "LOGISTICS & WAREHOUSING",
        description: "Spacious, cost-effective steel buildings for warehousing, distribution centers, and logistics hubs built for speed, safety, and seamless operations.",
        image: WarehouseImg,
        features: [
            { label: ["Large Clear", "Spans"] },
            { label: ["Space", "Optimization"] },
            { label: ["Durability &", "Safety"] },
        ],
        icon: "📦",
        type: "logistics"
    },
    {
        id: "03",
        title: "AUTOMOTIVE",
        description: "Precision-engineered structures for automotive manufacturing units, assembly plants, and ancillary facilities.",
        image: AutomotiveImg,
        features: [
            { label: ["Precision", "Engineering"] },
            { label: ["Advanced", "Integration"] },
            { label: ["Reliable", "Infrastructure"] },
        ],
        icon: "🚗",
        type: "manufacturing"
    },
    {
        id: "04",
        title: "ENGINEERING & HEAVY INDUSTRY",
        description: "Heavy-duty steel solutions for plants and industrial facilities built to withstand extreme conditions and support critical operations.",
        image: HeavyIndustryImg,
        features: [
            { label: ["Heavy-Duty", "Structures"] },
            { label: ["Industrial", "Strength"] },
            { label: ["Safety", "Compliant"] },
        ],
        icon: "⚙️",
        type: "logistics"
    },
    {
        id: "05",
        title: "TEXTILE",
        description: "Specialized steel buildings for textile mills and processing units with optimized layouts for productivity and efficiency.",
        image: TextileImg,
        features: [
            { label: ["Custom", "Structures"] },
            { label: ["Process", "Efficiency"] },
            { label: ["Long-Term", "Reliability"] },
        ],
        icon: "🧵",
        type: "manufacturing"
    },
    {
        id: "06",
        title: "PHARMACEUTICAL",
        description: "Cleanroom-compatible, corrosion-resistant structures for pharmaceutical manufacturing and storage facilities.",
        image: PharmaceuticalImg,
        features: [
            { label: ["Controlled", "Environment"] },
            { label: ["Compliance", "Ready"] },
            { label: ["Efficient", "Operations"] },
        ],
        icon: "💊",
        type: "logistics"
    },
    {
        id: "07",
        title: "FOOD & FMCG",
        description: "Hygienic, durable, and efficient steel buildings for food processing, packaging, and FMCG manufacturing operations.",
        image: FoodFmcgImg,
        features: [
            { label: ["Hygienic", "Designs"] },
            { label: ["Operational", "Efficiency"] },
            { label: ["Safety", "Assured"] },
        ],
        icon: "🍽️",
        type: "manufacturing"
    },
    {
        id: "08",
        title: "COMMERCIAL",
        description: "Modern, aesthetic, and functional steel structures for offices, malls, showrooms, and commercial complexes.",
        image: CommercialImg,
        features: [
            { label: ["Modern", "Designs"] },
            { label: ["Cost", "Effective"] },
            { label: ["Sustainable", "Solutions"] },
        ],
        icon: "🏢",
        type: "logistics"
    }
];

const WHY_CHOOSE_FEATURES = [
    {
        title: ["Custom Engineered", "Solutions"],
        description: "Tailored designs to meet unique operational requirements.",
        icon: "custom"
    },
    {
        title: ["Quality & Safety"],
        description: "Committed to the highest standards of quality, safety and compliance.",
        icon: "quality"
    },
    {
        title: ["Timely Delivery"],
        description: "Efficient processes ensuring on-time project completion.",
        icon: "timely"
    },
    {
        title: ["Cost Effective"],
        description: "Optimized solutions that deliver long-term value and savings.",
        icon: "cost"
    }
];

const CTA_FEATURES = [
    {
        title: ["Custom Engineered", "Solutions"],
        icon: "custom"
    },
    {
        title: ["On-Time Project", "Delivery"],
        icon: "ontime"
    },
    {
        title: ["Cost Effective", "Approach"],
        icon: "cost"
    }
];

/* ---------------------------------------------------------
   MAIN COMPONENT
--------------------------------------------------------- */

export default function IndustrySolutions() {
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

    // Render SVG icons for why choose features
    const renderWhyChooseIcon = (type) => {
        switch(type) {
            case 'custom':
                return (
                    <svg viewBox="0 0 64 64">
                        <path d="M15 18h34v8H15z" />
                        <path d="M19 26v15M45 26v15" />
                        <path d="M12 42h40" />
                        <path d="M27 42v9M37 42v9" />
                        <path d="M21 18l11 8 11-8" />
                    </svg>
                );
            case 'quality':
                return (
                    <svg viewBox="0 0 64 64">
                        <circle cx="32" cy="30" r="16" />
                        <path d="M24 47l-3 10 11-6 11 6-3-10" />
                        <path d="M32 21l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />
                    </svg>
                );
            case 'timely':
                return (
                    <svg viewBox="0 0 64 64">
                        <path d="M25 12h14l2 6 6 3 6-2 7 12-5 4v7l5 4-7 12-6-2-6 3-2 6H25l-2-6-6-3-6 2-7-12 5-4v-7l-5-4 7-12 6 2 6-3z" />
                        <circle cx="32" cy="34" r="9" />
                        <path d="M32 28v6l4 3" />
                    </svg>
                );
            case 'cost':
                return (
                    <svg viewBox="0 0 64 64">
                        <circle cx="42" cy="17" r="10" />
                        <text x="42" y="21" textAnchor="middle">3</text>
                        <path d="M12 43h40" />
                        <path d="M20 43c4-8 10-10 16-7 4 2 7 5 12 7" />
                        <path d="M19 43V31" />
                        <path d="M19 31c6 0 10 3 13 6" />
                    </svg>
                );
            default:
                return null;
        }
    };

    // Render SVG icons for CTA features
    const renderCtaIcon = (type) => {
        switch(type) {
            case 'custom':
                return (
                    <svg viewBox="0 0 64 64">
                        <path d="M25 8h14l3 7 7 3 7-3 7 12-6 5v8l6 5-7 12-7-3-7 3-3 7H25l-3-7-7-3-7 3-7-12 6-5v-8l-6-5 7-12 7 3 7-3z" />
                        <circle cx="32" cy="32" r="9" />
                        <path d="M32 27v6l4 3" />
                    </svg>
                );
            case 'ontime':
                return (
                    <svg viewBox="0 0 64 64">
                        <circle cx="32" cy="30" r="17" />
                        <path d="M25 45l-3 11 10-6 10 6-3-11" />
                        <path d="M32 18v22" />
                        <path d="M24 26h16" />
                        <path d="M27 22l-4 6 4 6" />
                        <path d="M37 22l4 6-4 6" />
                    </svg>
                );
            case 'cost':
                return (
                    <svg viewBox="0 0 64 64">
                        <path d="M32 7L53 19v25L32 56 11 44V19z" />
                        <path d="M32 7v25" />
                        <path d="M11 19l21 13 21-13" />
                        <path d="M21 25l11 7 11-7" />
                        <path d="M21 39l11-7 11 7" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <div className="sibi-industry-wrapper">
            {/* ==================== HERO SECTION ==================== */}
            <section className="sibi-hero">
                <div className="sibi-hero-bg">
                    <img src={IndustryBannerImg} alt="Industry solutions banner" />
                    <div className="sibi-hero-overlay" />
                </div>

                <div className="sibi-hero-container">
                    <motion.div
                        className="sibi-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="sibi-hero-badge">
                            <span>✦ Industry Solutions</span>
                        </div>
                        <h1>
                            8 Industry Solutions.
                            <br />
                            <span className="sibi-highlight">Engineered to Perform.</span>
                        </h1>
                        <p>
                            From heavy industrial plants to high-performance warehouses, our steel
                            structures are designed to meet the unique demands of every sector
                            with precision, reliability, and long-term value.
                        </p>

                        {/* <div className="sibi-hero-stats">
                            <div className="sibi-stat">
                                <Building2 size={28} className="sibi-stat-icon" />
                                <div>
                                    <strong>500+</strong>
                                    <span>Projects Delivered</span>
                                </div>
                            </div>
                            <div className="sibi-stat-divider" />
                            <div className="sibi-stat">
                                <Users size={28} className="sibi-stat-icon" />
                                <div>
                                    <strong>50+</strong>
                                    <span>Industries Served</span>
                                </div>
                            </div>
                            <div className="sibi-stat-divider" />
                            <div className="sibi-stat">
                                <TrendingUp size={28} className="sibi-stat-icon" />
                                <div>
                                    <strong>10M+</strong>
                                    <span>Sq. Ft. Built</span>
                                </div>
                            </div>
                            <div className="sibi-stat-divider" />
                            <div className="sibi-stat">
                                <ShieldCheck size={28} className="sibi-stat-icon" />
                                <div>
                                    <strong>100%</strong>
                                    <span>Quality Assured</span>
                                </div>
                            </div>
                        </div> */}
                    </motion.div>

                    <motion.div
                        className="sibi-hero-form-wrapper"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="sibi-form-card">
                            <div className="sibi-form-header">
                                <h3>Get a Free Quote</h3>
                                <p>Fill in the form and we'll get back to you within 24 hours</p>
                            </div>
                            <form onSubmit={handleSubmit} className="sibi-form">
                                <div className="sibi-form-group">
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
                                <div className="sibi-form-group">
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
                                <div className="sibi-form-group">
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
                                <div className="sibi-form-group">
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
                                    className="sibi-form-submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Send Request <Send size={16} />
                                </motion.button>
                            </form>
                            <div className="sibi-form-footer">
                                <span>🔒 Your information is secure with us</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ==================== INDUSTRY CARDS SECTION ==================== */}
            <section className="sibi-industry-cards">
                <div className="sibi-industry-container">
                    {INDUSTRY_SECTORS.map((sector, index) => {
                        const isManufacturing = sector.type === "manufacturing";
                        
                        return (
                            <motion.div
                                className={`sibi-card ${isManufacturing ? 'sibi-card-manufacturing' : 'sibi-card-logistics'}`}
                                key={sector.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.08 }}
                                whileHover={{ 
                                    y: -5, 
                                    boxShadow: "0 12px 40px rgba(0,0,0,0.12)" 
                                }}
                            >
                                {isManufacturing ? (
                                    <>
                                        <div className="sibi-card-image sibi-card-image-left">
                                            <img src={sector.image} alt={sector.title} />
                                            <div className="sibi-card-icon">
                                                <span style={{ fontSize: '28px' }}>{sector.icon}</span>
                                            </div>
                                        </div>
                                        <div className="sibi-card-content sibi-card-content-right">
                                            <div className="sibi-card-title">
                                                <span className="sibi-card-number">{sector.id}</span>
                                                <h2>{sector.title}</h2>
                                            </div>
                                            <p>{sector.description}</p>
                                            <div className="sibi-card-features">
                                                {sector.features.map((feature, idx) => (
                                                    <React.Fragment key={idx}>
                                                        <div className="sibi-feature">
                                                            <div className="sibi-feature-icon">
                                                                <svg viewBox="0 0 64 64">
                                                                    <path d="M32 7l21 8v17c0 13-8 23-21 28C19 55 11 45 11 32V15z" />
                                                                    <path d="M22 32l7 7 14-15" />
                                                                </svg>
                                                            </div>
                                                            <span>
                                                                {feature.label.map((line, i) => (
                                                                    <React.Fragment key={i}>
                                                                        {line}
                                                                        {i < feature.label.length - 1 && <br />}
                                                                    </React.Fragment>
                                                                ))}
                                                            </span>
                                                        </div>
                                                        {idx < sector.features.length - 1 && (
                                                            <div className="sibi-feature-divider"></div>
                                                        )}
                                                    </React.Fragment>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="sibi-card-content sibi-card-content-left">
                                            <div className="sibi-card-title">
                                                <span className="sibi-card-number">{sector.id}</span>
                                                <h2>{sector.title}</h2>
                                            </div>
                                            <p>{sector.description}</p>
                                            <div className="sibi-card-features">
                                                {sector.features.map((feature, idx) => (
                                                    <React.Fragment key={idx}>
                                                        <div className="sibi-feature">
                                                            <div className="sibi-feature-icon">
                                                                <svg viewBox="0 0 64 64">
                                                                    <path d="M10 52V25h44v27" />
                                                                    <path d="M20 25V13M32 25V8M44 25V13" />
                                                                    <path d="M14 18h12M38 18h12" />
                                                                    <path d="M8 52h48" />
                                                                    <path d="M19 36v16M32 36v16M45 36v16" />
                                                                </svg>
                                                            </div>
                                                            <span>
                                                                {feature.label.map((line, i) => (
                                                                    <React.Fragment key={i}>
                                                                        {line}
                                                                        {i < feature.label.length - 1 && <br />}
                                                                    </React.Fragment>
                                                                ))}
                                                            </span>
                                                        </div>
                                                        {idx < sector.features.length - 1 && (
                                                            <div className="sibi-feature-divider"></div>
                                                        )}
                                                    </React.Fragment>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="sibi-card-image sibi-card-image-right">
                                            <img src={sector.image} alt={sector.title} />
                                            <div className="sibi-card-icon sibi-card-icon-right">
                                                <span style={{ fontSize: '28px' }}>{sector.icon}</span>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* ==================== CTA SECTION ==================== */}
            <section className="sibi-cta">
                <div className="sibi-cta-inner">
                    <motion.div
                        className="sibi-cta-content"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>LET'S BUILD THE  <span className="highlight">FUTURE TOGETHER </span></h2>
                        <p>
                            Partner with Sibi Global for reliable, innovative, and
                            high-performance steel structure solutions.
                        </p>
                        <motion.a
                            href="#"
                            className="sibi-cta-button"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span>Get in Touch</span>
                            <span className="sibi-cta-arrow">›</span>
                        </motion.a>
                    </motion.div>

                    <div className="sibi-cta-features">
                        {CTA_FEATURES.map((feature, idx) => (
                            <React.Fragment key={idx}>
                                <div className="sibi-cta-feature">
                                    <div className="sibi-cta-feature-icon">
                                        {renderCtaIcon(feature.icon)}
                                    </div>
                                    <h3>
                                        {feature.title.map((line, i) => (
                                            <React.Fragment key={i}>
                                                {line}
                                                {i < feature.title.length - 1 && <br />}
                                            </React.Fragment>
                                        ))}
                                    </h3>
                                </div>
                                {idx < CTA_FEATURES.length - 1 && (
                                    <span className="sibi-cta-divider" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    <motion.div
                        className="sibi-cta-building"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="sibi-cta-diagonal" />
                        <img src={SteelBuildingImg} alt="Steel Building" />
                    </motion.div>
                </div>
            </section>

            {/* ==================== WHY CHOOSE US SECTION ==================== */}
            <section className="sibi-why-choose">
                <div className="sibi-why-container">
                    <motion.div
                        className="sibi-why-intro"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                      
                        <h2>
                            Why Industries
                            <br />
                            <span className="highlight">Choose Us</span> 
                        </h2>
                        <p>
                            We combine engineering expertise with advanced technology
                            to deliver reliable, cost-effective and future-ready steel
                            structure solutions.
                        </p>
                        <a href="#" className="sibi-why-button">
                            Know More
                            <span>→</span>
                        </a>
                    </motion.div>

                    <div className="sibi-why-features">
                        {WHY_CHOOSE_FEATURES.map((feature, idx) => (
                            <React.Fragment key={idx}>
                                <motion.div
                                    className="sibi-why-feature"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                >
                                    <div className="sibi-why-feature-icon">
                                        {renderWhyChooseIcon(feature.icon)}
                                    </div>
                                    <h3>
                                        {feature.title.map((line, i) => (
                                            <React.Fragment key={i}>
                                                {line}
                                                {i < feature.title.length - 1 && <br />}
                                            </React.Fragment>
                                        ))}
                                    </h3>
                                    <p>{feature.description}</p>
                                </motion.div>
                                {idx < WHY_CHOOSE_FEATURES.length - 1 && (
                                    <span className="sibi-why-connector" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}