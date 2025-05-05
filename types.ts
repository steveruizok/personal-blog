export interface PageFrontmatter {
  title: string;
}

export interface Page {
  slug: string;
  content: string;
  data: PageFrontmatter;
}

export interface PostFrontmatter {
  title: string;
  date: string;
  hero: string;
  status: string;
  description: string;
}

export interface Post {
  index: number;
  date: number;
  slug: string;
  content: string;
  data: PostFrontmatter;
}

export interface PostListItem {
  slug: string;
  url: string;
  data: PostFrontmatter;
}

export type Content = {
  pages: Page[];
  posts: Post[];
};

type Box = {
  type: "box";
  props: {
    color: string;
    height: number;
    width: number;
  };
};

type Polygon = {
  type: "polygon";
  props: {
    color: string;
    height: number;
    width: number;
    sides: number;
  };
};

type PolyLine = {
  type: "polyline";
  props: {
    color: string;
    points: number[];
  };
};

type Shapes = Box | Polygon | PolyLine;

// const properties: Shapes['props'] = {
// 	color: 'black',
// 	height: 12,
// 	width: 12,
// 	sides: 4,
// 	points: [],
// }

// function setProp<T extends keyof Shapes['props']>(
// 	prop: T,
// 	value: Shapes['props'][T]
// ) {
// 	properties[prop] = value
// }

// type SmooshedObjectUnion<T> = {
// 	[K in T extends infer P ? keyof P : never]: T extends infer P
// 		? K extends keyof P
// 			? P[K]
// 			: never
// 		: never
// }

type MaybeValue<T, K> = K extends keyof T ? T[K] : never;
type ValueInUnion<T, K> = T extends infer P ? MaybeValue<P, K> : never;
type KeysOfUnion<T> = T extends infer P ? keyof P : never;

type SmooshedObjectUnion<T> = {
  [K in KeysOfUnion<T>]: ValueInUnion<T, K>;
};

type DistributedIdentity<T> = {
  [K in T extends unknown ? keyof T : never]: T extends { [_ in K]: infer V }
    ? V
    : never;
};

type AllProperties = SmooshedObjectUnion<Shapes["props"]>;

const properties: AllProperties = {
  color: "black",
  height: 12,
  width: 12,
  sides: 4,
  points: [],
};

function setProp<T extends keyof AllProperties>(
  prop: T,
  value: AllProperties[T],
) {
  properties[prop] = value;
}

setProp("color", "black");
setProp("height", 32);
