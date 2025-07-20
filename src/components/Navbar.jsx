import Link from "next/link";
import tekken from "../app/favicon.ico";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex space-x-10 bg-gray-900 items-center text-xl">
      <Link href={"/"}>
        <Image src={tekken} width={50} height={50} alt="Home" />
      </Link>
      <Link href={"/"}>Home</Link>
      <Link href={"/posts"}>Posts</Link>
      <Link href={"/create"}>Create post</Link>
    </nav>
  );
}
