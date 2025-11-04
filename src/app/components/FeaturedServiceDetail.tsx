import CtaButton from "./CtaButton";

export default function FeaturedServiceDetail({
  description,
  handlers,
  ctaText,
}: {
  description: string;
  handlers: string[];
  ctaText: string;
}) {
  return (
    <div className="mt-4 pl-10 border-l border-gray-200 space-y-4">
      <div>
        <p className="text-sm font-semibold text-gray-500 tracking-wide mb-1">
          HANDLED BY
        </p>
        <ul className="flex flex-wrap gap-3 text-gray-700 text-sm">
          {handlers.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </div>
      <p className="text-gray-700 leading-relaxed">{description}</p>
      <CtaButton text={ctaText} href="/contact" />
    </div>
  );
}
