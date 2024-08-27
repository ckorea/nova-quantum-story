import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import WritingProcess from '../components/WritingProcess'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Claire Korea - Personal Blog & Writing Journey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <WritingProcess />
      </main>
      <Footer />
    </div>
  )
}