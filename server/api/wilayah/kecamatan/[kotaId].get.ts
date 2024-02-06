type kecamatan = {
  code: string;
  name: string;
  regencyCode: string;
};

export default defineEventHandler(async (event) => {
  const kotaId = getRouterParam(event, "kotaId");
  const data: any = await $fetch(
    `https://idn-area.up.railway.app/districts?regencyCode=${kotaId}&limit=100`
  );
  return data.data as kecamatan[];
});
