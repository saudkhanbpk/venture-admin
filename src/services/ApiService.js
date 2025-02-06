import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

export const createBlog = async (title, description, imageFile) => {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  if (imageFile) {
    formData.append("file", imageFile);
  }

  try {
    const response = await axios.post(`${API_BASE_URL}/api/blog`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error creating blog:", error.response?.data || error.message);
    throw error;
  }
};
