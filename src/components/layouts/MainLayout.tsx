import React, { ReactNode } from "react";
import Navbar from "../NavLeft/NavLeft";
import ScrollToAnchor from "@/utils/ScrollToAnchor";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ScrollToAnchor />
      <Navbar />
      {children}
    </>
  );
}
