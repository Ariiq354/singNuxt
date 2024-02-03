import { prismadb } from "~/utils";

export default defineEventHandler(async (event) => {
  const { userId } = await readBody<{
    userId: string;
  }>(event);

  const data = await prismadb.user_Dtl.findUnique({
    where: {
      userId: userId,
    },
  });

  return {
    identitas: {
      nama_lengkap: data?.nama_lengkap,
      nama_panggilan: data?.nama_panggilan,
      email: data?.email,
      no_telepon: data?.no_telepon,
      tempat_lahir: data?.tempat_lahir,
      tanggal_lahir: data?.tanggal_lahir.toLocaleDateString(),
      gender: data?.gender,
      status_pernikahan: data?.status_pernikahan,
    },
    alamat: {
      provinsi: data?.provinsi,
      kabupaten_kota: data?.kabupaten_kota,
      kecamatan: data?.kecamatan,
      kelurahan_desa: data?.kelurahan_desa,
      alamat: data?.alamat,
      status_tempat_tinggal: data?.status_tempat_tinggal,
    },
    informasi: {
      jumlah_saudara: data?.jumlah_saudara,
      anak_ke: data?.anak_ke,
      suku: data?.suku,
      pendidikan_terakhir: data?.pendidikan_terakhir,
      jurusan_pendidikan: data?.jurusan_pendidikan,
      pekerjaan: data?.pekerjaan,
      tinggi: data?.tinggi,
      berat: data?.berat,
      hobi: data?.hobi,
      cerita: data?.cerita,
    },
    dokumen: {
      path_image: data?.path_image,
    },
    kriteria: {
      kriteria: data?.kriteria,
    },
  };
});
