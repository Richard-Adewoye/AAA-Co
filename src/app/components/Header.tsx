"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header({
  navLinks,
}: {
  navLinks: { title: string; href: string }[];
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg">
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Brand */}
        <Link
          href="/"
          className="text-lg md:text-xl font-semibold tracking-tight text-white"
        >
          Amos Ademola Adewoye & Co.
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-100">
          {navLinks.map((link) => (
            <li key={link.title}>
              <Link
                href={link.href}
                className="hover:text-white/80 transition-colors"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-2xl border-t border-white/20">
          <ul className="flex flex-col items-center py-4 space-y-3 text-gray-100">
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className="block py-2 px-4 hover:text-white/80 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
