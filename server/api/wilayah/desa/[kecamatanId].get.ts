type desa = {
  code: string;
  districtCode: string;
  name: string;
};

export default defineEventHandler(async (event) => {
  const kecamatanId = getRouterParam(event, "kecamatanId");
  const data: any = await $fetch(
    `https://idn-area.up.railway.app/villages?districtCode=${kecamatanId}&limit=100`
  );
  return data.data as desa[];
});
