export const useIdentitas = () =>
  useState("identitas", () => ({
    nama_lengkap: "",
    nama_panggilan: "",
    email: "",
    no_telepon: "",
    tempat_lahir: "",
    tanggal_lahir: new Date(),
    gender: 0,
    status_pernikahan: 0,
  }));

export const useAlamat = () =>
  useState("alamat", () => ({
    provinsi: "",
    kabupaten_kota: "",
    kecamatan: "",
    kelurahan_desa: "",
    alamat: "",
    status_tempat_tinggal: 0,
  }));

export const useInformasi = () =>
  useState("informasi", () => ({
    jumlah_saudara: 0,
    anak_ke: 0,
    suku: "",
    pendidikan_terakhir: "",
    jurusan_pendidikan: "",
    pekerjaan: "",
    tinggi: 0,
    berat: 0,
    hobi: "",
    cerita: "",
  }));

export const useDokumen = () =>
  useState("dokumen", () => ({
    path_image: "",
  }));

export const useKriteria = () =>
  useState("kriteria", () => ({
    kriteria: "",
  }));
