import * as React from "react";
import { styled } from "~stitches.config";
import { PostListItem } from "~types";
import { PostLink } from "./post-link";

interface PostListProps {
  posts: PostListItem[];
}

export function PostList({ posts }: PostListProps) {
  return (
    <List>
      {posts.map((post) => (
        <li key={post.slug}>
          <PostLink post={post} />
        </li>
      ))}
    </List>
  );
}

const List = styled("ul", {
  listStyleType: "none",
  m: 0,
  mt: "-$1",
  p: 0,
  display: "flex",
  flexDirection: "column",
  gap: "$5",
});
