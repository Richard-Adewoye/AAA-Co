import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import { navLinks } from "../lib/data";
import FeaturesSection from "../components/FeaturesSection";
import {
  ChartBarIcon,
  DevicePhoneMobileIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  ScaleIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline"; // or /solid if you prefer filled ones

const coreFeaturesData = [
  {
    icon: <ScaleIcon className="w-8 h-8 text-emerald-500" />,
    title: "Justice & Equity",
    description: "We ensure fairness and legal balance in every case we handle.",
    imageSrc: "/Images/img-1.jpg",
  },
  {
    icon: <BriefcaseIcon className="w-8 h-8 text-emerald-500" />,
    title: "Litigation Expertise",
    description: "Our seasoned lawyers bring years of courtroom experience.",
    imageSrc: "/Images/img-2.jpg",
  },
  {
    icon: <DocumentTextIcon className="w-8 h-8 text-emerald-500" />,
    title: "Legal Documentation",
    description: "We draft, review, and manage all your legal paperwork.",
    imageSrc: "/Images/img-3.jpg",
  },
  {
    icon: <ShieldCheckIcon className="w-8 h-8 text-emerald-500" />,
    title: "Corporate Protection",
    description: "We secure your business interests with airtight legal strategy.",
    imageSrc: "/Images/img-4.jpg",
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

export default function OurServices() {
  return (
    <main>
      <Header navLinks={navLinks} />
      <FeaturesSection
        headline="Core principles that define our legal excellence"
        subheadline="Explore the defining qualities that power our firm’s success—precision, integrity, and innovation—setting us apart in the practice of law and client advocacy."
        features={coreFeaturesData as any}
        mainImageSrc="/Images/img-7.jpg"
      />
      <Footer data={footerData} />
    </main>
  );
}
