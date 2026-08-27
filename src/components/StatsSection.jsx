import React, { useState, useEffect, useRef } from 'react';

const StatsSection = () => {
  const [counts, setCounts] = useState({
    projects: 0,
    experience: 0,
    capacity: 0,
    industries: 0
  });
  
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const statsData = [
    {
      id: 'projects',
      icon: '♙',
      targetNumber: 250,
      displayNumber: '250+',
      title: 'Projects Delivered',
      suffix: '+',
    },
    {
      id: 'experience',
      icon: '◎',
      targetNumber: 15,
      displayNumber: '15+',
      title: 'Years of Experience',
      suffix: '+',
    },
    {
      id: 'capacity',
      icon: '♙',
      targetNumber: 12000,
      displayNumber: '12,000+',
      title: 'Fabrication Capacity',
      suffix: '+ MT',
    },
    {
      id: 'industries',
      icon: '♧',
      targetNumber: 20,
      displayNumber: '20+',
      title: 'Industries Served',
      suffix: '+',
    },
  ];

  // Format number with commas
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Animate counting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  // Start counting animation
  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      projects: 250,
      experience: 15,
      capacity: 12000,
      industries: 20
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        projects: Math.floor(targets.projects * progress),
        experience: Math.floor(targets.experience * progress),
        capacity: Math.floor(targets.capacity * progress),
        industries: Math.floor(targets.industries * progress),
      });

      if (currentStep >= steps) {
        setCounts({
          projects: targets.projects,
          experience: targets.experience,
          capacity: targets.capacity,
          industries: targets.industries,
        });
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [hasAnimated]);

  // Get the current count for each stat
  const getCount = (id) => {
    switch(id) {
      case 'projects': return counts.projects;
      case 'experience': return counts.experience;
      case 'capacity': return counts.capacity;
      case 'industries': return counts.industries;
      default: return 0;
    }
  };

  // Get display suffix
  const getSuffix = (stat) => {
    if (stat.id === 'capacity') return ' MT';
    if (stat.suffix) return stat.suffix;
    return '';
  };

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <React.Fragment key={stat.id}>
            {/* Stat Item */}
            <div className="stat-box" >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">
                {formatNumber(getCount(stat.id))}
                <small>{getSuffix(stat)}</small>
              </div>
              <div className="stat-title">{stat.title}</div>
            </div>

            {/* Divider - Don't add after the last item */}
            {index < statsData.length - 1 && (
              <div className="stat-divider"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;