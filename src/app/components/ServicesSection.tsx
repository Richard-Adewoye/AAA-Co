import ServiceImage from "./ServiceImage";
import ServiceList from "./ServiceList";

interface ServiceItemData {
  index: number;
  title: string;
  isFeatured: boolean;
  description?: string;
  handlers?: string[];
}

export default function ServicesSection({
  subtitle,
  title,
  services,
  featuredImageSrc,
}: {
  subtitle: string;
  title: string;
  services: ServiceItemData[];
  featuredImageSrc: string;
}) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Image - stacked on top for mobile */}
        <div className="order-1 lg:order-none flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-lg backdrop-blur-xl bg-white/10 border border-white/20">
            <ServiceImage src="Images/img-8.jpg" alt="Legal consultation" />
          </div>
        </div>

        {/* Services text content */}
        <div className="order-2 lg:order-none flex flex-col gap-6">
          <div className="text-center lg:text-left">
            <p className="text-sm uppercase tracking-wide text-gray-500 mb-2 underline underline-offset-4">
              {subtitle}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              {title}
            </h2>
          </div>
          <ServiceList services={services} />
        </div>

        {/* Icon placeholder - hidden on small screens */}
        <div className="hidden lg:flex justify-end items-start">
          <div className="p-3 border border-gray-300 rounded-full bg-white/20 backdrop-blur-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 16.5L16.5 7.5M8.25 7.5h8.25v8.25"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
