import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import NovaQuantumStory from '@/components/NovaQuantumStory'
import BlogPost from '@/components/BlogPost'
import Footer from '@/components/Footer'

const WritingProcess = dynamic(() => import('@/components/WritingProcess'), { ssr: false })

export default function Home() {
  // This would typically come from a CMS or API
  const posts = [
    { title: "My First AI-Assisted Story", excerpt: "Exploring the boundaries of human-AI collaboration in creative writing.", date: "2024-03-01", slug: "first-ai-story" },
    { title: "The Ethics of AI in Writing", excerpt: "Discussing the moral implications of using AI in the creative process.", date: "2024-03-15", slug: "ai-writing-ethics" },
  ]

  return (
    <>
      <Header />
      <Hero />
      <NovaQuantumStory />
      <WritingProcess />
      <main className="container mx-auto flex-grow py-12">
        <h2 className="text-3xl font-bold mb-8">Latest Posts</h2>
        {posts.map((post) => (
          <BlogPost key={post.slug} {...post} />
        ))}
      </main>
      <Footer />
    </>
  )
}
