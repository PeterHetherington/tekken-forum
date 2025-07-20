import { db } from "@/utils/utilities.js";
import Image from "next/image";
import fallback from "../../../public/tekken-fallback.jpg";
import PostCard from "@/components/PostCard";
import Link from "next/link";

export default async function Posts({ searchParams }) {
  const posts = (await db.query(`SELECT * FROM tekkenposts`)).rows;
  // console.log(posts);

  const query = await searchParams;
  if (query.sortBy === "newest") {
    posts.reverse();
  }

  return (
    <div>
      <div>
        <button className="bg-pink-700">
          <Link href={"/create"}>Create post</Link>
        </button>
      </div>
      <div>
        <p>Sort by:</p>
        <Link href={"/posts?sortBy=newest"}>Newest</Link>
        <Link href={"/posts?sortBy=oldest"}>Oldest</Link>
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
