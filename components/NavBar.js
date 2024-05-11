"use client";

import React, { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  // EnvelopeIcon
} from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import Link from "next/link";

const NavBar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [pathname]);

  return (
    <nav
      className="mx-auto flex items-center justify-between p-4 lg:px-8 fixed z-10 top-0 w-full"
      aria-label="Global"
    >
      <div className="flex">
        <Link href="/" className="-m-1.5 p-1.5">
          <span className="text-3xl font-bold">RC.</span>
        </Link>
      </div>
      <div className="flex xl:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="hidden xl:flex xl:flex-1 pl-20 justify-between">
        <div className="flex lg:gap-x-12">
          <Link
            href="/about"
            className={`${styles.nav_item} ${
              pathname === "/about" ? styles.active : ""
            } text-base font-semibold leading-6 uppercase tracking-wider`}
          >
            About
          </Link>
          <Link
            href="/experience"
            className={`${styles.nav_item} ${
              pathname === "/experience" ? styles.active : ""
            } text-base font-semibold leading-6 uppercase tracking-wider`}
          >
            Work Experience
          </Link>
          <Link
            href="/projects"
            className={`${styles.nav_item} ${
              pathname === "/projects" ? styles.active : ""
            } text-base font-semibold leading-6 uppercase tracking-wider`}
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className={`${styles.nav_item} ${
              pathname === "/blog" ? styles.active : ""
            } text-base font-semibold leading-6 uppercase tracking-wider`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`${styles.nav_item} ${
              pathname === "/contact" ? styles.active : ""
            } text-base font-semibold leading-6 uppercase tracking-wider`}
          >
            Contact
          </Link>
        </div>
        <div className="flex lg:gap-x-12">
          <Link
            href="mailto:christie.reni@gmail.com"
            className={`${styles.link_icon}`}
          >
            <EnvelopeIcon className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/renishachristie/"
            className={`${styles.link_icon}`}
          >
            <LinkedInIcon className="h-4 w-4 social-icon" />
          </Link>
          <Link
            href="https://github.com/crisner"
            className={`${styles.link_icon}`}
          >
            <GithubIcon className="h-4 w-4 social-icon" />
          </Link>
          <Link
            href="https://twitter.com/crisner86"
            className={`${styles.link_icon}`}
          >
            <TwitterIcon className="h-4 w-4 social-icon" />
          </Link>
        </div>
      </div>
      <Dialog
        className="xl:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel
          className={`${styles.nav_sm} fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-3xl font-bold">RC.</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon
                className="icon-color-light h-6 w-6"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/about"
                  className={`${styles.nav_item_sm} ${
                    pathname === "/about" ? styles.active_sm : ""
                  } -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 uppercase tracking-wider`}
                >
                  About
                </Link>
                <Link
                  href="/experience"
                  className={`${styles.nav_item_sm} ${
                    pathname === "/experience" ? styles.active_sm : ""
                  } -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 uppercase tracking-wider`}
                >
                  Work Experience
                </Link>
                <Link
                  href="/projects"
                  className={`${styles.nav_item_sm} ${
                    pathname === "/projects" ? styles.active_sm : ""
                  } -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 uppercase tracking-wider`}
                >
                  Projects
                </Link>
                <Link
                  href="/blog"
                  className={`${styles.nav_item_sm} ${
                    pathname === "/blog" ? styles.active_sm : ""
                  } -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 uppercase tracking-wider`}
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className={`${styles.nav_item_sm} ${
                    pathname === "/contact" ? styles.active_sm : ""
                  } -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 uppercase tracking-wider`}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </nav>
  );
};

export default NavBar;
