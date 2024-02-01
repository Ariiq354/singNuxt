import { date } from "zod";
import {
  alamatSchema,
  dokumenSchema,
  identitasSchema,
  informasiSchema,
  kriteriaSchema,
} from "~/types/schema";
import { prismadb } from "~/utils";

export default defineEventHandler(async (event) => {
  const { alamat, dokumen, identitas, informasi, kriteria, userId } =
    await readBody<{
      identitas: identitasSchema;
      alamat: alamatSchema;
      informasi: informasiSchema;
      kriteria: kriteriaSchema;
      dokumen: dokumenSchema;
      userId: string;
    }>(event);

  if (!event.context.user) {
    throw createError({
      statusCode: 403,
    });
  }

  const res = await prismadb.user_Dtl.upsert({
    where: {
      userId: userId,
    },

    update: {
      ...identitas,
      ...alamat,
      ...informasi,
      ...kriteria,
      ...dokumen,
    },

    create: {
      ...identitas,
      ...alamat,
      ...dokumen,
      ...informasi,
      ...kriteria,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });

  if (res) {
    await prismadb.user.update({
      data: {
        status: 2,
      },
      where: {
        id: userId,
      },
    });
  }

  return {
    statusCode: 200,
  };
});
