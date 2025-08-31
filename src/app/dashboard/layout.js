import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({ children }) {
  return <SidebarProvider>{children}</SidebarProvider>;
}
