import React from "react";
import "./PostBlog.scss";

export const PostBlog = () => {
  return (
    <>
      <section className="PostBlog">
        <form
          action="/api/v1/blogs"
          method="post"
          encType="multipart/form-data"
          className="PostBlog__form"
        >
          <div className="PostBlog__LabelInputBox">
            <label className="PostBlog__Label" htmlFor="title">
              Title
            </label>
            <input
              className="PostBlog__Input"
              type="text"
              name="title"
              id="title"
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
            ></textarea>
          </div>
          <div className="PostBlog__UploadBox">
            <label htmlFor="image">Upload Image</label>
            <div className="PostBlog__UploadImageFileBox">
              <input
                className="PostBlog__UploadImageFile"
                type="file"
                name="image"
                id="image"
              />
            </div>
          </div>

          <button className="PostBlog__Submit" type="submit">
            Submit
          </button>
        </form>
      </section>
    </>
  );
};
