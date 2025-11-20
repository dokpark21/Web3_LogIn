'use client';

import { useWeb3 } from '@/contexts/Web3Context';

export default function WalletConnect() {
  const { account, isConnected, isConnecting, connectWallet, disconnectWallet } = useWeb3();

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  if (isConnected && account) {
    return (
      <div className="flex items-center gap-3">
        <div className="px-5 py-2.5 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-800 dark:text-green-100 rounded-xl font-[family-name:var(--font-jetbrains-mono)] text-sm font-medium border border-green-200 dark:border-green-800">
          {formatAddress(account)}
        </div>
        <button
          onClick={disconnectWallet}
          className="px-4 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-xl transition-all hover:scale-105 font-medium"
        >
          연결 해제
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={connectWallet}
      disabled={isConnecting}
      className="btn-hover px-6 py-3 bg-gradient-to-r from-[#0d47a1] to-[#1976d2] hover:from-[#002171] hover:to-[#0d47a1] disabled:from-gray-400 disabled:to-gray-500 text-white rounded-xl font-semibold transition-all hover:scale-105 shadow-lg"
    >
      {isConnecting ? '연결 중...' : '지갑 연결하기'}
    </button>
  );
}
