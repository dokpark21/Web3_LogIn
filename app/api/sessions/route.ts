import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET: 모든 세션 조회
export async function GET() {
  try {
    const sessions = await prisma.session.findMany({
      include: {
        attendances: true,
      },
      orderBy: {
        sessionNumber: 'desc',
      },
    });

    const sessionsWithCount = sessions.map(session => ({
      ...session,
      attendeeCount: session.attendances.length,
    }));

    return NextResponse.json(sessionsWithCount);
  } catch (error) {
    console.error('Failed to fetch sessions:', error);
    return NextResponse.json({ error: 'Failed to fetch sessions' }, { status: 500 });
  }
}

// POST: 새 세션 생성
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sessionNumber, date, startTime, endTime, qrCode } = body;

    const session = await prisma.session.create({
      data: {
        sessionNumber,
        date,
        startTime: new Date(startTime),
        endTime: new Date(endTime),
        qrCode,
        isActive: true,
      },
    });

    return NextResponse.json(session, { status: 201 });
  } catch (error) {
    console.error('Failed to create session:', error);
    return NextResponse.json({ error: 'Failed to create session' }, { status: 500 });
  }
}
