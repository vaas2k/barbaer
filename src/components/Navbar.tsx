import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-black shadow-md sticky top-0 z-50 py-[40px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="hidden md:flex space-x-8">
          <Link href={'/'} className="text-gray-300 hover:text-gray-50 font-medium transition-colors text-[22px]">
            Home
          </Link>
        </div>

        <div className="hidden md:flex space-x-8">
          <Link href={'#contact'} className="text-gray-300 hover:text-gray-50 font-medium transition-colors text-[22px]">
            Contact
          </Link>
        </div>
        <div className="flex items-center py-[40px]">
          <Link href="/" className="text-2xl font-bold tracking-tight text-gray-300 hover:text-gray-50">
            The Gentleman&apos;s Lab
          </Link>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link href={'/products'} className="text-gray-300 hover:text-gray-50 font-medium transition-colors text-[22px]">
            Products
          </Link>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link href={'/account'} className="text-gray-300 hover:text-gray-50 font-medium transition-colors text-[22px]">
            My Account
          </Link>
        </div>

        {/* Mobile menu button (optional for later) */}
      </div>
    </nav>
  );
} 