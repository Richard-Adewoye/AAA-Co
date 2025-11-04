import CTASplitSection from "../components/CTASplitSection";
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


export default function Home() {
  const scalableCTAData = {
    headline: "Strategic and adaptive legal solutions to advance your goals",
    subtext:
      "We help organizations align governance, compliance, and growth objectives through responsive, forward-looking legal insight.",
    emailPlaceholder: "",
    buttonText: "",
    image: {
      src: "/Images/img-10.jpg",
      alt: "Consultancy for Law",
      tags: [
        { label: "Litigation" },
        { label: "Criminal Defense" },
      ],
      dataCard: {
        title: "Financial Law",
        value: "",
        chartData: [40, 60, 80, 55, 95, 70],
      },
    },
  };

  return (
    <main className="min-h-screen bg-gray-400">
        <Header navLinks={navLinks} />
      <section className="py-20 text-center">
        <h1 className="text-6xl font-extrabold text-gray-900">
          Consultancy
        </h1>
        <p className="text-gray-600 mt-4">
          Integrating legal insight with strategic business consulting
        </p>
      </section>
      <CTASplitSection data={scalableCTAData} />
      <Footer data={footerData} />
    </main>
  );
}
