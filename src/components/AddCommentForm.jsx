import React, { useState } from "react";

export default function AddCommentForm({ onSubmit }) {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(comment);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        required
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button type="submit">Add Comment</button>
    </form>
  );
}
