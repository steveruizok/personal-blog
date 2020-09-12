import { useRouter } from "next/router"

export default function usePagination(posts: Blog.Post[], postsPerPage = 10) {
  const { query, push } = useRouter()

  const max = Math.floor(posts.length / postsPerPage)

  const page = query?.page
    ? Math.min(
        parseInt(Array.isArray(query.page) ? query.page[0] : query.page),
        max
      )
    : 0

  function pageForward() {
    push(`/?page=${page + 1}`)
  }

  function pageBackward() {
    push(`/?page=${page - 1}`)
  }

  return {
    current: posts.slice(page * postsPerPage, (page + 1) * postsPerPage),
    pageBackward: page > 0 ? pageBackward : undefined,
    pageForward:
      page < Math.floor(Math.floor(posts.length / postsPerPage))
        ? pageForward
        : undefined,
  }
}
