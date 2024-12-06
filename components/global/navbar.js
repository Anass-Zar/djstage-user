"use client";

import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Search,
  ShoppingCart,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Logo from "@/images/Logo.jpeg";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/hooks";

export const Navbar = ({ types, error }) => {
  const [isOpen, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  console.log(types);
  
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);
  const handleSearch = () => {
    if (searchTerm.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
        setDropdownOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow w-full">
      {/* Logo and Search */}
      <div
        className={`container mx-auto flex items-center justify-between px-4 max-w-7xl transition-all duration-300 ${
          scrolled ? "py-2" : "py-2"
        }`}
      >
        <Link href="/" className="flex-shrink-0">
          <Image
            src={Logo}
            alt="Logo"
            width={120}
            height={80}
            className={`transition-all duration-300 ${
              scrolled
                ? "w-[3.5rem] md:w-[4.5rem]"
                : "w-[3.5rem] md:w-[4.5rem]"
            }`}
          />
        </Link>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center w-full mr-14">
          <div className="flex items-center w-full border bg-gray-100 rounded-full shadow-sm px-4 max-w-2xl mx-auto">
            <Search
              className={`text-gray-600 ${scrolled ? "w-5 h-5" : "w-6 h-6"}`}
              onClick={handleSearch}
            />
            <input
              type="text"
              placeholder="Search for products..."
              className={`w-full bg-transparent outline-none text-gray-600 px-4 ${scrolled ? "py-2" : "py-2.5"}`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleSearch();
                }
              }}
            />
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-5">
          <Link href="/cart" className="text-gray-700 relative">
            <ShoppingCart className="w-6 h-6" />
            {totalQuantity > 0 && (
              <span className="absolute -top-4 -right-3 bg-red-500 text-white rounded-full px-1.5 py-0.5 text-xs">
                {totalQuantity}
              </span>
            )}
          </Link>
          <button
            aria-label="Toggle Menu"
            className="lg:hidden"
            onClick={() => setOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden lg:flex bg-black">
        <div className="container mx-auto flex justify-center space-x-6 text-white text-sm">
          <Link
            href="/"
            className={`font-semibold hover:text-yellow-500 px-3 transition-all duration-300 ${
              scrolled ? "py-3" : "py-4"
            }`}
          >
            Home
          </Link>

          {types.map((type) => (
            <Link
              key={type.title}
              href={`/categories/${type.id}`}
              className={`font-semibold hover:text-yellow-500 px-3 transition-all duration-300 ${
                scrolled ? "py-3" : "py-4"
              }`}
            >
              {type.title}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Menu */}
      <Sheet open={isOpen} onOpenChange={setOpen}>
        <SheetContent className="w-80 bg-white shadow-lg rounded-r-lg">
          <SheetHeader className="border-b border-gray-200 pb-4">
            <SheetTitle className="text-xl font-semibold text-gray-900">Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col space-y-4 mt-6">
            {/* Home Link */}
            <Link
              href="/"
              className="text-gray-800 hover:text-yellow-500 transition-colors duration-300"
            >
              Home
            </Link>

            {/* Navigation Items */}
            {types.map((type) => (
            <Link
              key={type.title}
              href={`/categories/${type.id}`}
              className="text-gray-800 hover:text-yellow-500 transition-colors duration-300"
              >
                {type.title}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>

    </header>
  );
};