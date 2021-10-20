import * as React from "react"
import { PostListItem } from "~types"
import Image from "next/image"
import Link from "next/link"
import { styled } from "~stitches.config"

interface PostLinkProps {
  post: PostListItem
}

export function PostLink({ post }: PostLinkProps) {
  return (
    <Link href={post.url} passHref>
      <LinkContainer>
        <Image
          src={post.data.hero}
          alt={post.data.title}
          width={720}
          height={400}
          objectFit="cover"
        />
        <Content>
          <h3>{post.data.title}</h3>
          <p>{post.data.description}</p>
          <time dateTime={post.data.date}>{post.data.date}</time>
        </Content>
      </LinkContainer>
    </Link>
  )
}

const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 0,
  pb: "$1",
  "& > h3": {
    m: 0,
    pt: "$2",
  },
  "& > p": {
    my: 0,
    px: 0,
    py: "$0",
  },
  "& > time": {
    fontSize: "$0",
    opacity: 0.5,
  },
})

const LinkContainer = styled("a", {
  p: "$1",
  mx: "-$1",
  display: "grid",
  gap: "$0",
  textDecoration: "none",
  transition: "all .12s",
  // border: "2px solid transparent",
  // "&:hover": {
  //   border: "2px solid $codeText",
  // },
})
