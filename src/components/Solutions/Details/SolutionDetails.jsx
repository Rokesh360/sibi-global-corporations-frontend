import React, { useState, useEffect } from "react";
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
} from "lucide-react";
import { useParams, Link } from "react-router-dom";
import SolutionBannerImg from "../../../../public/assets/img/solutions-banner.png";
import PreEngineering from "../../../../public/assets/img/solution/peb-building.jpg";
import SteelFabrication from "../../../../public/assets/img/solution/steel-fabrication.jpg";
import IndustrialShed from "../../../../public/assets/img/solution/industrial-shed.jpg";
import SteelErection from "../../../../public/assets/img/solution/steel-erection.jpg";
import MezzanineFloors from "../../../../public/assets/img/solution/mezzanine-floor.jpg";
import TurnkeySolutions from "../../../../public/assets/img/solution/turnkey-solutions.jpg";

// Application category photos — place the matching files under
// public/assets/img/applications/ (swap paths/filenames as needed)
import AppFactories from "../../../../public/assets/img/industries/factory.png";
import AppWarehouses from "../../../../public/assets/img/industries/warehouse.png";
import AppManufacturing from "../../../../public/assets/img/industries/manufacturing.png";
import AppIndustrialSheds from "../../../../public/assets/img/industries/industrial-shed.png";
import AppCommercialBuildings from "../../../../public/assets/img/industries/commercial.png";
import AppStorageFacilities from "../../../../public/assets/img/industries/storage.png";
import AppIndustrialBuildings from "../../../../public/assets/img/industries/industrial-shed.png";
import AppInfrastructure from "../../../../public/assets/img/industries/factory.png";
import AppWorkshops from "../../../../public/assets/img/industries/warehouse.png";
import AppRetailSpaces from "../../../../public/assets/img/industries/manufacturing.png";

/* ---------------------------------------------------------
   DATA
--------------------------------------------------------- */

