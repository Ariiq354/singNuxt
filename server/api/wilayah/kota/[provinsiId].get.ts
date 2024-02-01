import { getRegencies } from "idn-area-data";

export default defineEventHandler(async (event) => {
  const provinsiId = getRouterParam(event, "provinsiId");
  const res = await getRegencies();
  const data = res.filter((item) => item.province_code === provinsiId);
  return data;
});
