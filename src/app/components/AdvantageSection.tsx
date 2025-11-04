import ImageBlock from "./ImageBlock";
import AdvantageItem from "./AdvantageItem";

interface AdvantageItemData {
  title: string;
  description: string;
  isImageBlock: boolean;
}

export default function AdvantageSection({
  subtitle,
  title,
  advantages,
  featuredImageSrc,
}: {
  subtitle: string;
  title: string;
  advantages: AdvantageItemData[];
  featuredImageSrc: string;
}) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center md:text-left">
          <p className="text-sm font-semibold tracking-wide text-yellow-600 mb-2 uppercase">
            {subtitle}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            {title}
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Image on top for mobile */}
          <div className="lg:col-span-4 order-1 lg:order-none flex justify-center">
            <ImageBlock src={featuredImageSrc} />
          </div>

          {/* Advantages list */}
          <div className="lg:col-span-8 order-2 lg:order-none">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-gray-200 pt-8">
              {advantages.map((advantage, index) => (
                <AdvantageItem
                  key={index}
                  title={advantage.title}
                  description={advantage.description}
                  showDivider={index % 2 === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
