import { FC } from "react";
import Card from "./Card";
import SidebarLink, { IIconDictionary } from "./SidebarLink";
type SidebarLink = { label: string; icon: keyof IIconDictionary; link: string };

const links: SidebarLink[] = [
  { label: "Home", icon: "Grid", link: "/home" },
  {
    label: "Calendar",
    icon: "Calendar",
    link: "/calendar",
  },
  { label: "Profile", icon: "User", link: "/profile" },
  {
    label: "Settings",
    icon: "Settings",
    link: "/settings",
  },
];

const Sidebar: FC = () => {
  return (
    <Card className="h-full w-40 flex items-center justify-between flex-wrap">
      {links.map((link) => (
        <SidebarLink link={link} />
      ))}
    </Card>
  );
};

export default Sidebar;
