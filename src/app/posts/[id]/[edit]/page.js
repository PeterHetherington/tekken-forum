import { db } from "@/utils/utilities";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Image from "next/image";
import dvj from "../../../../../public/devil-jin.png";

export default async function Edit({ params }) {
  const categories = (await db.query(`SELECT * FROM tekkencategories`)).rows;

  const slug = await params;

  const post = (
    await db.query(
      `SELECT tp.id as id, tp.title, tp.content, tp.img, tp.link, tcat.name AS category, tcat.id as cat_id FROM tekkenposts tp JOIN tekkencategories tcat ON tp.category = tcat.id  WHERE tp.id = $1`,
      [slug.id]
    )
  ).rows;

  async function handleUpdate(formData) {
    "use server";
    const title = formData.get("title");
    const content = formData.get("body");
    const category = formData.get("category");
    const img = formData.get("image");
    const link = formData.get("link");
    const id = formData.get("hiddenId");

    await db.query(
      `UPDATE tekkenposts SET title = $1, content = $2, category = $3, img = $4, link = $5 WHERE id = $6`,
      [title, content, category, img, link, id]
    );
    revalidatePath(`/posts/${id}`);
    redirect(`/posts/${id}`);
  }

  return (
    <div className="flex flex-col gap-3">
      <h2 className="self-center text-3xl p-5">Edit post</h2>
      <form
        action={handleUpdate}
        className="bg-gradient-to-br from-pink-900 to-blue-950 flex flex-col gap-2 w-11/12 self-center p-3"
      >
        <label htmlFor="title">Title</label>
        <input
          name="title"
          id="title"
          type="text"
          className="bg-black/40"
          required
          defaultValue={post[0].title}
        ></input>
        <label htmlFor="body">Body text</label>
        <textarea
          name="body"
          id="body"
          type="text"
          className="bg-black/40"
          required
          defaultValue={post[0].content}
        ></textarea>
        <label htmlFor="category">Post category</label>
        <select name="category" id="category" className="bg-black/40" required>
          <option className="bg-black/40" value={post[0].cat_id}>
            {post[0].category}
          </option>
          {categories.map((category) => (
            <option
              className="bg-black/40"
              key={category.id}
              value={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>
        <label htmlFor="image">Image address</label>
        <input
          name="image"
          id="image"
          type="text"
          className="bg-black/40"
          defaultValue={post[0].img}
        ></input>
        <label htmlFor="link">Video Link</label>
        <input
          name="link"
          id="link"
          type="text"
          className="bg-black/40"
          defaultValue={post[0].link}
        ></input>
        <input
          name="hiddenId"
          id="hiddenId"
          type="hidden"
          value={post[0].id}
        ></input>
        <button type="submit" className="bg-pink-700">
          Update
        </button>
      </form>
      <Image
        className="w-1/2 self-center py-9"
        src={dvj}
        width={1000}
        height={1000}
        alt="Devil Jin"
      />
    </div>
  );
}
