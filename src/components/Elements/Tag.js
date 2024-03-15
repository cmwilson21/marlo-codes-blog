import React from "react";
import Link from "next/link";
import { cx } from "@/src/utils";

const Tag = ({ link = "#", name, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-3 px-10 bg-dark text-light rounded-full capitalize text-sm font-bold transition-all hover:bg-teal-100 border-2 border-solid hover:text-dark",
        props.className
      )}
    >
      {name}
    </Link>
  );
};

export default Tag;
