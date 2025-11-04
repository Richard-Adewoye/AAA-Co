import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutUsSection from "./components/AboutUsSection";
import { navLinks } from "./lib/data";
import ServicesSection from "./components/ServicesSection";
import AdvantageSection from "./components/AdvantageSection";
import Footer from "./components/Footer/Footer";

const servicesData = [
  {
    index: 1,
    title: "Corporate Advisory",
    isFeatured: false,
    description:
      "Comprehensive legal guidance for business formations, contracts, mergers, and compliance at competitive rates.",
  },
  {
    index: 2,
    title: "Intellectual Property Protection",
    isFeatured: false,
  },
  {
    index: 3,
    title: "Criminal Defense",
    isFeatured: false,
  },
];

const advantagesData = [
  {
    title: "Experienced Attorneys",
    description:
      "Legal specialists with proven expertise in various fields.",
    isImageBlock: false,
  },
  {
    title: "Proven Track Record",
    description:
      "Several cases resolved with a stellar client satisfaction rate.",
    isImageBlock: false,
  },
  {
    title: "Dedicated Support",
    description:
      "Client access and dedicated case managers for every matter.",
    isImageBlock: false,
  },
  ];

const footerData = {
  navigation: [
    {
      title: "Quick Links",
      links: [
        { title: "Home", href: "/" },
        { title: "About", href: "/about" },
        { title: "Services", href: "/services" },
        { title: "Contact", href: "/contact" },
      ],
    },
  ],
  newsletter: {
    headline: "AAA & Co. Law Firm",
    subtext: "Get updates from us straight to your inbox.",
  },
  contact: [
    {
      icon: "map-pin",
      value: "HEAD OFFICE (ABUJA) - Suite 4, Inwade House 15, Jere Street Behind Rita Lori Hotel, Garki II, Abuja",
    },
    {
      icon: "map-pin",
      value: "BRANCH (LAGOS) - No 33, Olowu Street, Off Obafemi Awolowo Way, Ikeja, Lagos",
    },
    { icon: "phone", value: "08033111508, 09099653809" },
    { icon: "mail", value: "info@amosademolaadewoyeandco.com.ng" },
  ],
  socials: [
    { icon: "facebook" as const, href: "#" },
    { icon: "linkedin" as const, href: "#" },
    { icon: "twitter" as const, href: "#" },
    { icon: "instagram" as const, href: "#" },
    { icon: "youtube" as const, href: "#" },
  ],
  legal: [
    { title: "Terms of Service", href: "/terms" },
    { title: "Privacy Policy", href: "/privacy" },
  ],
  copyright: "©2025 AAA&Co. All Rights Reserved.",
};



export default function Home() {
  return (
    <main>
      <Header navLinks={navLinks} />
      <HeroSection headline="Precision Advocacy for Modern Legal Challenges" />
      <AboutUsSection />
      <ServicesSection
        subtitle="Our Service"
        title="Comprehensive Legal Services Tailored to Your Needs"
        services={servicesData}
        featuredImageSrc="https://images.unsplash.com/photo-1555375771-14b9d3d6bdf4?auto=format&fit=crop&w=1950&q=80"
      />
      <AdvantageSection
        subtitle="Our Advantage."
        title="The Strategic Edge That Sets Us Apart"
        advantages={advantagesData}
        featuredImageSrc="https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1950&q=80"
      />
      <Footer data={footerData} />
    </main>
  );
}
