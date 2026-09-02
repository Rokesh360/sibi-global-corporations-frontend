import React from 'react';
import WhyChooseUs from './WhyChooseUs'
import Manufacturing from './Manufacturing'
import StatsSection from './StatsSection'
import Industries from './Industries'
import RecentProjects from './Recentprojects'
import HowWeWork from './HowWeWork'
import CertificationCTA from './CertificationCTA'
import HeroBanner from './HeroBanner'
import AboutUs from './AboutUs';
import Solutions from './Solutions';

export default function HomePage () {
  return (
    <>
      <HeroBanner />
      <AboutUs />
      <Solutions />
      <WhyChooseUs />
      <Manufacturing />
      <StatsSection />
      <Industries />
      <RecentProjects /> 
      <HowWeWork />
      <CertificationCTA />
    </>
  )
}