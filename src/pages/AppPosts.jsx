import React, { useState, useEffect } from "react";
import SinglePostComponent from "../components/SinglePostComponent";
import PostService from "../services/PostService";
import { useHistory } from "react-router-dom";

export default function AppCars() {
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  const fetchPosts = async () => {
    const data = await PostService.getAll();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleEdit = (id) => {
    history.push("edit/" + id);
  };

  const handleDelete = async (id) => {
    const deleted = await PostService.delete(id);

    if (deleted.count > 0) {
      const newPosts = posts.filter((post) => post.id !== id);
      setPosts(newPosts);
    } else {
      alert("Doslo je do greske");
    }
  };

  return (
    <div>
      <h2>Posts</h2>
      <ul
        style={{
          display: "flex",
          gap: 10,
        }}
      >
        {posts.map((post) => (
          <SinglePostComponent
            key={post.id}
            post={post}
            onEditButton={handleEdit}
            onDeleteCallback={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}
