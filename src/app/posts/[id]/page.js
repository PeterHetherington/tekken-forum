import { db } from "@/utils/utilities.js";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default async function postsId({ params }) {
  const slug = await params;
  const posts = (
    await db.query(
      `SELECT tp.id AS id, tp.title, tp.content, tp.img, tp.link, tc.username, tc.comment, tc.id AS comment_id FROM tekkenposts tp LEFT JOIN tekkencomments tc ON tc.post_id = tp.id WHERE tp.id = $1`,
      [slug.id]
    )
  ).rows;

  async function handleComment(formData) {
    "use server";
    console.log("Posting comment");

    // get form data from formData object
    const username = formData.get("username");
    const comment = formData.get("comment");
    const id = formData.get("postId");

    // insert data into pg
    await db.query(
      `INSERT INTO tekkencomments (username, comment, post_id) VALUES ($1, $2, $3) `,
      [username, comment, id]
    );

    // revalidate the page to fetch new data
    revalidatePath(`/posts/${id}`);

    // redirect user
    redirect(`/posts/${id}`);
  }

  async function handleDelete(formData) {
    "use server";
    const id = formData.get("idForDelete");
    console.log(id);
    await db.query(`DELETE FROM tekkenposts WHERE id = $1`, [id]);
    revalidatePath(`/posts`);
    redirect(`/posts`);
  }

  return (
    <>
      {posts.length > 0 ? (
        <div className="flex flex-col gap-2">
          <div className="bg-gray-500 p-2 rounded-2xl">
            <h2>{posts[0].title}</h2>
            <div>
              <Image
                src={posts[0].img}
                width={1000}
                height={1000}
                alt={posts[0].title}
              />
            </div>
            <div className="bg-gray-700 p-2 rounded-b-2xl">
              <p>{posts[0].content}</p>
            </div>
          </div>
          <div>
            <form action={handleDelete}>
              <input
                type="hidden"
                name="idForDelete"
                id="idForDelete"
                value={slug.id}
              />
              <button type="submit">Delete Post</button>
            </form>
          </div>
          <div>
            <Link href={`/posts/${slug.id}/edit`}>Edit Post</Link>
          </div>
          <div>
            <form
              action={handleComment}
              className="flex flex-col justify-center p-3 gap-1.5"
            >
              <input
                className="bg-gray-500 rounded-xl p-1"
                id="username"
                name="username"
                type="text"
                required
                placeholder="Username"
              ></input>
              <input
                className="bg-gray-500 rounded-xl p-1"
                id="comment"
                name="comment"
                type="text"
                required
                placeholder="Add a comment"
              ></input>
              <input
                id="postId"
                name="postId"
                type="hidden"
                value={slug.id}
              ></input>
              <button type="submit">Post</button>
            </form>
          </div>
          {/* conditionally load comments if there are any */}
          {posts[0].comment ? (
            <div className="flex flex-col gap-2 bg-gray-500 p-2 rounded-2xl">
              {posts.map((post) => (
                <div
                  key={post.comment_id}
                  className="bg-gray-700 p-2.5 rounded-2xl"
                >
                  <p className="text-gray-400">{post.username}</p>
                  <p>{post.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>Be the first to comment.</p>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
