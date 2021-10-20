import * as React from "react"
import { styled } from "~stitches.config"

export { Sun, CloudRain, Moon } from "react-feather"

export const Button = styled("button", {
  height: 48,
  width: 48,
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
  color: "$text",
  backgroundColor: "$surface",
  borderColor: "$background",
  borderWidth: "1px",
  borderRadius: "2px",
  outline: "none",
  padding: 0,
})

export const Button2 = styled("button", {
  height: 48,
  width: 48,
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  color: "$text",
  background: "transparent",
  border: "none",
  outline: "none",
  borderRadius: 4,
  cursor: "pointer",
  "&:hover": {
    background: "rgba(144, 144, 144, .1)",
  },
})

export const Icon = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  height: 48,
  width: 48,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

export const RotatingIconButton = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [current, setCurrent] = React.useState(0)

  const rPrevious = React.useRef(current)

  React.useEffect(() => {
    rPrevious.current = current
  }, [current])

  function cycleCurrent() {
    if (current === React.Children.toArray(children).length - 1) {
      setCurrent(0)
    } else {
      setCurrent(current + 1)
    }
  }

  const previous = rPrevious.current
  const isInitial = current === previous

  return (
    <Button>
      {React.Children.map(children, (child, i) => {
        const isCurrent = i === current

        return <Icon key={i}>{child}</Icon>
      })}
    </Button>
  )
}

export function RotatingIconButtonSimple({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Button>
      {React.Children.map(children, (child, i) => {
        return <Icon key={i}>{child}</Icon>
      })}
    </Button>
  )
}

export function RotatingIconButtonWithTransition({
  children,
}: {
  children: React.ReactNode
}) {
  const [current, setCurrent] = React.useState(0)

  const rPrevious = React.useRef(current)

  React.useEffect(() => {
    rPrevious.current = current
  }, [current])

  function cycleCurrent() {
    if (current === React.Children.toArray(children).length - 1) {
      setCurrent(0)
    } else {
      setCurrent(current + 1)
    }
  }

  return (
    <Button onClick={cycleCurrent}>
      {React.Children.map(children, (child, i) => {
        const isCurrent = i === current

        return (
          <Icon
            key={i}
            style={{
              transition: "all .5s",
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

export function RotatingIconButtonWithCSSAnimation({
  children,
}: {
  children: React.ReactNode
}) {
  const [current, setCurrent] = React.useState(0)

  function cycleCurrent() {
    if (current === React.Children.toArray(children).length - 1) {
      setCurrent(0)
    } else {
      setCurrent(current + 1)
    }
  }

  return (
    <Button onClick={cycleCurrent}>
      {React.Children.map(children, (child, i) => {
        const isCurrent = i === current

        return (
          <Icon
            key={i}
            style={{
              animationFillMode: "forwards",
              animationDuration: "400ms",
              animationName: isCurrent ? "rise" : "set",
            }}
          >
            {child}
          </Icon>
        )
      })}
    </Button>
  )
}

export function RotatingIconButtonWithCSSAnimationNoOverflow({
  children,
}: {
  children: React.ReactNode
}) {
  const [current, setCurrent] = React.useState(0)

  function cycleCurrent() {
    if (current === React.Children.toArray(children).length - 1) {
      setCurrent(0)
    } else {
      setCurrent(current + 1)
    }
  }

  return (
    <Button onClick={cycleCurrent} style={{ overflow: "hidden" }}>
      {React.Children.map(children, (child, i) => {
        const isCurrent = i === current

        return (
          <Icon
            key={i}
            style={{
              animationFillMode: "forwards",
              animationDuration: "400ms",
              animationName: isCurrent ? "rise" : "set",
            }}
          >
            {child}
          </Icon>
        )
      })}
    </Button>
  )
}

export function RotatingIconButtonWithCSSAnimationInitial({
  children,
}: {
  children: React.ReactNode
}) {
  const [current, setCurrent] = React.useState(0)
  const [isInitial, setIsInitial] = React.useState(true)

  function cycleCurrent() {
    if (isInitial) {
      setIsInitial(false)
    }

    if (current === React.Children.toArray(children).length - 1) {
      setCurrent(0)
    } else {
      setCurrent(current + 1)
    }
  }

  return (
    <Button onClick={cycleCurrent} style={{ overflow: "hidden" }}>
      {React.Children.map(children, (child, i) => {
        const isCurrent = i === current

        return (
          <Icon
            key={i}
            style={{
              animationFillMode: "forwards",
              animationDuration: isInitial ? "0ms" : "400ms",
              animationName: isCurrent ? "rise" : "set",
            }}
          >
            {child}
          </Icon>
        )
      })}
    </Button>
  )
}

export function RotatingIconButtonWithCSSAnimationFinal({
  children,
}: {
  children: React.ReactNode
}) {
  const [current, setCurrent] = React.useState(0)
  const [isInitial, setIsInitial] = React.useState(true)

  function cycleCurrent() {
    if (isInitial) {
      setIsInitial(false)
    }

    if (current === React.Children.toArray(children).length - 1) {
      setCurrent(0)
    } else {
      setCurrent(current + 1)
    }
  }

  return (
    <Button2 onClick={cycleCurrent} style={{ overflow: "hidden" }}>
      {React.Children.map(children, (child, i) => {
        const isCurrent = i === current

        return (
          <Icon
            key={i}
            style={{
              animationFillMode: "forwards",
              animationDuration: isInitial ? "0ms" : "400ms",
              animationName: isCurrent ? "rise" : "set",
            }}
          >
            {child}
          </Icon>
        )
      })}
    </Button2>
  )
}
