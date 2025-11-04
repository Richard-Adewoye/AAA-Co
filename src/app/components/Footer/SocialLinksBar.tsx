import {
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

const icons = {
  facebook: Facebook,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  youtube: Youtube,
};

interface Social {
  icon: keyof typeof icons;
  href: string;
}

export default function SocialLinksBar({ socials }: { socials: Social[] }) {
  return (
    <div className="flex gap-4 justify-center">
      {socials.map(({ icon, href }) => {
        const Icon = icons[icon];
        return (
          <a
            key={icon}
            href={href}
            className="hover:text-amber-400 transition-colors"
          >
            <Icon size={18} />
          </a>
        );
      })}
    </div>
  );
}
