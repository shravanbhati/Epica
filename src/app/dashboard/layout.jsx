"use client";
import React, { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import MobileNavBar from "@/components/dashboard/MobileNavBar";

export default function DashboardLaout({ children }) {
  const isMobile = useIsMobile();

  const pathname = usePathname();

  const titles = {
    "/dashboard": "Dashboard",
    "/dashboard/thumbnails": "Thumbnails",
    "/dashboard/script-writer": "Script Writer",
  };

  const pageName = titles[pathname] || "Dashboard";

  return (
    <>
      <div suppressHydrationWarning>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            {isMobile ? (
              <MobileNavBar pageName={pageName} />
            ) : (
              <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                <div className="flex items-center gap-2 px-4">
                  <SidebarTrigger className="-ml-1 cursor-pointer" />
                  <Separator
                    orientation="vertical"
                    className="mr-2 data-[orientation=vertical]:h-4"
                  />
                  <h1>{pageName}</h1>
                </div>
              </header>
            )}

            <div className="p-4 pt-0">{children}</div>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </>
  );
}
