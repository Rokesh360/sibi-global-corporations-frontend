import React, { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel } from "antd";
import { motion } from "framer-motion";
import ProjectWarehouseImg from "../../public/assets/img/project-warehouse.jpg";
import ProjectManufacturingImg from "../../public/assets/img/project-manufacturing.jpg";
import ProjectLogisticsImg from "../../public/assets/img/project-logistics.jpg";
import { Link } from "react-router-dom";

const projects = [
  {
    image: ProjectWarehouseImg,
    alt: "Industrial Warehouse",
    title: "Industrial Warehouse",
    location: "Hyderabad, India",
  },
  {
    image: ProjectManufacturingImg,
    alt: "Manufacturing Facility",
    title: "Manufacturing Facility",
    location: "Chennai, India",
  },
  {
    image: ProjectLogisticsImg,
    alt: "Logistics Park",
    title: "Logistics Park",
    location: "Pune, India",
  },
  {
    image: ProjectManufacturingImg,
    alt: "Manufacturing Facility",
    title: "Manufacturing Facility",
    location: "Chennai, India",
  },
];

// Centralize the breakpoints so JS and CSS never disagree.
const BREAKPOINTS = [
  { maxWidth: 768, slidesToShow: 1 },
  { maxWidth: 992, slidesToShow: 2 },
];
const DEFAULT_SLIDES_TO_SHOW = 3;

const getSlidesToShow = (width) => {
  const match = BREAKPOINTS.find((bp) => width <= bp.maxWidth);
  return match ? match.slidesToShow : DEFAULT_SLIDES_TO_SHOW;
};

export default function RecentProjects() {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Drive slidesToShow explicitly from actual window width instead of
  // relying solely on react-slick's internal `responsive` matching,
  // which can fail to re-evaluate correctly on mount/hydration and
  // leave mobile stuck showing the desktop slide count.
  const [slidesToShow, setSlidesToShow] = useState(() =>
    typeof window !== "undefined"
      ? getSlidesToShow(window.innerWidth)
      : DEFAULT_SLIDES_TO_SHOW
  );

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getSlidesToShow(window.innerWidth));
    };

    // Set correct value immediately (covers SSR hydration case)
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSlideChange = useCallback((current) => {
    setActiveIndex(current);
  }, []);

  const pauseAutoplayBriefly = () => {
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 3000);
  };

  const goPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
      pauseAutoplayBriefly();
    }
  };

  const goNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
      pauseAutoplayBriefly();
    }
  };

  const goToSlide = (index) => {
    if (carouselRef.current) {
      carouselRef.current.goTo(index);
      pauseAutoplayBriefly();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow, // <-- now explicit, always in sync with actual width
    slidesToScroll: 1,
    autoplay: isAutoplay,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    afterChange: handleSlideChange,
  };

  return (
    <section className="projects-section">
      <div className="projects-container">
        {/* LEFT CONTENT */}
        <motion.div
          className="projects-intro"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            OUR RECENT PROJECTS
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Structures That
            <span> Power Growth</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A glimpse of some industrial and commercial projects delivered
            by SIBI Global Corporation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link to="/projects" className="yellow-btn">
                View All Projects

                <motion.span
                  whileHover={{ x: 7 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* PROJECT SLIDER */}
        <motion.div
          className="projects-slider"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
        >
          <button
            type="button"
            className="project-arrow project-prev"
            onClick={goPrev}
            aria-label="Previous project"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="projects-viewport">
            {/* key forces a clean remount when slidesToShow changes,
                avoiding stale internal slick-track measurements */}
            <Carousel key={slidesToShow} ref={carouselRef} {...settings}>
              {projects.map((project, index) => (
                <div key={index}>
                  <motion.div
                    className="project-card"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="project-image"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.4 }}
                    >
                      <motion.img
                        src={project.image}
                        alt={project.alt}
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.5 }}
                      />
                    </motion.div>

                    <motion.div className="project-info" whileHover={{ x: 4 }}>
                      <h3>{project.title}</h3>
                      <p>{project.location}</p>
                    </motion.div>
                  </motion.div>
                </div>
              ))}
            </Carousel>
          </div>

          <button
            type="button"
            className="project-arrow project-next"
            onClick={goNext}
            aria-label="Next project"
          >
            <ChevronRight size={18} />
          </button>

          <div className="project-dots">
            {projects.map((_, index) => (
              <motion.span
                key={index}
                className={`dot ${index === activeIndex ? "active" : ""}`}
                onClick={() => goToSlide(index)}
                role="button"
                tabIndex={0}
                aria-label={`Go to slide ${index + 1}`}
                whileHover={{ scale: 1.3 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};