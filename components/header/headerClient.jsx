"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import {
  LayoutDashboard,
  BadgeIndianRupee,
  PenBox,
  ChevronDown,
  Sparkle,
  Crown,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import logo3 from "@/public/images/logo5.png";
import { useUserData} from "@/reduxStore/hook/useUserData";
import useRefreshUser from "@/reduxStore/hook/useRefreshUser";


export default function HeaderClient() {
  const refreshUser = useRefreshUser();
  // Use the custom hook to get user data
  const { name, email, isPro, accounts, loading, error, isAuthenticated } =
    useUserData();

  useEffect(() => {
    if (isAuthenticated)
    refreshUser(); // Refresh user data on component mount
  }, [accounts]);

  // 🔍 DEBUGGING: Log all the data from useUserData hook
  console.log("🏠 HeaderClient - useUserData hook results:");
  console.log("  📝 name:", name);
  console.log("  📧 email:", email);
  console.log("  👑 isPro:", isPro);
  console.log("  🏪 accounts:", accounts);
  console.log("  📊 accounts type:", typeof accounts);
  console.log("  📊 accounts is array:", Array.isArray(accounts));
  console.log("  📊 accounts length:", accounts?.length);
  console.log("  ⏳ loading:", loading);
  console.log("  ❌ error:", error);
  console.log("  🔐 isAuthenticated:", isAuthenticated);

  // 🔍 DEBUGGING: Log when accounts change
  useEffect(() => {
    console.log("🔄 HeaderClient - accounts changed:", accounts);
    if (accounts) {
      console.log("  📊 New accounts count:", accounts.length);
      console.log(
        "  📋 Account details:",
        accounts.map((acc) => ({
          id: acc.id,
          name: acc.name,
          type: typeof acc,
        }))
      );
    }
  }, [accounts]);

  // 🔍 DEBUGGING: Log loading state changes
  useEffect(() => {
    console.log("⏳ HeaderClient - loading state changed:", loading);
  }, [loading]);

  // 🔍 DEBUGGING: Log error state changes
  useEffect(() => {
    if (error) {
      console.error("❌ HeaderClient - error detected:", error);
    }
  }, [error]);

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileAccountsOpen, setMobileAccountsOpen] = useState(false);
  const hideTimeoutRef = useRef(null);

  const handleMouseEnter = () => {
    console.log("🖱️ HeaderClient - Mouse entered dropdown");
    clearTimeout(hideTimeoutRef.current);
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    console.log("🖱️ HeaderClient - Mouse left dropdown");
    hideTimeoutRef.current = setTimeout(() => {
      setDropdownVisible(false);
    }, 150);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarOpen && !event.target.closest(".sidebar-container")) {
        setSidebarOpen(false);
        setMobileAccountsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [sidebarOpen]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [sidebarOpen]);

  // 🔍 DEBUGGING: Log dropdown visibility and account rendering
  const renderAccountDropdown = () => {
    console.log("🎨 HeaderClient - Rendering account dropdown");
    console.log("  ⏳ loading:", loading);
    console.log("  🏪 accounts:", accounts);
    console.log("  📊 accounts length:", accounts?.length);

    if (loading) {
      console.log("  ➡️ Showing loading state");
      return <div className="px-4 py-2 text-sm text-gray-500">Loading...</div>;
    }

    if (accounts && accounts.length > 0) {
      console.log("  ➡️ Showing accounts list");
      return accounts.map((account) => {
        console.log("  🏦 Rendering account:", account);
        return (
          <Link
            key={account.id}
            href={`/account/${account.id}`}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
          >
            {account.name}
          </Link>
        );
      });
    }

    console.log("  ➡️ Showing no accounts message");
    return <div className="px-4 py-2 text-sm text-gray-500">No accounts</div>;
  };

  // Render mobile account list
  const renderMobileAccountList = () => {
    if (loading) {
      return <div className="px-4 py-2 text-sm text-gray-500">Loading...</div>;
    }

    if (accounts && accounts.length > 0) {
      return accounts.map((account) => (
        <Link
          key={account.id}
          href={`/account/${account.id}`}
          className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition border-l-4 border-transparent hover:border-blue-500"
          onClick={() => {
            setSidebarOpen(false);
            setMobileAccountsOpen(false);
          }}
        >
          {account.name}
        </Link>
      ));
    }

    return <div className="px-6 py-3 text-sm text-gray-500">No accounts</div>;
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full ${isPro ? "bg-gradient-to-r from-blue-100/90 to-purple-200/50 border-blue-200/50" : "bg-gradient-to-r from-green-100/90 to-white-50/90 border-blue-200/50"} backdrop-blur-md z-50 border-b transition-all duration-500`}
      >
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src={logo3}
              alt="Logo"
              width={100}
              height={1000}
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* Links for signed out users - Desktop only */}
          <div className="hidden md:flex items-center space-x-8">
            <SignedOut>
              <a href="#features" className="text-gray-600 hover:text-blue-600">
                <span>Features</span>
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-blue-600"
              >
                Testimonials
              </a>
            </SignedOut>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 relative">
            <SignedIn>
              {/* Dashboard Button */}
              <Link href="/dashboard">
                <Button
                  variant="outline"
                  className="flex items-center gap-2 shadow-md"
                >
                  <LayoutDashboard size={18} />
                  <span className="hidden md:inline">Dashboard</span>
                </Button>
              </Link>

              {/* Transactions Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Button
                  variant="outline"
                  className="flex items-center gap-2 shadow-md"
                >
                  <BadgeIndianRupee
                    size={18}
                    className="text-blue-500 animate-pulse"
                  />
                  <span className="hidden md:inline text-blue-500 font-semibold">
                    Accounts
                  </span>
                  <ChevronDown className="w-4 h-4 text-blue-500" />
                </Button>

                {dropdownVisible && (
                  <div className="absolute top-full left-0 mt-2 w-52 bg-white border rounded shadow-lg z-50">
                    {renderAccountDropdown()}
                  </div>
                )}
              </div>

              {/* Add Transaction Button - Same styling for all users */}
              <Link href="/transaction/create">
                <Button
      
                  className="relative flex items-center gap-2 shadow-md overflow-hidden bg-black text-white border-white hover:bg-gray-800 hover:text-white"
                >
                  <PenBox size={18} className="z-10" />
                  <span className="hidden md:inline z-10">Add Transaction</span>
                  {/* Shimmer border animation */}
                  <span className="absolute inset-0 rounded-md border-2 border-transparent bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer-border pointer-events-none" />
                </Button>
              </Link>

              {/* Upgrade Pro Button - Only show for non-pro users */}
              {!isPro && (
                <Link href="/upgradePro">
                  <Button
                    variant="outline"
                    className="relative flex items-center gap-2 overflow-hidden bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white shadow-md border-none"
                  >
                    <Sparkle size={18} className="z-10" />
                    <span className="hidden md:inline z-10">Upgrade Pro</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 animate-shimmer pointer-events-none" />
                  </Button>
                </Link>
              )}

              {/* Pro Member Status and User Avatar Container */}
              <div className="flex items-center gap-1">
                {/* Pro Member Status - Show for pro users */}
                {isPro && (
                  <div className="hidden md:flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-full border border-yellow-400/30">
                    <Crown size={12} className="text-yellow-600" />
                    <span className="text-yellow-700 font-semibold text-xs">
                      Pro Member
                    </span>
                  </div>
                )}

                {/* User Avatar with Pro Ring */}
                <div className="relative">
                  <div className="rounded-full transition-all duration-300">
                    <UserButton
                      appearance={{
                        elements: { avatarBox: "w-10 h-10 rounded-full" },
                      }}
                    />
                  </div>
                  {isPro && (
                    <div className="absolute -top-1 -right-2 w-4 h-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-md">
                      <Crown size={8} className="text-white" />
                    </div>
                  )}
                </div>
              </div>
            </SignedIn>

            {/* Login Button */}
            <SignedOut>
              <SignInButton forceRedirectUrl="/dashboard">
                <Button variant="outline" className="hover:bg-teal-400/50 transition duration-300">Login</Button>
              </SignInButton>
            </SignedOut>
          </div>

          {/* Mobile Menu Button & User Avatar */}
          <div className="md:hidden flex items-center gap-3">
            <SignedIn>
              {/* Mobile User Avatar */}
              <div className="relative">
                <div className="rounded-full transition-all duration-300">
                  <UserButton
                    appearance={{
                      elements: { avatarBox: "w-8 h-8 rounded-full" },
                    }}
                  />
                </div>
                {isPro && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-md">
                    <Crown size={6} className="text-white" />
                  </div>
                )}
              </div>
            </SignedIn>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSidebarOpen(true)}
              className="p-2"
            >
              <Menu size={20} />
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden">
          <div className="fixed inset-y-0 right-0 w-80 max-w-[85vw] bg-white shadow-xl sidebar-container">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-3">
                <Image
                  src={logo3}
                  alt="Logo"
                  width={80}
                  height={80}
                  className="h-10 w-auto object-contain"
                />
                {isPro && (
                  <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-full border border-yellow-400/30">
                    <Crown size={10} className="text-yellow-600" />
                    <span className="text-yellow-700 font-semibold text-xs">
                      Pro
                    </span>
                  </div>
                )}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(false)}
                className="p-2"
              >
                <X size={20} />
              </Button>
            </div>

            {/* Sidebar Content */}
            <div className="flex-1 overflow-y-auto">
              <SignedIn>
                <div className="py-4 space-y-2">
                  {/* Dashboard Link */}
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition border-l-4 border-transparent hover:border-blue-500"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <LayoutDashboard size={20} />
                    <span>Dashboard</span>
                  </Link>

                  {/* Transactions Section */}
                  <div>
                    <button
                      className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition border-l-4 border-transparent hover:border-blue-500"
                      onClick={() => setMobileAccountsOpen(!mobileAccountsOpen)}
                    >
                      <div className="flex items-center gap-3">
                        <BadgeIndianRupee size={20} className="text-blue-500" />
                        <span>Accounts</span>
                      </div>
                      <ChevronRight
                        size={16}
                        className={`transform transition-transform ${mobileAccountsOpen ? "rotate-90" : ""}`}
                      />
                    </button>

                    {/* Account Submenu */}
                    {mobileAccountsOpen && (
                      <div className="bg-gray-50 border-l-4 border-blue-200">
                        {renderMobileAccountList()}
                      </div>
                    )}
                  </div>

                  {/* Add Transaction Link */}
                  <Link
                    href="/transaction/create"
                    className="flex items-center gap-3 px-4 py-3 text-white bg-black hover:bg-gray-800 transition mx-4 rounded-lg"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <PenBox size={20} />
                    <span>Add Transaction</span>
                  </Link>

                  {/* Upgrade Pro Link - Only for non-pro users */}
                  {!isPro && (
                    <Link
                      href="/upgradePro"
                      className="flex items-center gap-3 px-4 py-3 text-white bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 transition mx-4 rounded-lg"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <Sparkle size={20} />
                      <span>Upgrade Pro</span>
                    </Link>
                  )}
                </div>
              </SignedIn>

              <SignedOut>
                <div className="py-4 space-y-2">
                  {/* Features Link */}
                  <a
                    href="#features"
                    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition border-l-4 border-transparent hover:border-blue-500"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span>Features</span>
                  </a>

                  {/* Testimonials Link */}
                  <a
                    href="#testimonials"
                    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition border-l-4 border-transparent hover:border-blue-500"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span>Testimonials</span>
                  </a>

                  {/* Login Button */}
                  <div className="px-4 py-3">
                    <SignInButton forceRedirectUrl="/dashboard">
                      <Button className="w-full">Login</Button>
                    </SignInButton>
                  </div>
                </div>
              </SignedOut>
            </div>
          </div>
        </div>
      )}
    </>
  );
}