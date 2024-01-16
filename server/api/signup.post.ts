import { prismadb } from "~/utils";

export default defineEventHandler(async (event) => {
  const { username, password } = await readBody<{
    username: string;
    password: string;
  }>(event);

  const exist = await prismadb.user.findUnique({
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
        role: 0,
      },
    });
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Unknown prodcution occured",
      message: error as string,
    });
  }
  return sendRedirect(event, "/login");
});
