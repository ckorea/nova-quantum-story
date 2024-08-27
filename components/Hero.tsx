export default function Hero() {
  return (
    <section className="hero bg-gradient-to-r from-sage-100 via-sage-200 to-sage-300 text-sage-800 py-20">
      <div className="container text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-display">Welcome to My Personal Blog & Writing Journey</h1>
        <p className="text-xl md:text-2xl mb-8 font-serif">Exploring ideas, sharing experiences, and documenting my AI-assisted writing process.</p>
        <a href="#latest-posts" className="bg-orange-700 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-800 transition duration-300 shadow-md font-serif">Read Latest Posts</a>
      </div>
    </section>
  )
}