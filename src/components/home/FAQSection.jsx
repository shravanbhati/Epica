import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
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
    <section
      id="faq"
      className="py-24 border-t border-black/10 dark:border-white/10"
    >
      <div className="container mx-auto max-w-4xl px-4">
        <h3 className="text-xl sm:text-3xl font-semibold text-center">
          Frequently asked questions
        </h3>
        <Accordion
          type="single"
          collapsible
          className="mt-8 px-4 divide-y divide-black/10 dark:divide-white/10 rounded-2xl border border-black/10 dark:border-white/10 dark:bg-white/5"
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
};

export default FAQSection;
