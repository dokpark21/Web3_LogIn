import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// POST: 관리자 추가
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { walletAddress } = body;

    const admin = await prisma.admin.create({
      data: {
        walletAddress: walletAddress.toLowerCase(),
      },
    });

    return NextResponse.json(admin, { status: 201 });
  } catch (error) {
    console.error('Failed to add admin:', error);
    return NextResponse.json({ error: 'Failed to add admin' }, { status: 500 });
  }
}

// GET: 관리자 권한 확인
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const walletAddress = searchParams.get('walletAddress');

    if (!walletAddress) {
      return NextResponse.json({ error: 'Wallet address required' }, { status: 400 });
    }

    const admin = await prisma.admin.findUnique({
      where: { walletAddress: walletAddress.toLowerCase() },
    });

    return NextResponse.json({ isAdmin: !!admin });
  } catch (error) {
    console.error('Failed to check admin:', error);
    return NextResponse.json({ error: 'Failed to check admin' }, { status: 500 });
  }
}
