import {
  alamatZ,
  dokumenZ,
  identitasZ,
  informasiZ,
  kriteriaZ,
} from "~/types/schema";
import { prismadb } from "~/utils";

export default defineEventHandler(async (event) => {
  const { alamat, dokumen, identitas, informasi, kriteria, userId } =
    await readBody<{
      identitas: identitasZ;
      alamat: alamatZ;
      informasi: informasiZ;
      kriteria: kriteriaZ;
      dokumen: dokumenZ;
      userId: string;
    }>(event);

  if (!event.context.user) {
    throw createError({
      statusCode: 403,
    });
  }

  const compositeUserDtl = {
    ...identitas,
    tanggal_lahir: new Date(identitas.tanggal_lahir),
    ...alamat,
    ...informasi,
    ...kriteria,
    ...dokumen,
  };

  const res = await prismadb.user_Dtl.upsert({
    where: {
      userId: userId,
    },

    update: compositeUserDtl,

    create: {
      ...compositeUserDtl,
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
