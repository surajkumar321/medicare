"use client";

import React, { useState, useMemo, useEffect } from "react";
import { NavLink, useParams, useLocation, useNavigate } from "react-router-dom";
import { Home, Calendar, Edit, Menu, X, LogOut } from "lucide-react";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Detect scroll for shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const doctorId = useMemo(() => {
    if (params?.id) return params.id;
    const m = location.pathname.match(/\/doctor-admin\/([^/]+)/);
    if (m) return m[1];
    return null;
  }, [params, location.pathname]);

  const basePath = doctorId
    ? `/doctor-admin/${doctorId}`
    : "/doctor-admin/login";

  const navItems = [
    { name: "Dashboard", to: `${basePath}`, Icon: Home },
    { name: "Appointments", to: `${basePath}/appointments`, Icon: Calendar },
    { name: "Edit Profile", to: `${basePath}/profile/edit`, Icon: Edit },
  ];

  const handleLogout = () => {
    // TODO: clear auth token
    navigate("/doctor-admin/login");
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          bg-white/80 backdrop-blur-xl
          border-b border-emerald-100
          transition-all duration-300
          ${scrolled ? "shadow-lg" : ""}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-6 h-20 flex items-center justify-between">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo"
              className="w-12 h-12 object-contain"
            />
            <div>
              <div className="text-xl font-bold text-emerald-700 tracking-wide">
                MediCare
              </div>
              <div className="text-xs text-gray-500">
                Doctor Dashboard
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map(({ name, to, Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === basePath}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-emerald-600 text-white shadow-md"
                      : "text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                  }`
                }
              >
                <Icon size={16} />
                {name}
              </NavLink>
            ))}

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-red-500 text-white hover:bg-red-600 transition"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen((s) => !s)}
            className="lg:hidden p-2 rounded-md hover:bg-emerald-50 transition"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`
          fixed top-20 left-0 right-0 z-40
          bg-white shadow-lg
          transform transition-transform duration-300 lg:hidden
          ${open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"}
        `}
      >
        <div className="flex flex-col p-4 space-y-3">
          {navItems.map(({ name, to, Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === basePath}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition ${
                  isActive
                    ? "bg-emerald-600 text-white"
                    : "text-gray-700 hover:bg-emerald-50"
                }`
              }
            >
              <Icon size={18} />
              {name}
            </NavLink>
          ))}

          <button
            onClick={() => {
              setOpen(false);
              handleLogout();
            }}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm bg-red-500 text-white hover:bg-red-600 transition"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
}