import { LuciaError } from "lucia";

export default defineEventHandler(async (event) => {
  const { username, password } = await readBody<{
    username: string;
    password: string;
  }>(event);
  try {
    // find user by key
    // and validate password
    const key = await auth.useKey("username", username.toLowerCase(), password);
    const session = await auth.createSession({
      userId: key.userId,
      attributes: {},
    });
    const authRequest = auth.handleRequest(event);
    authRequest.setSession(session);
    return sendRedirect(event, "/"); // redirect to profile page
  } catch (e) {
    if (e instanceof LuciaError) {
      return {
        status: 400,
        statusMessage: "Incorrect username or password",
      };
    }
    return {
      statusMessage: "An unknown error occurred",
      statusCode: 500,
    };
  }
});
