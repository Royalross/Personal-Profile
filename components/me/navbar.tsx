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

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className = '' }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

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

  // page‐level override; or apply scroll logic
  const bgClasses = className
    ? className
    : isScrolled
      ? 'bg-[#181E30]/70 bg-opacity-50 backdrop-filter backdrop-blur-md'
      : 'bg-transparent';

  return (
    <div
      className={`
        fixed top-0 w-full z-50
        px-4 py-2 flex items-center justify-between
        transition-colors duration-300
        ${bgClasses}
      `}
    >
      {/* my name */}
      <Link href="/" className="text-xl font-bold text-white">
        Lughan Ross
      </Link>

      {/* Nav links */}
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-4">
          {/* Home */}
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={
                navigationMenuTriggerStyle() +
                ' !bg-transparent hover:!bg-transparent'
              }
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
              className={
                navigationMenuTriggerStyle() +
                ' !bg-transparent hover:!bg-transparent'
              }
            >
              <Link href="/about-me">
                <span className="text-white font-bold">About Me</span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* SWE */}
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={
                navigationMenuTriggerStyle() +
                ' !bg-transparent hover:!bg-transparent'
              }
            >
              <Link href="#">
                <span className="text-white font-bold">SWE</span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Resume */}
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={
                navigationMenuTriggerStyle() +
                ' !bg-transparent hover:!bg-transparent'
              }
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
              className={
                navigationMenuTriggerStyle() +
                ' !bg-transparent hover:!bg-transparent'
              }
            >
              <Link href="#">
                <span className="text-white font-bold">Contact</span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
