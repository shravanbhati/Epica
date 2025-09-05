"use client";

import * as React from "react";
import { Newspaper, LayoutDashboard } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { YouTube } from "./Icon";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isCollaps: false,
    },
    {
      title: "YouTube",
      url: "#",
      icon: YouTube,
      isActive: false,
      isCollaps: true,
      items: [
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
      title: "Blog & Article",
      url: "#",
      icon: Newspaper,
      isCollaps: true,
      items: [
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
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Image src="/logo.png" width={50} height={50} alt="" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Epica Studio</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
