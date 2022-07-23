import Head from 'next/head'
import Link from 'next/link'
import Avatar from '../components/Avatar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div
      className={`${styles['hero']} ${styles['hero--pattern']}
                 flex flex-col items-center justify-center min-w-screen min-h-screen bg-gray-900`}
    >
      <Head>
        <title>Chi Nguyen</title>
        <link rel='icon' href='/favicon.ico' />

        <meta name='theme-color' content='#ffffff' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='Chi Nguyen' />
        <meta name='twitter:title' content="Chi Nguyen's Homepage" />
        <meta
          name='twitter:description'
          content='Chi Nguyen - Consultant and Frontend Architect'
        />
        <meta name='twitter:creator' content='@chistweets' />
        <meta property='og:url' content='https://cnguyen.de/' />
        <meta property='og:type' content='article' />
        <meta property='og:title' content="Chi Nguyen's Homepage" />
        <meta
          property='og:description'
          content='Chi Nguyen - Consultant and Frontend Architect'
        />
      </Head>
      <main className='text-center'>
        <div className={`${styles['entrance-from-bottom']}  pb-6`}>
          <Avatar />
          <h1 className='text-center text-gray-200 text-3xl sm:text-6xl lg:text-7xl leading-none tracking-tight mb-4'>
            Chi Nguyen
          </h1>
          <p className='text-center text-base px-2 mt-2 xs:text-xl sm:text-2xl xl:text-3xl font-light text-gray-400'>
            Consultant & Frontend architect at Novatec GmbH
          </p>
          <div className='mt-4'>
            <Link href='/blog' key='blog'>
              <a className=' text-sky-300 xs:text-xl sm:text-2xl xl:text-3xl hover:text-sky-400 hover:underline'>
                Blog
              </a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
