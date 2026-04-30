export default function App() {
  return (
    <div className="min-h-screen bg-primary-950 text-neutral-light font-sans relative">

      {/* NAVBAR */}
      <header className="w-full border-b border-white/10 sticky top-0 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
          <h1 className="text-xl font-serif">My Portfolio</h1>

          <nav className="flex gap-6 text-sm opacity-80">
            <a href="#home" className="hover:text-accent transition">Home</a>
            <a href="#projects" className="hover:text-accent transition">Projects</a>
            <a href="#about" className="hover:text-accent transition">About</a>
            <a href="#contact" className="hover:text-accent transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h2 className="text-5xl font-serif leading-tight">
            Hi, I’m a Frontend Developer
          </h2>

          <p className="mt-4 text-lg opacity-80">
            I build modern, responsive, and animated web experiences using React & Tailwind CSS.
          </p>

          <button className="mt-6 px-6 py-3 bg-accent text-black rounded-lg shadow-glow hover:scale-105 transition">
            View Projects
          </button>
        </div>

        <div className="w-full h-80 bg-white/10 rounded-2xl" />
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-serif mb-10">Projects</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:scale-[1.03] transition"
            >
              Project {item}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm opacity-70">
          © 2026 My Portfolio. All rights reserved.
        </div>
      </footer>

    </div>
  );
}