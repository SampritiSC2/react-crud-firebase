import { useEffect, useState } from "react";
import PostForm from "../components/PostForm";
import { fetchPostsById } from "../api/api";
import { useParams } from "react-router-dom";

const EditPost = () => {
  const params = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    fetchPostsById(params.id)
      .then((data) => {
        setPost(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!post) {
    return <h3>Loading Post Data</h3>;
  }
  return (
    <div className="row">
      <div className="col-sm-12 col-lg-6 offset-lg-3">
        <PostForm addMode={false} post={post} id={params.id} />
      </div>
    </div>
  );
};

export default EditPost;
