import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
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
    Search,
    BookOpen,
    Newspaper,
    FileText,
    Briefcase,
    ChevronRight,
    Calendar,
    Tag,
    Eye,
    Heart,
    Share2,
    Clock as ClockIcon,
    Filter,
} from "lucide-react";
import SolutionsBannerImg from "../../../public/assets/img/solutions-banner.png";
import PebBuildingImg from "../../../public/assets/img/solution/peb-building.jpg";
import SteelFabricationImg from "../../../public/assets/img/solution/steel-fabrication.jpg";
import PlanBuildingImg from "../../../public/assets/img/factory-building.webp";

/* ---------------------------------------------------------
   HELPER
--------------------------------------------------------- */

const slugify = (text) =>
    text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();

/* ---------------------------------------------------------
   DATA
--------------------------------------------------------- */

const BLOG_CATEGORIES = [
    {
        id: "peb",
        icon: Building2,
        title: "PEB Construction",
        color: "#f2a022",
        posts: [
            "What Is a Pre-Engineered Building?",
            "PEB vs Conventional Construction",
            "How to Plan a PEB Warehouse",
            "Factors Affecting PEB Cost",
            "PEB Construction Timeline",
        ],
    },
    {
        id: "structural",
        icon: Wrench,
        title: "Structural Steel",
        color: "#0b2350",
        posts: [
            "Structural Steel Fabrication Process",
            "How Steel Structures Are Designed",
            "Importance of Quality Control",
            "Steel Structure Maintenance",
        ],
    },
    {
        id: "industrial",
        icon: Factory,
        title: "Industrial Construction",
        color: "#f2a022",
        posts: [
            "How to Plan a Factory Building",
            "Warehouse Design Considerations",
            "Industrial Shed Planning Guide",
            "Mezzanine Floor Applications",
        ],
    },
    {
        id: "insights",
        icon: Briefcase,
        title: "Project Insights",
        color: "#0b2350",
        posts: [
            "Behind the Build",
            "Project Case Studies",
            "Engineering Challenges & Solutions",
        ],
    },
];

const FEATURED_POSTS = [
    {
        title: "What Is a Pre-Engineered Building?",
        category: "PEB Construction",
        date: "Mar 15, 2026",
        readTime: "5 min read",
        image: PebBuildingImg,
        excerpt: "Pre-engineered buildings are revolutionizing the construction industry with their efficiency, cost-effectiveness, and quick installation.",
    },
    {
        title: "Structural Steel Fabrication Process",
        category: "Structural Steel",
        date: "Mar 10, 2026",
        readTime: "7 min read",
        image: SteelFabricationImg,
        excerpt: "A comprehensive guide to the structural steel fabrication process, from design to delivery.",
    },
    {
        title: "How to Plan a Factory Building",
        category: "Industrial Construction",
        date: "Mar 5, 2026",
        readTime: "6 min read",
        image: PlanBuildingImg,
        excerpt: "Key considerations and best practices for planning a modern factory building.",
    },
];

