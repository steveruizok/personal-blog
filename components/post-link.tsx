import { Grid, Footer, Heading2, Text, Box, A } from './stitches'
import Link from 'next/link'

export default function PostLink({
  title,
  description,
  date,
  slug,
  hero,
}: Blog.Post) {
  return (
    <Link href={slug}>
      <article>
        <Grid
          css={{
            cursor: 'pointer',
            gridTemplateColumns: '128px 1fr',
            gridAutoFlow: 'column',
            gap: '$2',
            p: '$3',
            mx: '-$3',
            borderRadius: 4,
            transition: 'all .18s',
            '&:hover': {
              backgroundColor: '$gray200',
            },
          }}
        >
          <Box
            css={{
              backgroundColor: '#ccc',
              borderRadius: 4,
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
              backgroundImage: `url(${hero})`,
            }}
          />
          <Box css={{ minHeight: 96 }}>
            <header>
              <Heading2 css={{ fontSize: '$5', mt: 0, mb: '$1' }}>
                {title}
              </Heading2>
              <Text type="detail" css={{ color: '$secondaryFill' }}>
                {date}
              </Text>
            </header>
            <Text type="detail" css={{ mt: '$2', color: '$secondaryFill' }}>
              {description}
            </Text>
            <Footer css={{ mt: '$3' }}>
              <Link href={slug}>
                <A css={{ font: '$ui', fontSize: '$2' }}>Read more »</A>
              </Link>
            </Footer>
          </Box>
        </Grid>
      </article>
    </Link>
  )
}
