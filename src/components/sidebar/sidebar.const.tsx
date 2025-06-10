import { Settings, Users, Building2, Sidebar } from "lucide-react"

export type SidebarItem = {
  title: string;
    icon: React.ComponentType<any>;
    href: string;
};

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    title: "Actions",
    icon: Settings,
    href: "/actions",
  },
  {
    title: "Board",
    icon: Users,
    href: "/board",
  },
  {
    title: "Companies",
    icon: Building2,
    href: "/companies",
  },
];