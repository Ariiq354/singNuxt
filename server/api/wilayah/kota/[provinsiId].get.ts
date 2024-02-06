type kota = {
  code: string;
  name: string;
  provinceCode: string;
};

export default defineEventHandler(async (event) => {
  const provinsiId = getRouterParam(event, "provinsiId");
  const data: any = await $fetch(
    `https://idn-area.up.railway.app/regencies?provinceCode=${provinsiId}&limit=100`
  );
  return data.data as kota[];
});
