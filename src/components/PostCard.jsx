import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function PostCard(props) {
  return (
    <div key={props.id} className="bg-gray-800 p-3 rounded-2xl">
      <Link href={`/posts/${props.id}`}>
        <h2 className="py-1 pb-3">{props.title}</h2>
        <div>
          <Image
            className="object-cover aspect-video w-full"
            src={props.src}
            width={1000}
            height={1000}
            alt={props.title}
            //   onError={(e) => {
            //     e.currentTarget.onerror = null;
            //     e.currentTarget.src = props.fallback;
            //   }}
          />
        </div>
      </Link>
    </div>
  );
}
