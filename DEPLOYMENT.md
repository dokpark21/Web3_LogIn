# Vercel 배포 가이드

## 배포 단계

### 1. Vercel 로그인

```bash
vercel login
```

### 2. 프로젝트 배포

```bash
vercel
```

- 첫 배포 시 프로젝트 설정 질문에 답변
- 기본 설정으로 진행하면 됩니다

### 3. 환경 변수 설정

Vercel 대시보드에서 다음 환경 변수를 설정해야 합니다:

```
DATABASE_URL=file:./prisma/dev.db
ADMIN_WALLET_ADDRESS=0xa2e4fb945b572bdf4f8cb11b5cb2d5d9765d91fb
```

**중요:** SQLite는 serverless 환경에서 제한적이므로, 프로덕션에서는 다음 중 하나를 고려하세요:

- Vercel Postgres (추천)
- PlanetScale (MySQL)
- Supabase (PostgreSQL)

### 4. 프로덕션 배포

```bash
vercel --prod
```

## 현재 설정

- ✅ `.vercelignore` 생성됨
- ✅ `package.json` 빌드 스크립트 업데이트됨
- ✅ Prisma 자동 생성 설정됨

## 주의사항

1. **SQLite 제한**: Vercel의 serverless 환경에서는 파일 시스템이 읽기 전용입니다. SQLite는 일시적으로만 작동하며, 각 요청마다 데이터가 초기화될 수 있습니다.

2. **권장 데이터베이스**:

   - Vercel Postgres (무료 티어 있음)
   - Prisma schema만 변경하면 됨

3. **첫 배포 후**: Vercel 대시보드에서 환경 변수 설정 필수
