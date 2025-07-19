"use-client";

import PostCard from "./PostCard";

export default function PostClient({ posts, fallback }) {
  console.log(posts);
  return (
    <div>
      <p>all posts</p>
      <div>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            src={post.img}
            fallback={fallback}
          />
        ))}
      </div>
    </div>
  );
}
