"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const MainLayout = ({ children }: any) => {
  const pathname = usePathname();

  const list = useMemo(() => [
    {
      label: "Page 1",
      href: "/page1",
    },
    {
      label: "Page 2",
      href: "/page2",
    },
    {
      label: "Page 3",
      href: "/page3",
    }
  ], [])

  return (
    <div className="bg-black h-full text-white flex flex-col gap-2 justify-center items-center">
      <div className="flex items-center bg-gray-500 rounded-md overflow-hidden">
        {list.map((item) => (
          <Link
            href={item.href}
            key={item.label}
            style={{
              backgroundColor: pathname === item.href ? "red" : ""
            }}
            className="hover:bg-rose-400 p-3"
          >
            {item.label}
          </Link>
        ))}
      </div>
      {children}
    </div>
  );
}

export default MainLayout;