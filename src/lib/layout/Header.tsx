import Link from 'next/link';

import { ThemeToggle } from '@/lib/components/theme-toggle';

const Header = () => {
  return (
    <header className="bg-base-100/80 sticky top-0 z-10 w-full backdrop-blur-md">
      <section className="wrapper mx-auto flex items-center justify-between py-2">
        <div className="flex items-center">
          <Link href="/" className="mr-4">
            Home
          </Link>
          <Link href="/about" className="mr-4">
            About
          </Link>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </section>
    </header>
  );
};

export default Header;
