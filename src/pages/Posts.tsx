import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { fetchPosts } from "../api/api";
import { Post } from "../models/post";
import PostDetail from "../components/PostDetail";

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("add");
  };

  // To fetch the posts only once when the component is rendered for the first time
  useEffect(() => {
    fetchPosts()
      .then((data) => {
        const posts: Post[] = [];
        // Transform posts data
        for (const key in data) {
          posts.push({
            id: key,
            ...data[key],
          });
        }
        setPosts(posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="row">
      <div className="col-sm-12 col-lg-6">
        {/* <Link to="add">
          <button className="btn btn-warning mt-2">Add Post</button>
        </Link> */}
        <button className="btn btn-warning mt-2" onClick={handleNavigation}>
          Add Post
        </button>
        <hr />
        {posts.map((post) => (
          <PostDetail post={post} key={post.id} />
        ))}
      </div>
      <div className="col-sm-12 col-lg-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Posts;
