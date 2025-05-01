
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t bg-secondary text-secondary-foreground py-6">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-center md:text-left mb-4 md:mb-0">
          © {currentYear} HR Cloud Hub. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="#" aria-label="Facebook">
            <Facebook className="h-5 w-5 transition-colors hover:text-primary" />
          </Link>
          <Link href="#" aria-label="Twitter">
            <Twitter className="h-5 w-5 transition-colors hover:text-primary" />
          </Link>
          <Link href="#" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 transition-colors hover:text-primary" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
