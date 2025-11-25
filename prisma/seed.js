const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const adminAddress = process.env.ADMIN_WALLET_ADDRESS;

async function main() {
  if (!adminAddress) {
    console.log("ADMIN_WALLET_ADDRESS is not set. Skipping admin seed.");
    return;
  }

  await prisma.admin.upsert({
    where: { walletAddress: adminAddress },
    update: {},
    create: { walletAddress: adminAddress },
  });

  console.log(`Admin ensured: ${adminAddress}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
