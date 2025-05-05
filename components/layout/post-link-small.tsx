import * as React from "react";
import { PostListItem } from "~types";
import Link from "next/link";
import Image from "next/image";
import { styled } from "~stitches.config";

interface PostLinkSmallProps {
  post: PostListItem;
}

export function PostLinkSmall({ post }: PostLinkSmallProps) {
  return (
    <Link href={post.url} passHref>
      <LinkContainer>
        <ImageContainer css={{ backgroundImage: `url("${post.data.hero}")` }} />
        <Content>
          <h3>{post.data.title}</h3>
          <p>{post.data.description}</p>
          <time dateTime={post.data.date}>{post.data.date}</time>
        </Content>
      </LinkContainer>
    </Link>
  );
}

const LinkContainer = styled("article", {
  position: "relative",
  px: "$1",
  mx: "-$1",
  py: "$2",
  textDecoration: "none",
  display: "grid",
  gap: "$1",
  gridTemplateColumns: "2fr 5fr",
  transition: "all .2s",
  cursor: "pointer",
  // border: "2px solid transparent",
  // "&:hover": {
  //   border: "2px solid $codeText",
  // },
});

const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$0",
  "& h3": {
    m: 0,
    pt: "$0",
  },
  "& p": {
    my: "$0",
    p: 0,
  },
  "& time": {
    fontSize: "$0",
    opacity: 0.7,
    pb: "$0",
  },
});

const ImageContainer = styled("div", {
  height: "100%",
  width: "100%",
  position: "relative",
  backgroundSize: "cover",
  backgroundPosition: "center center",
});
