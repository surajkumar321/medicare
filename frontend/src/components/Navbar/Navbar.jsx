"use client";

import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Menu, X, User as UserIcon, Key } from "lucide-react";
import { SignedIn, SignedOut, useClerk, UserButton } from "@clerk/clerk-react";
import { navbarStyles } from "../../assets/dummyStyles";

const STORAGE_KEY = "doctorToken_v1";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDoctorLoggedIn, setIsDoctorLoggedIn] = useState(() => {
    try {
      return Boolean(localStorage.getItem(STORAGE_KEY));
    } catch {
      return false;
    }
  });

  const location = useLocation();
  const navRef = useRef(null);
  const clerk = useClerk();
  const navigate = useNavigate();

  /* Only shadow on scroll */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function doctorLogout() {
    localStorage.removeItem(STORAGE_KEY);
    setIsDoctorLoggedIn(false);
    navigate("/");
  }

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Doctors", href: "/doctors" },
    { label: "Services", href: "/services" },
    { label: "Appointments", href: "/appointments" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav
      ref={navRef}
     className={`
  fixed top-0 left-0 right-0 z-50
  bg-white/95 backdrop-blur-md
  border-b border-emerald-100
  transition-all duration-300
  ${scrolled ? "shadow-lg" : ""}
`}
    >
      <div className={navbarStyles.contentWrapper}>
        <div className={navbarStyles.flexContainer}>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
            <div>
              <h1 className="text-2xl font-bold text-emerald-700">
                MediCare
              </h1>
              <p className="text-xs text-gray-500">
                Healthcare Solutions
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex gap-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`relative font-medium transition ${
                    isActive
                      ? "text-emerald-700"
                      : "text-gray-700 hover:text-emerald-600"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <SignedOut>
              <Link
                to="/doctor-admin/login"
                className="border border-emerald-600 text-emerald-700 px-4 py-2 rounded-full text-sm"
              >
                <UserIcon size={16} className="inline mr-1" />
                Doctor Admin
              </Link>

              <button
                onClick={() => clerk.openSignIn()}
                className="bg-emerald-600 text-white px-5 py-2 rounded-full text-sm"
              >
                <Key size={16} className="inline mr-1" />
                Login
              </button>
            </SignedOut>

            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>

            {isDoctorLoggedIn && (
              <button
                onClick={doctorLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-full text-sm"
              >
                Doctor Logout
              </button>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden p-4 space-y-3 bg-white border-t">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}