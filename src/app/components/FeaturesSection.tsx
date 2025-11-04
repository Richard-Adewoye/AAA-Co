// components/FeaturesSection.tsx
import FeatureCard from './FeatureCard';
import CentralImage from './CentralImage';

interface FeatureItemData {
  icon: string;
  title: string;
  description: string;
}

const coreFeaturesData = [
  {
    title: 'Real-time analytics',
    description: 'Gain actionable insights with our real-time analytics feature.',
    imageSrc: '/Images/img-1.jpg',
  },
  {
    title: 'Mobile accessibility',
    description: 'Manage your finances on the go with our mobile-friendly platform.',
    imageSrc: '/Images/img-2.jpg',
  },
  {
    title: 'Customizable reports',
    description: 'Streamline your financial processes with automated workflows.',
    imageSrc: '/Images/img-3.jpg',
  },
  {
    title: 'Enhanced security',
    description: 'Protect your sensitive financial data with our state-of-the-art security measures.',
    imageSrc: '/Images/img-4.jpg',
  },
];


export default function FeaturesSection({
  headline,
  subheadline,
  features,
  mainImageSrc,
}: {
  headline: string;
  subheadline: string;
  features: FeatureItemData[];
  mainImageSrc: string;
}) {
  return (
    <section className="bg-gray-400 text-gray-900 py-20 px-6">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">{headline}</h2>
        <p className="mt-4 text-base md:text-lg">{subheadline}</p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center max-w-6xl mx-auto">
        {/* Left Feature Cards */}
        <div className="flex flex-col gap-6">
          {features.slice(0, 2).map((feature, i) => (
            <FeatureCard key={i} {...feature} />
          ))}
        </div>

        {/* Center Image */}
        <CentralImage src={mainImageSrc} alt="Central feature image" />

        {/* Right Feature Cards */}
        <div className="flex flex-col gap-6">
          {features.slice(2, 4).map((feature, i) => (
            <FeatureCard key={i} {...feature} />
          ))}
        </div>
      </div>

      {/* Mobile Stacking */}
      <div className="md:hidden flex flex-col gap-6 mt-12">
        {features.map((feature, i) => (
          <FeatureCard key={i} {...feature} />
        ))}
        <CentralImage src={mainImageSrc} alt="Central feature image" />
      </div>
    </section>
  );
}
