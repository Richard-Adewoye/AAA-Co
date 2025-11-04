import Image from "next/image";
import StatsPill from "./StatsPill";
import CtaButton from "./CtaButton";

export default function HeroSection({ headline }: { headline: string }) {
  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center bg-center bg-cover"
      style={{
        backgroundImage:
          "url('/Images/img-5.jpg')",
      }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center md:text-left text-white">
        <div className="flex flex-col gap-8 items-center md:items-start">

          {/* stats pills */}
         {/*
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full p-3 px-6">
              <StatsPill metric="95%" label="Client Success" />
            </div>
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full p-3 px-6">
              <StatsPill metric="15+" label="Countries Served" />
            </div>
          </div> 
          */}

          {/* headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight max-w-3xl">
            {headline}
          </h1>

          {/* CTA */}
          <CtaButton text="Contact Us" href="/Consultancy" arrow />
        </div>
      </div>
    </section>
  );
}
