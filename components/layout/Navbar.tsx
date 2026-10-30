"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Theme from "./Theme";
import MobileMenu from "./MobileMenu";
import Logo from "../shared/Logo";

export default function Navbar() {
  const pathname = usePathname();
  const data = [
    {
      title: "About",
      href: "/",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Skills",
      href: "/skills",
    },
    {
      title: "Resume",
      href: "/resume",
    },
  ];

  return (
      <header className="site-header text-sm py-6 md:px-16 px-6 border-b dark:border-zinc-800 border-zinc-200 z-30 md:mb-28 mb-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/">
            <Logo className="h-[35px] w-[35px] text-primary-color" />
          </Link>

          <nav className="md:block hidden">
            <ul className="flex items-center gap-x-8">
              {data.map((link, id) => (
                <li key={id}>
                  <Link
                    href={link.href}
                    aria-current={pathname === link.href || (link.href !== "/" && pathname.startsWith(`${link.href}/`)) ? "page" : undefined}
                    className={`light-active-nav min-h-11 flex items-center font-incognito dark:text-white text-zinc-600 dark:hover:text-primary-color hover:text-zinc-900 duration-300 text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-color`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-x-4">
            <Theme />
            <MobileMenu />
          </div>
        </div>
      </header>
  );
}
