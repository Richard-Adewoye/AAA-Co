export default function StatsPill({ metric, label }: { metric: string; label: string }) {
  return (
    <div className="flex flex-col items-start text-white">
      <span className="text-3xl font-bold">{metric}</span>
      <span className="text-sm opacity-80">{label}</span>
    </div>
  );
}
