import { lucia } from "lucia";
import { h3 } from "lucia/middleware";
import { prisma } from "@lucia-auth/adapter-prisma";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export const auth = lucia({
  adapter: prisma(client),
  env: process.dev ? "DEV" : "PROD", // "PROD" if deployed to HTTPS
  middleware: h3(),

  getUserAttributes: (data) => {
    return {
      username: data.username,
      role: data.role,
    };
  },
});

export type Auth = typeof auth;
