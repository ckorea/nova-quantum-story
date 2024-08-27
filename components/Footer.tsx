import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; 2024 Claire Korea. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://twitter.com/clairekorea" aria-label="Twitter"><FaTwitter className="w-6 h-6" /></a>
          <a href="https://linkedin.com/in/clairekorea" aria-label="LinkedIn"><FaLinkedin className="w-6 h-6" /></a>
          <a href="https://github.com/clairekorea" aria-label="GitHub"><FaGithub className="w-6 h-6" /></a>
        </div>
      </div>
    </footer>
  )
}