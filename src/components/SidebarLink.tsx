"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { Calendar, Grid, Icon, Settings, User } from "react-feather";

export interface IIconDictionary {
  Settings: Icon;
  User: Icon;
  Grid: Icon;
  Calendar: Icon;
}

const icons: IIconDictionary = { Settings, User, Grid, Calendar };

export interface ISidebarLinkProps {
  link: {
    link: string;
    icon: keyof IIconDictionary;
  };
}

const SidebarLink: FC<ISidebarLinkProps> = ({ link }) => {
  const pathname = usePathname();

  const isActive: boolean = pathname === link.link;

  const Icon: Icon = icons[link.icon];

  return (
    <Link href={link.link}>
      <Icon
        size={40}
        className={clsx(
          "stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out",
          isActive && "stroke-violet-600"
        )}
      />
    </Link>
  );
};

export default SidebarLink;
