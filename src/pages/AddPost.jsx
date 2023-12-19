import PostForm from "../components/PostForm";

const AddPost = () => {
  return (
    <div className="row">
      <div className="col-sm-12 col-lg-6 offset-lg-3">
        <PostForm addMode={true} />
      </div>
    </div>
  );
};

export default AddPost;
