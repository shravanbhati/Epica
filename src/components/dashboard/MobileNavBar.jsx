"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";
import NavUserBtn from "../ui/custom/navUserBtn";

import React from "react";
import Link from "next/link";
import { Menu, YouTube } from "../Icon";
import { Newspaper } from "lucide-react";

const MobileNavBar = ({ pageName }) => {
  const mobileNavPages = [
    {
      pageName: "YouTube",
      icon: YouTube,
      url: "/dashboard",
      subPage: [
        {
          title: "Thumbnails",
          url: "/dashboard/thumbnails",
        },
        {
          title: "Script Writer",
          url: "/dashboard/script-writer",
        },
        {
          title: "Video Idea",
          url: "#",
        },
      ],
    },
    {
      pageName: "Blog & Article",
      icon: Newspaper,
      url: "/dashboard",
      subPage: [
        {
          title: "Cover Image",
          url: "#",
        },
        {
          title: "Content Writer",
          url: "#",
        },
        {
          title: "Research",
          url: "#",
        },
      ],
    },
  ];

  return (
    <div className="sticky top-0 z-50 w-full border-b bg-white/60 dark:border-white/10 dark:bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-black/40">
      <div className="container mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="m-1" asChild>
              <span>
                <Menu />
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40 mx-4 mt-2">
              <DropdownMenuGroup>
                {mobileNavPages.map((page) => {
                  return (
                    <DropdownMenuSub key={page.pageName}>
                      <DropdownMenuSubTrigger>
                        {page.pageName}
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          {page.subPage.map((subpage) => (
                            <DropdownMenuItem key={subpage.title} asChild>
                              <Link href={subpage.url}>{subpage.title}</Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                  );
                })}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <span className="font-bold tracking-tight text-black dark:text-white select-none">
            {pageName}
          </span>
        </div>
        <NavUserBtn />
      </div>
    </div>
  );
};

export default MobileNavBar;
