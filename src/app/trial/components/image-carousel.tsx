"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/adult-class-group.jpg",
    alt: "Adult Krav Maga class group at SKMS Glasgow",
    label: "Adult Training",
  },
  {
    src: "/women-only-class.jpg",
    alt: "Women only self defence class",
    label: "Women Only",
  },
  {
    src: "/equipment.jpg",
    alt: "Krav Maga training equipment",
    label: "Hit Hard",
  },
  {
    src: "/adult-krav-maga.jpg",
    alt: "Adult Krav Maga pad work",
    label: "Your First Strike",
  },
  {
    src: "/teens.jpg",
    alt: "Teens Krav Maga class",
    label: "All Ages Welcome",
  },
  {
    src: "/stance.jpg",
    alt: "Krav Maga fighting stance",
    label: "Real Skills. Real Confidence.",
  },
  {
    src: "/kick-fly.jpg",
    alt: "Krav Maga flying kick training",
    label: "Serious but Fun",
  },
];

export default function ImageCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border-2 border-red-600/40 shadow-[0_0_60px_rgba(220,38,38,0.15)]">
      {slides.map((slide, i) => (
        <div
          key={slide.label}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            i === active
              ? "scale-100 opacity-100"
              : "pointer-events-none scale-105 opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute right-0 bottom-0 left-0 p-6">
            <p className="text-2xl font-black tracking-wide text-white uppercase drop-shadow-lg">
              {slide.label}
            </p>
          </div>
        </div>
      ))}

      <div className="absolute right-4 bottom-4 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active ? "w-8 bg-red-500" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
