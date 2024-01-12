import { prismadb } from "~/utils";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const data = await prismadb.user.findMany({
    select: {
      username: true,
    },
  });
  return {
    body,
  };
});
