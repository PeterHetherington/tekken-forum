import { db } from "@/utils/utilities";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Image from "next/image";
import dvj from "../../../public/devil-jin.png";

export default async function Create() {
  const categories = (await db.query(`SELECT * FROM tekkencategories`)).rows;

  async function handlePost(formData) {
    "use server";
    const title = formData.get("title");
    const content = formData.get("body");
    const category = formData.get("category");
    const img = formData.get("image");
    const link = formData.get("link");

    console.log(title);
    console.log(content);
    console.log(category);
    console.log(img);
    console.log(link);

    await db.query(
      `INSERT INTO tekkenPosts (title, content, category, img, link) VALUES ($1, $2, $3, $4, $5)`,
      [title, content, category, img, link]
    );
    revalidatePath(`/posts`);
    redirect(`/posts`);
  }

  return (
    <div className="flex flex-col gap-3">
      <h2 className="self-center text-3xl p-5">Create a new post</h2>
      <form
        action={handlePost}
        className="bg-gradient-to-br from-pink-900 to-blue-950 flex flex-col gap-2 w-11/12 self-center p-3"
      >
        <label htmlFor="title">Title</label>
        <input
          name="title"
          id="title"
          type="text"
          className="bg-black/40"
          required
        ></input>
        <label htmlFor="body">Body text</label>
        <textarea
          name="body"
          id="body"
          type="text"
          className="bg-black/40"
          required
        ></textarea>
        <label htmlFor="category">Post category</label>
        <select name="category" id="category" className="bg-black/40" required>
          <option className="bg-black/40"></option>
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
        ></input>
        <label htmlFor="link">Video Link</label>
        <input
          name="link"
          id="link"
          type="text"
          className="bg-black/40"
        ></input>
        <button type="submit" className="bg-pink-700">
          Post
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
