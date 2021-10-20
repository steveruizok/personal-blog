export {}

interface AABB {
  minX: number
  midX: number
  maxX: number
  minY: number
  midY: number
  maxY: number
  width: number
  height: number
}

interface Shape {
  id: string
  point: number[]
  size: number[]
}

interface State {
  shapes: Shape[]
  selection: Shape[]
  viewport: AABB
}

interface SnapX {
  target: AABB
  from: "midX" | "minX" | "maxX"
  to: "midX" | "minX" | "maxX"
}

interface SnapY {
  target: AABB
  from: "midY" | "minY" | "maxY"
  to: "midY" | "minY" | "maxY"
}

function getAABB({ point: [x, y], size: [w, h] }: Shape) {
  return {
    minX: x,
    midX: x + w / 2,
    maxX: x + w,
    minY: y,
    midY: y + h / 2,
    maxY: y + h,
    width: w,
    height: h,
  }
}

const boundsContain = (a: AABB, b: AABB) =>
  a.minX < b.minX && a.minY < b.minY && a.maxY > b.maxY && a.maxX > b.maxX

const boundsCollide = (a: AABB, b: AABB) =>
  !(a.maxX < b.minX || a.minX > b.maxX || a.maxY < b.minY || a.minY > b.maxY)

const expandBounds = (a: AABB, b: AABB) => {
  const minX = Math.min(a.minX, b.minX)
  const maxX = Math.max(a.maxX, b.maxX)
  const minY = Math.min(a.minY, b.minY)
  const maxY = Math.max(a.maxY, b.maxY)

  return {
    minX,
    midX: (minX + maxX) / 2,
    maxX,
    minY,
    midY: (minY + maxY) / 2,
    maxY,
    width: maxX - minX,
    height: maxY - minY,
  }
}

const isCloseEnough = (distance: number) => Math.abs(distance) < 5

function getSnappableAABBs(state: State) {
  const { shapes, selection, viewport } = state
  return shapes
    .filter((shape) => !selection.includes(shape))
    .map(getAABB)
    .filter(
      (bounds) =>
        boundsContain(viewport, bounds) || boundsCollide(viewport, bounds)
    )
}

function getSelectionAABB(state: State) {
  const { selection } = state
  return selection.map(getAABB).reduce((a, b, i) => {
    if (i === 0) return b
    return expandBounds(a, b)
  }, {} as AABB)
}

const xs = ["midX", "minX", "maxX"] as const
const ys = ["midY", "minY", "maxY"] as const

function getSnaps(bounds: AABB, others: AABB[]) {
  let snapX: SnapX
  let snapY: SnapY

  others.forEach((target) => {
    xs.forEach((from) =>
      xs.forEach((to) => {
        if (snapX || !isCloseEnough(bounds[from] - others[to])) return
        snapX = { target, from, to }
      })
    )

    ys.forEach((from) =>
      ys.forEach((to) => {
        if (snapY || !isCloseEnough(bounds[from] - others[to])) return
        snapY = { target, from, to }
      })
    )
  })

  return { snapX, snapY }
}

function getOffsetFromSnaps(bounds: AABB, snapX?: SnapX, snapY?: SnapY) {
  return [
    snapX ? bounds[snapX.from] - snapX.target[snapX.to] : 0,
    snapY ? bounds[snapY.from] - snapX.target[snapY.to] : 0,
  ]
}

function getSnapLines(bounds: AABB, snapX?: SnapX, snapY?: SnapY) {
  const pointsX: number[][] = []
  const pointsY: number[][] = []

  if (snapX) {
    const x = bounds[snapX.from]
    pointsX.push([x, snapX.target.minY], [x, snapX.target.maxY])

    if (snapX.from === "midX") {
      pointsX.push([x, bounds.midY])
    } else {
      pointsX.push([x, bounds.minY], [x, bounds.maxY])
    }

    pointsX.sort((a, b) => a[1] - b[1])
  }

  if (snapY) {
    const y = bounds[snapY.from]
    pointsY.push([snapY.target.minX, y], [snapY.target.maxX, y])

    if (snapY.from === "midY") {
      pointsY.push([bounds.midY, y])
    } else {
      pointsY.push([bounds.minY, y], [bounds.maxY, y])
    }

    pointsY.sort((a, b) => a[0] - b[0])
  }

  return {
    pointsX,
    pointsY,
  }
}

function getSelectionSnapOffset(state: State) {
  const bounds = getSelectionAABB(state)
  const others = getSnappableAABBs(state)
  const snaps = getSnaps(bounds, others)
  return getOffsetFromSnaps(bounds, snaps.snapX, snaps.snapY)
}

const sub = (a: number[], b: number[]) => a.map((n, i) => n - b[i])
const add = (a: number[], b: number[]) => a.map((n, i) => n + b[i])

function dragShape(initialShape: Shape, point: number[], origin: number[]) {
  let delta = sub(point, origin)

  return {
    ...initialShape,
    point: add(initialShape.point, delta),
  }
}

class AppState {
  shapes: Record<string, Shape> = {
    "1": {
      id: "1",
      point: [0, 0],
      size: [100, 100],
    },
  }

  snapshot?: {
    shape: Shape
    point: number[]
  }

  onDragStart(id: string, point: number[]) {
    this.snapshot = {
      shape: { ...this.shapes[id] },
      point,
    }
  }

  onDragMove(point: number[]) {
    const { shapes, snapshot } = this
    if (snapshot) {
      const shape = this.shapes[snapshot.shape.id]
      const delta = sub(point, snapshot.point)
      shape.point = add(snapshot.shape.point, delta)
    }
  }

  onDragEnd(point: number[]) {
    this.snapshot = undefined
  }
}
