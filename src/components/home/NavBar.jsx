"use client";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
const NavBar = () => {
  const pages = [
    { pageName: "Features", href: "#features" },
    { pageName: "Pricing", href: "#pricing" },
    { pageName: "Showcase", href: "#showcase" },
    { pageName: "FAQ", href: "#faq" },
  ];
  return (
    <div className="sticky top-0 z-50 w-full border-b bg-white/60 dark:border-white/10 dark:bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-black/40">
      <div className="container mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" width={26} height={26} alt="" />
          <span className="font-bold tracking-tight text-black dark:text-white">
            Epica
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-black/70 dark:text-white/70">
          {pages.map(({ pageName, href }) => {
            return (
              <a className="hover:text-black dark:hover:text-white" href={href}>
                {pageName}
              </a>
            );
          })}
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
};

export default NavBar;
