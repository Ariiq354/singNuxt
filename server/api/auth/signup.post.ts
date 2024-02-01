import { prismadb } from "~/utils";
import { Argon2id } from "oslo/password";
import { generateId } from "lucia";

export default defineEventHandler(async (event) => {
  const { username, password } = await readBody<{
    username: string;
    password: string;
  }>(event);

  const hashedPassword = await new Argon2id().hash(password);
  const userId = generateId(15);

  const exist = await prismadb.user.findUnique({
    where: {
      username: username,
    },
  });

  if (exist) {
    return {
      statusCode: 400,
      statusMessage: "Username already exist",
    };
  }

  try {
    await prismadb.user.create({
      data: {
        id: userId,
        username: username.toLowerCase(),
        hashed_password: hashedPassword,
        role: 0,
        status: 0,
      },
    });
  } catch (error) {
    return {
      statusCode: 500,
      statusMessage: "Unknown error occured",
    };
  }

  return {
    statusCode: 200,
    statusMessage: "User has been created",
  };
});
