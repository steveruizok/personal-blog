import * as React from "react";
import { styled } from "~stitches.config";
import { PostListItem } from "~types";
import { PostLinkSmall } from "./post-link-small";

interface PostListSmallProps {
  posts: PostListItem[];
}

export function PostListSmall({ posts }: PostListSmallProps) {
  return (
    <List>
      {posts.map((post) => (
        <li key={post.slug}>
          <PostLinkSmall post={post} />
        </li>
      ))}
    </List>
  );
}

const List = styled("ul", {
  display: "flex",
  flexDirection: "column",
  gap: 0,
  listStyleType: "none",
  m: 0,
  p: 0,
});
