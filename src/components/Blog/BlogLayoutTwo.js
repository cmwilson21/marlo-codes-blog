import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogLayoutTwo = ({ blog }) => {
  return (
    <div className="grid grid-cols-12 gap-4 items-center text-dark">
      <Link
        href={blog.url}
        className="col-span-4 h-full rounded-xl overflow-hidden"
      >
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className="aspect-square w-full h-full object-cover object-center"
        />
      </Link>
      <div className="col-span-8 w-full">
        <span className="uppercase text-accent font-semibold text-sm">
          {blog.tags[0]}
        </span>
        <Link href={blog.url} className="inline-block my-1" />
        <h2 className="font-semibold capitalize text-lg">
          <span className="bg-gradient-to-r from-teal-100 to-teal-100 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-400 ">
            {blog.title}
          </span>
        </h2>
      </div>
    </div>
  );
};

export default BlogLayoutTwo;
