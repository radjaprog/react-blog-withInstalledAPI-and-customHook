import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PostService from "../services/PostService";
import { useParams } from "react-router-dom";

const getDefaultPostValues = () => ({
  title: "",
  text: "",
});

function AddPost() {
  const history = useHistory();
  const { id } = useParams();

  const [post, setPost] = useState(getDefaultPostValues());

  const getPost = async (id) => {
    const data = await PostService.get(id);
    setPost(data);
  };

  useEffect(() => {
    if (id) {
      getPost(id);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await PostService.edit(post);
    } else {
      await PostService.add(post);
    }
    console.log(e);
    history.push("/posts");
  };

  const handleReset = () => {
    setPost(getDefaultPostValues());
  };

  const getLabel = () => {
    return id ? "Edit" : "Add" + "post";
  };

  return (
    <div>
      <h2>{getLabel()}</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: 200,
          marginLeft: 15,
        }}
      >
        <input
          required
          type="text"
          value={post.title}
          minLength="2"
          placeholder="Title"
          onChange={({ target }) => setPost({ ...post, title: target.value })}
        />
        <input
          required
          type="text"
          value={post.text}
          maxLength="300"
          placeholder="Text"
          onChange={({ target }) => setPost({ ...post, text: target.value })}
        />
        <button>{getLabel()}</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
}

export default AddPost;
