import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRightOutlined,
  SafetyOutlined,
  BarChartOutlined,
  SettingOutlined,
  TeamOutlined,
  ReadFilled,
  StarOutlined,
  StarFilled,
  EnvironmentOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import CareerBannerImg from "../../../public/assets/img/solutions-banner.png";
import WorkerImg from "../../../public/assets/img/workers.png";
import ApplyModal from "../Modal/ApplyModal";

/* ---------------------------------------------------------
   DATA
--------------------------------------------------------- */

const WHY_JOIN_FEATURES = [
  { icon: "helmet", title: "Real Industrial Projects", description: "Work on large-scale, real-world projects across industries." },
  { icon: "chart", title: "Professional Growth", description: "Develop your skills and advance your career." },
  { icon: "gear", title: "Engineering Challenges", description: "Solve complex problems and make an impact." },
  { icon: "users", title: "Collaborative Culture", description: "Work with a supportive and experienced team." },
  { icon: "book", title: "Skill Development", description: "Access training and continuous learning." },
  { icon: "star", title: "Career Opportunities", description: "Build a long-term future with us." },
];

const CURRENT_OPENINGS = [
  { number: "01", title: "PROJECT / DESIGN ENGINEER", location: "Chennai", experience: "2 – 5 Years" },
  { number: "02", title: "SITE ENGINEER", location: "Chennai", experience: "3 – 6 Years" },
  { number: "03", title: "QUALITY ENGINEER", location: "Chennai", experience: "2 – 4 Years" },
];

const GROWTH_STEPS = [
  { number: "01", title: "LEARN", icon: "book", theme: "step-one" },
  { number: "02", title: "CONTRIBUTE", icon: "users", theme: "step-two" },
  { number: "03", title: "GROW", icon: "chart", theme: "step-three" },
  { number: "04", title: "LEAD", icon: "star", theme: "step-four" },
];

/* ---------------------------------------------------------
   ANIMATIONS
--------------------------------------------------------- */

const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const fadeInLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const fadeInRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };

/* ---------------------------------------------------------
   MAIN COMPONENT
--------------------------------------------------------- */

export default function Career() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openApplyModal = (jobTitle = "") => {
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
  };

  const closeApplyModal = () => {
    setIsModalOpen(false);
    setSelectedJob("");
  };

  const renderWhyJoinIcon = (icon) => {
    const icons = {
      helmet: <SafetyOutlined style={{ fontSize: 32 }} />,
      chart: <BarChartOutlined style={{ fontSize: 32 }} />,
      gear: <SettingOutlined style={{ fontSize: 32 }} />,
      users: <TeamOutlined style={{ fontSize: 32 }} />,
      book: <ReadFilled style={{ fontSize: 32 }} />,
      star: <StarOutlined style={{ fontSize: 32 }} />,
    };
    return icons[icon] || icons.gear;
  };

  const renderGrowthIcon = (icon) => {
    const icons = {
      book: <ReadFilled style={{ fontSize: 40 }} />,
      users: <TeamOutlined style={{ fontSize: 40 }} />,
      chart: <BarChartOutlined style={{ fontSize: 40 }} />,
      star: <StarFilled style={{ fontSize: 40 }} />,
    };
    return icons[icon] || icons.book;
  };

  return (
    <div className="career-page-wrapper">
      {/* ================= BANNER/HERO SECTION ================= */}
      <section className="career-page-hero">
        <div className="career-page-hero-bg">
          <img src={CareerBannerImg} alt="Career banner" />
          <div className="career-page-hero-bg-overlay" />
        </div>

        <div className="career-page-hero-container">
          <motion.div
            className="career-page-hero-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="career-page-hero-badge">
              <span>✦ Careers</span>
            </div>
            <h1>
              Build Your Career
              <br />
              <span className="career-page-highlight">With Sibi Global</span>
            </h1>
            <p>
              We are looking for people who enjoy solving engineering challenges,
              working on real industrial projects and being part of a growing organisation.
            </p>
          </motion.div>

          <motion.div
            className="career-page-hero-form"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="career-page-form-card">
              <div className="career-page-form-header">
                <h3>Apply Now</h3>
                <p>Fill in the form and we'll get back to you</p>
              </div>

              <form
                className="career-page-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  openApplyModal("");
                }}
              >
                <div className="career-page-form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="Enter your full name" required />
                </div>
                <div className="career-page-form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="Enter your email address" required />
                </div>
                <div className="career-page-form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" />
                </div>
                <div className="career-page-form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" name="message" rows="3" placeholder="Tell us about yourself" />
                </div>
                <button type="submit" className="career-page-form-submit">
                  Submit Application <ArrowRightOutlined />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= WHY JOIN US SECTION ================= */}
      <section className="why-join-section">
        <div className="why-join-container">
          <motion.div className="why-intro" variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="section-label"><p>WHY JOIN US</p></div>
            <h2>
              More Than <span className="highlight">Just a Job</span>
            </h2>
            <p className="intro-text">
              At Sibi Global, you'll find opportunities to work on meaningful projects,
              learn from experienced professionals and build a long-term career in the
              steel and construction industry.
            </p>
            <div className="intro-bottom">
              <span>ENGINEERING</span>
              <b>•</b>
              <span>INNOVATION</span>
              <b>•</b>
              <span>GROWTH</span>
            </div>
          </motion.div>

          <motion.div className="why-features" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {WHY_JOIN_FEATURES.map((feature, index) => (
              <motion.div className="why-card" key={index} variants={fadeInUp}>
                <div className="icon-circle">{renderWhyJoinIcon(feature.icon)}</div>
                <div className="card-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="bottom-decoration"></div>
      </section>

      {/* ================= CURRENT OPENINGS SECTION ================= */}
      <section className="openings-section">
        <div className="openings-image">
          <img src={WorkerImg} alt="Worker" />
          <div className="image-angle"></div>
        </div>

        <motion.div className="openings-content" variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="section-heading">
            <span className="heading-line"></span>
            <h2>CURRENT OPENINGS</h2>
          </div>

          <div className="jobs-list">
            {CURRENT_OPENINGS.map((job, index) => (
              <motion.div className="job-card" key={index} variants={fadeInUp}>
                <div className="job-number">{job.number}</div>
                <div className="job-details">
                  <h3>{job.title}</h3>
                  <div className="job-meta">
                    <span>
                      <EnvironmentOutlined /> {job.location}
                    </span>
                    <span>
                      <ClockCircleOutlined /> {job.experience}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  className="apply-btn"
                  onClick={() => openApplyModal(job.title)}
                >
                  APPLY NOW
                  <ArrowRightOutlined />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= CAREER GROWTH SECTION ================= */}
      <section className="growth-section">
        <div className="growth-container">
          <motion.div className="growth-intro" variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="growth-label">
              <span></span>
              <p>CAREER GROWTH</p>
            </div>
            <h2>
              Your Growth <span className="highlight">Our Commitment</span>
            </h2>
            <p>
              We believe in nurturing talent and providing clear growth paths.
              At Sibi Global, your career is built on learning, contribution and leadership.
            </p>
          </motion.div>

          <motion.div className="growth-steps" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {GROWTH_STEPS.map((step, index) => (
              <motion.div className={`growth-step ${step.theme}`} key={index} variants={fadeInUp}>
                <div className="step-icon">{renderGrowthIcon(step.icon)}</div>
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= APPLY MODAL ================= */}
      <ApplyModal
        isOpen={isModalOpen}
        onClose={closeApplyModal}
        jobTitle={selectedJob}
      />
    </div>
  );
}