// components/CentralImage.tsx
import Image from "next/image";

export default function CentralImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full h-80 md:h-[400px] flex justify-center items-center rounded-xl overflow-hidden shadow-lg">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
