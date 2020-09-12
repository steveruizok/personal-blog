import { styled, IconButton } from "./theme"
import { Children, useRef, useEffect } from "react"

const Icon = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: 0,
  left: 0,
  height: "100%",
  width: "100%",
  animationFillMode: "forwards",
  animationDuration: "400ms",
})

export default function RotatingIcons({
  current,
  children,
  ...rest
}: {
  current: number
} & React.HTMLProps<HTMLButtonElement>) {
  const icons = Children.toArray(children)

  const rPrevious = useRef(current)

  useEffect(() => {
    rPrevious.current = current
  })

  const isInitial = current === rPrevious.current
  const previous = current === 0 ? icons.length - 1 : current - 1

  return (
    <IconButton {...rest}>
      {icons.map((child, i) => {
        const isCurrent = i === current
        const isPrevious = i === previous
        const isInstant = isInitial || !(isCurrent || isPrevious)

        return (
          <Icon
            key={i}
            style={{
              animationDuration: isInstant ? "0ms" : "400ms",
              animationName: isCurrent ? "rise" : "set",
            }}
          >
            {child}
          </Icon>
        )
      })}
    </IconButton>
  )
}
