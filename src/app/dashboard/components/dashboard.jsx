import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";

const Dashboard = ({ pageName = "Dashboard", children }) => {
  return (
    <>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className=" data-[orientation=vertical]:h-4"
            />
          </div>
          <span className="text-lg">{pageName}</span>
        </header>

        {/* Dynamic Content */}
        <div className="p-4 pt-0">{children}</div>
      </SidebarInset>
    </>
  );
};

export default Dashboard;
