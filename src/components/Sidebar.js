"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaTachometerAlt, FaUser, FaLayerGroup, FaGavel, FaFileAlt, FaClipboardList, FaCog, FaSignOutAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React from "react";

const navItems = [
  { icon: <FaTachometerAlt />, label: "Dashboard", href: "/" },
  { icon: <FaUser />, label: "Accounts", href: "/accounts" },
  { icon: <FaLayerGroup />, label: "Batches", href: "/batches" },
  { icon: <FaGavel />, label: "Resolution", href: "/resolution" },
  { icon: <FaFileAlt />, label: "Assessments", href: "/assessments" },
  { icon: <FaClipboardList />, label: "Appeal Letter", href: "/appeal-letter" },
  { icon: <FaClipboardList />, label: "Summary", href: "/summary" },
  { icon: <FaCog />, label: "Settings", href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = React.useState(false);

  // Split nav items: all except Settings at the top, Settings at the bottom
  const mainNavItems = navItems.filter(item => item.label !== "Settings");
  const settingsNavItem = navItems.find(item => item.label === "Settings");

  return (
    <aside className={`bg-[#22314F] text-white ${collapsed ? 'w-20' : 'w-72'} py-4 2xl:h-[88vh] h-[87vh] flex flex-col rounded-2xl m-4 transition-all duration-300 relative`}>
      {/* Collapse/Expand Button */}
      <button
        className="absolute top-3 right-[-16px] bg-white text-[#2ED6A1] rounded-full shadow p-1 z-10 border border-gray-200"
        onClick={() => setCollapsed((prev) => !prev)}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        {collapsed ? <FaChevronRight size={18} /> : <FaChevronLeft size={18} />}
      </button>
      <nav className="mt-8 flex-1">
        {mainNavItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link href={item.href} key={item.label}>
              <div
                className={`flex items-center py-3 text-sm 2xl:text-base cursor-pointer mx-4 hover:bg-[#2ED6A1] hover:text-[#22314F] rounded-full mb-1 transition-all duration-200 ${
                  isActive ? "bg-[#2ED6A1] text-[#22314F] mx-4" : ""
                } ${collapsed ? 'justify-center px-0' : 'gap-3 px-6'}`}
              >
                {item.icon}
                {!collapsed && <span>{item.label}</span>}
              </div>
            </Link>
          );
        })}
      </nav>
      {/* Settings above Logout */}
      {settingsNavItem && (
        <div className="mb-2">
          <Link href={settingsNavItem.href}>
            <div
              className={`flex items-center py-3 cursor-pointer mx-4 text-sm 2xl:text-base hover:bg-[#2ED6A1] hover:text-[#22314F] rounded-full mb-1 transition-all duration-200 ${
                pathname === settingsNavItem.href ? "bg-[#2ED6A1] text-[#22314F] mx-4" : ""
              } ${collapsed ? 'justify-center px-0' : 'gap-3 px-6'}`}
            >
              {settingsNavItem.icon}
              {!collapsed && <span>{settingsNavItem.label}</span>}
            </div>
          </Link>
        </div>
      )}
      <button className={`m-6 mt-auto bg-[#2ED6A1] text-[#22314F] py-2 text-sm 2xl:text-base rounded-lg flex items-center justify-center gap-2 transition-all duration-200 ${collapsed ? 'justify-center px-0' : ''}`}>
        <FaSignOutAlt />
        {!collapsed && <span>Logout</span>}
      </button>
    </aside>
  );
} 