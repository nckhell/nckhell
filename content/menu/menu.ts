export type MenuItemType = {
  text: string
  url: string
}

export const menu: MenuItemType[] = [
  {
    text: 'Home',
    url: '/',
  },
  {
    text: 'Who Am I',
    url: '/who-am-i',
  },
  {
    text: 'Blog',
    url: '/blog',
  }
]
