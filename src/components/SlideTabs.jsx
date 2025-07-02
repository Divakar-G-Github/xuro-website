import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

export const SlideTabsExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  useEffect(() => {
    const sectionIds = ["home", "services", "about", "contact", "footer"];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveTab(visible.target.id);
        }
      },
      { rootMargin: "-50% 0px -40% 0px", threshold: 0.1 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="relative px-4 sm:px-6 py-4 flex items-center justify-center text-white">
      <div className="absolute left-4 sm:left-10">
        <img
          src={logo}
          alt="Logo"
          className="w-12 sm:w-14 md:w-20 h-auto max-w-full drop-shadow-[0_0_25px_rgba(255,255,255,0.25)]"
        />
      </div>

      <nav className="hidden md:flex">
        <SlideTabs activeTab={activeTab} />
      </nav>

      <div className="absolute right-4 md:hidden z-50">
        {isOpen ? (
          <X className="w-8 h-8" onClick={() => setIsOpen(false)} />
        ) : (
          <Menu className="w-8 h-8" onClick={() => setIsOpen(true)} />
        )}
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 w-full z-40 bg-white/10 backdrop-blur-lg flex flex-col items-center py-6 space-y-4 md:hidden shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20 rounded-b-xl"
        >
          <SlideTabs
            isMobile={true}
            onItemClick={() => setIsOpen(false)}
            activeTab={activeTab}
          />
        </motion.div>
      )}
    </header>
  );
};

const SlideTabs = ({ isMobile = false, onItemClick, activeTab }) => {
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 });
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Service", id: "services" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
    { name: "Hire", id: "footer" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      if (onItemClick) onItemClick();
    }
  };

  return (
    <ul
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
      className={`${
        isMobile
          ? "flex flex-col space-y-4 text-white"
          : "relative flex rounded-full border border-white/10 bg-black/20 backdrop-blur-md shadow-lg ring-1 ring-white/5 p-1"
      }`}
    >
      {navItems.map((item) => (
        <Tab
          key={item.id}
          label={item.name}
          targetId={item.id}
          isActive={activeTab === item.id}
          setPosition={setPosition}
          isMobile={isMobile}
          onClick={() => handleScroll(item.id)}
        />
      ))}
      {!isMobile && <Cursor position={position} />}
    </ul>
  );
};

const Tab = ({ label, targetId, setPosition, isMobile, onClick, isActive }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onClick={onClick}
      onMouseEnter={() => {
        if (!ref?.current || isMobile) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({ left: ref.current.offsetLeft, width, opacity: 1 });
      }}
      className={`relative z-10 cursor-pointer uppercase transition duration-200 ${
        isMobile
          ? "text-lg"
          : `px-4 py-2 text-sm sm:px-5 sm:py-3 sm:text-base mix-blend-difference ${
              isActive ? "font-bold text-white" : "text-gray-300"
            }`
      }`}
    >
      {label}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{ ...position }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="absolute z-0 h-7 sm:h-12 rounded-full bg-white"
    />
  );
};