import { Phone, Mail, MapPin } from "lucide-react";

const iconMap = {
  phone: Phone,
  mail: Mail,
  "map-pin": MapPin,
};

export default function ContactInfo({
  items,
}: {
  items: { icon: keyof typeof iconMap; value: string }[];
}) {
  return (
    <div>
      <h4 className="text-white text-lg font-semibold mb-4">Contact Us</h4>
      <ul className="space-y-4">
        {items.map((item, index) => {
          const Icon = iconMap[item.icon];
          return (
            <li key={index} className="flex items-start gap-3">
              {Icon && <Icon size={18} className="text-amber-400 mt-1" />}
              <span>{item.value}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
