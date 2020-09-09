import { useRef, useState, useEffect, useMemo } from 'react'

export default function RotatingIcon({
  current,
  states = {},
}: {
  current: number
  states?: Record<string, React.ReactNode>
}) {
  const prev = useRef<number>(current)

  useEffect(() => {
    prev.current = current
  }, [current])

  const icons = Object.entries(states)

  const [cName, cIcon] = icons[current]
  const [pName, pIcon] = icons[prev.current]

  return (
    <div
      style={{
        position: 'relative',
        height: 48,
        width: 48,
        overflow: 'hidden',
      }}
    >
      {icons.map(([name, icon], i) => {
        return (
          <MovingIcon key={name} active={i === current}>
            {icon}
          </MovingIcon>
        )
      })}
    </div>
  )
}

function MovingIcon({
  active,
  children,
}: {
  active: boolean
  children: React.ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={ref}
      style={{
        height: 24,
        width: 24,
        position: 'absolute',
        left: 12,
        top: 12,
        animation: `forwards .4s ease-in-out ${active ? 'rise' : 'set'}`,
      }}
    >
      {children}
    </div>
  )
}
