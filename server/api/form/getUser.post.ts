import { prismadb } from "~/utils";

export default defineEventHandler(async (event) => {
  const { userId } = await readBody<{
    userId: string;
  }>(event);

  const data = await prismadb.user_Dtl.findUnique({
    where: {
      userId: userId,
    },
  });

  return data;
});