const RECENT_POSTS = [
    {
        title: "PEB vs Conventional Construction",
        category: "PEB Construction",
        date: "Mar 12, 2026",
        readTime: "4 min read",
    },
    {
        title: "How Steel Structures Are Designed",
        category: "Structural Steel",
        date: "Mar 8, 2026",
        readTime: "6 min read",
    },
    {
        title: "Warehouse Design Considerations",
        category: "Industrial Construction",
        date: "Mar 3, 2026",
        readTime: "5 min read",
    },
    {
        title: "Factors Affecting PEB Cost",
        category: "PEB Construction",
        date: "Feb 28, 2026",
        readTime: "4 min read",
    },
    {
        title: "Importance of Quality Control in Steel",
        category: "Structural Steel",
        date: "Feb 25, 2026",
        readTime: "5 min read",
    },
    {
        title: "Project Case Studies",
        category: "Project Insights",
        date: "Feb 20, 2026",
        readTime: "8 min read",
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
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

/* ---------------------------------------------------------
   MAIN COMPONENT
--------------------------------------------------------- */

export default function BlogResources() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [activeCategory, setActiveCategory] = useState("all");

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

    const filteredPosts = activeCategory === "all"
        ? RECENT_POSTS
        : RECENT_POSTS.filter(post => {
            const categoryMap = {
                peb: "PEB Construction",
                structural: "Structural Steel",
                industrial: "Industrial Construction",
                insights: "Project Insights",
            };
            return post.category === categoryMap[activeCategory];
        });

    return (
        <div className="blog-page-wrapper">
            {/* ================= BANNER/HERO SECTION ================= */}
            <section className="blog-page-hero">
                <div className="blog-page-hero-bg">
                    <img
                        src={SolutionsBannerImg}
                        alt="Blog and resources banner"
                    />
                    <div className="blog-page-hero-bg-overlay" />
                </div>

                <div className="blog-page-hero-container">
                    {/* Left Side - Content */}
                    <motion.div
                        className="blog-page-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="blog-page-hero-badge">
                            <span>✦ Blog & Resources</span>
                        </div>
                        <h1>
                            Insights From the World of
                            <br />
                            <span className="blog-page-highlight">Steel & Industrial Construction</span>
                        </h1>
                        <p>
                            Expert insights, industry trends, and practical guides to help you
                            make informed decisions for your steel construction projects.
                        </p>
                    </motion.div>

                    {/* Right Side - Form */}
                    <motion.div
                        className="blog-page-hero-form"
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="blog-page-form-card">
                            <div className="blog-page-form-header">
                                <h3>Subscribe to Our Newsletter</h3>
                                <p>Get the latest insights delivered to your inbox</p>
                            </div>
                            <form onSubmit={handleSubmit} className="blog-page-form">
                                <div className="blog-page-form-group">
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
                                <div className="blog-page-form-group">
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
                                <div className="blog-page-form-group">
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
                                <div className="blog-page-form-group">
                                    <label htmlFor="message">
                                        <MessageSquare size={16} />
                                        Topics of Interest
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="2"
                                        placeholder="What topics are you interested in?"
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                </div>
                                <motion.button
                                    type="submit"
                                    className="blog-page-form-submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Subscribe <Send size={16} />
                                </motion.button>
                            </form>
                            <div className="blog-page-form-footer">
                                <span>🔒 Your information is secure with us</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ================= CATEGORIES SECTION ================= */}
            <section className="blog-page-categories">
                <div className="blog-page-categories-container">
                    <motion.div
                        className="blog-page-categories-header"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <span className="blog-page-badge">BLOG CATEGORIES</span>
                        <h2>
                            Explore Our <span className="blog-page-highlight">Resources</span>
                        </h2>
                        <p>
                            Browse through our collection of articles, guides, and insights
                            across various categories.
                        </p>
                    </motion.div>

                    <motion.div
                        className="blog-page-categories-grid"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {BLOG_CATEGORIES.map((category, index) => (
                            <motion.div
                                className="blog-page-category-card"
                                key={category.id}
                                variants={fadeInUp}
                                whileHover={{
                                    y: -8,
                                    boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
                                    transition: { duration: 0.3 },
                                }}
                            >
                                <motion.div
                                    className="blog-page-category-icon"
                                    whileHover={{
                                        rotate: 360,
                                        backgroundColor: "#f2a022",
                                        borderColor: "#f2a022",
                                        color: "#fff",
                                        transition: { duration: 0.6 },
                                    }}
                                >
                                    <category.icon size={28} />
                                </motion.div>
                                <h3>{category.title}</h3>
                                <ul className="blog-page-category-posts">
                                    {category.posts.slice(0, 3).map((post, idx) => (
                                        <li key={idx}>
                                            <ChevronRight size={14} />
                                            <Link to={`/blog/details/${slugify(post)}`}>
                                                {post}
                                            </Link>
                                        </li>
                                    ))}
                                    {category.posts.length > 3 && (
                                        <li className="blog-page-category-more">
                                            +{category.posts.length - 3} more articles
                                        </li>
                                    )}
                                </ul>
                                <div className="blog-page-category-line" />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ================= FEATURED POSTS ================= */}
            <section className="blog-page-featured">
                <div className="blog-page-featured-container">
                    <motion.div
                        className="blog-page-featured-header"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <span className="blog-page-badge light">FEATURED</span>
                        <h2>
                            Latest <span className="blog-page-highlight">Articles</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        className="blog-page-featured-grid"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {FEATURED_POSTS.map((post, index) => (
                            <motion.div
                                className="blog-page-featured-card"
                                key={index}
                                variants={fadeInUp}
                                whileHover={{
                                    y: -8,
                                    boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
                                    transition: { duration: 0.3 },
                                }}
                            >
                                <div className="blog-page-featured-image">
                                    <img src={post.image} alt={post.title} />
                                    <span className="blog-page-featured-category">{post.category}</span>
                                </div>
                                <div className="blog-page-featured-content">
                                    <div className="blog-page-featured-meta">
                                        <span>
                                            <Calendar size={14} />
                                            {post.date}
                                        </span>
                                        <span>
                                            <ClockIcon size={14} />
                                            {post.readTime}
                                        </span>
                                    </div>
                                    <h3>{post.title}</h3>
                                    <p>{post.excerpt}</p>
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Link
                                            to={`/blog/details/${slugify(post.title)}`}
                                            className="blog-page-featured-link"
                                        >
                                            Read More <ArrowRight size={16} />
                                        </Link>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="blog-page-recent">
                <div className="blog-page-recent-container">
                    <motion.div
                        className="blog-page-recent-header"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div>
                            <span className="blog-page-badge">RECENT POSTS</span>
                            <h2>
                                What's <span className="blog-page-highlight">New</span>
                            </h2>
                        </div>
                        <div className="blog-page-recent-filter">
                            <button
                                className={`filter-btn ${activeCategory === "all" ? "active" : ""}`}
                                onClick={() => setActiveCategory("all")}
                            >
                                All
                            </button>
                            {BLOG_CATEGORIES.map((cat) => (
                                <button
                                    key={cat.id}
                                    className={`filter-btn ${activeCategory === cat.id ? "active" : ""}`}
                                    onClick={() => setActiveCategory(cat.id)}
                                >
                                    {cat.title}
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            className="blog-page-recent-grid"
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            viewport={{ once: true }}
                        >
                            {filteredPosts.length > 0 ? (
                                filteredPosts.map((post, index) => (
                                    <motion.div
                                        className="blog-page-recent-card"
                                        key={post.id || index}
                                        variants={fadeInUp}
                                        whileHover={{
                                            x: 5,
                                            transition: { duration: 0.3 },
                                        }}
                                    >
                                        <div className="blog-page-recent-content">
                                            <span className="blog-page-recent-category">{post.category}</span>
                                            <h4>{post.title}</h4>
                                            <div className="blog-page-recent-meta">
                                                <span>
                                                    <Calendar size={14} />
                                                    {post.date}
                                                </span>
                                                <span>
                                                    <ClockIcon size={14} />
                                                    {post.readTime}
                                                </span>
                                            </div>
                                            <motion.div
                                                whileHover={{ x: 5 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <Link
                                                    to={`/blog/details/${slugify(post.title)}`}
                                                    className="blog-page-recent-link"
                                                >
                                                    Read Article <ChevronRight size={14} />
                                                </Link>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                <motion.div
                                    className="blog-page-no-results"
                                    variants={fadeInUp}
                                >
                                    <p>No articles found in this category. Please check back later.</p>
                                </motion.div>
                            )}
                        </motion.div>
                    </AnimatePresence>

                    {filteredPosts.length > 0 && (
                        <motion.div
                            className="blog-page-recent-loadmore"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <Link
                                to={`/blog/details/${slugify(RECENT_POSTS[0].title)}`}
                                className="blog-page-loadmore-btn"
                            >
                                Load More Articles <ArrowRight size={16} />
                            </Link>
                        </motion.div>
                    )}
                </div>
            </section>
        </div>
    );
}