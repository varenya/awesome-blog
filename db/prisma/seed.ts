import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: "Tanay Pratap",
    email: "tanay@geek.io",
    posts: {
      create: [
        {
          title: "Why HTMX is super duper awesome!",
          content: "booo react sucks!",
        },
        {
          title: "Why is JS so complex??",
          content: "Yay, Python rocks!",
        },
      ],
    },
  },
  {
    name: "Varenya",
    email: "varenya@geek.io",
    posts: {
      create: [
        {
          title: "Why React is Awesoooome",
          content: "Booo htmx sucks!",
        },
        {
          title: "Why FP is Awesoooome",
          content: "Booo OOPs sucks!",
        },
      ],
    },
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
