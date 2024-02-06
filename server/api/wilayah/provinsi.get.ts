type provinsi = {
  code: string;
  name: string;
};

export default defineEventHandler(async () => {
  const data: any = await $fetch(
    "https://idn-area.up.railway.app/provinces?limit=100"
  );
  return data.data as provinsi[];
});
