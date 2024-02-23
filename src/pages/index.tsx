import Image from "next/image";
import { Inter } from "next/font/google";
import { Projects } from "../../data/projects";
import { Stack } from "../../data/stack";
import { Connect } from "../../data/connect";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center  p-10 md:p-24 ${inter.className} bg-black text-white`}
    >
      <div>
        <div className="mb-10">
          <Image
            className="mb-3"
            src="/images/user.png"
            width="25"
            height="25"
            alt="Smile icon"
          />
          <h1 className="mb-2 text-xl">John Doe</h1>
          <p className="text-md max-w-2xl text-white opacity-50 lg:text-lg">
            About Me paragraph
          </p>
        </div>
        <div className="mb-10">
          <h1 className="mb-4 text-lg md:text-xl">Projects</h1>
          <div>
            {Projects.map((project) => (
              <div key={project.id} className="mb-5 flex items-center gap-3">
                <Image
                  className="md:w-50 md:h-50 mb-3 h-[40px] w-[40px]"
                  src={project.image}
                  width="50"
                  height="50"
                  alt="Smile icon"
                />
                <div>
                  <h1>{project.name}</h1>
                  <p className="mt-1 w-auto text-sm text-white opacity-50 md:w-full">
                    {project.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-10">
          <h1 className="mb-4 text-lg md:text-xl">Stack</h1>
          <div className="flex gap-5 md:gap-8">
            {Stack.map((social) => (
              <Link key={social.id} href={social.link}>
                <div key={social.id} className="flex flex-row">
                  <Image
                    className="mb-3 h-[30px] w-[30px] md:h-8 md:w-8"
                    src={social.image}
                    width="30"
                    height="30"
                    alt={social.name}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h1 className="mb-4 text-lg md:text-xl">Connect</h1>
          <div className="flex  gap-5 md:gap-8">
            {Connect.map((social) => (
              <Link key={social.id} href={social.link}>
                <div className="flex flex-row">
                  <Image
                    className="mb-3 h-[30px] w-[30px] md:h-8 md:w-8"
                    src={social.image}
                    width="30"
                    height="30"
                    alt={social.name}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-[2rem] w-full border-b bg-white opacity-10 md:w-[400px] lg:mt-[4rem] lg:w-[800px]"></div>
      </div>
    </main>
  );
}
