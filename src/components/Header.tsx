import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <header className="header flex items-center justify-between px-6 py-4 bg-white shadow">
      <Image
        className="dark:invert"
        src="/Group 721.svg"
        alt="Next.js logo"
        width={80}
        height={80}
        priority
      />
      <nav className="header_navigation flex items-center space-x-6">
        <Link href="#" className="text-gray-700 hover:text-gray-900">
          WHAT WE DO
        </Link>
        <Link href="#" className="text-gray-700 hover:text-gray-900">
          HOW WE DO IT
        </Link>
        <Link href="#" className="text-gray-700 hover:text-gray-900">
          Why Monolith?
        </Link>
        <Link href="#" className="text-gray-700 hover:text-gray-900">
          Product Categories
        </Link>
        <Link href="#" className="text-gray-700 hover:text-gray-900">
          ABOUT
        </Link>
        <Link href="#" className="text-gray-700 hover:text-gray-900">
          TALENT
        </Link>
        <button className="relative w-[220px] h-[41px] bg-[#EAEAEA] text-[#2F323C] text-[18px] font-bold leading-[16px] text-center uppercase tracking-[-0.02em]">
          GET IN TOUCH
        </button>
      </nav>
    </header>
  );
};
export default Header;
