
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Briefcase, Home, Info, Mail, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/services", label: "Services", icon: Briefcase },
  { href: "/about", label: "About", icon: Info },
  { href: "/contact", label: "Contact", icon: Mail },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderNavLinks = (isMobile = false) =>
    navItems.map((item) => {
      const isActive = pathname === item.href;
      const LinkComponent = isMobile ? SheetClose : Link;
      return (
        <LinkComponent
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150 ease-in-out",
            isActive
              ? "bg-primary text-primary-foreground"
              : "text-foreground hover:bg-muted hover:text-foreground",
            isMobile && "text-lg py-3"
          )}
          onClick={() => isMobile && setIsMobileMenuOpen(false)}
        >
          <item.icon className="h-5 w-5" />
          {item.label}
        </LinkComponent>
      );
    });

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Briefcase className="h-6 w-6 text-primary" />
          <span>HR Cloud </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          {renderNavLinks()}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                 <div className="flex justify-between items-center p-4 border-b">
                    <Link href="/" className="flex items-center gap-2 font-bold text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                      <Briefcase className="h-6 w-6 text-primary" />
                      <span>HR Cloud Hub</span>
                    </Link>
                    <SheetClose asChild>
                         <Button variant="ghost" size="icon">
                            <X className="h-6 w-6" />
                            <span className="sr-only">Close Menu</span>
                        </Button>
                    </SheetClose>
                </div>
                <nav className="flex flex-col gap-4 p-4 mt-4">
                  {renderNavLinks(true)}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
