'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface SessionData {
  id: number;
  sessionNumber: number;
  date: string;
  startTime: Date;
  endTime: Date;
  isActive: boolean;
  attendeeCount: number;
}

export default function SessionStatusPage() {
  const { sessionId } = useParams();
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [sessionData, setSessionData] = useState<SessionData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSessionData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/sessions/${sessionId}`);
        if (!response.ok) {
          throw new Error('Session not found');
        }
        const data = await response.json();
        setSessionData(data);
      } catch (error) {
        console.error('Failed to fetch session:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSessionData();

    // 5초마다 출석 인원 업데이트
    const interval = setInterval(() => {
      fetchSessionData();
    }, 5000);

    return () => clearInterval(interval);
  }, [sessionId]);

  useEffect(() => {
    if (!sessionData) return;

    const endTime = new Date(sessionData.endTime).getTime();
    const updateTimer = () => {
      const now = Date.now();
      const remaining = Math.max(0, Math.floor((endTime - now) / 1000));
      setTimeRemaining(remaining);
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, [sessionData]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (isLoading || !sessionData) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-4xl mb-4">⏳</div>
          <p className="text-gray-600 dark:text-gray-400">로딩 중...</p>
        </div>
      </div>
    );
  }

  const totalStudents = 50; // 임시 값
  const attendanceRate = Math.round((sessionData.attendeeCount / totalStudents) * 100);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            세션 현황
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            제 {sessionData.sessionNumber}회차 - {sessionData.date}
          </p>
        </div>

        {/* 메인 상태 카드 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-6">
          {/* 남은 시간 */}
          <div className="text-center mb-8">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              세션 종료까지
            </div>
            <div className="text-6xl font-bold font-mono text-blue-600 dark:text-blue-400 mb-4">
              {formatTime(timeRemaining)}
            </div>
            <div className="flex items-center justify-center gap-2">
              {sessionData.isActive ? (
                <>
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-green-600 dark:text-green-400 font-semibold">
                    진행 중
                  </span>
                </>
              ) : (
                <>
                  <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
                  <span className="text-gray-600 dark:text-gray-400 font-semibold">
                    종료됨
                  </span>
                </>
              )}
            </div>
          </div>

          {/* 출석 현황 */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                실시간 출석 현황
              </h3>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                {sessionData.attendeeCount} / {totalStudents}
              </div>
            </div>

            {/* 진행 바 */}
            <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-2">
              <div
                className="bg-gradient-to-r from-[#0d47a1] to-[#1976d2] h-4 rounded-full transition-all duration-500"
                style={{ width: `${attendanceRate}%` }}
              ></div>
            </div>

            <div className="text-right text-sm text-gray-600 dark:text-gray-400">
              출석률: {attendanceRate}%
            </div>
          </div>
        </div>

        {/* 세션 정보 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            세션 정보
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400">회차</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                제 {sessionData.sessionNumber}회
              </span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400">날짜</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                {sessionData.date}
              </span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400">시작 시간</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                {new Date(sessionData.startTime).toLocaleTimeString('ko-KR', {
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: false,
                })}
              </span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400">종료 시간</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                {new Date(sessionData.endTime).toLocaleTimeString('ko-KR', {
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: false,
                })}
              </span>
            </div>
          </div>
        </div>

        {/* 안내 메시지 */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">
            ℹ️ 안내
          </h4>
          <ul className="text-sm text-blue-800 dark:text-blue-300 space-y-1">
            <li>• 이미 출석 인증을 완료하신 경우 이 페이지를 닫으셔도 됩니다</li>
            <li>• 출석 NFT는 세션 종료 후에도 지갑에서 확인 가능합니다</li>
            <li>• 세션이 종료되면 자동으로 출석 인증이 마감됩니다</li>
          </ul>
        </div>

        {/* 액션 버튼 */}
        <div className="grid md:grid-cols-2 gap-4">
          <Link
            href="/my-attendance"
            className="block text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            내 출석 기록 보기
          </Link>
          <Link
            href="/"
            className="block text-center px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg transition-colors"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}
