'use client'
import { useState, useEffect } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { useSelector } from "react-redux"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar() {
  const { loading } = useSelector((state: any) => state.PortfolioData);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) return null;

  return (
    <TooltipProvider>
      <nav className={cn(
        "fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[96%] sm:w-auto max-w-[96vw]",
        scrolled ? "bg-background/80" : "bg-background/50"
      )}>
        <div className="flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 rounded-full border border-border/40 backdrop-blur-xl shadow-lg overflow-x-auto scrollbar-hide">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <div className="size-7 sm:size-8 md:size-9 lg:size-10 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-xs sm:text-sm hover:scale-110 transition-transform">
              Z
            </div>
          </Link>

          {/* Divider */}
          <div className="h-5 sm:h-6 w-px bg-border/40 flex-shrink-0" />

          {/* Navigation Items */}
          {DATA.navbar.map((item) => (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className="size-7 sm:size-8 md:size-9 lg:size-10 rounded-full flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200 flex-shrink-0"
                >
                  <item.icon className="size-3.5 sm:size-4 md:size-4.5 lg:size-5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs sm:text-sm">{item.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}

          {/* Divider */}
          <div className="h-5 sm:h-6 w-px bg-border/40 flex-shrink-0" />

          {/* Social Links - Now visible on all screens */}
          {Object.entries(DATA.contact.social)
            .filter(([_, social]) => social.navbar)
            .map(([name, social]) => (
              <Tooltip key={name}>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-7 sm:size-8 md:size-9 lg:size-10 rounded-full flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200 flex-shrink-0"
                  >
                    <social.icon className="size-3.5 sm:size-4 md:size-4.5 lg:size-5" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs sm:text-sm">{name}</p>
                </TooltipContent>
              </Tooltip>
            ))}

          {/* Divider */}
          <div className="h-5 sm:h-6 w-px bg-border/40 flex-shrink-0" />

          {/* Theme Toggle */}
          <div className="flex items-center flex-shrink-0">
            <ModeToggle />
          </div>
        </div>
      </nav>
    </TooltipProvider>
  );
}
