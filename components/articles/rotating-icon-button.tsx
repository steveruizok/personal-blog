import { useState, useRef, useEffect, Children } from 'react'
import { styled } from '../theme'

export const Button = styled.button({
  height: 48,
  width: 48,
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$text',
  backgroundColor: '$surface',
  borderColor: '$background',
  borderWidth: '1px',
  borderRadius: '2px',
  outline: 'none',
  padding: 0,
})

export const Button2 = styled.button({
  height: 48,
  width: 48,
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  color: '$text',
  background: 'transparent',
  border: 'none',
  outline: 'none',
  borderRadius: 4,
  cursor: 'pointer',
  '&:hover': {
    background: 'rgba(144, 144, 144, .1)',
  },
})

export const Icon = styled.div({
  position: 'absolute',
  top: 0,
  left: 0,
  height: 48,
  width: 48,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export function RotatingIconButton({ children }) {
  const [current, setCurrent] = useState(0)

  const rPrevious = useRef(current)

  useEffect(() => {
    rPrevious.current = current
  }, [current])

  function cycleCurrent() {
    if (current === children.length - 1) {
      setCurrent(0)
    } else {
      setCurrent(current + 1)
    }
  }

  const previous = rPrevious.current
  const isInitial = current === previous

  return (
    <Button>
      {Children.map(children, (child, i) => {
        const isCurrent = i === current

        return <Icon key={i}>{child}</Icon>
      })}
    </Button>
  )
}

export function RotatingIconButtonSimple({ children }) {
  return (
    <Button>
      {Children.map(children, (child, i) => {
        return <Icon key={i}>{child}</Icon>
      })}
    </Button>
  )
}

export function RotatingIconButtonWithTransition({ children }) {
  const [current, setCurrent] = useState(0)

  const rPrevious = useRef(current)

  useEffect(() => {
    rPrevious.current = current
  }, [current])

  function cycleCurrent() {
    if (current === children.length - 1) {
      setCurrent(0)
    } else {
      setCurrent(current + 1)
    }
  }

  return (
    <Button onClick={cycleCurrent}>
      {Children.map(children, (child, i) => {
        const isCurrent = i === current

        return (
          <Icon
            key={i}
            style={{
              transition: 'all .5s',
              transform: `translateY(${isCurrent ? 0 : -100}%)`,
            }}
          >
            {child}
          </Icon>
        )
      })}
    </Button>
  )
}

export function RotatingIconButtonWithCSSAnimation({ children }) {
  const [current, setCurrent] = useState(0)

  function cycleCurrent() {
    if (current === children.length - 1) {
      setCurrent(0)
    } else {
      setCurrent(current + 1)
    }
  }

  return (
    <Button onClick={cycleCurrent}>
      {Children.map(children, (child, i) => {
        const isCurrent = i === current

        return (
          <Icon
            key={i}
            style={{
              animationFillMode: 'forwards',
              animationDuration: '400ms',
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

export function RotatingIconButtonWithCSSAnimationNoOverflow({ children }) {
  const [current, setCurrent] = useState(0)

  function cycleCurrent() {
    if (current === children.length - 1) {
      setCurrent(0)
    } else {
      setCurrent(current + 1)
    }
  }

  return (
    <Button onClick={cycleCurrent} style={{ overflow: 'hidden' }}>
      {Children.map(children, (child, i) => {
        const isCurrent = i === current

        return (
          <Icon
            key={i}
            style={{
              animationFillMode: 'forwards',
              animationDuration: '400ms',
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

export function RotatingIconButtonWithCSSAnimationInitial({ children }) {
  const [current, setCurrent] = useState(0)
  const [isInitial, setIsInitial] = useState(true)

  function cycleCurrent() {
    if (isInitial) {
      setIsInitial(false)
    }

    if (current === children.length - 1) {
      setCurrent(0)
    } else {
      setCurrent(current + 1)
    }
  }

  return (
    <Button onClick={cycleCurrent} style={{ overflow: 'hidden' }}>
      {Children.map(children, (child, i) => {
        const isCurrent = i === current

        return (
          <Icon
            key={i}
            style={{
              animationFillMode: 'forwards',
              animationDuration: isInitial ? '0ms' : '400ms',
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

export function RotatingIconButtonWithCSSAnimationFinal({ children }) {
  const [current, setCurrent] = useState(0)
  const [isInitial, setIsInitial] = useState(true)

  function cycleCurrent() {
    if (isInitial) {
      setIsInitial(false)
    }

    if (current === children.length - 1) {
      setCurrent(0)
    } else {
      setCurrent(current + 1)
    }
  }

  return (
    <Button2 onClick={cycleCurrent} style={{ overflow: 'hidden' }}>
      {Children.map(children, (child, i) => {
        const isCurrent = i === current

        return (
          <Icon
            key={i}
            style={{
              animationFillMode: 'forwards',
              animationDuration: isInitial ? '0ms' : '400ms',
              animationName: isCurrent ? 'rise' : 'set',
            }}
          >
            {child}
          </Icon>
        )
      })}
    </Button2>
  )
}
