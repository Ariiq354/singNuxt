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
    return {
      status: 400,
      statusMessage: "Username already exist",
    };
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
    return {
      status: 500,
      statusMessage: "Unknown error occured",
    };
  }
  return sendRedirect(event, "/login");
});
