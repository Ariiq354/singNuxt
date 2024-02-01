import { getVillages } from "idn-area-data";

export default defineEventHandler(async (event) => {
  const kecamatanId = getRouterParam(event, "kecamatanId");
  const res = await getVillages();
  const data = res.filter((item) => item.district_code === kecamatanId);
  return data;
});
