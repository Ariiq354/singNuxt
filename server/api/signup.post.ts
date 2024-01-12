import { prismadb } from "~/utils";

export default defineEventHandler(async (event) => {
  const { username, password } = await readBody<{
    username: string;
    password: string;
  }>(event);

  const exist = await prismadb.user.findFirst({
    where: {
      username,
    },
  });

  if (exist) {
    throw createError({
      statusCode: 400,
      statusMessage: "Username already exist",
    });
  }

  await auth.createUser({
    key: {
      providerId: "username",
      providerUserId: username.toLowerCase(),
      password,
    },
    attributes: {
      username,
    },
  });
  return sendRedirect(event, "/login");
});
