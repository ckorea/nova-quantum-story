import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4">
      <nav className="container flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-sage-700 font-display">
          Claire Korea
        </Link>
        <ul className="flex space-x-6">
          {[
            { href: "/", label: "Home" },
            { href: "#writing-process", label: "Writing Process" },
            { href: "/blog", label: "Blog" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" }
          ].map(({ href, label }) => (
            <li key={href}>
              <Link 
                href={href} 
                className="text-sage-600 hover:text-orange-700 transition duration-300 font-serif"
                aria-label={label}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}