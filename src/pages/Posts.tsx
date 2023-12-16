import { Outlet, useNavigate } from "react-router-dom";

const Posts = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("add");
  };

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
        <h1>Posts</h1>
      </div>
      <div className="col-sm-12 col-lg-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Posts;
