import { ReactNode } from 'react'

interface FooterProps {
    children?: ReactNode
}

export const Footer = ({ children }: FooterProps) => {
  return <footer className='bg-zinc-900 h-64'>Footer</footer>
}