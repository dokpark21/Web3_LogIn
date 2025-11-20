import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET: 모든 출석 기록 조회 (또는 특정 지갑 주소의 출석 기록)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const walletAddress = searchParams.get('walletAddress');

    const where = walletAddress ? { walletAddress } : {};

    const attendances = await prisma.attendance.findMany({
      where,
      include: {
        session: true,
      },
      orderBy: {
        timestamp: 'desc',
      },
    });

    return NextResponse.json(attendances);
  } catch (error) {
    console.error('Failed to fetch attendances:', error);
    return NextResponse.json({ error: 'Failed to fetch attendances' }, { status: 500 });
  }
}

// POST: 출석 체크인
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { walletAddress, sessionId, tokenId } = body;

    // 중복 출석 체크
    const existingAttendance = await prisma.attendance.findUnique({
      where: {
        walletAddress_sessionId: {
          walletAddress,
          sessionId,
        },
      },
    });

    if (existingAttendance) {
      return NextResponse.json(
        { error: 'Already checked in for this session' },
        { status: 400 }
      );
    }

    // 세션이 활성화되어 있는지 확인
    const session = await prisma.session.findUnique({
      where: { id: sessionId },
    });

    if (!session || !session.isActive) {
      return NextResponse.json(
        { error: 'Session is not active' },
        { status: 400 }
      );
    }

    // 세션 시간 확인
    const now = new Date();
    if (now < session.startTime || now > session.endTime) {
      return NextResponse.json(
        { error: 'Session is not available at this time' },
        { status: 400 }
      );
    }

    // 출석 기록 생성
    const attendance = await prisma.attendance.create({
      data: {
        walletAddress,
        sessionId,
        tokenId,
      },
      include: {
        session: true,
      },
    });

    return NextResponse.json(attendance, { status: 201 });
  } catch (error) {
    console.error('Failed to create attendance:', error);
    return NextResponse.json({ error: 'Failed to create attendance' }, { status: 500 });
  }
}
