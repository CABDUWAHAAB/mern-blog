import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./PostBlog.scss";

export const UpdateBlog = () => {
  const { id } = useParams<{ id: string }>(); // Assumes you're using a route parameter for the blog ID
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    image: null as File | null,
  });

  useEffect(() => {
    // Fetch the existing blog post data
    const fetchBlogPost = async () => {
      try {
        const response = await axios.get(`/api/v1/blogs/${id}`);
        const { title, author, description } = response.data.data.blogs;
        setFormData({
          title,
          author,
          description,
          image: null, // You might want to display the current image or handle it differently
        });
      } catch (error) {
        console.error("Error fetching the blog post:", error);
      }
    };

    fetchBlogPost();
  }, [id]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("author", formData.author);
    data.append("description", formData.description);
    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      const response = await axios.patch(`/api/v1/blogs/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error updating the blog:", error);
    }
  };

  return (
    <>
      <section className="PostBlog">
        <form onSubmit={handleSubmit} className="PostBlog__form">
          <div className="PostBlog__LabelInputBox">
            <label className="PostBlog__Label" htmlFor="title">
              Title
            </label>
            <input
              className="PostBlog__Input"
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="PostBlog__LabelInputBox">
            <label className="PostBlog__Label" htmlFor="author">
              Author
            </label>
            <input
              className="PostBlog__Input"
              type="text"
              name="author"
              id="author"
              value={formData.author}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="PostBlog__LabelInputBox">
            <label className="PostBlog__Label" htmlFor="description">
              Description
            </label>
            <textarea
              className="PostBlog__textarea"
              name="description"
              id="description"
              value={formData.description}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div className="PostBlog__UploadBox">
            <label htmlFor="image">Upload New Image</label>
            <div className="PostBlog__UploadImageFileBox">
              <input
                className="PostBlog__UploadImageFile"
                type="file"
                name="image"
                id="image"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <button className="PostBlog__Submit" type="submit">
            Update
          </button>
        </form>
      </section>
    </>
  );
};
