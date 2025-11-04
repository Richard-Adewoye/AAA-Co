import FeatureRow from "./FeatureRow";

interface FeatureRowData {
  title: string;
  description: string;
  imageSrc: string;
  iconSrc: string;
  isReversed: boolean;
}

export default function FeatureOverviewSection({
  headline,
  subheadline,
  features,
}: {
  headline: string;
  subheadline: string;
  features: FeatureRowData[];
}) {
  return (
    <section className="bg-gray-400 py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          {headline}
        </h2>
        <p className="text-lg text-gray-600">{subheadline}</p>
      </div>

      <div className="space-y-32">
        {features.map((feature, index) => (
          <FeatureRow key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}
