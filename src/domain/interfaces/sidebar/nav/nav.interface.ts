import { ForwardRefExoticComponent, RefAttributes } from "react";
import { NavEnum } from "../../../enums/nav.enum";
import { Icon, IconProps } from "@tabler/icons-react";
import { RoleEnum } from "../../../enums/role.enum";

export interface NavItem {
  key: string;
  section: string;
  title: NavEnum;
  path: string;
  Icon: ForwardRefExoticComponent<Omit<IconProps, "ref"> & RefAttributes<Icon>>;
  roles: Array<RoleEnum>;
  subNav?: Array<SubNavItem>;
}

export interface SubNavItem {
  subKey: string;
  title: NavEnum;
  path: string;
  roles: Array<RoleEnum>;
}
