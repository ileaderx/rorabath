"use client";

interface ServiceCardProps {
  icon: string;
  title: string;
  desc: string;
}

export default function ServiceCard({ icon, title, desc }: ServiceCardProps) {
  return (
    <article className="rounded-xl bg-white p-6 text-center shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-transform duration-200 hover:-translate-y-1.5">
      <div aria-hidden="true" className="mb-3 text-4xl">
        {icon}
      </div>
      <h3 className="mb-3 text-lg font-bold text-gray-800">{title}</h3>
      <p className="leading-normal text-body-soft">{desc}</p>
    </article>
  );
}
