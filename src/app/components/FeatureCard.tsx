import Image from "next/image";

export default function FeatureCard({
  icon,
  title,
  description,
  imageSrc,
}: {
  icon?: string;
  title: string;
  description: string;
  imageSrc?: string;
}) {
  return (
    <div className="bg-black p-6 rounded-xl flex flex-col gap-4 text-white shadow-lg">
      {imageSrc && (
        <div className="w-full h-48 relative rounded-lg overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      {icon && <div className="text-2xl">{icon}</div>}
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
}
