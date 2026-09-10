// BlogDetails.jsx
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ChevronLeft } from "lucide-react";
import BlogBannerImg from "../../../../public/assets/img/solutions-banner.png";
import FrameImg from "../../../../public/assets/img/blog-details/pre-engineered-frame.png";
import FactoryImg from "../../../../public/assets/img/blog-details/factory.png";
import IndustrialShedImg from "../../../../public/assets/img/blog-details/industrial-shed.png";
import WarehouseImg from "../../../../public/assets/img/blog-details/warehouse.png";
import StorageImg from "../../../../public/assets/img/blog-details/storage.png";
import ManufacturingImg from "../../../../public/assets/img/blog-details/manufacturing.png";
import PebBuildingImg from "../../../../public/assets/img/blog-details/pre-engineered-building.png";

/* ---------------------------------------------------------
   DATA
--------------------------------------------------------- */

const RECENT_BLOGS = [
  {
    title: "What Is a Pre-Engineered Building?",
    date: "Mar 10, 2026",
    image: FactoryImg,
    slug: "what-is-a-pre-engineered-building",
  },
  {
    title: "Structural Steel Fabrication Process",
    date: "Feb 28, 2026",
    image: IndustrialShedImg,
    slug: "structural-steel-fabrication-process",
  },
  {
    title: "How to Plan a Factory Building",
    date: "Feb 20, 2026",
    image: StorageImg,
    slug: "how-to-plan-a-factory-building",
  },
  {
    title: "PEB vs Conventional Construction",
    date: "Feb 12, 2026",
    image: WarehouseImg,
    slug: "peb-vs-conventional-construction",
  },
  {
    title: "How Steel Structures Are Designed",
    date: "Jan 30, 2026",
    image: ManufacturingImg,
    slug: "how-steel-structures-are-designed",
  },
];

const FEATURE_LIST = [
  {
    number: "01",
    title: "Faster Construction",
    description:
      "Components are manufactured in advance and assembled quickly at the project site.",
  },
  {
    number: "02",
    title: "Cost Effective",
    description:
      "Optimised steel usage and reduced construction time help control overall project costs.",
  },
  {
    number: "03",
    title: "High Strength & Durability",
    description:
      "Engineered steel structures provide excellent strength, durability and long-term performance.",
  },
];

const APPLICATIONS = [
  { title: "Industrial Facilities", image: IndustrialShedImg },
  { title: "Warehouses", image: WarehouseImg },
  { title: "Logistics Hubs", image: PebBuildingImg },
  { title: "Commercial Buildings", image: FactoryImg },
];

/* ---------------------------------------------------------
   ANIMATION VARIANTS
--------------------------------------------------------- */

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

/* ---------------------------------------------------------
   MAIN COMPONENT
--------------------------------------------------------- */

export default function BlogDetails() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [slug]);

  return (
    <div className="blog-details-wrapper">
      {/* ================= BANNER/HERO SECTION ================= */}
      <section className="blog-details-hero">
        <div className="blog-details-hero-bg">
          <img src={BlogBannerImg} alt="Blog banner" />
          <div className="blog-details-hero-bg-overlay" />
        </div>

        <div className="blog-details-hero-container">
          <motion.div
            className="blog-details-hero-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="blog-details-hero-badge">
              <Link to="/blog" className="blog-details-back-link">
                <ChevronLeft size={16} /> Back to Blog
              </Link>
            </div>
            <h1>
              Blog <span className="blog-details-highlight">Details</span>
            </h1>
            <p>
              Expert insights, industry trends, and practical guides to help you
              make informed decisions for your steel construction projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= BLOG DETAIL SECTION ================= */}
      <section className="blog-detail-section">
        <div className="blog-container">
          {/* ================= LEFT CONTENT ================= */}
          <main className="blog-main">
            {/* Hero Image */}
            <motion.div
              className="blog-hero"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img src={FrameImg} alt="Pre-Engineered Building" />
            </motion.div>

            {/* Blog Content */}
            <motion.div
              className="blog-content"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2>Introduction</h2>
              <p>
                Pre-engineered buildings (PEB) are modern steel structures that are
                designed, manufactured and assembled using precision engineering
                techniques. They offer a faster, more efficient and flexible
                alternative to traditional construction methods. With their strength,
                durability and cost advantages, PEBs have become the preferred choice
                for a wide range of industrial and commercial applications.
              </p>

              <h2>Key Advantages of Pre-Engineered Buildings</h2>
              <p>
                Pre-engineered buildings provide several advantages over conventional
                construction methods. Their factory-controlled manufacturing process
                ensures accuracy, quality and faster project completion.
              </p>

              <div className="feature-list">
                {FEATURE_LIST.map((feature, index) => (
                  <motion.div
                    className="feature-item"
                    key={index}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <span>{feature.number}</span>
                    <div>
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Applications Section */}
            <motion.section
              className="applications-section"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="applications-container">
                <div className="applications-header">
                  <h2>Applications</h2>
                  <p>
                    PEBs are widely used in factories, warehouses, logistics hubs,
                    commercial spaces,
                    <br className="desktop-break" />
                    and more. Their versatility makes them a perfect choice for modern
                    infrastructure needs.
                  </p>
                </div>

                <motion.div
                  className="applications-grid"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {APPLICATIONS.map((app, index) => (
                    <motion.div
                      className="application-card"
                      key={index}
                      variants={fadeInUp}
                      whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    >
                      <div className="application-image">
                        <img src={app.image} alt={app.title} />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.section>
          </main>

          {/* ================= RIGHT SIDEBAR ================= */}
          <aside className="blog-sidebar">
            <motion.section
              className="recent-blogs"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="recent-blogs-heading">
                <h3>Recent Blogs</h3>
              </div>

              <div className="recent-blog-list">
                {RECENT_BLOGS.map((blog, index) => (
                  <Link
                    to={`/blog/details/${blog.slug}`}
                    className="recent-blog-item"
                    key={index}
                  >
                    <div className="recent-blog-image">
                      <img src={blog.image} alt={blog.title} />
                    </div>

                    <div className="recent-blog-content">
                      <h4>{blog.title}</h4>
                      <div className="recent-blog-date">
                        <Calendar size={14} className="calendar-icon" />
                        <span>{blog.date}</span>
                      </div>
                    </div>

                    <span className="blog-arrow">›</span>
                  </Link>
                ))}
              </div>
            </motion.section>
          </aside>
        </div>
      </section>
    </div>
  );
}