import React from "react";
import Avatar from "../images/avatar1.webp";
import { Link } from "react-router-dom";

const PostAuthor = () => {
  return (
    <Link className="post__author" to={`/posts/users/sdfsdf`}>
      <div className="post__author-avatar">
        <img src={Avatar} alt="author-avatar"></img>
      </div>
      <div className="post_author_details">
        <h5>By: Author 1</h5>
        <small>Just Now</small>
      </div>
    </Link>
  );
};

export default PostAuthor;
