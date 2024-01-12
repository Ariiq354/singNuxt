import { prismadb } from "~/utils";

export default defineEventHandler(async (event) => {
  const { username, password } = await readBody<{
    username: string;
    password: string;
  }>(event);

  const exist = await prismadb.user.findFirst({
    where: {
      username: username,
    },
  });

  if (exist) {
    throw createError({
      statusCode: 400,
      statusMessage: "Username already exist",
    });
  }

  try {
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
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Unknown prodcution error occured",
    });
  }
  return sendRedirect(event, "/login");
});
