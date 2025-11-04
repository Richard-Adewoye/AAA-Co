type FooterLink = { title: string; href: string };

type FooterLinkGroupProps = {
  title: string;
  links: FooterLink[];
};

export default function FooterLinkGroup({ title, links }: FooterLinkGroupProps) {
  return (
    <div>
      <h4 className="text-white text-lg font-semibold mb-4">{title}</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.title}>
            <a
              href={link.href}
              className="hover:text-amber-400 transition-colors"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
