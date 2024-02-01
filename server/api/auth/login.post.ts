import { Argon2id } from "oslo/password";
import { prismadb } from "~/utils";

export default defineEventHandler(async (event) => {
  const { username, password } = await readBody<{
    username: string;
    password: string;
  }>(event);

  const existingUser = await prismadb.user.findUnique({
    where: {
      username: username.toLowerCase(),
    },
  });

  if (!existingUser) {
    return {
      statusMessage: "Incorrect username or password",
      statusCode: 400,
    };
  }

  const validPassword = await new Argon2id().verify(
    existingUser.hashed_password,
    password
  );

  if (!validPassword) {
    return {
      statusMessage: "Incorrect username or password",
      statusCode: 400,
    };
  }

  const session = await lucia.createSession(existingUser.id, {});
  appendHeader(
    event,
    "Set-Cookie",
    lucia.createSessionCookie(session.id).serialize()
  );
  return {
    statusCode: 200,
    statusMessage: "Login successfull",
  };
});
