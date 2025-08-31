"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Cover } from "@/components/ui/cover";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Check,
  ChevronRight,
  Sparkles,
  Zap,
  Wand2,
  PlayCircle,
  ShieldCheck,
  Stars,
  Rocket,
  CircleCheckBig,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Subtle radial spotlight background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(60%_50%_at_50%_30%,black,transparent)]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Bottom gradient fade */}
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
              className="bg-white/10 text-white border border-white/15 backdrop-blur px-3 py-1 rounded-full flex gap-2 items-center"
            >
              <span className="inline-flex -space-x-2">
                <AvatarCircle avtar="/avtar/1.jpg" />
                <AvatarCircle avtar="/avtar/2.png" />
                <AvatarCircle avtar="/avtar/3.jpg" />
              </span>
              <span className="text-sm/none">
                3,200+ creators ship faster with Epica
              </span>
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.7 }}
            className="mt-6 font-extrabold tracking-tight text-balance text-5xl sm:text-6xl md:text-7xl"
          >
            Streamlined Creation for
            <br />
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
              YouTube <Cover>Thumbnails & Scripts</Cover>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-5 text-lg text-white/70 max-w-3xl mx-auto"
          >
            Epica is your AI copilot that drafts engaging video scripts and
            designs eye‑catching thumbnails. Minimal setup. Localized to your
            niche. Export‑ready in minutes.
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
                className="group h-12 rounded-2xl bg-white text-black px-6 shadow-[0_0_0_1px_rgba(255,255,255,0.2)_inset] hover:bg-white/90 cursor-pointer"
              >
                Get Started Free{" "}
                <ChevronRight className="ml-1 h-5 w-5 transition -translate-x-0.5 group-hover:translate-x-0" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-2xl border-white/20 bg-white/5 text-white hover:bg-white/10 cursor-pointer"
            >
              Demo Video
            </Button>
          </motion.div>

          {/* Ghost preview frame */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto mt-16 w-full max-w-5xl"
          >
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-3 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.5)]">
              <div className="rounded-2xl bg-black/60 ring-1 ring-inset ring-white/10 overflow-hidden">
                <HeroPreview />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <LogoWall />
      <FeatureGrid />
      <Showcase />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="container mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" width={26} height={26} alt="" />
          <span className="font-bold tracking-tight">Epica</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a className="hover:text-white" href="#features">
            Features
          </a>
          <a className="hover:text-white" href="#pricing">
            Pricing
          </a>
          <a className="hover:text-white" href="#showcase">
            Showcase
          </a>
          <a className="hover:text-white" href="#faq">
            FAQ
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <SignedOut>
            <SignInButton>
              <Button variant="ghost" className="cursor-pointer">
                Sign in
              </Button>
            </SignInButton>
            <SignUpButton>
              <Button className="rounded-xl cursor-pointer">Sign up</Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
}

function AvatarCircle({ avtar }) {
  return (
    <span className="inline-grid h-6 w-6 place-items-center rounded-full border border-white/20 bg-white/10 text-[11px] shadow-inner">
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

function HeroPreview() {
  return (
    <div className="grid md:grid-cols-2">
      {/* Script Panel */}
      <div className="p-6 border-r border-white/10">
        <div className="flex items-center gap-2 text-white/60 text-xs">
          <Wand2 className="h-4 w-4" /> Script Draft
        </div>
        <Textarea
          className="mt-3 h-40 resize-none rounded-xl border-white/10 bg-white/5 text-sm"
          defaultValue={`Eye-catching YouTube thumbnail with a surprised person in the center, and Title: learn how to use Anki in a right way, Busy blurred background of Japanese learning software or flahscards. Bright colors, high contrast, designed to grab attention.`}
        />
        <div className="mt-3 flex gap-2">
          <Link href="/dashboard/thumbnail">
            <Button className="rounded-xl bg-white text-black hover:bg-white/90 cursor-pointer">
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
              className="rounded-3xl border border-white/10"
            />
          ))}
        </div>
        <div className="mt-3 flex gap-2">
          <Button className="rounded-xl bg-white text-black hover:bg-white/90 cursor-pointer">
            <PlayCircle className="mr-2 h-4 w-4" /> Preview
          </Button>
        </div>
      </div>
    </div>
  );
}

