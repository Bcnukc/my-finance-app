import PageHeader from "@/components/PageHeader";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PageHeader className="mt-8" />
      <main>{children}</main>
      <footer className="mt-auto text-center py-8">Footer</footer>
    </>
  );
};

export default Layout;
