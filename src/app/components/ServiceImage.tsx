const images = [
  "/Images/img-1.jpg",
  "/Images/img-2.jpg",
  "/Images/img-3.jpg",
];

export default function ServiceImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div className="w-full h-[400px] rounded-xl overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3">
        {images.map((img, i) => (
          <div
            key={i}
            className="w-24 h-20 bg-gray-200 rounded-lg overflow-hidden"
          >
            <img
              src={img}
              alt={`Thumbnail ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
