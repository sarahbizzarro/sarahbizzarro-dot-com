export type Artwork = {
  path: string
  name: string
  year: string
  medium: string
}

export type PostData = {
  title: string
  date: string
  preview: string
}

export type Post = {
  data: PostData
  content: string
  slug: string
}
