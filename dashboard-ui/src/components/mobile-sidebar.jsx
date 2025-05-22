import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavMain } from "./nav-main";
import { NavProjects } from "./nav-projects";
import { NavUser } from "./nav-user";
import { TeamSwitcher } from "./team-switcher";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: () => null,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: () => null,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: () => null,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Menu,
      isActive: true,
      items: [
        { title: "Main View", url: "/dashboard" },
        { title: "Analytics", url: "/analytics" },
        { title: "Settings", url: "/settings" },
      ],
    },
  ],
  projects: [],
};

export function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden p-3">
        <Menu className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent side="left" className="p-4 space-y-4">
        <TeamSwitcher teams={data.teams} />
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavUser user={data.user} />
      </SheetContent>
    </Sheet>
  );
}
