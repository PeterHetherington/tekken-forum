import Image from "next/image";
import dvj from "../../public/devil-jin.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Image
        className="w self-center py-7"
        src={dvj}
        width={500}
        height={500}
        alt="Devil Jin"
      />
      <h1 className="text-3xl self-center py-5 font-bold">Welcome</h1>
      <p>Thanks for visiting</p>
      <p className="px-10 text-center py-5">
        This is a forum made for tekken posts only. Be respectful to others &
        avoid posting any unrelated content
      </p>
      <p>Enjoy!</p>
    </div>
  );
}
