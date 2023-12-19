// Add Post
export const addPost = async (title, content) => {
  const response = await fetch(
    "https://react-crud-firebase-30c87-default-rtdb.firebaseio.com/posts.json",
    {
      method: "POST",
      body: JSON.stringify({ title, content }),
    }
  );
  if (!response.ok) {
    throw new Error("Unable to add post data");
  }
  const data = await response.json();
  return data;
};

// Fetch posts
export const fetchPosts = async (user) => {
  const response = await fetch(
    `https://react-crud-firebase-30c87-default-rtdb.firebaseio.com/posts.json?auth=${user.token}`
  );
  if (!response.ok) {
    throw new Error("Unable to fetch posts data");
  }
  const data = await response.json();
  return data;
};

export const deletePost = async (id) => {
  const response = await fetch(
    `https://react-crud-firebase-30c87-default-rtdb.firebaseio.com/posts/${id}.json`,
    { method: "DELETE" }
  );
  if (!response.ok) {
    throw new Error("Unable to delete posts data");
  }
  const data = await response.json();
  return data;
};

export const fetchPostsById = async (id) => {
  const response = await fetch(
    `https://react-crud-firebase-30c87-default-rtdb.firebaseio.com/posts/${id}.json`
  );
  if (!response.ok) {
    throw new Error("Unable to fetch posts data");
  }
  const data = await response.json();
  return data;
};

export const editPost = async (title, content, id) => {
  const response = await fetch(
    `https://react-crud-firebase-30c87-default-rtdb.firebaseio.com/posts/${id}.json`,
    {
      method: "PATCH",
      body: JSON.stringify({ title, content }),
    }
  );
  if (!response.ok) {
    throw new Error("Unable to add post data");
  }
  const data = await response.json();
  return data;
};
