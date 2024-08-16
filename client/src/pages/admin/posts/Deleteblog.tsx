// Deleteblog.tsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export const Deleteblog = () => {
  const { id } = useParams<{ id: string }>(); // Get the ID from URL params
  const navigate = useNavigate(); // Hook to programmatically navigate
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const deleteBlogPost = async () => {
      if (!id) return;

      setLoading(true);
      try {
        await axios.delete(`/api/v1/blogs/${id}`);
        navigate("/admin/posts"); // Redirect to posts list after deletion
      } catch (error) {
        setError("Failed to delete blog post.");
        console.error("Error deleting the blog post:", error);
      } finally {
        setLoading(false);
      }
    };

    deleteBlogPost();
  }, [id, navigate]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && <p>Blog post deleted successfully!</p>}
    </div>
  );
};
