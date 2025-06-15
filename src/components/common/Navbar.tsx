'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      {/* ✅ Logo kiri */}
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/images/logo.jpg" // Gambar logo di public/images/logo.jpg
          alt="Logo"
          width={40}
          height={40}
          className="h-10 w-10 object-contain rounded"
        />
        <span className="text-xl font-bold text-blue-600">ABC Digital</span>
      </Link>

      {/* ✅ Menu kanan */}
      <div className="space-x-4">
        <Link href="/about" className="hover:text-blue-600">About</Link>
        <Link href="/services" className="hover:text-blue-600">Services</Link>
        <Link href="/teams" className="hover:text-blue-600">Teams</Link>
        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
        <Link href="/create-blog" className="hover:text-blue-600">Create Blog</Link>
        <Link href="/login" className="hover:text-red-600 text-red-500">Logout</Link>
      </div>
    </nav>
  );
}

//testing