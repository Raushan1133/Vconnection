"use client";

import { Twitter, Linkedin, Instagram, Github } from "lucide-react";

const socialLinks = [
  { href: "#", Icon: Twitter },
  { href: "#", Icon: Linkedin },
  { href: "#", Icon: Instagram },
  { href: "#", Icon: Github },
];

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { href: "#", label: "Contact" },
      { href: "#", label: "Privacy Policy" },
      { href: "#", label: "Terms & Conditions" },
      { href: "#", label: "FAQs" },
    ],
  },
  {
    title: "For Startups",
    links: [
      { href: "#", label: "How It Works" },
      { href: "#", label: "Success Stories" },
      { href: "#", label: "Pricing" },
      { href: "#", label: "Resources" },
    ],
  },
  {
    title: "For Investors",
    links: [
      { href: "#", label: "Discover Startups" },
      { href: "#", label: "Investment Opportunities" },
      { href: "#", label: "Investor Resources" },
      { href: "#", label: "Join as an Angel" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="py-16 bg-neutral-950 border-t border-white/10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Social Links Section */}
          <div className="flex flex-col gap-6 pl-6 md:pl-12">
            <h2 className="text-white font-bold text-2xl">FirstSeed</h2>
            <p className="text-white/60 text-base leading-relaxed">
              FirstSeed is a global platform that bridges the gap between startups and angel investors, empowering innovation and growth.
            </p>
            <div className="flex gap-6">
              {socialLinks.map(({ href, Icon }, index) => (
                <a key={index} href={href} className="text-white/60 hover:text-white transition-all duration-300">
                  <Icon className="w-7 h-7" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links Sections */}
          {footerLinks.map(({ title, links }, index) => (
            <div key={index} className="flex flex-col gap-6 pl-6 md:pl-12">
              <h4 className="text-white font-bold text-xl">{title}</h4>
              <nav className="flex flex-col gap-3">
                {links.map(({ href, label }) => (
                  <a key={href} href={href} className="text-white/60 hover:text-white text-base transition-all duration-300">
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Footer Bottom - Copyright */}
        <div className="mt-10  border-white/10 pt-3 text-center">
          <p className="text-white/60 text-base">© {new Date().getFullYear()} FirstSeed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
