import { styled, Grid, Text, Avatar, Box, A, Image, Heading1 } from './theme'

const Container = styled(Grid, {
  gridTemplateColumns: 'auto 1fr',
  gridGap: '$2',
  alignItems: 'center',
  mt: '$5',
  mb: '$4',
})

const AuthorAvatar = styled(Avatar, {
  height: 72,
  width: 72,
  borderRadius: '100%',
  backgroundColor: '$muted',
})

export default function Greeting({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <AuthorAvatar src="/avatars/@steveruizok.jpg" />
      <Text css={{ my: 0 }}>
        {children}
        <b>Hi, I’m Steve.</b> I write about design, code, and creative tools. If
        you’d like to say hello, follow me on{' '}
        <A href="https://twitter.com/steveruizok">twitter</A> or{' '}
        <A href="https://github.com/steveruizok">github</A>.
      </Text>
    </Container>
  )
}
