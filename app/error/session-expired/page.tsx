import Link from 'next/link';

export default function SessionExpiredPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
        <div className="text-6xl mb-6">⏰</div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          세션이 만료되었습니다
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          출석 인증 시간이 종료되었습니다.
          <br />
          다음 수업 시간에 다시 시도해주세요.
        </p>
        <div className="space-y-3">
          <Link
            href="/"
            className="block w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            홈으로 돌아가기
          </Link>
          <Link
            href="/help"
            className="block w-full px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg transition-colors"
          >
            도움말 보기
          </Link>
        </div>
      </div>
    </div>
  );
}
