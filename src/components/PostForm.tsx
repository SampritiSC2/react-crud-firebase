import { FormEventHandler, useState } from "react";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange: FormEventHandler<HTMLInputElement> = (event) => {
    setTitle((event.target as HTMLInputElement).value);
  };

  const handleContentChange: FormEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    setContent((event.target as HTMLInputElement).value);
  };
  return (
    <div className="card mt-2 border-0 shadow-sm p-3">
      <div className="card-body">
        <h2 className="text-center">ADD POST</h2>
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              className="form-control"
              value={title}
              onInput={handleTitleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              className="form-control"
              value={content}
              style={{ resize: "none" }}
              onInput={handleContentChange}
            ></textarea>
          </div>
          <button className="btn btn-primary mt-2">Add Post</button>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