function LogoWall() {
  const items = [
    "Aperture",
    "Stackwise",
    "Nova",
    "Polar",
    "Motion",
    "Hive",
    "Echo",
    "Pulse",
  ];
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <p className="text-center text-sm uppercase tracking-wider text-white/50">
          Trusted by creators and teams at
        </p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-x-8 gap-y-6 opacity-70">
          {items.map((n) => (
            <div key={n} className="text-center text-white/60">
              {n}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureGrid() {
  const features = [
    {
      icon: <Zap className="h-5 w-5" />,
      title: "One‑click Scripts",
      desc: "Generate hooks, outlines, and full scripts tailored to your niche.",
    },
    {
      icon: <Wand2 className="h-5 w-5" />,
      title: "Smart Thumbnails",
      desc: "On-brand, high‑contrast thumbnails optimized for CTR.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Private by Default",
      desc: "Your drafts and assets are secure. We never train on your data.",
    },
    {
      icon: <Rocket className="h-5 w-5" />,
      title: "Fast Exports",
      desc: "Instant PNG/JPG exports with safe margins and grid guides.",
    },
  ];

  return (
    <section id="features" className="py-24 border-t border-white/10">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Everything you need to ship faster
          </h2>
          <p className="mt-3 text-white/70">
            A crisp toolkit for creators—no clutter, just speed.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <Card key={f.title} className="border-white/10 bg-white/5">
              <CardHeader className="flex flex-col items-center">
                <Badge className="w-fit rounded-full p-1 bg-white text-black hover:bg-white">
                  {f.icon}
                </Badge>
                <CardTitle className="mt-3 text-xl">{f.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-white/70">{f.desc}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  const bullets = [
    "Hook variations",
    "Pattern interrupts",
    "Pose suggestions",
    "CTR-safe colorways",
    "Face crop guide",
    "A/B test ready",
  ];
  return (
    <section id="showcase" className="py-24 border-t border-white/10">
      <div className="container mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-2xl sm:text-3xl font-semibold">
            Craft captivating visuals in minutes
          </h3>
          <p className="mt-3 text-white/70">
            Pick a style, drop a frame, and let Epica suggest bold text,
            contrast, and face crops that pop on the YouTube feed.
          </p>
          <ul className="mt-6 space-y-2 text-white/80">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4" /> {b}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex gap-3">
            <Link href="/dashboard/thumbnail">
              <Button className="rounded-xl bg-white text-black hover:bg-white/90 cursor-pointer">
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
            className="rounded-3xl border border-white/10"
          />
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const pricingPlans = [
    {
      name: "Free",
      price: 0,
      popular: false,
      features: [
        "1 script generations",
        "3 thumbnail generations",
        "3 video ideas",
      ],
      buttonText: "Get Started",
      buttonVariant: "default",
    },
    {
      name: "Creator",
      price: 19,
      popular: true,
      features: [
        "100 script generations",
        "200 thumbnail generations",
        "Unlimited video ideas",
      ],
      buttonText: "Choose Creator",
      buttonVariant: "default",
    },
    {
      name: "Teams",
      price: 49,
      popular: false,
      features: [
        "Unlimited script generations",
        "Unlimited thumbnail generations",
        "Unlimited video ideas",
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline",
    },
  ];

  return (
    <section id="pricing" className="py-24 border-t border-white/10">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-3xl sm:text-4xl font-bold">
            Simple, creator‑friendly pricing
          </h3>
          <p className="mt-3 text-white/70">
            Start free. Upgrade when you need more volume.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className="relative border-white/10 bg-white/5"
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="rounded-full bg-white text-black">
                    Popular
                  </Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-white/80 space-y-3">
                <p className="text-3xl font-bold">
                  ${plan.price}
                  <span className="text-base font-normal text-white/60">
                    /mo
                  </span>
                </p>
                <ul className="flex flex-col gap-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CircleCheckBig className="h-4 w-4 text-white/70" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.buttonVariant}
                  className={`w-full rounded-xl ${
                    plan.buttonVariant === "default"
                      ? "bg-white text-black hover:bg-white/90"
                      : "border-white/20"
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqData = [
    {
      question: "Will Epica work with my niche?",
      answer:
        "Yes. Prompt templates and tone controls help tailor scripts and thumbnails for tech, lifestyle, finance, education, gaming, and more.",
    },
    {
      question: "Do you store my content?",
      answer:
        "Your projects are private by default. You can delete any data anytime. We don't train models on your content.",
    },
    {
      question: "Can I export thumbnails in 4K?",
      answer:
        "Absolutely. Export presets include 1280×720, 1920×1080, and 3840×2160 with safe‑area guides.",
    },
  ];

  return (
    <section id="faq" className="py-24 border-t border-white/10">
      <div className="container mx-auto max-w-4xl px-4">
        <h3 className="text-3xl font-semibold text-center">
          Frequently asked questions
        </h3>
        <Accordion
          type="single"
          collapsible
          className="mt-8 px-4 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5"
        >
          {faqData.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="decoration-transparent cursor-pointer">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative py-24 border-t border-white/10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-16 h-40 bg-[radial-gradient(50%_70%_at_50%_100%,rgba(255,255,255,0.10),transparent_70%)]"
      />
      <div className="container mx-auto max-w-5xl px-4">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-10 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold">
            Create your next viral video assets with Epica
          </h3>
          <p className="mt-2 text-white/70">
            Start free today. Upgrade when you’re ready.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link href="/dashboard">
              <Button className="rounded-xl bg-white text-black hover:bg-white/90">
                Get Started
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="rounded-xl border-white/20">
                Contact
              </Button>
            </Link>
          </div>
          <div className="pointer-events-none absolute -inset-1 rounded-3xl ring-1 ring-inset ring-white/10" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const links = ["Terms", "Privacy", "Support", "Changelog"];
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" width={22} height={22} alt="" />
          <span className="font-medium">Epica</span>
        </div>
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} Epica, Inc. All rights reserved.
        </p>
        <nav className="flex gap-6 text-sm text-white/70">
          {links.map((l) => (
            <a key={l} href="#" className="hover:text-white">
              {l}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
