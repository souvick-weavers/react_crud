import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const fetchPosts = () => {
  return api.get("/posts");
};

// delete user
// export const deletePost = (id: any) => {
//   return api.delete(`/posts/${id}`);
// };
// update user
// export const updatePost = (id: any) => {
//   return api.put(`/posts/${id}`, { title: "its updated" });
// };
