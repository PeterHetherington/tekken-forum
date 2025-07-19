import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function PostCard(props) {
  return (
    <div key={props.id}>
      <Link href={`/posts/${props.id}`}>
        <h2>{props.title}</h2>
        <div className="image-container">
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
