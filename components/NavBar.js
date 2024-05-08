"use client"

import React from "react";
import {
    Bars3Icon,
  } from '@heroicons/react/24/outline'
import styles  from "./Navbar.module.css";

const NavBar = () => {
  return (
    <nav className="mx-auto flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span>RC.</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">

          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            About
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Work Experience
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Projects
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Blog
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Contact
          </a>
        </div>
      </nav>
  );
};

export default NavBar;
