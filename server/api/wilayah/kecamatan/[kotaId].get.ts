import { getDistricts } from "idn-area-data";

export default defineEventHandler(async (event) => {
  const kotaId = getRouterParam(event, "kotaId");
  const res = await getDistricts();
  const data = res.filter((item) => item.regency_code === kotaId);
  return data;
});
