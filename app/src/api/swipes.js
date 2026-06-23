const API_BASE_URL = "https://api.shazlo.store/v1";

export async function sendSwipe({
  item,
  likeStatus,
}) {
  const shadowUser = JSON.parse(
    localStorage.getItem("shadow_user")
  );

  if (!shadowUser) {
    throw new Error("Shadow user missing");
  }

  const response = await fetch(
    `${API_BASE_URL}/user/swipes`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: shadowUser.user_id,
        item_id: item.item_id,
        like_status: likeStatus,
        item_embedding: item.embedding,
        preference_vector:
          shadowUser.preference_vector,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to save swipe");
  }

  return response.json();
}