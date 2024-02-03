import { z } from "zod";

type optionalType<T> = {
  [K in keyof T]: T[K] | undefined;
};

export const identitasSchema = z.object({
  nama_lengkap: z.string(),
  nama_panggilan: z.string(),
  email: z.string(),
  no_telepon: z.string(),
  tempat_lahir: z.string(),
  tanggal_lahir: z.string(),
  gender: z.number(),
  status_pernikahan: z.number(),
});

export type identitasZ = z.output<typeof identitasSchema>;
export type identitasT = optionalType<identitasZ>;

export const alamatSchema = z.object({
  provinsi: z.string(),
  kabupaten_kota: z.string(),
  kecamatan: z.string(),
  kelurahan_desa: z.string(),
  alamat: z.string(),
  status_tempat_tinggal: z.number(),
});

export type alamatZ = z.output<typeof alamatSchema>;
export type alamatT = optionalType<alamatZ>;

export const informasiSchema = z.object({
  jumlah_saudara: z.number(),
  anak_ke: z.number(),
  suku: z.string(),
  pendidikan_terakhir: z.string(),
  jurusan_pendidikan: z.string(),
  pekerjaan: z.string(),
  tinggi: z.number(),
  berat: z.number(),
  hobi: z.string(),
  cerita: z.string(),
});

export type informasiZ = z.output<typeof informasiSchema>;
export type informasiT = optionalType<informasiZ>;

export const kriteriaSchema = z.object({
  kriteria: z.string(),
});

export type kriteriaZ = z.output<typeof kriteriaSchema>;
export type kriteriaT = optionalType<kriteriaZ>;

export const dokumenSchema = z.object({
  path_image: z.string(),
});

export type dokumenZ = z.output<typeof dokumenSchema>;
export type dokumenT = optionalType<dokumenZ>;
