import React from "react";
import { Zap, Wand2, ShieldCheck, Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const FeatureSection = () => {
  const features = [
    {
      icon: <Zap className="size-6" />,
      title: "One‑click Scripts",
      desc: "Generate hooks, outlines, and full scripts tailored to your niche.",
    },
    {
      icon: <Wand2 className="size-6" />,
      title: "Smart Thumbnails",
      desc: "On-brand, high‑contrast thumbnails optimized for CTR.",
    },
    {
      icon: <ShieldCheck className="size-6" />,
      title: "Private by Default",
      desc: "Your drafts and assets are secure. We never train on your data.",
    },
    {
      icon: <Rocket className="size-6" />,
      title: "Fast Exports",
      desc: "Instant PNG/JPG exports with safe margins and grid guides.",
    },
  ];

  return (
    <section id="features" className="py-24 border-t border-white/10">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl sm:text-3xl font-bold tracking-tight">
            Everything you need to ship faster
          </h2>
          <p className="mt-3 text-sm sm:text-xl text-white/70">
            A crisp toolkit for creators. No clutter, just speed.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <Card
              key={f.title}
              className="border-black/10 dark:border-white/10 bg-white/5"
            >
              <CardHeader className="flex flex-col items-center">
                <Badge className="w-fit rounded-full p-1 ">{f.icon}</Badge>
                <CardTitle className="mt-3 text-xl">{f.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-black/70 dark:text-white/70 text-center">
                {f.desc}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
