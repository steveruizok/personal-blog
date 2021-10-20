import * as React from "react"
import { Icon } from "~components/icon"
import { Divider } from "~components/mdx-components/generic"
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
      <SmallIcon />
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
  alignSelf: "center",
  backgroundColor: "black",
  height: 16,
  width: 16,
})
