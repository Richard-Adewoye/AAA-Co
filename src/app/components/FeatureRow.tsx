import Image from "next/image";

export default function FeatureRow({
  title,
  description,
  imageSrc,
  iconSrc,
  isReversed,
}: {
  title: string;
  description: string;
  imageSrc: string;
  iconSrc: string;
  isReversed: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-12 items-center gap-12 ${
        isReversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Text Section */}
      <div
        className={`lg:col-span-6 flex flex-col gap-4 ${
          isReversed ? "lg:order-last" : ""
        }`}
      >
        <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
        <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
      </div>

      {/* Image Section */}
      <div
        className={`relative lg:col-span-6 flex justify-center items-center ${
          isReversed ? "lg:order-first" : ""
        }`}
      >
        <div className="relative w-full max-w-lg">
          <Image
            src={imageSrc}
            alt={title}
            width={600}
            height={400}
            className="rounded-xl object-cover shadow-lg"
          />
          {/* Icon Overlay */}
          <div className="absolute -top-10 -left-10 opacity-10">
            <Image
              src={iconSrc}
              alt="Feature Icon"
              width={160}
              height={160}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
