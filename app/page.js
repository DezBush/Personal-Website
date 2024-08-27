import Contact from "./contact.js"

export default function Home() {
  return (
    <div className="min-h-screen">
      <nav className="justify-items-stretch items-center fixed w-full bg-white shadow-md z-50 top-0">
        <div className="mx-0 flex justify-between items-center py-4 px-6">
          <a href="/" className="font-bold text-4xl text-black text-left">Desmond Bush</a>
          <div className="space-x-5 text-xl">
            <a href="#about" className="text-gray-700 hover:text-black">About</a>
            <a href="#experience" className="text-gray-700 hover:text-black">Experience</a>
            <a href="#contact" className="text-gray-700 hover:text-black">Contact</a>
          </div>
        </div>
      </nav>

      <section id="about" className="flex columns-2 justify-evenly items-center pt-32">
        <div>
          <h1 className="text-4xl font-bold">Hello, My Name is Desmond!</h1>
          <p className="text-lg text-center mt-4">I build web applications using modern technologies like React, Next.js, and Tailwind CSS.</p>
        </div>
        <div>
          <h1 className="text-4xl font-bold">My Skills</h1>
          <div className="flex flex-wrap gap-4">
            <h2 className="text-xl">Python</h2>
            <h2 className="text-xl">Javascript</h2>
            <h2 className="text-xl">C++</h2>
            <h2 className="text-xl">Java</h2>
            <h2 className="text-xl">SQL</h2>
            <h2 className="text-xl">Docker</h2>
          </div>
        </div>
      </section>

      <section id="experience" className="flex flex-col justify-center items-center py-32">
        <h2 className="text-3xl font-bold">Experience</h2>
        <a href="/Bush_Desmond_Resume.pdf" target="_blank"  rel="noopener noreferrer" className="py-5 text-lg hover:text-blue-700">Resume</a>
        <ul className="list-outside list-disc">
          <li className="list-item py-10 text-xl">Devops/Backend Developer <italic className="text-gray-400">[August 2023 - Present]</italic><br></br>
          <span className="">I have this span here</span>
          </li>
          <li className="list-item py-10 text-xl">Backend Java Developer <italic className="text-gray-400">[June 2022 - August 2022]</italic><br></br>
          <span className="">And this here</span>
          </li>
        </ul>
      </section>

      <Contact/>

    </div>
  )
}
