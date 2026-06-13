"use client";

import Image from "next/image";

interface PortfolioCardProps {
  image: string;
  title: string;
  desc: string;
}

export default function PortfolioCard({ image, title, desc }: PortfolioCardProps) {
  return (
    <article className="overflow-hidden rounded-xl bg-white text-start shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)]">
      <Image
        src={image}
        alt={title}
        width={400}
        height={200}
        loading="lazy"
        className="h-[200px] w-full object-cover"
      />
      <h3 className="m-4 text-[1.3rem] font-bold text-heading">{title}</h3>
      <p className="mx-4 mb-5 text-[0.95rem] leading-normal text-body-soft">
        {desc}
      </p>
    </article>
  );
}
