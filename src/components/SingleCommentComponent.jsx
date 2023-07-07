import React from "react";

function SingleCommentComponent({ text }) {
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
      <p>Komentar: {text} </p>
    </li>
  );
}

export default SingleCommentComponent;
