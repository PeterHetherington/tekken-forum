import { db } from "@/utils/utilities.js";
import Image from "next/image";
import fallback from "../../../public/tekken-fallback.jpg";
import PostCard from "@/components/PostCard";

export default async function Posts() {
  const posts = (await db.query(`SELECT * FROM tekkenposts`)).rows;
  // console.log(posts);
  return (
    <div>
      <div>
        <button className="bg-pink-700">Create post</button>
      </div>
      <div>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            src={post.img}
            // fallback={fallback}
          />
        ))}
      </div>
    </div>
  );
}
