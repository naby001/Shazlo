import axios from "axios";

// Create axios instance with base configuration
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://shazlo-waitlist.onrender.com/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor for adding auth tokens if needed
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for handling common errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem("authToken");
      // Redirect to login if needed
    }
    return Promise.reject(error);
  }
);

// Pre-registration API calls
export const preRegisterAPI = {
  // Register a new user for pre-registration
  register: async (userData) => {
    const response = await api.post("/preregister/register", userData);
    return response.data;
  },

  // Check if email is already registered
  checkEmail: async (email) => {
    const response = await api.get(
      `/preregister/check/${encodeURIComponent(email)}`
    );
    return response.data;
  },

  // Confirm email with token
  confirm: async (token) => {
    const response = await api.get(`/preregister/confirm/${token}`);
    return response.data;
  },

  // Get registration statistics (admin)
  getStats: async () => {
    const response = await api.get("/preregister/stats");
    return response.data;
  },
};

// Health check
export const healthCheck = async () => {
  const response = await api.get("/health");
  return response.data;
};

export default api;
