"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[var(--cream-light)] border-b thin-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-[var(--green-dark)]">
              TextQL
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-[var(--text-primary)] hover:text-[var(--green-primary)] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/healthcare"
              className="text-[var(--text-primary)] hover:text-[var(--green-primary)] transition-colors"
            >
              Healthcare
            </Link>
            <Link
              href="#platform"
              className="text-[var(--text-primary)] hover:text-[var(--green-primary)] transition-colors"
            >
              Platform
            </Link>
            <Link
              href="#solutions"
              className="text-[var(--text-primary)] hover:text-[var(--green-primary)] transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="#agents"
              className="text-[var(--text-primary)] hover:text-[var(--green-primary)] transition-colors"
            >
              Agents
            </Link>
            <Link
              href="#resources"
              className="text-[var(--text-primary)] hover:text-[var(--green-primary)] transition-colors"
            >
              Resources
            </Link>
            <Link
              href="#contact"
              className="bg-[var(--green-primary)] text-white px-6 py-2 rounded-full hover:bg-[var(--green-dark)] transition-colors"
            >
              Request Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[var(--text-primary)]"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[var(--cream)] border-t thin-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-[var(--text-primary)] hover:bg-[var(--cream-dark)] rounded-md"
            >
              Home
            </Link>
            <Link
              href="/healthcare"
              className="block px-3 py-2 text-[var(--text-primary)] hover:bg-[var(--cream-dark)] rounded-md"
            >
              Healthcare
            </Link>
            <Link
              href="#platform"
              className="block px-3 py-2 text-[var(--text-primary)] hover:bg-[var(--cream-dark)] rounded-md"
            >
              Platform
            </Link>
            <Link
              href="#solutions"
              className="block px-3 py-2 text-[var(--text-primary)] hover:bg-[var(--cream-dark)] rounded-md"
            >
              Solutions
            </Link>
            <Link
              href="#agents"
              className="block px-3 py-2 text-[var(--text-primary)] hover:bg-[var(--cream-dark)] rounded-md"
            >
              Agents
            </Link>
            <Link
              href="#resources"
              className="block px-3 py-2 text-[var(--text-primary)] hover:bg-[var(--cream-dark)] rounded-md"
            >
              Resources
            </Link>
            <Link
              href="#contact"
              className="block mx-3 my-2 bg-[var(--green-primary)] text-white px-6 py-2 rounded-full text-center hover:bg-[var(--green-dark)]"
            >
              Request Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}