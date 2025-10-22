// components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 p-4 text-white">
      <nav className="container mx-auto flex justify-between">
        <Link href="/" className="text-xl font-bold hover:text-blue-400">
          Kişisel Sitem
        </Link>
        <div className="space-x-4">
          <Link href="/blog" className="hover:text-blue-400">
            Blog
          </Link>
          <Link href="/iletisim" className="hover:text-blue-400">
            İletişim
          </Link>
        </div>
      </nav>
    </header>
  );
}