"use client";

import Image from "next/image";
import ThemeToggle from "../ui/ThemeToggle";

const Footer = () => {
  const links = ["Terms", "Privacy", "Support", "Changelog"];

  return (
    <footer className="border-t text-black/10 dark:text-white/10 py-12">
      <div className="container mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" width={22} height={22} alt="Epica logo" />
          <span className="font-semibold text-black dark:text-white">
            Epica
          </span>
        </div>

        <p className="text-sm text-black/60 dark:text-white/60">
          © {new Date().getFullYear()} Epica, Inc. All rights reserved.
        </p>

        <nav className="flex gap-6 text-sm text-black/70 dark:text-white/70">
          {links.map((l) => (
            <a
              key={l}
              href="#"
              className="hover:text-black dark:hover:text-white"
            >
              {l}
            </a>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </footer>
  );
};

export default Footer;
