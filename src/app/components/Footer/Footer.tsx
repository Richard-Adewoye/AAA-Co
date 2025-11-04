import NewsletterSignup from "./NewsLetterSignup";
import ContactInfo from "./ContactInfo";
import SocialLinksBar from "./SocialLinksBar";
import ScrollToTopButton from "./ScrollToTopButton";

type FooterProps = {
  data: {
    newsletter: { headline: string; subtext: string };
    contact: { icon: string; value: string }[];
    copyright: string;
    socials: { icon: "facebook" | "linkedin" | "twitter" | "instagram" | "youtube"; href: string }[];
    legal: { title: string; href: string }[];
  };
};

export default function Footer({ data }: FooterProps) {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8 relative">
      {/* Top Section */}
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Newsletter CTA */}
        <div className="md:col-span-1">
          <NewsletterSignup
            headline={data.newsletter.headline}
            subtext={data.newsletter.subtext}
          />
        </div>

        {/* Contact Info - addresses side by side */}
        <div className="md:col-span-2 flex flex-col md:flex-row gap-6">
          {data.contact
            .filter(item => item.icon === "map-pin") // only addresses
            .map((item, index) => (
              <div key={index} className="flex-1">
                <p className="font-semibold">{item.value.split("-")[0]}</p>
                <p className="text-sm">{item.value.split("-")[1]}</p>
              </div>
            ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 py-6 px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        <span className="text-center md:text-left">{data.copyright}</span>
        <SocialLinksBar socials={data.socials} />
        <div className="flex gap-6">
          {data.legal.map((link) => (
            <a
              key={link.title}
              href= "#"
              className="hover:text-white transition-colors"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>

      <ScrollToTopButton />
    </footer>
  );
}
