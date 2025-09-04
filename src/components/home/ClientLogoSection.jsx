import React from "react";

const ClientLogoSection = () => {
  const items = [
    "Japaro",
    "Stackwise",
    "Nova",
    "Jobiki",
    "Motion",
    "YukiNihongo",
    "Echo",
    "Pulse",
  ];
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <p className="text-center text-sm uppercase tracking-wider text-black/70 dark:text-white/50">
          Trusted by creators and teams at
        </p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-x-8 gap-y-6 opacity-70">
          {items.map((n) => (
            <div
              key={n}
              className="text-center text-black/65 dark:text-white/60"
            >
              {n}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogoSection;
