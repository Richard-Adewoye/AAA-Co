import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaButton({
  text,
  href,
  arrow = false,
}: {
  text: string;
  href: string;
  arrow?: boolean;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
    >
      {text} {arrow && <ArrowRight size={18} />}
    </Link>
  );
}
