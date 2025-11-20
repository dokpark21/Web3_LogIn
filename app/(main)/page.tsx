'use client';

import { useWeb3 } from '@/contexts/Web3Context';
import Link from 'next/link';

export default function Home() {
  const { isConnected, connectWallet } = useWeb3();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20 fade-in-up">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 font-[family-name:var(--font-poppins)]">
            <span className="gradient-text">출석 인증</span>
            <br />
            <span className="text-gray-900 dark:text-white">NFT 시스템</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            블록체인 기반 출석 인증으로 안전하고 투명한 출석 관리를 경험하세요.
            <br />
            각 출석마다 고유한 NFT가 발행되어 위변조가 불가능합니다.
          </p>
          
          {!isConnected && (
            <button
              onClick={connectWallet}
              className="btn-hover px-10 py-5 bg-gradient-to-r from-[#0d47a1] to-[#1976d2] hover:from-[#002171] hover:to-[#0d47a1] text-white text-lg font-semibold rounded-2xl transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform"
            >
              지갑 연결하고 시작하기 🚀
            </button>
          )}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="card-shadow bg-white dark:bg-gray-800 p-8 rounded-3xl hover:scale-105 transition-transform border border-gray-100">
            <div className="text-5xl mb-5">🔒</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 font-[family-name:var(--font-poppins)]">
              위변조 방지
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              블록체인에 기록된 출석 데이터는 영구적이며 수정이 불가능합니다.
            </p>
          </div>

          <div className="card-shadow bg-white dark:bg-gray-800 p-8 rounded-3xl hover:scale-105 transition-transform">
            <div className="text-5xl mb-5">🎨</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 font-[family-name:var(--font-poppins)]">
              NFT 소유권
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              각 출석마다 고유한 NFT를 발급받아 개인 지갑에 영구 보관할 수 있습니다.
            </p>
          </div>

          <div className="card-shadow bg-white dark:bg-gray-800 p-8 rounded-3xl hover:scale-105 transition-transform">
            <div className="text-5xl mb-5">⚡</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 font-[family-name:var(--font-poppins)]">
              간편한 인증
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              QR 코드 스캔과 지갑 연결만으로 간편하게 출석을 인증할 수 있습니다.
            </p>
          </div>
        </div>

        {/* How it works */}
        <div className="card-shadow bg-white dark:bg-gray-800 rounded-3xl p-10 mb-20">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center font-[family-name:var(--font-poppins)]">
            사용 방법
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0d47a1] to-[#1976d2] text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-5 shadow-lg">
                1
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white font-[family-name:var(--font-poppins)]">QR 코드 스캔</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                수업 시간에 제공되는 QR 코드를 스캔하세요
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0d47a1] to-[#1976d2] text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-5 shadow-lg">
                2
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white font-[family-name:var(--font-poppins)]">지갑 연결</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                MetaMask 지갑을 연결하여 본인 인증을 진행하세요
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0d47a1] to-[#1976d2] text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-5 shadow-lg">
                3
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white font-[family-name:var(--font-poppins)]">NFT 발급</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                출석 인증 NFT가 자동으로 발급됩니다
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-2 gap-8">
          <Link
            href="/my-attendance"
            className="block bg-gradient-to-br from-[#0d47a1] to-[#1976d2] text-white p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
          >
            <h3 className="text-3xl font-bold mb-3 font-[family-name:var(--font-poppins)]">내 출석 기록 📋</h3>
            <p className="opacity-90 text-lg">지금까지 받은 출석 NFT를 확인하세요</p>
          </Link>

          <Link
            href="/help"
            className="block bg-gradient-to-br from-[#1976d2] to-[#42a5f5] text-white p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
          >
            <h3 className="text-3xl font-bold mb-3 font-[family-name:var(--font-poppins)]">도움말 ❓</h3>
            <p className="opacity-90 text-lg">MetaMask 설치 및 사용 방법을 알아보세요</p>
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 text-center">
          <div className="card-shadow bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100">
            <div className="text-5xl font-bold gradient-text mb-3 font-[family-name:var(--font-poppins)]">0</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">발행된 NFT</div>
          </div>
          <div className="card-shadow bg-white dark:bg-gray-800 p-6 rounded-2xl">
            <div className="text-5xl font-bold gradient-text mb-3 font-[family-name:var(--font-poppins)]">0</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">참여 학생</div>
          </div>
          <div className="card-shadow bg-white dark:bg-gray-800 p-6 rounded-2xl">
            <div className="text-5xl font-bold gradient-text mb-3 font-[family-name:var(--font-poppins)]">0</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">진행된 세션</div>
          </div>
        </div>
      </main>
    </div>
  );
}
