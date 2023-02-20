export interface Post {
  frontMatter: {
    title: string
    date: string
    preview: string
    labels: string
    wip: 'true' | 'false'
  }
  slug: string
}
