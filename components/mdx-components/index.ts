import { Figure } from "./figure"
import { CodeBox } from "./codebox"
import { Tweet } from "./tweet"
import { CodeSandbox } from "./codesandbox"
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Blockquote,
  A,
  Divider,
  Paragraph,
  Table,
  THead,
  TR,
  TD,
  Video,
  UnorderedList,
  OrderedList,
} from "./generic"
import * as Articles from "./articles"

export const scope = {
  ...Articles,
}

export const components = {
  img: Figure,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
  blockquote: Blockquote,
  hr: Divider,
  a: A,
  p: Paragraph,
  table: Table,
  thead: THead,
  tr: TR,
  td: TD,
  video: Video,
  ol: OrderedList,
  ul: UnorderedList,
  Figure,
  CodeBox,
  Tweet,
  CodeSandbox,
}
