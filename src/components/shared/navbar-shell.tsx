"use client";

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/shared/navbar").then((mod) => mod.Navbar), {
  ssr: false,
  loading: () => null,
});

export function NavbarShell() {
  return <Navbar />;
}
