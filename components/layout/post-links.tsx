import * as React from "react"
import { styled } from "~stitches.config"
import { PostListItem } from "~types"
import { PostListSmall } from "./post-list-small"

interface PostLinksProps {
  next: PostListItem | null
  prev: PostListItem | null
}

export function PostLinks({ next, prev }: PostLinksProps) {
  return (
    <Container>
      <TwitterLink href="https://twitter.com/steveruizok">
        <svg fill="currentColor" viewBox="0 0 24 24">
          <title>Twitter</title>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
        </svg>
      </TwitterLink>
      <PostListSmall posts={[next, prev].filter(Boolean) as PostListItem[]} />
    </Container>
  )
}

const Container = styled("div", {
  my: "$5",
  display: "flex",
  flexDirection: "column",
  gap: "$5",
})

const SmallIcon = styled("div", {
  display: "inline-block",
  backgroundColor: "$text",
  height: 16,
  width: 16,
})

const TwitterLink = styled("a", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  textDecoration: "none",
  alignSelf: "center",
  borderRadius: "8px",
  px: "$6",
  gap: "$2",
  "& > svg": {
    position: "relative",
    top: 0,
    width: 32,
    height: 32,
    transition: "all .2s ease-in-out",
  },
})
