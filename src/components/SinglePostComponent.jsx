import React from "react";
import { Link } from "react-router-dom";

function SinglePostComponent({ post, onEditButton, onDeleteCallback }) {
  const { id, title, text } = post;

  const handleEdit = () => {
    onEditButton(id);
  };

  const handleDelete = () => {
    onDeleteCallback(id);
  };

  return (
    <li
      style={{
        border: "1px, solid black",
        marginBottom: "5px",
        padding: "25",
        display: "flex",
        flexDirection: "column",
        maxWidth: 200,
        border: "1px solid black",
        padding: 10,
      }}
    >
      <span>Title: {title}</span>
      <span>Text: {text} </span>
      <Link to={`/posts/${id}`}>View Post</Link>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default SinglePostComponent;
