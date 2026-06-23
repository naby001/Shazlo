const API_BASE_URL = "https://api.shazlo.store/v1";

export async function recalculatePreferenceVector() {
  const shadowUser = JSON.parse(
    localStorage.getItem("shadow_user")
  );

  if (!shadowUser) {
    throw new Error("Shadow user missing");
  }

  const response = await fetch(
    `${API_BASE_URL}/user/calculatevector`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: shadowUser.user_id,
        preference_vector:
          shadowUser.preference_vector,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to recalculate vector"
    );
  }

  const data = await response.json();

  // Save latest vector locally
  shadowUser.preference_vector =
    data.new_vector;

  localStorage.setItem(
    "shadow_user",
    JSON.stringify(shadowUser)
  );

  return data.new_vector;
}