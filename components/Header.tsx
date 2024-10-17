"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/80 backdrop-blur-sm shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-primary/20 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <span className="sr-only">EKLIPSE SNEAKERS</span>
              <svg className="h-10 w-auto text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              <Link href="/men" className="text-base font-medium text-white hover:text-primary">
                Men
              </Link>
              <Link href="/women" className="text-base font-medium text-white hover:text-primary">
                Women
              </Link>
              <Link href="/kids" className="text-base font-medium text-white hover:text-primary">
                Kids
              </Link>
              <Link href="/sale" className="text-base font-medium text-white hover:text-primary">
                Sale
              </Link>
            </div>
          </div>
          <div className="ml-10 space-x-4 flex items-center">
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                <ShoppingCart className="h-6 w-6" />
                <span className="sr-only">Cart</span>
              </Button>
            </Link>
            <Button className="hidden lg:inline-block bg-primary hover:bg-primary/90">Sign In</Button>
            <Button variant="outline" className="hidden lg:inline-block text-white border-white hover:bg-white/10">
              Create Account
            </Button>
            <div className="lg:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="py-4 flex flex-col space-y-4 lg:hidden">
            <Link href="/men" className="text-base font-medium text-white hover:text-primary">
              Men
            </Link>
            <Link href="/women" className="text-base font-medium text-white hover:text-primary">
              Women
            </Link>
            <Link href="/kids" className="text-base font-medium text-white hover:text-primary">
              Kids
            </Link>
            <Link href="/sale" className="text-base font-medium text-white hover:text-primary">
              Sale
            </Link>
            <Button className="w-full bg-primary hover:bg-primary/90">Sign In</Button>
            <Button variant="outline" className="w-full text-white border-white hover:bg-white/10">
              Create Account
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;