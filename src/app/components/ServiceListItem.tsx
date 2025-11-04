import FeaturedServiceDetail from "./FeaturedServiceDetail";

interface Props {
  index: number;
  title: string;
  isFeatured: boolean;
  description?: string;
  handlers?: string[];
}

export default function ServiceListItem({
  index,
  title,
  isFeatured,
  description,
  handlers,
}: Props) {
  const formattedIndex = index.toString().padStart(2, "0");

  return (
    <div className="py-6 border-b border-gray-200">
      <div
        className={`flex items-center justify-start gap-4 ${
          isFeatured ? "text-black font-semibold" : "text-gray-700"
        }`}
      >
        <span className="text-lg font-semibold opacity-70">{formattedIndex}.</span>
        <h3 className="text-lg">{title}</h3>
      </div>

      {isFeatured && description && handlers && (
        <FeaturedServiceDetail
          description={description}
          handlers={handlers}
          ctaText="Get a Quote"
        />
      )}
    </div>
  );
}
