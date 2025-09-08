"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  useClerk,
} from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SignOutButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import ThemeToggle from "../ThemeToggle";
const NavUserBtn = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const { signOut } = useClerk();
  const handleLogout = async () => {
    toast.promise(signOut(), {
      loading: "Logging out...",
      success: "You have been logged out.",
      error: "Logout failed. Try again.",
    });
  };

  return (
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
          <DropdownMenuContent className="w-48 mx-2" align="start">
            {!isLoaded || !user ? (
              <>
                <DropdownMenuLabel className="pb-0 truncate">
                  Loading...
                </DropdownMenuLabel>
                <p className="text-xs px-2 text-zinc-500 truncate dark:text-zinc-400">
                  couldn't load the email
                </p>
              </>
            ) : (
              <>
                <DropdownMenuLabel className="pb-0 truncate">
                  {user.fullName || "User"}
                </DropdownMenuLabel>
                <p className="text-xs px-2 text-zinc-500 truncate dark:text-zinc-400">
                  {user.primaryEmailAddress?.emailAddress}
                </p>
              </>
            )}

            <DropdownMenuSeparator />
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
            <div className="flex text-sm text-zinc-400 px-2 py-1 items-center justify-between">
              Theme <ThemeToggle />
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <span>Log out</span>
            </DropdownMenuItem>
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
  );
};

export default NavUserBtn;
