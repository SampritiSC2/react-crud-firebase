import { Post } from "../models/post";

// Add Post
export const addPost = async (
  title: string,
  content: string
): Promise<{ name: string }> => {
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
export const fetchPosts = async (): Promise<{
  [key: string]: Post;
}> => {
  const response = await fetch(
    "https://react-crud-firebase-30c87-default-rtdb.firebaseio.com/posts.json"
  );
  if (!response.ok) {
    throw new Error("Unable to fetch posts data");
  }
  const data = await response.json();
  return data;
};
