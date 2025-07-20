import { db } from "@/utils/utilities.js";
import fallback from "../../../public/tekken-fallback.jpg";
import PostCard from "@/components/PostCard";
import Link from "next/link";
import Filter from "@/components/Filter";

export default async function Posts({ searchParams }) {
  const filterCategory = (await searchParams).category;
  const sql = filterCategory
    ? `SELECT tp.id as id, tp.title, tp.content, tp.img, tcat.name AS category FROM tekkenposts tp JOIN tekkencategories tcat ON tp.category = tcat.id  WHERE tcat.name = $1`
    : `SELECT * FROM tekkenposts`;
  const value = filterCategory ? [filterCategory] : [];
  const posts = (await db.query(sql, value)).rows;

  const categories = (await db.query(`SELECT * FROM tekkencategories`)).rows;

  // TODO update sort function to not erase category filter
  const query = await searchParams;
  if (query.sortBy === "newest") {
    posts.reverse();
  }

  return (
    <div className="px-3">
      <div className="flex space-x-4 pt-3">
        <p className="self-center">Sort by:</p>
        <Link
          href={"/posts?sortBy=newest"}
          className="bg-gray-800 p-2 rounded-2xl w-18 text-center"
        >
          Newest
        </Link>
        <Link
          href={"/posts?sortBy=oldest"}
          className="bg-gray-800 p-2 rounded-2xl w-18 text-center"
        >
          Oldest
        </Link>
      </div>
      <Filter categories={categories}></Filter>
      <div className="flex flex-col py-3 px-1 gap-2">
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
