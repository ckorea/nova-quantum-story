import Link from 'next/link'

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

export default function BlogPost({ title, excerpt, date, slug }: BlogPostProps) {
  return (
    <article className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-2">
        <Link href={`/blog/${slug}`} className="text-gray-800 dark:text-white hover:text-amber-700 dark:hover:text-amber-400">
          {title}
        </Link>
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{excerpt}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500 dark:text-gray-400">{date}</span>
        <Link href={`/blog/${slug}`} className="text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300">
          Read more →
        </Link>
      </div>
    </article>
  )
}