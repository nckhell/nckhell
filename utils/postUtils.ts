import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

// structure of a post
type Post = {
  frontMatter: {
    [key: string]: string
  }
  slug: string
  content: string
}

const POSTS_PATH = join(process.cwd(), 'content/posts')

/**
 * Get the file paths of all available list of posts
 */
const getPostsFilePaths = (): string[] =>
  fs.readdirSync(POSTS_PATH).filter((path) => /\.mdx?$/.test(path))

/**
 * Get a single post
 */
export const getPost = (slug: string): Post => {
  const fullPath = join(POSTS_PATH, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  const { data, content } = matter(fileContents)

  return { frontMatter: data, slug, content }
}

/**
 * Get all posts
 */
export const getAllPosts = () => {
  const filePaths = getPostsFilePaths()

  // Read each file and extract front matter
  const posts = filePaths.map((filePath) => {
    const mdWithData = fs.readFileSync(join(POSTS_PATH, filePath), 'utf-8')

    const { data } = matter(mdWithData)

    return {
      frontMatter: data,
      slug: filePath.split('.')[0],
    }
  })

  return posts
}
