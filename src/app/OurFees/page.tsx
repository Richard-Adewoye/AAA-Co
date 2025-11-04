import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import { navLinks } from "../lib/data";
import FeatureOverview from "../components/FeatureOverview";

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
      value:
        "HEAD OFFICE (ABUJA) - Suite 4, Inwade House 15, Jere Street Behind Rita Lori Hotel, Garki II, Abuja",
    },
    {
      icon: "map-pin",
      value:
        "BRANCH (LAGOS) - No 33, Olowu Street, Off Obafemi Awolowo Way, Ikeja, Lagos",
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

const OurFeesFeatures = [
  {
    title: "Strategic Counsel for Business Realities",
    description:
      "We offer expert business consulting that aligns legal insight with strategic foresight. From restructuring to compliance frameworks, our consultants guide organizations through complex decisions.",
    imageSrc: "/images/img-9.jpg",
    iconSrc: "/icons/briefcase.svg",
    isReversed: false,
  },
];

export default function OurFees() {
  return (
    <main>
      <Header navLinks={navLinks} />
      <FeatureOverview
        headline="Our Fees"
        subheadline="We offer expert business consulting that aligns legal insight with strategic foresight. From corporate restructuring to regulatory compliance frameworks, our consultants provide tailored guidance that enables organizations to navigate complex legal and operational landscapes with precision and confidence. Our advisory approach ensures that governance standards, transactional integrity, and risk exposure are managed proactively in alignment with institutional objectives."
        features={OurFeesFeatures}
      />
      <Footer data={footerData} />
    </main>
  );
}
