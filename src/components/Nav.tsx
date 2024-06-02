"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { ComponentProps, ReactNode } from "react";
import Image from "next/image";

export const Nav = ({ children }: { children: ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const param = usePathname();
  console.log(param);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };



  return (
    <nav className="bg-white shadow-lg text-gray-800 flex justify-between items-center p-4 md:px-8">
      <div className="flex items-center">
        {param === "/admin" ? (
          <Image src="/images/admin.ico" alt="Logo" width={40} height={40} />
        ) : (
          <Image src="/images/mainPage.ico" alt="Logo-home" width={40} height={40} />
        )}
      </div>
      <button
        className="md:hidden block text-gray-600 hover:text-gray-900 focus:outline-none"
        onClick={toggleMobileMenu}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>
      <div
        className={cn(
          "md:flex md:space-x-4",
          isMobileMenuOpen ? "block" : "hidden"
        )}
      >
        {children}
      </div>
    </nav>
  );
};

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      className={cn(
        "px-4 py-2 rounded-lg text-sm font-medium transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg",
        pathname === props.href
          ? "bg-blue-600 text-white shadow-md"
          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
      )}
    />
  );
}
