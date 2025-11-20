export default function HelpPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-16 fade-in-up">
          <h1 className="text-5xl font-bold mb-4 font-[family-name:var(--font-poppins)]">
            <span className="gradient-text">도움말</span>
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-400">
            출석 인증 NFT 시스템 사용 가이드
          </p>
        </div>

        {/* MetaMask 설치 */}
        <div className="card-shadow bg-white dark:bg-gray-800 rounded-3xl p-10 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 font-[family-name:var(--font-poppins)]">
            🦊 MetaMask 설치하기
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-400">
            <p>
              MetaMask는 암호화폐 지갑으로, 출석 NFT를 받기 위해 필요합니다.
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                <a
                  href="https://metamask.io/download/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  MetaMask 공식 웹사이트
                </a>
                에 접속합니다
              </li>
              <li>사용 중인 브라우저에 맞는 확장 프로그램을 설치합니다</li>
              <li>설치 후 &quot;시작하기&quot; 버튼을 클릭합니다</li>
              <li>&quot;지갑 만들기&quot;를 선택합니다</li>
              <li>비밀번호를 설정합니다</li>
              <li>
                복구 구문(12개 단어)을 안전한 곳에 보관합니다
                <span className="text-red-600 dark:text-red-400 font-semibold">
                  (절대 타인과 공유하지 마세요!)
                </span>
              </li>
            </ol>
          </div>
        </div>

        {/* 지갑 연결 */}
        <div className="card-shadow bg-white dark:bg-gray-800 rounded-3xl p-10 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 font-[family-name:var(--font-poppins)]">
            🔗 지갑 연결하기
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-400">
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>상단 우측의 &quot;지갑 연결하기&quot; 버튼을 클릭합니다</li>
              <li>MetaMask 팝업이 나타나면 연결할 계정을 선택합니다</li>
              <li>&quot;다음&quot; 및 &quot;연결&quot; 버튼을 클릭합니다</li>
              <li>
                연결이 완료되면 지갑 주소가 화면에 표시됩니다 (예: 0x1234...5678)
              </li>
            </ol>
          </div>
        </div>

        {/* 출석 인증 */}
        <div className="card-shadow bg-white dark:bg-gray-800 rounded-3xl p-10 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 font-[family-name:var(--font-poppins)]">
            ✅ 출석 인증하기
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-400">
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>수업 시간에 제공되는 QR 코드를 스마트폰으로 스캔합니다</li>
              <li>출석 체크인 페이지로 이동합니다</li>
              <li>지갑이 연결되어 있지 않다면 지갑을 연결합니다</li>
              <li>&quot;출석 인증 NFT 발급받기&quot; 버튼을 클릭합니다</li>
              <li>MetaMask에서 트랜잭션을 승인합니다</li>
              <li>NFT 발급이 완료되면 확인 메시지가 표시됩니다</li>
            </ol>
          </div>
        </div>

        {/* 네트워크 설정 */}
        <div className="card-shadow bg-white dark:bg-gray-800 rounded-3xl p-10 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 font-[family-name:var(--font-poppins)]">
            🌐 네트워크 설정하기
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-400">
            <p>테스트넷 또는 특정 네트워크로 변경이 필요한 경우:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>MetaMask 확장 프로그램을 엽니다</li>
              <li>상단의 네트워크 드롭다운을 클릭합니다</li>
              <li>&quot;네트워크 추가&quot;를 선택합니다</li>
              <li>조교 또는 강사가 제공한 네트워크 정보를 입력합니다</li>
              <li>&quot;저장&quot; 버튼을 클릭합니다</li>
            </ol>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mt-4">
              <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                ⚠️ 반드시 강사나 조교가 안내한 네트워크만 사용하세요!
              </p>
            </div>
          </div>
        </div>

        {/* 문제 해결 */}
        <div className="card-shadow bg-white dark:bg-gray-800 rounded-3xl p-10 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 font-[family-name:var(--font-poppins)]">
            🔧 문제 해결
          </h2>
          <div className="space-y-6 text-gray-600 dark:text-gray-400">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Q. 지갑 연결이 안 돼요
              </h3>
              <p>
                A. MetaMask가 설치되어 있는지 확인하고, 브라우저를 새로고침한 후
                다시 시도해보세요.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Q. 트랜잭션이 실패했어요
              </h3>
              <p>
                A. 지갑에 가스비를 지불할 충분한 잔액이 있는지 확인하세요. 잔액이
                부족하면 조교에게 문의하세요.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Q. NFT를 못 받았어요
              </h3>
              <p>
                A. 트랜잭션이 완료되는 데 시간이 걸릴 수 있습니다. 몇 분 후 &quot;내
                출석 기록&quot; 페이지에서 다시 확인해보세요.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Q. 중복 출석이 안 돼요
              </h3>
              <p>
                A. 각 세션당 1회만 출석 인증이 가능합니다. 이미 해당 회차 NFT를
                받으신 경우 중복 발급이 불가능합니다.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Q. 시간이 지나서 출석 못했어요
              </h3>
              <p>
                A. 세션 시간이 종료되면 출석 인증이 불가능합니다. 특별한 사유가
                있는 경우 조교에게 문의하세요.
              </p>
            </div>
          </div>
        </div>

        {/* 보안 주의사항 */}
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
          <h3 className="font-bold text-red-900 dark:text-red-200 mb-3 flex items-center gap-2">
            🔐 보안 주의사항
          </h3>
          <ul className="text-sm text-red-800 dark:text-red-300 space-y-2">
            <li>• 절대 복구 구문(12개 단어)을 타인과 공유하지 마세요</li>
            <li>• 지갑 비밀번호를 안전하게 보관하세요</li>
            <li>• 의심스러운 링크나 사이트에서 지갑을 연결하지 마세요</li>
            <li>• 공식 MetaMask 웹사이트에서만 확장 프로그램을 설치하세요</li>
            <li>• 모르는 사람이 개인키나 복구 구문을 요청하면 절대 알려주지 마세요</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
