export default function AdvantageItem({
  title,
  description,
  showDivider,
}: {
  title: string;
  description: string;
  showDivider?: boolean;
}) {
  return (
    <div className="relative p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>

      {showDivider && (
        <div className="absolute top-6 right-0 h-10 border-r border-gray-200 hidden md:block" />
      )}
    </div>
  );
}
