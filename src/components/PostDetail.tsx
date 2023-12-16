import { Post } from "../models/post";

const PostDetail = (props: { post: Post }) => {
  return (
    <div className="card p-3 mb-2 border-0 shadow-sm">
      <div className="card-body">
        <h3>{props.post.title}</h3>
        <p>{props.post.content}</p>
      </div>
    </div>
  );
};

export default PostDetail;
