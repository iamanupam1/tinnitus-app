"use client";
import {
  BookOpenIcon,
  ClipboardListIcon,
  HomeIcon,
  StethoscopeIcon,
} from "lucide-react";
import { useParams, usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

const BaseLayoutComponent = ({ children }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [currentPath, setCurrentPath] = useState("/");
  const params = useParams();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    setCurrentPath(window.location.pathname + window.location.hash);
  }, [params, pathname]);

  const navItems = [
    { name: "Dashboard", path: "/", icon: <HomeIcon size={20} /> },
    {
      name: "Questionnaires",
      icon: <ClipboardListIcon size={20} />,
      children: [
        {
          name: "Questionnaires",
          path: "/questionnaire-assessment#questionnaire",
        },
        { name: "Assessments", path: "/questionnaire-assessment#assessment" },
        { name: "Protocols", path: "/questionnaire-assessment#protocols" },
      ],
    },
    {
      name: "Education",
      icon: <BookOpenIcon size={20} />,
      children: [
        {
          name: "Anatomy of Auditory Systems",
          path: "/education-information/auditory",
        },
        { name: "Nervous System", path: "/education-information/nervous" },
        {
          name: "Brain – Non-Auditory Systems",
          path: "/education-information/limbic",
        },
        { name: "Tinnitus", path: "/education-information/tinnitus" },
        { name: "Hyperacusis", path: "/education-information/hyperacusis" },
      ],
    },
    {
      name: "Treatment",
      icon: <StethoscopeIcon size={20} />,
      children: [
        {
          name: "Treatment Protocols",
          path: "/treatment-counseling#protocols",
        },
        {
          name: "Suicide Prevention",
          path: "/treatment-counseling#suicide",
        },
        {
          name: "Other Protocols",
          path: "/treatment-counseling/other-protocols",
        },
        {
          name: "Alternative Treatments",
          path: "/treatment-counseling#alternative",
        },
      ],
    },
  ];

  const handleMouseEnter = () => {
    setIsNavExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsNavExpanded(false);
    setActiveItem(null);
  };

  const handleItemHover = (index) => {
    if (navItems[index].children) {
      setActiveItem(index);
    } else {
      setActiveItem(null);
    }
  };

  const isActive = (item) => {
    if (item.path === "/" && currentPath === "/") {
      return true;
    }

    if (item.path && item.path !== "/") {
      return currentPath.startsWith(item.path.split("#")[0]);
    }

    if (item.children) {
      return item.children.some((child) =>
        currentPath.startsWith(child.path.split("#")[0])
      );
    }

    return false;
  };

  const isChildActive = (path) => {
    return currentPath === path;
  };

  return (
    <div className="flex relative min-h-screen bg-gray-50">
      {/* Fixed position navigation container */}
      <div
        className="fixed left-0 top-0 h-full flex items-center z-30"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`h-auto bg-white dark:bg-gray-900 rounded-r-xl shadow-lg transition-all duration-300 ease-in-out ${
            isNavExpanded ? "w-56" : "w-16"
          }`}
          style={{
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
          }}
        >
          <ul className="py-4">
            {navItems.map((item, index) => {
              const itemActive = isActive(item);
              return (
                <li
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => handleItemHover(index)}
                >
                  <a
                    href={item.path || item.children?.[0]?.path || "#"}
                    className={`flex items-center px-4 py-3 transition-all duration-200 ${
                      itemActive
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    } ${
                      activeItem === index ? "bg-gray-100 dark:bg-gray-800" : ""
                    }`}
                    onClick={(e) => !item.path && e.preventDefault()}
                  >
                    <span
                      className={`flex items-center justify-center ${
                        itemActive ? "text-blue-600 dark:text-blue-400" : ""
                      }`}
                    >
                      {item.icon}
                    </span>
                    <span
                      className={`ml-3 font-medium text-sm whitespace-nowrap transition-all duration-200 ${
                        isNavExpanded
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-4"
                      }`}
                    >
                      {item.name}
                    </span>
                  </a>

                  {/* Submenu */}
                  {item.children && activeItem === index && isNavExpanded && (
                    <div
                      className="absolute left-full top-0 w-56 bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden"
                      style={{
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                        animation: "fadeIn 0.2s ease-out",
                      }}
                    >
                      <ul className="py-2">
                        {item.children.map((child) => {
                          const childActive = isChildActive(child.path);
                          return (
                            <li key={child.name}>
                              <a
                                href={child.path}
                                className={`block px-4 py-2 text-sm transition-colors ${
                                  childActive
                                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-800"
                                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
                                }`}
                              >
                                {child.name}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Main content */}
      <main className="w-full">{children}</main>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default BaseLayoutComponent;
