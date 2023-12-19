import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPosts } from "../api/api";
import PostDetail from "../components/PostDetail";
import { AuthContext } from "../context/auth-context";

const Posts = () => {
  const context = useContext(AuthContext);
  console.log(context);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/add-post");
  };

  // To fetch the posts only once when the component is rendered for the first time
  useEffect(() => {
    fetchPosts(context.user)
      .then((data) => {
        const loadedPosts = [];
        // Transform loadedPosts data
        for (const key in data) {
          loadedPosts.push({
            id: key,
            ...data[key],
          });
        }
        setPosts(loadedPosts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDeletePost = (id) => {
    const filteredPosts = posts.filter((post) => post.id !== id);
    setPosts(filteredPosts);
  };

  return (
    <div className="row">
      <div className="col-sm-12 col-lg-6 offset-lg-3">
        {/* <Link to="add">
          <button className="btn btn-warning mt-2">Add Post</button>
        </Link> */}
        <button className="btn btn-warning mt-2" onClick={handleNavigation}>
          Add Post
        </button>
        <hr />
        {posts.map((post) => (
          <PostDetail post={post} key={post.id} onDelete={handleDeletePost} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