const SOLUTIONS = [
  {
    id: 1,
    slug: "pre-engineered-buildings",
    number: "01",
    title: "Pre-Engineered Buildings",
    description:
      "Efficiently engineered steel building solutions designed for factories, warehouses, manufacturing facilities and industrial applications.",
    image: PreEngineering,
    link: "Explore PEB Solutions",
    icon: "🏭",
    theme: "navy",
    category: "peb",
    client: "Various Industrial Clients",
    duration: "4-12 Weeks",
    teamSize: "25-50 Members",
    challenge: "Designing and fabricating cost-effective, durable steel structures that meet specific industrial requirements while ensuring quick installation.",
    solution: "We engineer custom PEB solutions with optimized designs, quality fabrication, and efficient installation processes.",
    result: "Delivered high-quality pre-engineered buildings that are durable, cost-effective, and quick to install.",
    keyFeatures: [
      "Custom design solutions",
      "Quick installation",
      "Cost-effective",
      "Durable and long-lasting",
      "Low maintenance",
      "Energy efficient",
    ],
    applications: [
      "Factories",
      "Warehouses",
      "Manufacturing Facilities",
      "Storage Facilities",
      "Industrial Sheds",
    ],
    benefits: [
      "Reduced construction time",
      "Cost savings up to 30%",
      "Flexible design options",
      "Quality controlled fabrication",
    ],
  },
  {
    id: 2,
    slug: "structural-steel-fabrication",
    number: "02",
    title: "Structural Steel Fabrication",
    description:
      "Precision-fabricated structural steel components manufactured according to project-specific engineering and fabrication requirements.",
    image: SteelFabrication,
    link: "Explore Structural Fabrication",
    icon: "⚙",
    theme: "white",
    category: "structural",
    client: "Engineering & Construction Firms",
    duration: "2-8 Weeks",
    teamSize: "20-40 Members",
    challenge: "Manufacturing precision steel components with strict tolerances and quality standards for complex structural applications.",
    solution: "Using advanced fabrication techniques and quality control processes to ensure precision and consistency.",
    result: "High-quality structural steel components that meet exact specifications and standards.",
    keyFeatures: [
      "Precision cutting",
      "Quality welding",
      "Custom specifications",
      "Dimensional accuracy",
      "Material traceability",
      "Quality assurance",
    ],
    applications: [
      "Industrial Buildings",
      "Commercial Structures",
      "Infrastructure Projects",
      "Bridge Components",
    ],
    benefits: [
      "High precision",
      "Consistent quality",
      "Custom solutions",
      "Fast turnaround",
    ],
  },
  {
    id: 3,
    slug: "industrial-shed-construction",
    number: "03",
    title: "Industrial Shed Construction",
    description:
      "Customised industrial shed solutions designed to provide practical, durable and efficient spaces for manufacturing, storage and operations.",
    image: IndustrialShed,
    link: "Explore Industrial Sheds",
    icon: "🏗",
    theme: "gold",
    category: "industrial",
    client: "Manufacturing & Logistics Companies",
    duration: "6-16 Weeks",
    teamSize: "30-60 Members",
    challenge: "Creating practical, durable, and efficient industrial spaces that meet operational requirements and safety standards.",
    solution: "Custom-designed industrial sheds with optimized layouts, proper ventilation, and efficient material handling.",
    result: "Functional industrial spaces that enhance productivity and operational efficiency.",
    keyFeatures: [
      "Durable structures",
      "Weather resistant",
      "Flexible layouts",
      "Adequate ventilation",
      "Natural lighting",
      "Safety compliant",
    ],
    applications: [
      "Manufacturing Units",
      "Warehouses",
      "Storage Facilities",
      "Workshops",
    ],
    benefits: [
      "Customized designs",
      "Durable construction",
      "Cost-effective",
      "Quick installation",
    ],
  },
  {
    id: 4,
    slug: "mezzanine-floors",
    number: "04",
    title: "Mezzanine Floors",
    description:
      "Steel mezzanine structures that help businesses maximise available vertical space and create additional usable floor areas within existing facilities.",
    image: MezzanineFloors,
    link: "Explore Mezzanine Solutions",
    icon: "▥",
    theme: "white",
    category: "mezzanine",
    client: "Commercial & Industrial Clients",
    duration: "2-6 Weeks",
    teamSize: "15-25 Members",
    challenge: "Maximizing vertical space without disrupting existing operations and ensuring structural integrity.",
    solution: "Engineered mezzanine solutions with proper load calculations, safety features, and minimal disruption.",
    result: "Additional usable floor space that maximizes facility utilization.",
    keyFeatures: [
      "Space optimization",
      "Heavy load capacity",
      "Easy installation",
      "Minimal disruption",
      "Safety compliant",
      "Custom designs",
    ],
    applications: [
      "Warehouses",
      "Office Buildings",
      "Retail Spaces",
      "Manufacturing Facilities",
    ],
    benefits: [
      "Maximizes space utilization",
      "Cost-effective expansion",
      "Quick installation",
      "Flexible design",
    ],
  },
  {
    id: 5,
    slug: "steel-erection",
    number: "05",
    title: "Steel Erection",
    description:
      "Safe and systematic structural steel erection supported by experienced site teams and planned execution methodologies.",
    image: SteelErection,
    link: "Explore Steel Erection",
    icon: "🏗",
    theme: "navy",
    category: "erection",
    client: "Construction & Engineering Firms",
    duration: "2-12 Weeks",
    teamSize: "25-50 Members",
    challenge: "Safe and systematic erection of steel structures on-site with proper coordination and safety protocols.",
    solution: "Planned execution with experienced teams, proper equipment, and strict safety measures.",
    result: "Safe and timely completion of steel structure erection.",
    keyFeatures: [
      "Safety first",
      "Skilled teams",
      "Systematic approach",
      "Proper equipment",
      "Quality control",
      "Timely completion",
    ],
    applications: [
      "Factories",
      "Warehouse",
      "Manufacturing Facilities",
      "Storage Facilities",
      "Industrial Sheds"
    ],
    benefits: [
      "Safe execution",
      "Timely completion",
      "Quality assurance",
      "Experienced teams",
    ],
  },
  {
    id: 6,
    slug: "turnkey-industrial-solutions",
    number: "06",
    title: "Turnkey Industrial Solutions",
    description:
      "Integrated project execution covering engineering, fabrication, transportation, erection and associated structural requirements.",
    image: TurnkeySolutions,
    link: "Discuss Your Project",
    icon: "✓",
    theme: "gold",
    category: "turnkey",
    client: "Industrial & Commercial Clients",
    duration: "12-24 Weeks",
    teamSize: "50-100 Members",
    challenge: "Managing complete project execution from design to completion with multiple stakeholders and complex requirements.",
    solution: "Integrated project management approach covering all aspects of steel construction.",
    result: "Complete turnkey solutions delivered on time with quality assurance.",
    keyFeatures: [
      "End-to-end service",
      "Project management",
      "Complete solutions",
      "Quality assurance",
      "Timely delivery",
      "Single-point coordination",
    ],
    applications: [
      "Industrial Plants",
      "Commercial Complexes",
      "Infrastructure Projects",
      "Large-scale Facilities",
    ],
    benefits: [
      "Single-point coordination",
      "Integrated approach",
      "Cost-effective",
      "Time-saving",
    ],
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
   STATIC CONTENT FOR THE NEW LAYOUT SECTIONS
--------------------------------------------------------- */

const QUICK_FEATURES = [
  {
    icon: Clock,
    badge: Zap,
    title: "Faster Construction",
    text: "Factory-fabricated components enable quicker assembly and project completion.",
  },
  {
    icon: TrendingUp,
    title: "Cost Efficient",
    text: "Optimized steel structures help reduce material, labor and construction costs.",
  },
  {
    icon: ShieldCheck,
    title: "High Durability",
    text: "High-quality structural steel provides strength and long-term performance.",
  },
  {
    icon: Settings,
    title: "Custom Designed",
    text: "Building dimensions and specifications can be designed around your specific requirements.",
  },
];

const BENEFIT_ICONS = [PenTool, Layers, ShieldCheck, Target, Award, Clock];
const APPLICATION_ICONS = [Factory, Building2, HardHat, Clipboard, Layers, ClipboardCheck, Building, Truck];

// Representative photography for each application category (used as a fallback
// whenever a specific per-project photo hasn't been supplied). Add the actual
// files under public/assets/img/applications/ using the import paths above —
// several categories intentionally share one image where the visual overlaps.
const APPLICATION_IMAGES = {
  "factories": AppFactories,
  "warehouses": AppWarehouses,
  "manufacturing facilities": AppManufacturing,
  "manufacturing units": AppManufacturing,
  "industrial sheds": AppIndustrialSheds,
  "commercial buildings": AppCommercialBuildings,
  "storage facilities": AppStorageFacilities,
  "industrial buildings": AppIndustrialBuildings,
  "commercial structures": AppCommercialBuildings,
  "infrastructure projects": AppInfrastructure,
  "bridge components": AppInfrastructure,
  "bridge construction": AppInfrastructure,
  "workshops": AppWorkshops,
  "office buildings": AppCommercialBuildings,
  "retail spaces": AppRetailSpaces,
  "industrial plants": AppIndustrialBuildings,
  "commercial complexes": AppCommercialBuildings,
  "large-scale facilities": AppIndustrialBuildings,
};

const getApplicationImage = (label, fallback) =>
  APPLICATION_IMAGES[label.trim().toLowerCase()] || fallback;

// Builds a set of distinct photos for the project gallery: the solution's own
// hero image plus different photos drawn from its application categories, so
// the three gallery cards never repeat the same picture.
const getGalleryImages = (solution) => {
  const candidates = [
    solution.image,
    ...solution.applications.map((app) => getApplicationImage(app, solution.image)),
  ];
  const unique = [...new Set(candidates)];
  while (unique.length < 3) unique.push(solution.image);
  return unique.slice(0, 3);
};

const WHY_CHOOSE_FEATURES = [
  {
    icon: Star,
    title: "Experience & Expertise",
    text: "Proven track record in industrial construction.",
  },
  {
    icon: Award,
    title: "Quality Materials",
    text: "Only the best structural steel.",
  },
  {
    icon: Target,
    title: "Precision Engineering",
    text: "Accurate, reliable and efficient.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    text: "We value your time and business.",
  },
];

/* ---------------------------------------------------------
   INTERNAL CSS FOR THE NEW LAYOUT SECTIONS
   (Hero section styling is untouched and lives elsewhere)
--------------------------------------------------------- */

const NewSectionsStyles = () => (
  <style>{`
    /* ===== Quick features strip ===== */
    .sd-quickfeatures-section {
      width: 100%;
      padding: 46px 0 50px;
      background: #f7fbff;
    }
    .sd-quickfeatures-container {
      width: min(1200px, 92%);
      margin: 0 auto;
    }
    .sd-quickfeatures-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 32px;
    }
    .sd-quickfeature-card {
      position: relative;
      padding-left: 2px;
    }
    .sd-quickfeature-icon {
      position: relative;
      width: 52px;
      height: 52px;
      margin-bottom: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: #e8f3ff;
      color: #0b356c;
    }
    .sd-quickfeature-icon .sd-quickfeature-badge {
      position: absolute;
      right: -3px;
      bottom: -3px;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: #ffb71b;
      color: #0b2350;
    }
    .sd-quickfeature-card h3 {
      color: #0b2f63;
      font-size: 16px;
      line-height: 1.3;
      font-weight: 600;
      margin: 0 0 6px;
    }
    .sd-quickfeature-card p {
      max-width: 240px;
      color: #52617a;
      font-size: 14px;
      line-height: 1.6;
      margin: 0;
    }

    /* ===== Shared section label ===== */
    .sd-section-label {
      display: flex;
      align-items: center;
      gap: 9px;
      margin-bottom: 10px;
    }
    .sd-section-label span {
      width: 29px;
      height: 3px;
      display: block;
      background: #f2a900;
    }
    .sd-section-label p {
      color: #f2a900;
      font-size: 14px;
      font-weight: 600;

      margin: 0;
    }
    .sd-section-label--light p {
      color: #ffffff;
    }

    /* ===== What is this solution ===== */
    .sd-whatis-section {
      width: 100%;
      padding: 30px 0 40px 0px;
      background: #ffffff;
    }
    .sd-whatis-container {
      width: min(1200px, 92%);
      margin: 0 auto;
    }
    .sd-whatis-grid {
      display: grid;
      grid-template-columns: 36% 64%;
      align-items: center;
      gap: 32px;
    }
    .sd-whatis-content h2 {
      color: #0b2f63;
      font-size: 30px;
      line-height: 1.25;
      font-weight: 700;
      margin: 0 0 14px;
    }
    .sd-whatis-content p {
      color: #52617a;
      font-size: 16px;
      line-height: 1.75;
      margin: 0;
    }
    .sd-whatis-right {
      display: grid;
      grid-template-columns: 55% 45%;
      align-items: center;
      gap: 20px;
    }
    .sd-whatis-image {
      width: 100%;
      height: 300px;
      overflow: hidden;
      border-radius: 8px;
    }
    .sd-whatis-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .sd-whatis-benefits {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 14px;
      background: #f1f8ff;
      border-radius: 8px;
    }
    .sd-whatis-benefit-item {
      display: flex;
      align-items: center;
      gap: 14px;
      min-height: 50px;
    }
    .sd-whatis-benefit-icon {
      flex: 0 0 52px;
      width: 52px;
      height: 52px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: #e0efff;
      color: #0b356c;
    }
    .sd-whatis-benefit-item p {
      color: #46556e;
      font-size: 15px;
      line-height: 1.5;
      font-weight: 400;
      margin: 0;
    }

    /* ===== Applications ===== */
    .sd-apps-section {
      width: 100%;
      padding: 60px 0;
      background: #eff8ff;
    }
    .sd-apps-container {
      width: min(1200px, 92%);
      margin: 0 auto;
    }
    .sd-apps-grid {
      display: grid;
      grid-template-columns: 30% 70%;
      align-items: center;
      gap: 30px;
    }
    .sd-apps-content h2 {
      color: #0b2f63;
      font-size: 30px;
      line-height: 1.25;
      font-weight: 700;
      margin: 0 0 10px;
    }
    .sd-apps-content > p {
      color: #52617a;
      font-size: 16px;
      line-height: 1.7;
      margin: 0 0 16px;
    }
    .sd-apps-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 12px 18px;
      border-radius: 6px;
      background: #092f63;
      color: #ffffff;
      text-decoration: none;
      font-size: 14px;
      font-weight: 600;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .sd-apps-btn:hover {
      background: #f2a900;
      color: #092f63;
      transform: translateY(-2px);
    }
    .sd-apps-list {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 16px;
      align-items: start;
    }
    .sd-app-card {
      text-align: center;
    }
    .sd-app-image {
      width: 100%;
      height: 180px;
      overflow: hidden;
      border-radius: 8px;
      margin-bottom: 12px;
      background: #dce9f7;
    }
    .sd-app-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }
    .sd-app-card:hover .sd-app-image img {
      transform: scale(1.06);
    }
    .sd-app-card h3 {
      color: #0b2f63;
      font-size: 15px;
      line-height: 1.4;
      font-weight: 600;
      margin: 0;
    }

    /* ===== Why choose us ===== */
    .sd-why-section {
      position: relative;
      padding: 60px 0;
      overflow: hidden;
      background: linear-gradient(90deg, #092c54 0%, #0c315b 58%, #123e6d 72%, rgba(15, 54, 92, 0.8) 100%);
    }
    .sd-why-bgimage {
      position: absolute;
      top: 0;
      right: 0;
      width: 30%;
      height: 100%;
      background-size: cover;
      background-position: center;
      opacity: 0.22;
    }
    .sd-why-bgimage::before {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, #103c69 0%, rgba(16, 60, 105, 0.25) 30%, rgba(16, 60, 105, 0) 100%);
    }
    .sd-why-container {
      position: relative;
      z-index: 2;
      width: min(1200px, 90%);
      margin: 0 auto;
      display: grid;
      grid-template-columns: 42% 58%;
      align-items: center;
      gap: 20px;
    }
    .sd-why-content h2 {
      color: #ffffff;
      font-size: 30px;
      line-height: 1.3;
      font-weight: 700;
      margin: 0 0 12px;
    }
    .sd-why-content p {
      color: rgba(255, 255, 255, 0.88);
      font-size: 14px;
      line-height: 1.7;
      font-weight: 700;
      margin: 0;
    }
    .sd-why-features {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 28px;
      row-gap: 20px;
    }
    .sd-why-feature-item {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      min-height: 55px;
    }
    .sd-why-feature-item:nth-child(2n) {
      padding-left: 20px;
      border-left: 1px solid rgba(255, 255, 255, 0.14);
    }
    .sd-why-feature-icon {
      flex-shrink: 0;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #f8b718;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #0b315c;
    }
    .sd-why-feature-text h3 {
      color: #ffffff;
      font-size: 17px;
      line-height: 1.4;
      font-weight: 600;
      margin: 0 0 6px;
    }
    .sd-why-feature-text p {
      color: rgba(255, 255, 255, 0.88);
      font-size: 14.5px;
      line-height: 1.5;
      font-weight: 400;
      margin: 0;
    }

    /* ===== Project gallery ===== */
    .sd-projects-section {
      background: #ffffff;
      padding: 55px 0 60px;
    }
    .sd-projects-container {
      width: min(1200px, 90%);
      margin: 0 auto;
      display: grid;
      grid-template-columns: 31% 69%;
      align-items: center;
      gap: 24px;
    }
    .sd-projects-content h2 {
      color: #0b376a;
      font-size: 28px;
      line-height: 1.4;
      font-weight: 700;
      margin: 0 0 8px;
    }
    .sd-projects-content > p {
      color: #596b82;
      font-size: 16px;
      line-height: 1.7;
      margin: 0 0 18px;
    }
    .sd-project-button {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      border-radius: 6px;
      background: #082e59;
      color: #ffffff;
      text-decoration: none;
      font-size: 13px;
      font-weight: 600;
      transition: all 0.3s ease;
    }
    .sd-project-button:hover {
      background: #f4b51b;
      color: #082e59;
    }
    .sd-project-gallery {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
    }
    .sd-project-card {
      overflow: hidden;
      border-radius: 8px;
      background: #eeeeee;
      height: 220px;
    }
    .sd-project-card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    .sd-project-card:hover img {
      transform: scale(1.06);
    }

    /* ===== CTA strip ===== */
    .sd-ctastrip-section {
      position: relative;
      padding: 46px 0;
      overflow: hidden;
      background: #e3f2ff;
    }
    .sd-ctastrip-bg {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: right center;
      opacity: 0.16;
    }
    .sd-ctastrip-container {
      position: relative;
      z-index: 2;
      width: min(1200px, 90%);
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      flex-wrap: wrap;
    }
    .sd-ctastrip-content h2 {
      color: #0b376a;
      font-size: 32px;
      line-height: 1.2;
      font-weight: 700;
      margin: 0 0 12px;
    }
    .sd-ctastrip-content p {
      color: #596b82;
      font-size: 16px;
      margin: 0;
    }
    .sd-ctastrip-button {
      display: inline-flex;
      align-items: center;
      gap: 14px;
      min-width: 150px;
      padding: 12px 18px;
      border-radius: 6px;
      background: #f7b719;
      color: #082e59;
      text-decoration: none;
      font-size: 15px;
      font-weight: 700;
      transition: all 0.3s ease;
    }
    .sd-ctastrip-button:hover {
      background: #082e59;
      color: #ffffff;
    }

    /* ===== Responsive ===== */
    @media (max-width: 1000px) {
      .sd-whatis-grid { grid-template-columns: 1fr; }
      .sd-apps-grid { grid-template-columns: 1fr; }
      .sd-apps-content > p { max-width: 560px; }
    }
    @media (max-width: 900px) {
      .sd-why-container { grid-template-columns: 45% 55%; }
      .sd-why-bgimage { width: 28%; }
      .sd-projects-container { grid-template-columns: 34% 66%; }
    }
    @media (max-width: 800px) {
      .sd-whatis-right { grid-template-columns: 1fr; }
      .sd-whatis-image { height: 260px; }
      .sd-whatis-benefits { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
      .sd-whatis-benefit-item { flex-direction: column; text-align: center; }
      .sd-apps-list { grid-template-columns: repeat(3, 1fr); row-gap: 20px; }
    }
    @media (max-width: 700px) {
      .sd-why-container { grid-template-columns: 1fr; gap: 26px; }
      .sd-why-bgimage { width: 100%; opacity: 0.14; }
      .sd-why-features { grid-template-columns: 1fr 1fr; gap: 18px 15px; }
      .sd-projects-container { grid-template-columns: 1fr; gap: 24px; }
      .sd-project-gallery { grid-template-columns: 1fr; }
      .sd-ctastrip-container { flex-direction: column; align-items: flex-start; }
    }
    @media (max-width: 600px) {
      .sd-quickfeatures-grid { grid-template-columns: 1fr; gap: 26px; }
      .sd-quickfeature-card { display: grid; grid-template-columns: 52px 1fr; column-gap: 14px; }
      .sd-quickfeature-icon { grid-row: span 2; margin-bottom: 0; }
      .sd-quickfeature-card p { max-width: 100%; }
      .sd-whatis-content h2 { font-size: 26px; }
      .sd-apps-content h2 { font-size: 26px; }
      .sd-apps-list { grid-template-columns: repeat(2, 1fr); gap: 18px 12px; }
      .sd-why-content h2 { font-size: 24px; }
      .sd-why-features { grid-template-columns: 1fr; }
      .sd-why-feature-item:nth-child(2n) { padding-left: 0; border-left: none; }
      .sd-projects-content h2 { font-size: 24px; }
      .sd-ctastrip-content h2 { font-size: 22px; }
    }
  `}</style>
);

/* ---------------------------------------------------------
   MAIN COMPONENT
--------------------------------------------------------- */

export default function SolutionDetails() {
  const { slug } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  // Find the solution by slug
  const solution = SOLUTIONS.find((s) => s.slug === slug);

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

  // If solution not found
  if (!solution) {
    return (
      <div className="solution-details-not-found">
        <h2>Solution Not Found</h2>
        <p>The solution you're looking for doesn't exist.</p>
        <Link to="/our-solutions" className="back-btn">
          <ChevronLeft size={16} /> Back to Solutions
        </Link>
      </div>
    );
  }

  return (
    <div className="solution-details-wrapper">
      <NewSectionsStyles />

      {/* ================= HERO/BANNER SECTION (UNCHANGED) ================= */}
      <section className="solution-details-hero">
        <div className="solution-details-hero-bg">
          <img src={solution.image} alt={solution.title} />
          <div className="solution-details-hero-bg-overlay" />
        </div>

        <div className="solution-details-hero-container">
          <motion.div
            className="solution-details-hero-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="solution-details-hero-badge">
              <Link to="/our-solutions" className="back-link">
                <ChevronLeft size={16} /> Back to Solutions
              </Link>
            </div>
            <h1>
              {solution.title}
            </h1>
            <div className="solution-details-hero-meta">
              <p className="banner-content-p-tag">A steel building system where the structural components are designed and manufactured in a factory, then transported to the site and assembled quickly.</p>
              {/* <span>
                <span className="solution-number-badge">{solution.number}</span>
              </span>
              <span>
                <Users size={18} />
                {solution.teamSize}
              </span>
              <span>
                <Clock size={18} />
                {solution.duration}
              </span> */}
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            className="solution-details-hero-form"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="solution-details-form-card">
              <div className="solution-details-form-header">
                <h3>Request Solution Details</h3>
                <p>Download brochure or get more information</p>
              </div>
              <form onSubmit={handleSubmit} className="solution-details-form">
                <div className="solution-details-form-group">
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
                <div className="solution-details-form-group">
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
                <div className="solution-details-form-group">
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
                <div className="solution-details-form-group">
                  <label htmlFor="message">
                    <MessageSquare size={16} />
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="2"
                    placeholder="Tell us what you'd like to know about this solution"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <motion.button
                  type="submit"
                  className="solution-details-form-submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Request <Send size={16} />
                </motion.button>
              </form>
              <div className="solution-details-form-footer">
                <span>🔒 Your information is secure with us</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= QUICK FEATURES STRIP ================= */}
      <section className="sd-quickfeatures-section">
        <div className="sd-quickfeatures-container">
          <motion.div
            className="sd-quickfeatures-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {QUICK_FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              const Badge = feature.badge;
              return (
                <motion.div className="sd-quickfeature-card" variants={fadeInUp} key={index}>
                  <div className="sd-quickfeature-icon">
                    <Icon size={22} />
                    {Badge && (
                      <span className="sd-quickfeature-badge">
                        <Badge size={11} />
                      </span>
                    )}
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================= WHAT IS THIS SOLUTION ================= */}
      <section className="sd-whatis-section">
        <div className="sd-whatis-container">
          <div className="sd-whatis-grid">
            {/* LEFT CONTENT */}
            <motion.div
              className="sd-whatis-content"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="sd-section-label">
                <p>WHAT IS IT</p>
              </div>
              <h2>What Is <span className="highlight">{solution.title}?</span></h2>
              <p>{solution.description}</p>
            </motion.div>

            {/* RIGHT IMAGE + BENEFITS */}
            <motion.div
              className="sd-whatis-right"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="sd-whatis-image">
                <img src={solution.image} alt={solution.title} />
              </div>

              <div className="sd-whatis-benefits">
                {solution.benefits.map((benefit, index) => {
                  const Icon = BENEFIT_ICONS[index % BENEFIT_ICONS.length];
                  return (
                    <div className="sd-whatis-benefit-item" key={index}>
                      <div className="sd-whatis-benefit-icon">
                        <Icon size={20} />
                      </div>
                      <p>{benefit}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= APPLICATIONS ================= */}
      <section className="sd-apps-section">
        <div className="sd-apps-container">
          <div className="sd-apps-grid">
            {/* LEFT CONTENT */}
            <motion.div
              className="sd-apps-content"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="sd-section-label">
               
                <p>APPLICATIONS</p>
              </div>
              <h2>Ideal for <span className="highlight">Multiple Industries</span></h2>
              <p>
                {solution.title} solutions from Sibi Global are widely used
                across the following sectors and use cases.
              </p>
              <a href="#" className="sd-apps-btn">
                View All Applications <ArrowRight size={14} />
              </a>
            </motion.div>

            {/* APPLICATION CARDS */}
            <motion.div
              className="sd-apps-list"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {solution.applications.map((app, index) => {
                const imageUrl = getApplicationImage(app, solution.image);
                return (
                  <motion.div className="sd-app-card" variants={fadeInUp} key={index}>
                    <div className="sd-app-image">
                      <img src={imageUrl} alt={app} loading="lazy" />
                    </div>
                    <h3>{app}</h3>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="sd-why-section">
        <div
          className="sd-why-bgimage"
          style={{ backgroundImage: `url(${solution.image})` }}
        />

        <div className="sd-why-container">
          {/* Left Content */}
          <motion.div
            className="sd-why-content"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="sd-section-label sd-section-label--light">
            
              <p>WHY CHOOSE US</p>
            </div>
            <h2>Your Trusted  <span className="highlight">{solution.title}</span> Partner</h2>
            <p>
              With years of expertise and a commitment to excellence, we
              deliver high-quality {solution.title.toLowerCase()} that meet
              your industrial needs and future growth.
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            className="sd-why-features"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {WHY_CHOOSE_FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div className="sd-why-feature-item" variants={fadeInUp} key={index}>
                  <div className="sd-why-feature-icon">
                    <Icon size={18} />
                  </div>
                  <div className="sd-why-feature-text">
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================= PROJECT GALLERY ================= */}
      <section className="sd-projects-section">
        <div className="sd-projects-container">
          {/* Project Text */}
          <motion.div
            className="sd-projects-content"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="sd-section-label">
            
              <p>PROJECT GALLERY</p>
            </div>
            <h2>Our <span className="highlight">{solution.title}</span> Projects</h2>
            <p>
              Explore a glimpse of our completed {solution.title.toLowerCase()}{" "}
              projects delivered for clients across various industries.
            </p>
            <a href="#" className="sd-project-button">
              View More Projects <ArrowRight size={14} />
            </a>
          </motion.div>

          {/* Project Images */}
          <motion.div
            className="sd-project-gallery"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {getGalleryImages(solution).map((imageSrc, index) => (
              <motion.div className="sd-project-card" variants={fadeInUp} key={index}>
                <img src={imageSrc} alt={`${solution.title} project ${index + 1}`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= CTA STRIP ================= */}
      <section className="sd-ctastrip-section">
        <div
          className="sd-ctastrip-bg"
          style={{ backgroundImage: `url(${solution.image})` }}
        />

        <div className="sd-ctastrip-container">
          <motion.div
            className="sd-ctastrip-content"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="sd-section-label">
              
              <p>LET'S BUILD TOGETHER</p>
            </div>
            <h2>Build Smarter.  <span className="highlight">Build Stronger.</span></h2>
            <p>Talk to our engineering team about your next industrial building project.</p>
          </motion.div>

          <motion.a
            href="#"
            className="sd-ctastrip-button"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ x: 4 }}
          >
            <span>Get in Touch</span>
            <ArrowRight size={16} />
          </motion.a>
        </div>
      </section>
    </div>
  );
}