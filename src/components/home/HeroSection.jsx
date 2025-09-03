"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Cover } from "@/components/ui/cover";
import { ChevronRight, Sparkles, Wand2, PlayCircle, Stars } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-[-20vh] h-[40vh] bg-[radial-gradient(50%_60%_at_50%_0%,rgba(255,255,255,0.06),transparent_70%)]"
      />

      <div className="container mx-auto max-w-6xl px-4 pt-24 pb-16 sm:pt-28 sm:pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto w-fit"
        >
          <Badge
            variant="secondary"
            className="bg-black/5 text-black border-black/10 dark:bg-white/10 dark:text-white border dark:border-white/15 backdrop-blur px-3 py-1 rounded-full flex gap-2 items-center"
          >
            <span className="inline-flex -space-x-2">
              <AvatarCircle avtar="/avtar/1.jpg" />
              <AvatarCircle avtar="/avtar/2.png" />
              <AvatarCircle avtar="/avtar/3.jpg" />
            </span>
            <span className="sm:text-xs/none md:text-sm/none">
              3,200+ creators ship faster with Epica
            </span>
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.7 }}
          className="mt-6 font-extrabold tracking-tight text-balance text-3xl sm:text-6xl md:text-7xl"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-black to-black/70 dark:from-white dark:to-white/70">
            Streamlined Creation for
          </span>
          <br />
          <span>
            <Cover>Modern Creators</Cover>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mt-5 sm:text-sm md:text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto"
        >
          Whether it’s scripts, articles, or visuals, Epica gives creators
          everything they need to go from idea to finished content in minutes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mt-9 flex items-center justify-center gap-3"
        >
          <Link href="/dashboard">
            <Button
              size="lg"
              className="group h-12 rounded-2xl  px-6 shadow-[0_0_0_1px_rgba(255,255,255,0.2)_inset] cursor-pointer"
            >
              Get Started Free{" "}
              <ChevronRight className="ml-1 h-5 w-5 transition -translate-x-0.5 group-hover:translate-x-0" />
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="h-12 rounded-2xl cursor-pointer"
          >
            Demo Video
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto mt-16 w-full max-w-5xl"
        >
          <div
            className="rounded-3xl border border-black/5 dark:border-white/10 
                bg-gradient-to-b from-black/[0.02] to-transparent dark:from-white/5 
                p-3 dark:shadow-[0_40px_120px_-20px_rgba(0,0,0,0.5)]"
          >
            <div
              className="rounded-2xl bg-white/95 dark:bg-black/60 
                  ring-1 ring-inset ring-black/10 dark:ring-white/10 
                  overflow-hidden"
            >
              <HeroPreview />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

function HeroPreview() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="p-6 border-r border-white/10">
        <div className="flex items-center gap-2 text-black/60 dark:text-white/60 text-xs">
          <Wand2 className="h-4 w-4" /> Script Draft
        </div>
        <Textarea
          className="mt-3 h-40 resize-none rounded-xl border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5 text-sm"
          defaultValue={`Eye-catching YouTube thumbnail with a surprised person in the center, and Title: learn how to use Anki in a right way, Busy blurred background of Japanese learning software or flashcards. Bright colors, high contrast, designed to grab attention.`}
        />
        <div className="mt-3 flex gap-2">
          <Link href="/dashboard/thumbnail">
            <Button className="rounded-xl cursor-pointer">
              <Sparkles className="mr-2 h-4 w-4" /> Regenerate
            </Button>
          </Link>
        </div>
      </div>

      {/* Thumbnail Panel */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-white/60 text-xs">
          <Stars className="h-4 w-4" /> Thumbnail Builder
        </div>
        <div className="mt-3 grid grid-cols-3 gap-3">
          {[1, 2, 3].map((i) => (
            <Image
              src={`/thumbnail/${i}.png`}
              width={1280}
              height={720}
              alt="Thumbnail"
              key={i}
              className="rounded-xl md:rounded-2xl border border-black/10  dark:border-white/10"
            />
          ))}
        </div>
        <div className="mt-3 flex gap-2">
          <Button className="rounded-xl cursor-pointer">
            <PlayCircle className="mr-2 h-4 w-4" /> Preview
          </Button>
        </div>
      </div>
    </div>
  );
}

function AvatarCircle({ avtar }) {
  return (
    <span className="inline-grid h-6 w-6 place-items-center rounded-full border border-black/20 bg-black/10 dark:border-white/20 dark:bg-white/10 text-[11px] shadow-inner">
      <Image
        src={avtar}
        width={26}
        height={26}
        alt=""
        className="rounded-full"
      />
    </span>
  );
}

export default HeroSection;
