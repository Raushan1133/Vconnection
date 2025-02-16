"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "@/components/Button";

// Navigation links
const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Stories", href: "#stories" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
];

// Define types for MobileMenu props
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// Mobile Menu Component
const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden bg-neutral-900/90 shadow-lg p-4">
      <div className="flex flex-col items-center gap-4 py-4">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={onClose} className="text-white text-lg">
            {link.label}
          </a>
        ))}
        <Button className="w-3/4" variant="secondary" onClick={() => window.location.href = "/try"}>
          Try Now
        </Button>
      </div>
    </div>
  );
};

// Desktop Navigation Component
const DesktopNav: React.FC = () => (
  <nav className="hidden lg:flex justify-center items-center gap-6 font-medium">
    {NAV_LINKS.map((link) => (
      <a key={link.href} href={link.href} className="text-white">
        {link.label}
      </a>
    ))}
  </nav>
);

// Navbar Component
const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className="py-4 lg:py-8 fixed w-full top-0 z-50 bg-transparent shadow-md">
        <div className="container w-full">
          <div className="border border-white/15 bg-transparent backdrop-blur-lg shadow-lg">
            <div className="grid grid-cols-2 lg:grid-cols-3 py-2 lg:px-2 px-4 items-center">
              {/* Platform Name */}
              <div className="flex items-center">
                <span className="text-white text-3xl font-extrabold tracking-wide uppercase">
                  <span className="bg-white text-black px-3 py-1 rounded-lg shadow-md">V</span>
                  <span className="text-lime-400 ml-3 drop-shadow-lg">Connection</span>
                </span>
              </div>

              {/* Desktop Navigation */}
              <DesktopNav />

              {/* Mobile Menu Toggle and Buttons */}
              <div className="flex justify-end gap-4">
                <button type="button" onClick={toggleMobileMenu} className="lg:hidden">
                  {isMobileMenuOpen ? <X className="text-white" size={30} /> : <Menu className="text-white" size={30} />}
                </button>

                {/* Desktop Try Now Button */}
                <Button variant="secondary" className="hidden lg:inline-flex items-center" onClick={() => window.location.href = "/try"}>
                  Try Now
                </Button>
              </div>
            </div>

            {/* Mobile Menu */}
            <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
          </div>
        </div>
      </header>

      {/* Spacer for fixed navbar */}
      <div className="pb-[86px] md:pb-[98px]" />
    </>
  );
};

export default Navbar;