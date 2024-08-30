import Contact from "./contact.js"

export default function Home() {
  return (
    <div className="min-h-screen bg-light-brown text-coco">
      <nav className="justify-items-stretch items-center fixed w-full bg-sage shadow-md z-50 top-0">
        <div className="mx-0 flex justify-between items-center py-4 px-6">
          <a href="/" className="font-bold text-4xl text-black text-left">Desmond Bush</a>
          <div className="space-x-5 text-xl">
            <a href="#about" className="text-gray-800 hover:text-black">About</a>
            <a href="#experience" className="text-gray-800 hover:text-black">Experience</a>
            <a href="#contact" className="text-gray-800 hover:text-black">Contact</a>
          </div>
        </div>
      </nav>

      <section id="about" className="grid grid-cols-2 pt-32 pl-12 gap-4">
        <div>
          <h1 className="text-4xl font-bold text-center pb-4">Hello, my name is Desmond!</h1>
          <p className="text-lg text-center p-2">I am a passionate software engineer based in New York City who specializes in full-stack development
            and data science. I love working on projects that are useful to everyday people, applying my skills to unique challenges in the world, and learning about the latest trends in software.
            <br></br>
            Outside of coding you can find me either reading Dune, lifting weights, or playing with my two dogs 🐶
          </p>
        </div>
        <div>
          <h1 className="text-4xl font-bold text-center pb-4">Skills</h1>
          <div className="grid grid-rows-2 grid-flow-col gap-4 text-center">
            <h2 className="text-xl p-2 bg-sage text-white rounded-full">Python</h2>
            <h2 className="text-xl p-2 bg-sage text-white rounded-full">C++</h2>
            <h2 className="text-xl p-2 bg-sage text-white rounded-full">JavaScript</h2>
            <h2 className="text-xl p-2 bg-sage text-white rounded-full">Java</h2>
            <h2 className="text-xl p-2 bg-sage text-white rounded-full">SQL</h2>
            <h2 className="text-xl p-2 bg-sage text-white rounded-full">Docker</h2>
          </div>
        </div>
      </section>

      <section id="experience" className="flex flex-col justify-center items-center py-24 pl-12">
        <h2 className="text-3xl font-bold">Experience</h2>
        <a href="/Bush_Desmond_Resume.pdf" 
        target="_blank"  rel="noopener noreferrer" 
        className="py-5 text-xl bg-gradient-to-r from-coco via-orange-300 to-green-800 bg-clip-text text-transparent animate-gradient">
          Resume</a>
        <ul className="list-none w-full max-w-4xl center">
          <li className="grid grid-cols-2 gap-4 py-10 text-xl">
            <span className="italic col-span-1">August 2023 - Present</span>
            <span className="col-span-2 text-2xl underline">DevOps & Backend Developer</span>
            <span className="col-span-2 col-start-2">
              Led the development and deployment of applications for high-frequency trading, ensuring minimal latency and seamless operations. 
              Automated outage handling and optimized backend processes to ensure better productivity. 
              Integrated Python and Node.js applications into our environment for network monitoring and server enhancements.
              </span>
          </li>
          <li className="grid grid-cols-2 gap-4 py-10 text-xl">
            <span className="italic col-span-1">June - August 2022</span>
            <span className="col-span-2 text-2xl underline">Backend Java Developer</span>
            <span className="col-span-2 col-start-2">
            Leveraged Apache Kafka to manage and store large-scale event data, improving backend efficiency. 
            Revamped legacy code for Java applications and contributed to system design and documentation. 
            Collaborated with senior developers to create scalable data storage solutions using Oracle SQL Developer.
              </span>
          </li>
        </ul>
      </section>

      <Contact/>
    </div>
  )
}
