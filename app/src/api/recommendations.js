const API_BASE_URL = "https://api.shazlo.store/v1";

export const getRecommendations = async ({
  excludeIds = [],
  gender = "women",
  brands = [],
  products = [],
  minPrice = null,
  maxPrice = null,
}={}) => {
  const shadowUser = JSON.parse(
    localStorage.getItem("shadow_user")
  );

  if (!shadowUser) {
    throw new Error("Shadow user missing");
  }

  const response = await fetch(
    `${API_BASE_URL}/items/getinitial`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userid: shadowUser.user_id,
        preference_vector:
          shadowUser.preference_vector,

        gender,

        brands,
        products,

        min_price: minPrice,
        max_price: maxPrice,

        exclude_ids: excludeIds,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch recommendations");
  }

  return response.json();
};