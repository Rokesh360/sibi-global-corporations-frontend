import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel } from 'antd';

import ProjectWarehouseImg from "../../public/assets/img/project-warehouse.jpg";
import ProjectManufacturingImg from "../../public/assets/img/project-manufacturing.jpg";
import ProjectLogisticsImg from "../../public/assets/img/project-logistics.jpg";

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

const RecentProjects = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Handle slide change
  const handleSlideChange = (current) => {
    setActiveIndex(current);
  };

  // Go to previous slide
  const goPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
      setIsAutoplay(false);
      // Resume autoplay after 3 seconds of inactivity
      setTimeout(() => setIsAutoplay(true), 3000);
    }
  };

  // Go to next slide
  const goNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
      setIsAutoplay(false);
      // Resume autoplay after 3 seconds of inactivity
      setTimeout(() => setIsAutoplay(true), 3000);
    }
  };

  // Go to specific slide via dots
  const goToSlide = (index) => {
    if (carouselRef.current) {
      carouselRef.current.goTo(index);
      setIsAutoplay(false);
      setTimeout(() => setIsAutoplay(true), 3000);
    }
  };

  const isAtStart = activeIndex === 0;
  const isAtEnd = activeIndex === projects.length - 1;

  // Custom arrow settings for continuous scroll
  const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: isAutoplay,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  afterChange: handleSlideChange,

  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

  return (
    <section className="projects-section">
      <div className="projects-container">

        {/* -------------------------------------------------
            LEFT CONTENT
        ------------------------------------------------- */}
        <div className="projects-intro">
          <span className="section-label">OUR RECENT PROJECTS</span>

          <h2>
            Structures That
            <span> Power Growth</span>
          </h2>

          <p>
            A glimpse of some industrial and commercial projects delivered
            by SIBI Global Corporation.
          </p>

          <a href="#" className="yellow-btn">
            View All Projects
            <span>→</span>
          </a>
        </div>

        {/* -------------------------------------------------
            PROJECT SLIDER WITH ANT DESIGN CAROUSEL
        ------------------------------------------------- */}
        <div className="projects-slider">

          <button
            type="button"
            className="project-arrow project-prev"
            onClick={goPrev}
            aria-label="Previous project"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="projects-viewport">
            <Carousel ref={carouselRef} {...settings}>
              {projects.map((project, index) => (
                <div key={index}>
                  <div className="project-card">
                    <div className="project-image">
                      <img src={project.image} alt={project.alt} />
                    </div>

                    <div className="project-info">
                      <h3>{project.title}</h3>
                      <p>{project.location}</p>
                    </div>
                  </div>
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
              <span
                key={index}
                className={`dot ${index === activeIndex ? "active" : ""}`}
                onClick={() => goToSlide(index)}
                role="button"
                tabIndex={0}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default RecentProjects;