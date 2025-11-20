'use client';

import Link from 'next/link';
import WalletConnect from './WalletConnect';

export default function Header() {
  return (
    <header className="backdrop-blur-lg bg-white/95 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-10">
            <Link href="/" className="text-2xl font-bold font-[family-name:var(--font-poppins)]">
              <span className="gradient-text">출석 NFT</span>
            </Link>
            <nav className="hidden md:flex gap-8">
              <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-[#0d47a1] dark:hover:text-[#42a5f5] transition-colors font-medium">
                홈
              </Link>
              <Link href="/my-attendance" className="text-gray-600 dark:text-gray-300 hover:text-[#0d47a1] dark:hover:text-[#42a5f5] transition-colors font-medium">
                내 출석 기록
              </Link>
              <Link href="/admin" className="text-gray-600 dark:text-gray-300 hover:text-[#0d47a1] dark:hover:text-[#42a5f5] transition-colors font-medium">
                관리자
              </Link>
              <Link href="/help" className="text-gray-600 dark:text-gray-300 hover:text-[#0d47a1] dark:hover:text-[#42a5f5] transition-colors font-medium">
                도움말
              </Link>
            </nav>
          </div>
          <WalletConnect />
        </div>
      </div>
    </header>
  );
}
