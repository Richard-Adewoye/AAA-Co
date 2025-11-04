export default function ImageBlock({ src }: { src: string }) {
  return (
    <div className="relative w-full h-full">
      <div className="rounded-xl overflow-hidden h-[420px] md:h-full">
        <img
          src="/Images/img-7.jpg"
          alt="Attorneys at work"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>
    </div>
  );
}
