import { prismadb } from "~/utils";

export default defineEventHandler(async (event) => {
  const data = await prismadb.user.findMany({
    select: {
      username: true,
    },
  });
  return {
    data,
  };
});
