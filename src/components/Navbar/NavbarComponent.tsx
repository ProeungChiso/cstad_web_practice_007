"use client"
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import { AcmeLogo } from "../../../public/assets/AcmeLogo";
import { usePathname } from "next/navigation";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathName = usePathname();
  const menuItems = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "All Products",
      path: "/all-products"
    }
    ,
    {
      title: "Categories",
      path: "/categories"
    }
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" className="text-black">
            <AcmeLogo />
            <p className="font-bold text-inherit"><span className="text-blue-600 font-extrabold">ACME-</span>Shop</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      {menuItems.map((item, index)=>(
          <NavbarItem key={index}>
          <Link className={`${pathName === item.path ? 'font-bold' : ''}`} href={item.path}>
            {item.title}
          </Link>
        </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/signup" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              href={item.path}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
            <Link
              className="w-full"
              href="/login"
              size="lg">
              Login
            </Link>
          </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
