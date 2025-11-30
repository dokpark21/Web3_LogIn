# Vercel Postgres 설정 가이드

## 1. Postgres 데이터베이스 생성

Vercel 대시보드가 열렸습니다. 다음 단계를 따르세요:

1. **"Create Database"** 버튼 클릭
2. **"Postgres"** 선택
3. 데이터베이스 이름 입력 (예: `web3-attendance-db`)
4. Region 선택 (가까운 지역 선택, 예: `Washington D.C., USA`)
5. **"Create"** 클릭

## 2. 프로젝트에 연결

1. 생성된 데이터베이스를 클릭
2. **"Connect Project"** 탭으로 이동
3. `web3-attendance-app` 프로젝트 선택
4. **"Connect"** 클릭

이렇게 하면 자동으로 환경 변수가 설정됩니다:

- `POSTGRES_URL`
- `POSTGRES_PRISMA_URL`
- `POSTGRES_URL_NON_POOLING`
- `POSTGRES_USER`
- `POSTGRES_HOST`
- `POSTGRES_PASSWORD`
- `POSTGRES_DATABASE`

## 3. 재배포

데이터베이스 연결 후, 터미널에서:

```bash
vercel --prod
```

## 완료!

배포가 완료되면 Postgres 데이터베이스가 자동으로 마이그레이션되고 사용됩니다.

**관리자 계정 설정:**
데이터베이스가 비어있으므로, Vercel 환경 변수에 `ADMIN_WALLET_ADDRESS`를 추가해야 합니다:

- Key: `ADMIN_WALLET_ADDRESS`
- Value: `0xa2e4fb945b572bdf4f8cb11b5cb2d5d9765d91fb`
- Environment: Production, Preview, Development 모두 선택
