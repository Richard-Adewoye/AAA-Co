import ServiceListItem from "./ServiceListItem";

interface ServiceItemData {
  index: number;
  title: string;
  isFeatured: boolean;
  description?: string;
  handlers?: string[];
}

export default function ServiceList({ services }: { services: ServiceItemData[] }) {
  return (
    <div className="flex flex-col divide-y divide-gray-100">
      {services.map((service) => (
        <ServiceListItem key={service.index} {...service} />
      ))}
    </div>
  );
}
