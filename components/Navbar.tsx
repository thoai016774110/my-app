"use client"; 
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-4 p-2 bg-gray-200 rounded">
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
    </nav>
  );
}
