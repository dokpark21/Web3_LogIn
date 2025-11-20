import Link from 'next/link';

export default function AlreadyCheckedInPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
        <div className="text-6xl mb-6">✋</div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          이미 출석 완료
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          이 세션에 이미 출석 인증을 완료하셨습니다.
          <br />
          세션당 1회만 출석 인증이 가능합니다.
        </p>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            출석 NFT는 이미 지갑에 발급되었습니다.
          </p>
        </div>
        <div className="space-y-3">
          <Link
            href="/my-attendance"
            className="block w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            내 출석 기록 보기
          </Link>
          <Link
            href="/"
            className="block w-full px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg transition-colors"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}
