import { styled } from './theme'
import { Children, useRef, useEffect } from 'react'

const Button = styled.div({
  height: 48,
  width: 48,
  overflow: 'hidden',
  position: 'relative',
  display: 'grid',
})

const Icon = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gridArea: '1/1',
  animationFillMode: 'forwards',
  animationDuration: '400ms',
})

export default function RotatingIcons({
  current,
  children,
}: {
  current: number
  children: React.ReactNode
}) {
  const icons = Children.toArray(children)

  const rPrevious = useRef(current)

  useEffect(() => {
    rPrevious.current = current
  })

  const isInitial = current === rPrevious.current
  const previous = current === 0 ? icons.length - 1 : current - 1

  return (
    <Button>
      {icons.map((child, i) => {
        const isCurrent = i === current
        const isPrevious = i === previous
        const isInstant = isInitial || !(isCurrent || isPrevious)

        return (
          <Icon
            key={i}
            style={{
              animationDuration: isInstant ? '0ms' : '400ms',
              animationName: isCurrent ? 'rise' : 'set',
            }}
          >
            {child}
          </Icon>
        )
      })}
    </Button>
  )
}
