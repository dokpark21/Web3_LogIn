import Link from 'next/link';

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
        <div className="text-6xl mb-6">⛔</div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          접근 권한 없음
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          이 페이지는 관리자만 접근할 수 있습니다.
          <br />
          권한이 필요한 경우 담당 조교에게 문의하세요.
        </p>
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
          <p className="text-sm text-red-800 dark:text-red-200">
            관리자 권한이 필요한 페이지입니다.
          </p>
        </div>
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
