import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  //   await prisma.user.deleteMany();
  // create 3 users with the same name
  // await prisma.user.createMany({
  //   data: [
  //     {
  //       name: "Lorem",
  //       email: "1@lorem.com",
  //       age: 20,
  //     },
  //     {
  //       name: "Lorem",
  //       email: "2@lorem.com",
  //       age: 21,
  //     },
  //     {
  //       name: "Lorem",
  //       email: "3@lorem.com",
  //       age: 22,
  //     },
  //   ],
  // });

  const user = await prisma.user.update({
    where: {
      email: "1@lorem.com",
    },
    data: {
      writtenPosts: {
        connectOrCreate: {
          where: {
            postID: "1",
          },
          create: {
            title: "Post 1",
            content: "Content 1",
            averageRating: 0,
          },
        },
      },
    },
    include: {
      writtenPosts: true,
    },
  });
  console.log(user);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
