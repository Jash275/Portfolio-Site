"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  HiBeaker,
  HiBookmarkAlt,
  HiOutlineX,
  HiUser,
} from "react-icons/hi";
import Logo from "../shared/Logo";

export default function MobileMenu() {
  const [navShow, setNavShow] = useState(false);
  const pathname = usePathname();
  const data = [
    {
      title: "About",
      href: "/",
      icon: HiUser,
    },
    {
      title: "Projects",
      href: "/projects",
      icon: HiBeaker,
    },
    {
      title: "Skills",
      href: "/skills",
      icon: HiBookmarkAlt,
    },
    {
      title: "Resume",
      href: "/resume",
      icon: HiBookmarkAlt,
    },
  ];

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };

  return (
    <>
      <button
        aria-label="Toggle Menu"
        aria-expanded={navShow}
        type="button"
        onClick={onToggleNav}
        className="mobile-menu-toggle md:hidden min-h-11 min-w-11 grid place-items-center dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-md p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-color"
      >
        <RxHamburgerMenu className="text-xl" />
      </button>
      <div
        aria-hidden={!navShow}
        className={`mobile-menu-panel md:hidden fixed left-0 top-0 z-10 h-[100dvh] w-full transform dark:bg-zinc-900 bg-white ${
          navShow ? "mobile-menu-open" : "mobile-menu-closed"
        }`}
      >
        <div className="flex items-center justify-between mt-6 px-8">
          <Link href="/" onClick={onToggleNav}>
            <Logo className="h-[35px] w-[35px] text-primary-color" />
          </Link>

          <button
            aria-label="Toggle Menu"
            aria-expanded={navShow}
            type="button"
            onClick={onToggleNav}
            className="mobile-menu-toggle md:hidden dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-full p-2"
          >
            <HiOutlineX className="text-xl" />
          </button>
        </div>
        <nav className="flex flex-col mt-6">
          {data.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              aria-current={pathname === link.href || (link.href !== "/" && pathname.startsWith(`${link.href}/`)) ? "page" : undefined}
              className="mobile-nav-link min-h-11 flex items-center gap-x-2 font-incognito font-semibold text-lg dark:shadow-line-dark shadow-line-light p-6 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-color"
              onClick={onToggleNav}
            >
              <link.icon
                className="text-zinc-500 group-hover:dark:text-white group-hover:text-zinc-800 duration-300"
                aria-hidden="true"
              />
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
