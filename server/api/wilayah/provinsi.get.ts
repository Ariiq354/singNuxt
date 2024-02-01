import { getProvinces } from "idn-area-data";

type provinsi = {
  code: string;
  name: string;
};

export default defineEventHandler(async () => {
  const data: provinsi[] = await getProvinces();
  return data;
});
