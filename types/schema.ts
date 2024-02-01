import { z } from "zod";

export const identitasSchemaZod = z.object({
  nama_lengkap: z.string(),
  nama_panggilan: z.string(),
  email: z.string(),
  no_telepon: z.string(),
  tempat_lahir: z.string(),
  tanggal_lahir: z.string(),
  gender: z.number(),
  status_pernikahan: z.number(),
});
export type identitasSchema = z.output<typeof identitasSchemaZod>;

export const alamatSchemaZod = z.object({
  provinsi: z.string(),
  kabupaten_kota: z.string(),
  kecamatan: z.string(),
  kelurahan_desa: z.string(),
  alamat: z.string(),
  status_tempat_tinggal: z.number(),
});
export type alamatSchema = z.output<typeof alamatSchemaZod>;

export const informasiSchemaZod = z.object({
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
export type informasiSchema = z.output<typeof informasiSchemaZod>;

export const kriteriaSchemaZod = z.object({
  kriteria: z.string(),
});
export type kriteriaSchema = z.output<typeof kriteriaSchemaZod>;

export const dokumenSchemaZod = z.object({
  path_image: z.string(),
});
export type dokumenSchema = z.output<typeof dokumenSchemaZod>;
