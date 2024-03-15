import { compareDesc, parseISO } from "date-fns";

export const cx = (...classNames) => classNames.filter(Boolean).join(" ");

export const sortBlogs = (blogs) => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};
// The above function is used to sort the blogs by their published date in descending order by taking in an array of blogs, slicing to separate, sorting by comparing blog a to blog b, and using `date-fns` resources to sort and parse. This is used in the HomeCoverSection component to display the blogs in the correct order.
