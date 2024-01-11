import React, { ReactNode } from "react";
import NavLeft from "../NavLeft/NavLeft";
import ScrollToAnchor from "@/utils/ScrollToAnchor";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ScrollToAnchor />
      <NavLeft displayed={true} />
      {children}
    </>
  );
}
