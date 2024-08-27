import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// This would typically come from a CMS or API
const posts = [
  { title: "My First AI-Assisted Story", content: "This is the full content of the first AI-assisted story...", date: "2024-03-01", slug: "first-ai-story" },
  { title: "The Ethics of AI in Writing", content: "This is the full content of the ethics of AI in writing...", date: "2024-03-15", slug: "ai-writing-ethics" },
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find(p => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="container mx-auto py-12">
        <article className="prose lg:prose-xl">
          <h1>{post.title}</h1>
          <p className="text-gray-500">{post.date}</p>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </main>
      <Footer />
    </>
  )
}