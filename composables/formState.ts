export const useIdentitas = () =>
  useState(
    "identitas",
    (): identitasT => ({
      nama_lengkap: undefined,
      nama_panggilan: undefined,
      email: undefined,
      no_telepon: undefined,
      tempat_lahir: undefined,
      tanggal_lahir: undefined,
      gender: undefined,
      status_pernikahan: undefined,
    })
  );

export const useAlamat = () =>
  useState(
    "alamat",
    (): alamatT => ({
      provinsi: undefined,
      kabupaten_kota: undefined,
      kecamatan: undefined,
      kelurahan_desa: undefined,
      alamat: undefined,
      status_tempat_tinggal: undefined,
    })
  );

export const useInformasi = () =>
  useState(
    "informasi",
    (): informasiT => ({
      jumlah_saudara: undefined,
      anak_ke: undefined,
      suku: undefined,
      pendidikan_terakhir: undefined,
      jurusan_pendidikan: undefined,
      pekerjaan: undefined,
      tinggi: undefined,
      berat: undefined,
      hobi: undefined,
      cerita: undefined,
    })
  );

export const useDokumen = () =>
  useState(
    "dokumen",
    (): dokumenT => ({
      path_image: undefined,
    })
  );

export const useKriteria = () =>
  useState(
    "kriteria",
    (): kriteriaT => ({
      kriteria: undefined,
    })
  );
