'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className = '' }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll to update background
  useEffect(() => {
    if (typeof window === 'undefined') return; // SSR guard
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Determine background classes based on scroll or override
  const bgClasses = className
    ? className
    : isScrolled
      ? 'bg-[#181E30]/70 backdrop-blur-md'
      : 'bg-transparent';

  return (
    <header
      className={`fixed top-0 w-full z-50
        px-4 py-2 flex items-center justify-between
        transition-colors duration-300
        ${bgClasses}`}
    >
      <Link href="/" className="text-xl font-bold text-white">
        Lughan Ross
      </Link>

      {/* Desktop */}
      <nav className="hidden lg:flex">
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-4">
            {/* Home */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} !bg-transparent hover:!bg-transparent`}
              >
                <Link href="/">
                  <span className="text-white font-bold">Home</span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* About Me */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} !bg-transparent hover:!bg-transparent`}
              >
                <Link href="/about-me">
                  <span className="text-white font-bold">About Me</span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Resume */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} !bg-transparent hover:!bg-transparent`}
              >
                <Link href="/resume">
                  <span className="text-white font-bold">Resume</span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Contact */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} !bg-transparent hover:!bg-transparent`}
              >
                <Link href="/contact">
                  <span className="text-white font-bold">Contact</span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Terminal */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} !bg-transparent hover:!bg-transparent`}
              >
                <Link href="/terminal">
                  <span className="text-white font-bold">Term</span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      {/* Mobile */}
      <button
        className="lg:hidden text-white focus:outline-none"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {mobileMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-[#181E30]/90 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col items-center py-4 space-y-4">
            <li>
              <Link href="/" className="text-white text-lg font-semibold">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-me"
                className="text-white text-lg font-semibold"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white text-lg font-semibold">
                SWE
              </Link>
            </li>
            <li>
              <Link href="/resume" className="text-white text-lg font-semibold">
                Resume
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-white text-lg font-semibold"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
