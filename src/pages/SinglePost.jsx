import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../services/PostService";
import SingleCommentComponent from "../components/SingleCommentComponent";
import AddCommentForm from "../components/AddCommentForm";
import { useFormattedDate } from "../hooks/useFormattedDate";

export default function SinglePost() {
  let { id } = useParams();

  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const createdAt = useFormattedDate(post.createdAt);

  const createComment = async (comment) => {
    const newComment = await PostService.addComment(comment, post.id);

    if (newComment) {
      setComments([newComment, ...comments]);
    }
  };

  const getPost = async (id) => {
    const post = await PostService.get(id);
    setPost(post);
    setComments(post.comments);
  };

  useEffect(() => {
    if (id) {
      getPost(id);
    }
  }, []);

  return (
    <>
      <div>
        <h2>Post:</h2>
        Title: {post.title}
        text: {post.text}
        created at: {createdAt}
      </div>
      <AddCommentForm onSubmit={createComment} />
      <ul>
        {comments.map((comment) => (
          <SingleCommentComponent key={comment.id} text={comment.text} />
        ))}
      </ul>
    </>
  );
}
