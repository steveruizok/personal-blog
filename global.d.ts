declare namespace Blog {
  interface Page {
    title: string
  }

  interface Post {
    author: string
    twitter: string
    avatar: string
    title: string
    location?: string
    hero: string
    date: string
    dateTime: number
    description?: string
    slug: string
    layout: string
    keywords?: string
    readingTime: {
      text: string
      minutes: number
      time: number
      words: number
    }
    __resourcePath: string
  }
}
