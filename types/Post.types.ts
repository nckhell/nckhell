export interface Post {
  frontMatter: {
    title: string
    date: string
    preview: string
    labels: string
  }
  slug: string
}
