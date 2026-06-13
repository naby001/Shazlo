export const getShadowUser = () => {
  const raw = localStorage.getItem("shadow_user");

  if (!raw) return null;

  return JSON.parse(raw);
};

export const saveShadowUser = (user) => {
  localStorage.setItem(
    "shadow_user",
    JSON.stringify(user)
  );
};