import { FormEventHandler, useEffect, useState } from "react";
import { addPost } from "../api/api";
import { useNavigate } from "react-router-dom";

const PostForm = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [titleIsValid, setTitleIsValid] = useState<boolean>(false);
  const [titleTouched, setTitleTouched] = useState<boolean>(false);
  const [titleErrorMessage, setTitleErrorMessage] = useState<null | string>(
    null
  );

  const [content, setContent] = useState<string>("");
  const [contentIsValid, setContentIsValid] = useState<boolean>(false);
  const [contentTouched, setContentTouched] = useState<boolean>(false);
  const [contentErrorMessage, setContentErrorMessage] = useState<null | string>(
    null
  );

  const [error, setError] = useState<null | string>(null);

  const [formIsValid, setFormIsValid] = useState<boolean>(false);

  useEffect(() => {
    if (title.trim().length === 0) {
      setTitleIsValid(false);
      setTitleErrorMessage("Title is required");
    } else if (title.trim().length < 6) {
      setTitleIsValid(false);
      setTitleErrorMessage("Title should have atleast 6 characters");
    } else {
      setTitleIsValid(true);
      setTitleErrorMessage(null);
    }
  }, [title, titleTouched]);

  useEffect(() => {
    if (content.trim().length === 0) {
      setContentIsValid(false);
      setContentErrorMessage("Content is required");
    } else if (content.trim().length < 6) {
      setContentIsValid(false);
      setContentErrorMessage("Title should have atleast 6 characters");
    } else {
      setContentIsValid(true);
      setContentErrorMessage(null);
    }
  }, [content, contentTouched]);

  useEffect(() => {
    if (titleIsValid && contentIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [titleIsValid, contentIsValid]);

  const handleTitleChange: FormEventHandler<HTMLInputElement> = (event) => {
    setTitleTouched(true);
    // Here the state update is not synchronous so we might not get the updated state immediately
    const value = (event.target as HTMLInputElement).value;
    setTitle(value);
  };

  const handleContentChange: FormEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    setContentTouched(true);
    // Here the state update is not synchronous so we might not get the updated state immediately
    const value = (event.target as HTMLInputElement).value;
    setContent(value);
  };

  const handleTitleBlur = () => {
    setTitleTouched(true);
  };

  const handleContentBlur = () => {
    setContentTouched(true);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (!formIsValid) return;
    setError(null);

    try {
      const data = await addPost(title, content);
      console.log(data);
      resetForm();
      navigate("/posts");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An Unknown Error Occured");
      }
    }
  };

  const resetForm = () => {
    setTitle("");
    setTitleIsValid(false);
    setTitleErrorMessage(null);
    setTitleTouched(false);

    setContent("");
    setContentIsValid(false);
    setContentErrorMessage(null);
    setContentTouched(false);

    setFormIsValid(false);
  };

  return (
    <div className="card mt-2 border-0 shadow-sm p-3">
      <div className="card-body">
        <h2 className="text-center">ADD POST</h2>
        {error && <div className="alert alert-danger mt-2">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              className="form-control"
              value={title}
              onInput={handleTitleChange}
              onBlur={handleTitleBlur}
            />
            {titleTouched && !titleIsValid && (
              <div className="alert alert-danger mt-2">{titleErrorMessage}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              className="form-control"
              value={content}
              style={{ resize: "none" }}
              onInput={handleContentChange}
              onBlur={handleContentBlur}
            ></textarea>
            {contentTouched && !contentIsValid && (
              <div className="alert alert-danger mt-2">
                {contentErrorMessage}
              </div>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-primary mt-2"
            disabled={!formIsValid}
          >
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
