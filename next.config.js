const withMdxEnhanced = require('next-mdx-enhanced')

const defaultFrontmatter = {
  title: 'Remember to add a title!',
  description: 'Remember to add a description!',
  author: 'Steve Ruiz',
  twitter: '@steveruizok',
  avatar: '/avatars/@steveruizok.webp',
  hero: '/images/article.webp',
  keywords: 'design',
  date: '1/1/2020',
  location: 'London',
}

module.exports = withMdxEnhanced({
  layoutPath: 'layouts',
  defaultLayout: true,
  fileExtensions: ['mdx', 'md'],
  remarkPlugins: [require('remark-slug')],
  rehypePlugins: [require('@mapbox/rehype-prism')],
  extendFrontMatter: {
    process: (_, frontMatter) => {
      const matter = {
        ...defaultFrontmatter,
        ...frontMatter,
      }

      const date = new Date(matter.date)

      return {
        ...matter,
        dateTime: date.getTime(),
        date: date.toLocaleDateString('en-us', {
          day: 'numeric',
          month: 'long',
          weekday: 'long',
          year: 'numeric',
        }),
        slug: matter.__resourcePath.replace(/\.mdx$/, ''),
      }
    },
    phase: 'both',
  },
})({})
