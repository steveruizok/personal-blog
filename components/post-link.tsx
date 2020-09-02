// @jsx jsx
import { jsx, Grid, Text, Box, Link as A } from 'theme-ui'
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
          sx={{
            cursor: 'pointer',
            gridTemplateColumns: '128px 1fr',
            gridAutoFlow: 'column',
            gap: 2,
            p: 3,
            mx: -3,
            borderRadius: 4,
            transition: 'all .18s',
            '&: hover': {
              bg: 'muted',
            },
          }}
        >
          <Box
            sx={{
              backgroundColor: '#ccc',
              borderRadius: 4,
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
              backgroundImage: `url(${hero})`,
            }}
          />
          <Box sx={{ minHeight: 96 }}>
            <header>
              <Text sx={{ fontSize: 4 }}>{title}</Text>
              <Text variant="textStyles.detail" sx={{ color: 'secondaryFill' }}>
                {date}
              </Text>
            </header>
            <Text
              variant="textStyles.detail"
              sx={{ mt: 2, color: 'secondaryFill' }}
            >
              {description}
            </Text>
            <footer>
              <Link href={slug}>
                <A sx={{ fontFamily: 'ui', fontSize: 2 }}>Read more »</A>
              </Link>
            </footer>
          </Box>
        </Grid>
      </article>
    </Link>
  )
}
