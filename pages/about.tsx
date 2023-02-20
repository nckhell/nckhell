import Image from 'next/image'
import { ReactNode } from 'react'

import { Button } from '../components/button'
import { Card } from '../components/card'
import { Layout } from '../components/layout'
import { SEO } from '../components/seo'
import github from '../public/images/github.svg'
import linkedIn from '../public/images/linkedin.svg'
import profilePic from '../public/images/nick.jpeg'
import { getAge } from '../utils/getAge'

export default function Blog() {
  return (
    <>
      <SEO title="About" url="/about" />
      <div className="max-w-5xl mx-auto text-center px-4 sm:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-left">
            <div className="w-28">
              <Image
                src={profilePic}
                alt="Nick Hellemans"
                className="rounded-full"
              />
            </div>
            <div className="ml-6">
              <h3 className="font-mono-space">Nick Hellemans</h3>
              <p className="text-gray-500 text-lg">
                Product Enthusiast based in Antwerp, Belgium
              </p>
            </div>
          </div>
        </div>
        <div className="text-left mt-8 text-xl text-gray-700 leading-relaxed">
          <p>
            I&apos;m a {getAge('1993-11-30')}-year-old{' '}
            <span className="txt-clipping txt-clipping--affirmative font-bold">
              Product Developer, Builder, and Engineer
            </span>
            . I started designing and coding my first websites back in 2008 as a
            young teenager and since never stopped building stuff with
            technology.
          </p>
          <p className="mt-4">
            Besides technology, I always had a passion for the{' '}
            <span className="txt-clipping txt-clipping--affirmative font-bold">
              human body
            </span>{' '}
            so after graduating as a software engineer I decided to chase that
            dream and 5 years later I graduated as a{' '}
            <span className="txt-clipping txt-clipping--affirmative font-bold">
              Physiotherapist
            </span>
            .
          </p>
          <p className="mt-4">
            I have a strong analytical, technical, design, and clinical
            skillset. I love solving problems and can execute at high speed with
            great quality. I am hands-on type a guy and will not hesitate to get
            my hands dirty writing code or to create some designs and prototypes
            in Figma.
          </p>
          <p className="mt-4">
            Currently{' '}
            <span className="txt-clipping txt-clipping--affirmative font-bold">
              Head of Product
            </span>{' '}
            at Awell Health. Working with an amazing team to build the future of
            healthcare.
          </p>
        </div>
        <div className="flex items-center gap-6 mt-4">
          <div>
            <a
              href="https://www.linkedin.com/in/nckhell/"
              target="_blank"
              title="LinkedIn"
              rel="noreferrer"
            >
              <Image
                src={linkedIn}
                width="32"
                alt="Nick Hellemans on LinkedIn"
              />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/nckhell/"
              target="_blank"
              title="Github"
              rel="noreferrer"
            >
              <Image src={github} alt="Nick Hellemans on Github" width="32" />
            </a>
          </div>
          <div className="relative -top-1">
            <a
              href="mailto:nickhellemans93@gmail.com"
              target="_blank"
              title="nickhellemans93@gmail.com"
              rel="noreferrer"
            >
              <Button size="sm" label="Email me" onClick={() => null} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 md:mt-12 py-16 md:py-24 lg:py-32 wave-bg-amber">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-8">
          <h1 className="mb-12 font-space-mono leading-tight text-4xl md:text-5xl">
            What you should <br />
            know about me
          </h1>
          <div className="grid gap-6 lg:gap-8 md:grid-cols-2 grid-flow-row auto-rows-max">
            <div className="">
              <Card color="lime" border="filled" stretch={true}>
                <div className="text-left">
                  <h4 className="text-xl md:text-2xl font-space-mono font-bold">
                    Bias Towards Action <span className="text-3xl">⚡</span>
                  </h4>
                  <p className="text-lg mt-4">
                    I make stuff happen and can execute at high speed with great
                    quality. I am always taking meaningful actions to drive
                    ideas and projects forward.
                  </p>
                </div>
              </Card>
            </div>
            <div className="">
              <Card color="lime" border="filled" stretch={true}>
                <div className="text-left">
                  <h4 className="text-xl md:text-2xl  font-space-mono font-bold">
                    Thinker & Creator <span className="text-3xl">🥸</span>
                  </h4>
                  <p className="text-lg mt-4">
                    I like to solve problems. From discovery to ideation to
                    implementation and testing. I value rapid prototyping to
                    quickly test hypotheses and validate ideas (some even call
                    me the "Prototyping Wizard" 🧙‍♂️).
                  </p>
                </div>
              </Card>
            </div>
            <div className="">
              <Card color="lime" border="filled" stretch={true}>
                <div className="text-left">
                  <h4 className="text-xl md:text-2xl  font-space-mono font-bold">
                    Breadth With Depth <span className="text-3xl">💡</span>
                  </h4>
                  <p className="text-lg mt-4">
                    I see myself as a generalist but with proficient depth.
                    I&apos;m always learning to uncover uncharted territories.
                  </p>
                </div>
              </Card>
            </div>
            <div className="">
              <Card color="lime" border="filled" stretch={true}>
                <div className="text-left">
                  <h4 className="text-xl md:text-2xl  font-space-mono font-bold">
                    Do It With Passion <span className="text-3xl">🔥</span>
                  </h4>
                  <p className="text-lg mt-4">
                    Passionate about technology, coding, building product, life,
                    healthcare, and more! Passion is what drives me in my
                    day-to-day.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Blog.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>
}
