import type { User } from "lucia";

export const useUser = () => {
  const user = useState<User | null>("user", () => null);
  return user;
};

export const useValidate = async () => {
  const { data } = await useFetch("/api/auth/validate");
  if (!data.value) {
    return navigateTo("/login");
  } else {
    return data.value;
  }
};
