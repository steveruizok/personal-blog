import { useRef, useState, useEffect, useMemo } from 'react'

export default function RotatingIcon({
  current,
  states = {},
}: {
  current: number
  states?: Record<string, React.ReactNode>
}) {
  const prev = useRef<number>(current)

  return (
    <div
      style={{
        position: 'relative',
        height: 48,
        width: 48,
        overflow: 'hidden',
      }}
    >
      {Object.entries(states).map(([name, child], i) => (
        <MovingIcon key={name} from={i - prev.current} to={i - current}>
          {child}
        </MovingIcon>
      ))}
    </div>
  )
}

function MovingIcon({
  from,
  to,
  children,
}: {
  from: number
  to: number
  children: React.ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.style.setProperty('transition', `none`)
    el.style.setProperty('transform', `translateY(${from * 48}px)`)
    el.style.setProperty('transition', `all .4s`)
    el.style.setProperty('transform', `translateY(${to * 48}px)`)
  }, [from, to])

  return (
    <div
      ref={ref}
      style={{
        height: 24,
        width: 24,
        position: 'absolute',
        left: 12,
        top: 12,
        transform: `translateY(${to * 48}px)`,
      }}
    >
      {children}
    </div>
  )
}
