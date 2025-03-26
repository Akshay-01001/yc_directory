"use client";

import React from "react";
import Link from "next/link";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <img src="/logo.png" alt="logo" width={144} height={30} />
        </Link>

        <div className="flex items-center gap-5 text-black">
          <SignedIn>
            <Link href="/startup/create">
              <span className="hover:bg-black hover:text-white px-2 py-1 rounded-full">
                Create
              </span>
            </Link>

            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button>
                <span>Login</span>
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
