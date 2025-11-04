import DetailCard from "./DetailCard";
import CtaButton from "./CtaButton";
import { aboutData } from "../lib/data";


export default function AboutUsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid layout adjusts from single-column to three-column */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 items-start">
          {/* Heading */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              About Us
            </h2>
          </div>

          {/* Body text and CTA */}
          <div className="flex flex-col gap-6 text-center md:text-left">
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              {aboutData.bodyText}
            </p>
            <div className="flex justify-center md:justify-start">
              <CtaButton text="Learn More" href="/OurServices" arrow />
            </div>
          </div>

          {/* Detail cards */}
          <div className="flex flex-col gap-6">
  {aboutData.detailCards.map((card) => (
    <DetailCard key={card.title} {...card} />
  ))}
</div>

        </div>
      </div>
    </section>
  );
}
