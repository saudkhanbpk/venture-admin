import React from "react";
import { Newspaper, BookOpen, Search, Users } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  const menuItems = [
    {
      title: "Blogs",
      icon: <Newspaper className="w-6 h-6" />,
      href: "/blog",
      isActive: true,
    },
    {
      title: "Services",
      icon: <BookOpen className="w-6 h-6" />,
      href: "/services",
    },
    {
      title: "Open Positions",
      icon: <Search className="w-6 h-6" />,
      href: "/positions",
    },
    {
      title: "Contacts",
      icon: <Users className="w-6 h-6" />,
      href: "/contact",
    },
  ];

  return (
    <div className="flex flex-col w-64 min-h-screen bg-black text-white">
      <nav className="flex flex-col space-y-2 p-4">
        {menuItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200
              ${
                item.isActive
                  ? "text-purple-500"
                  : "text-gray-300 hover:bg-gray-800"
              }`}
          >
            <span
              className={item.isActive ? "text-purple-500" : "text-gray-300"}
            >
              {item.icon}
            </span>
            <span className="font-medium">{item.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
