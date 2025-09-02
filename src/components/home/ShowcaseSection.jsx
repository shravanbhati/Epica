import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

const ShowcaseSection = () => {
  const bullets = [
    "Hook variations",
    "Pattern interrupts",
    "Pose suggestions",
    "CTR-safe colorways",
    "Face crop guide",
    "A/B test ready",
  ];
  return (
    <section
      id="showcase"
      className="py-24 border-t border-black/10 dark:border-white/10"
    >
      <div className="container mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-2xl sm:text-3xl font-semibold">
            Craft captivating visuals in minutes
          </h3>
          <p className="mt-3 text-black/70 dark:text-white/70">
            Pick a style, drop a frame, and let Epica suggest bold text,
            contrast, and face crops that pop on the YouTube feed.
          </p>
          <ul className="mt-6 space-y-2 text-black/90 dark:text-white/80">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4" /> {b}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex gap-3">
            <Link href="/dashboard/thumbnail">
              <Button className="rounded-xl cursor-pointer">
                Try the Builder
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/thumbnail/2.png"
            width={1280}
            height={720}
            alt="Thumbnail"
            className="rounded-3xl border border-black/20 dark:border-white/10"
          />
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
