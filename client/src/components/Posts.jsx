import React, { useState } from "react";
import avatar1 from "../images/avatar1.webp";
import PostItem from "./PostItem";

const DUMMY_POSTS = [
  {
    id: "1",
    thumbnail: avatar1,
    category: "education",
    title: "This is the title of first post on this blog App.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique corrupti rerum aperiam saepe. Ut vel nam quis asperiores repudiandae. Laborum eaque iusto quasi minima, ab aperiam nam dolores cum molestiae. Quaerat voluptas molestiae in, corporis vel, ratione expedita ipsam nemo optio fugit commodi repellendus dignissimos totam! Fugit iste voluptatem dolores quibusdam reprehenderit atque quod deleniti necessitatibus dolore dolor error maiores laborum alias, ullam voluptates ratione enim rem eveniet at, ea aperiam. Nisi expedita aspernatur alias rem repudiandae vitae quos atque vero omnis ea maiores voluptatibus quis culpa, voluptates numquam exercitationem eveniet? Dolorem quam consequatur consequuntur nobis eaque impedit possimus?",
    authorID: 3,
  },
  {
    id: "2",
    thumbnail: avatar1,
    category: "Science",
    title: "This is the title of second post on this blog App.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique corrupti rerum aperiam saepe. Ut vel nam quis asperiores repudiandae. Laborum eaque iusto quasi minima, ab aperiam nam dolores cum molestiae. Quaerat voluptas molestiae in, corporis vel, ratione expedita ipsam nemo optio fugit commodi repellendus dignissimos totam! Fugit iste voluptatem dolores quibusdam reprehenderit atque quod deleniti necessitatibus dolore dolor error maiores laborum alias, ullam voluptates ratione enim rem eveniet at, ea aperiam. Nisi expedita aspernatur alias rem repudiandae vitae quos atque vero omnis ea maiores voluptatibus quis culpa, voluptates numquam exercitationem eveniet? Dolorem quam consequatur consequuntur nobis eaque impedit possimus?",
    authorID: 1,
  },
];

const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);

  return (
    <section className="posts">
      <div className="container posts__container">
        {posts.map(({ id, thumbnail, category, title, desc, authorID }) => (
          <PostItem
            key={id}
            postID={id}
            thumbnail={thumbnail}
            category={category}
            title={title}
            description={desc}
            authorID={authorID}
          />
        ))}
      </div>
    </section>
  );
};

export default Posts;
