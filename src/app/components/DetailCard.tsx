export default function DetailCard({
  title,
  subtitle,
  imageUrl,
}: {
  title: string;
  subtitle: string;
  imageUrl: string;
}) {
  return (
    <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl shadow-sm bg-white">
      <img
        src={imageUrl}
        alt={title}
        className="w-16 h-16 rounded-md object-cover"
      />
      <div>
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
}
