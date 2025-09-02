import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CircleCheckBig } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const PricingSection = () => {
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
        "20 script generations",
        "100 thumbnail generations",
        "Unlimited video ideas",
      ],
      buttonText: "Choose Creator",
      buttonVariant: "default",
    },
    {
      name: "Teams",
      price: 69,
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
    <section
      id="pricing"
      className="py-24 border-t border-black/10 dark:border-white/10"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-3xl sm:text-4xl font-bold">
            Simple, creator‑friendly pricing
          </h3>
          <p className="mt-3 text-black/70 dark:text-white/70">
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
                  <Badge>Popular</Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-black/80 dark:text-white/80 space-y-3">
                <p className="text-3xl font-bold">
                  ${plan.price}
                  <span className="text-base font-normal text-black/60 dark:text-white/60">
                    /mo
                  </span>
                </p>
                <ul className="flex flex-col gap-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CircleCheckBig className="h-4 w-4 text-black/80 dark:text-white/70" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.buttonVariant}
                  className={`w-full rounded-xl`}
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
};

export default PricingSection;
