import React from "react";

export const Postblog = () => {
  return (
    <>
      <form
        className="form"
        id="form--data"
        action="api/v1/blogs/"
        method="post"
      >
        <div>
          <label htmlFor="title">
            <p>title</p>
            <input type="text" name="title" id="title" />
          </label>
          <label htmlFor="author">
            <p>author</p>
            <input type="text" name="author" id="author" />
          </label>

          <label htmlFor="description">
            <p>description</p>
            <input type="text" name="description" id="description" />
          </label>
          <label htmlFor="image">
            <p>image</p>
            <input type="file" name="image" id="image" />
          </label>
        </div>
      </form>
    </>
  );
};
