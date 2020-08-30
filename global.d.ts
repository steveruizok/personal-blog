declare namespace Blog {
  interface Page {
    title: string;
  }

  interface Post {
    title: string;
    date: number;
    slug: string;
    layout: string;
    description?: string;
    keywords?: string;
    __resourcePath: string;
  }
}
