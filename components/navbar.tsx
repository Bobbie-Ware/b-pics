import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
} from "@nextui-org/navbar";

import NextLink from "next/link";

export const Navbar = () => {

  return (
    <NextUINavbar maxWidth="md" position="sticky">
      <NavbarContent className="basis-full" justify="center">
        <NavbarBrand as="li" className="gap-8 max-w-fit">
          <NextLink href="/">
            <p className="font-bold text-inherit">B Pics</p>
          </NextLink>
          <NextLink href="/all">
            <p className="font-bold text-inherit">All</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
    </NextUINavbar>
  );
};