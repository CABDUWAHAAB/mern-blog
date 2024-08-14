import React, { useEffect, useState } from "react";
import axios from "axios";
import "./blog.scss";

export const Blog: React.FC = () => {
  const [blogs, setBlogs] = useState<any[]>([]); // Ensure the initial state is an array
  const [error, setError] = useState<string | null>(null); // State for error handling

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("/api/v1/blogs");
        console.log(response.data.data.blogs); // Log the response to inspect it
        // Accessing the correct nested data structure
        setBlogs(response.data.data.blogs);
      } catch (err) {
        setError("Failed to fetch blogs");
      }
    };
    fetchBlogs();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className="blog">
        <h1 className="blog__header">Blog Posts</h1>

        <ul className="blog__ul">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <>
                <li key={blog._id} className="blog__li">
                  <img
                    className="blog__image"
                    src={`../../public/images/${blog.image}`}
                    alt={blog.image}
                  />
                  <div>{blog.title}</div>
                  <div>{blog.description}</div>
                </li>
              </>
            ))
          ) : (
            <li>No blogs found</li>
          )}
        </ul>
      </div>
    </>
  );
};
