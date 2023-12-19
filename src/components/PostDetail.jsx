import { deletePost } from "../api/api";
import { useNavigate } from "react-router-dom";

const PostDetail = (props) => {
  const navigate = useNavigate();
  const handleDelete = async () => {
    try {
      await deletePost(props.post.id);
      props.onDelete(props.post.id);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = () => {
    navigate(`/edit-post/${props.post.id}`);
  };

  return (
    <div className="card p-3 mb-2 border-0 shadow-sm">
      <div className="card-body">
        <h3>{props.post.title}</h3>
        <p>{props.post.content}</p>
        <button className="btn btn-danger " onClick={handleDelete}>
          Delete
        </button>
        <button className="btn btn-warning ms-2" onClick={handleEdit}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default PostDetail;
