import { NavbarLink } from "@/types";

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  
];

export const navbarLinks: NavbarLink[] = [
    {
      route: "/",
      label: "Home",
    },
    {
      route: "/products",
      label: "Products",
    },
    {
      route: "/blog",
      label: "Blog",
    },
    {
      route: "/contact",
      label: "Contact",
    },
  ];