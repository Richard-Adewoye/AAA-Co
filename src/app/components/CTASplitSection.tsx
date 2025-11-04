"use client";

import { useState } from "react";
import Image from "next/image";

interface FeatureTag {
  label: string;
}

interface DataCardProps {
  title: string;
  value: string;
  chartData: number[];
}

interface ImageVisualizationBlockProps {
  imageSrc: string;
  featureTags: FeatureTag[];
  dataVizProps: DataCardProps;
}

interface CTATextBlockProps {
  headline: string;
  subtext: string;
  emailPlaceholder: string;
  buttonText: string;
}

interface CTAData {
  headline: string;
  subtext: string;
  emailPlaceholder: string;
  buttonText: string;
  image: {
    src: string;
    alt: string;
    tags: FeatureTag[];
    dataCard: DataCardProps;
  };
}

export default function CTASplitSection({ data }: { data: CTAData }) {
  return (
    <section className="bg-gray-400 rounded-3xl py-20 px-6 md:px-12 lg:px-20 my-24 shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <CTATextBlock
          headline={data.headline}
          subtext={data.subtext}
          emailPlaceholder={data.emailPlaceholder}
          buttonText={data.buttonText}
        />
        <ImageVisualizationBlock
          imageSrc={data.image.src}
          featureTags={data.image.tags}
          dataVizProps={data.image.dataCard}
        />
      </div>
    </section>
  );
}

// ------------------------------------------------
// Left column: Text + Form
// ------------------------------------------------
function CTATextBlock({
  headline,
  subtext,
  emailPlaceholder,
  buttonText,
}: CTATextBlockProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Email submitted: ${email}`);
    setEmail("");
  };

  return (
    <div className="space-y-8">
      <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
        {headline}
      </h2>
      <p className="text-gray-700 text-lg max-w-lg">{subtext}</p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-4 max-w-md"
      >
      </form>
    </div>
  );
}

// ------------------------------------------------
// Right column: Image + Overlays + DataCard
// ------------------------------------------------
function ImageVisualizationBlock({
  imageSrc,
  featureTags,
  dataVizProps,
}: ImageVisualizationBlockProps) {
  return (
    <div className="relative w-full h-[480px] lg:h-[560px] rounded-3xl overflow-hidden shadow-xl">
      <Image
        src={imageSrc}
        alt="Visualization"
        fill
        className="object-cover brightness-90"
        priority
      />

      {/* Floating Feature Tags */}
      {featureTags.map((tag, i) => (
        <div
          key={i}
          className={`absolute px-4 py-2 bg-white/90 backdrop-blur-md text-gray-800 text-sm font-medium rounded-full shadow-md ${
            i === 0 ? "top-6 left-6" : "top-20 right-10"
          }`}
        >
          <span className="inline-block align-middle mr-1 text-red-500">+</span>
          {tag.label}
        </div>
      ))}

      {/* Embedded Data Card */}
      <DataCard
        title={dataVizProps.title}
        value={dataVizProps.value}
        chartData={dataVizProps.chartData}
      />
    </div>
  );
}

// ------------------------------------------------
// Reusable Data Card
// ------------------------------------------------
function DataCard({ title, value, chartData }: DataCardProps) {
  return (
    <div className="absolute bottom-8 left-8 bg-white rounded-2xl p-6 shadow-2xl w-[220px] border border-gray-100">
      <h3 className="text-gray-700 font-semibold text-sm mb-1">{title}</h3>
      <p className="text-3xl font-bold text-gray-900 mb-4">{value}</p>
      <div className="flex items-end gap-1 h-16">
        {chartData.map((val, i) => (
          <div
            key={i}
            className="flex-1 bg-red-500 rounded-t-md"
            style={{ height: `${val}%` }}
          />
        ))}
      </div>
    </div>
  );
}
