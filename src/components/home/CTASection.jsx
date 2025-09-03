import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const CTASection = () => {
  return (
    <section className="relative py-24 border-t border-black/10 dark:border-white/10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-16 h-40 bg-[radial-gradient(50%_70%_at_50%_100%,rgba(255,255,255,0.10),transparent_70%)]"
      />
      <div className="container mx-auto max-w-5xl px-4">
        <div className="relative overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-gradient-to-b from-white/50 to-black/[0.01] dark:from-white/10 dark:to-white/[0.03] p-10 text-center">
          <h3 className="text-xl sm:text-3xl font-bold">
            Create your next viral video assets with Epica
          </h3>
          <p className="mt-2 text-sm sm:text-xl text-black/70 dark:text-white/70">
            Start free today. Upgrade when you’re ready.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link href="/dashboard">
              <Button className="rounded-xl">Get Started</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="rounded-xl">
                Contact
              </Button>
            </Link>
          </div>
          <div className="pointer-events-none absolute -inset-1 rounded-3xl ring-1 ring-inset ring-white/10" />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
