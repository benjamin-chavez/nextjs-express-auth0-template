// client/src/components/navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useUser } from '@auth0/nextjs-auth0/client';

const navItems = {
  nextLinks: [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Public',
      href: '/public',
    },
    {
      name: 'Private',
      href: '/private',
    },
  ],
  anchorLinks: {
    loginItem: {
      name: 'Login',
      href: '/api/auth/login',
    },
    logoutItem: {
      name: 'Logout',
      href: '/api/auth/logout',
    },
  },
};

export default function Navbar() {
  let pathname = usePathname();
  const { user, isLoading } = useUser();

  let authNavItem = navItems.anchorLinks.loginItem;

  if (!isLoading && user) {
    authNavItem = navItems.anchorLinks.logoutItem;
  }

  return (
    <>
      <nav className="bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
          <div className="w-full md:block md:w-auto" id="navbar-default">
            <div className="flex gap-8  items-center justify-center flex-row">
              {navItems.nextLinks.map((item) => {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={
                      item.href === pathname
                        ? 'block rounded md:p-0 hover:opacity-70 text-pink-500'
                        : 'block rounded md:p-0 hover:opacity-70 text-white'
                    }
                  >
                    {item.name}
                  </Link>
                );
              })}
              <a
                key={authNavItem.href}
                href={authNavItem.href}
                className="block rounded hover:opacity-70 text-white bg-pink-800/50 px-2 py-1"
              >
                {authNavItem.name}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
