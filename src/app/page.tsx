import { Dumbbell, Github, Instagram, Linkedin, MonitorSmartphone, User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
 
export default function PageHome(){
  return(
    <>
    <div className="w-full text-center flex items-center justify-center mt-8">
      <header>
        <Image
          className="w-52 h-52 rounded-full border-2 border-purple-600 p-1" 
          src="/kb.jpg"
          alt="Minha foto de perfil"
          width={100}
          height={100}
        />

        <h1 className="text-zinc-100 text-center font-semibold text-[1.8rem] mt-7">Kayke Barbosa</h1>

        <p className="font-normal italic text-[16px] text-center text-zinc-300 m-2">Seja bem vindo(a)</p>
      </header>

    </div>
      <div className="flex items-center justify-center w-full">
        <main>
          <ul className="m-2">
            {/* 1° */}
            <Link href="https://instagram.com/kaykee_bl?igshid=ZDdkNTZiNTM=">
            <li className="bg-purple-500 h-11 flex items-center justify-center w-[300px] mb-4 rounded-lg gap-1 hover:bg-purple-600/70"><Instagram />Instagram</li></Link>
            {/* 2° */}
            <Link href="https://www.linkedin.com/in/kayke-barbosa-15a96023a">
            <li className="bg-purple-600 h-11 flex items-center justify-center w-[300px] mb-4 rounded-lg gap-1 hover:bg-purple-600/70"><Linkedin />Linkedin</li></Link>
            {/* 3° */}
            <Link href="https://github.com/Kayke-Ti">
            <li className="bg-purple-600 h-11 flex items-center justify-center w-[300px] mb-4 rounded-lg gap-1 hover:bg-purple-600/70"><Github />Github</li></Link>
            {/* 4° */}
            <Link href="https://traininggenerator.vercel.app/">
            <li className="bg-purple-500 h-11 flex items-center justify-center w-[300px] mb-4 rounded-lg gap-1 hover:bg-purple-600/70"><Dumbbell />TrainingGenerator</li></Link>
            {/* 5° */}
            <Link href="https://githubcardprofile.vercel.app/">
            <li className="bg-purple-500 h-11 flex items-center justify-center w-[300px] mb-4 rounded-lg gap-1 hover:bg-purple-600/70"><MonitorSmartphone />GithubCard</li></Link>
            {/* 6° */}
            <Link href="https://repositoriesgithub.vercel.app/">
            <li className="bg-purple-500 h-11 flex items-center justify-center w-[300px] mb-4 rounded-lg gap-1 hover:bg-purple-600/70"><User2 />RepositoriesGithub</li></Link>
          </ul>
        </main>
      </div>
      <footer className="w-full text-center text-xs m-4 text-zinc-300">
      <Link 
        href="https://github.com/Kayke-Ti" 
        target="_blank"
      >
        ©Copyright 2023 - Todos os direitos reservados
      </Link>
    </footer>
    </>
  )
}