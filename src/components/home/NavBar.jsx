"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { SignOutButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
const NavBar = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  const pages = [
    { id: 1, pageName: "Features", href: "#features" },
    { id: 2, pageName: "Pricing", href: "#pricing" },
    { id: 3, pageName: "Showcase", href: "#showcase" },
    { id: 4, pageName: "FAQ", href: "#faq" },
  ];
  return (
    <div className="sticky top-0 z-50 w-full border-b bg-white/60 dark:border-white/10 dark:bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-black/40">
      <div className="container mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold tracking-tight text-black dark:text-white select-none">
            Epica Studio
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-black/70 dark:text-white/70">
          {pages.map(({ id, pageName, href }) => {
            return (
              <a
                className="hover:text-black dark:hover:text-white"
                key={id}
                href={href}
              >
                {pageName}
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <SignedIn>
            <DropdownMenu>
              <DropdownMenuTrigger className="cursor-pointer" asChild>
                {!isLoaded || !user ? (
                  <Avatar className="h-8 w-8 rounded-full">
                    <AvatarFallback className="rounded-full">U</AvatarFallback>
                  </Avatar>
                ) : (
                  <Avatar>
                    <AvatarImage
                      src={user.imageUrl}
                      alt={user.fullName || "User"}
                    />
                    <AvatarFallback className="rounded-lg">
                      {user.firstName?.[0] ?? "U"}
                      {user.lastName?.[0] ?? ""}
                    </AvatarFallback>
                  </Avatar>
                )}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40 mx-2" align="start">
                <DropdownMenuGroup>
                  <Link href="/dashboard">
                    <DropdownMenuItem>Dashboard</DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <SignOutButton>
                  <DropdownMenuItem>
                    <span>Log out</span>
                  </DropdownMenuItem>
                </SignOutButton>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

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
        </div>
      </div>
    </div>
  );
};

export default NavBar;
