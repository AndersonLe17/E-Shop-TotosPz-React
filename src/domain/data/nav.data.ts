import { NavEnum } from "../enums/nav.enum";
import { RoleEnum } from "../enums/role.enum";
import { NavItem } from "../interfaces/sidebar/nav/nav.interface";
import { IconBell, IconBookmarks, IconBox, IconBuildingStore, IconIdBadge, IconLayoutGrid, IconReceipt, IconUserCog, IconWalk } from "@tabler/icons-react";

export const navData: Array<NavItem> = [
  {
    key: "nav-1",
    section: "CORE",
    title: NavEnum.DASHBOARD,
    path: "/dashboard",
    Icon: IconLayoutGrid,
    roles: [RoleEnum.ROLE_ADMINISTRADOR],
  },
  {
    key: "nav-2",
    section: "MAIN",
    title: NavEnum.VENTAS,
    path: "/ventas",
    Icon: IconReceipt,
    roles: [RoleEnum.ROLE_ADMINISTRADOR, RoleEnum.ROLE_CAJERO],
  },
  {
    key: "nav-3",
    section: "MAIN",
    title: NavEnum.PEDIDOS,
    path: "/pedidos",
    Icon: IconBookmarks,
    roles: [RoleEnum.ROLE_ADMINISTRADOR, RoleEnum.ROLE_CAJERO, RoleEnum.ROLE_COCINERO],
  },
  {
    key: "nav-4",
    section: "MAIN",
    title: NavEnum.MENU,
    path: "/menu",
    Icon: IconBox,
    roles: [RoleEnum.ROLE_ADMINISTRADOR],
    subNav: [
      {
        subKey: "nav-4-1",
        title: NavEnum.CATEGORIAS,
        path: "/categorias",
        roles: [RoleEnum.ROLE_ADMINISTRADOR],
      },
      {
        subKey: "nav-4-2",
        title: NavEnum.PRODUCTOS,
        path: "/platillos",
        roles: [RoleEnum.ROLE_ADMINISTRADOR],
      },
    ],
  },
  {
    key: "nav-5",
    section: "MAIN",
    title: NavEnum.PERSONAL,
    path: "/personal",
    Icon: IconIdBadge,
    roles: [RoleEnum.ROLE_ADMINISTRADOR],
    subNav: [
      {
        subKey: "nav-5-1",
        title: NavEnum.PERFILES,
        path: "/perfiles",
        roles: [RoleEnum.ROLE_ADMINISTRADOR],
      },
      {
        subKey: "nav-5-2",
        title: NavEnum.USUARIOS,
        path: "/usuarios",
        roles: [RoleEnum.ROLE_ADMINISTRADOR],
      },
    ],
  },
  {
    key: "nav-6",
    section: "MAIN",
    title: NavEnum.CLIENTES,
    path: "/clientes",
    Icon: IconWalk,
    roles: [RoleEnum.ROLE_ADMINISTRADOR],
  },
  {
    key: "nav-7",
    section: "MAIN",
    title: NavEnum.SEDES,
    path: "/sedes",
    Icon: IconBuildingStore,
    roles: [RoleEnum.ROLE_ADMINISTRADOR],
  },
  {
    key: "nav-8",
    section: "ACCOUNT",
    title: NavEnum.SETTINGS,
    path: "/settings",
    Icon: IconUserCog,
    roles: [RoleEnum.ROLE_ADMINISTRADOR],
  },
  {
    key: "nav-9",
    section: "ACCOUNT",
    title: NavEnum.ALERTAS,
    path: "/alertas",
    Icon: IconBell,
    roles: [RoleEnum.ROLE_ADMINISTRADOR],
  },
];
