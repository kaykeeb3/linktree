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
            <li className="bg-purple-500 h-11 flex items-center justify-center w-[300px] mb-4 rounded-lg gap-1 hover:bg-purple-600/70"><Link href="https://instagram.com/kaykee_bl?igshid=ZDdkNTZiNTM=" /><Instagram />Instagram</li>
            <li className="bg-purple-600 h-11 flex items-center justify-center w-[300px] mb-4 rounded-lg gap-1 hover:bg-purple-600/70"><Link href="https://www.linkedin.com/in/kayke-barbosa-15a96023a" /><Github />Github</li>
            <li className="bg-purple-600 h-11 flex items-center justify-center w-[300px] mb-4 rounded-lg gap-1 hover:bg-purple-600/70"><Link href="https://github.com/Kayke-Ti" /><Linkedin />Linkedin</li>
            <li className="bg-purple-500 h-11 flex items-center justify-center w-[300px] mb-4 rounded-lg gap-1 hover:bg-purple-600/70"><Link href="https://traininggenerator.vercel.app/" /><Dumbbell  />TrainingGenerator</li>
            <li className="bg-purple-500 h-11 flex items-center justify-center w-[300px] mb-4 rounded-lg gap-1 hover:bg-purple-600/70"><Link href="https://githubcardprofile.vercel.app/" /><MonitorSmartphone  />GithubCard</li>
            <li className="bg-purple-500 h-11 flex items-center justify-center w-[300px] mb-4 rounded-lg gap-1 hover:bg-purple-600/70"><Link href="https://repositoriesgithub.vercel.app/" /><User2 />RepositoriesGithub</li>
          </ul>
        </main>
      </div>
      <footer className="w-full text-center text-xs m-4 text-zinc-300">
      <Link 
        href="#" 
        target="_blank"
      >
        ©Copyright 2023 - Todos os direitos reservados
      </Link>
    </footer>
    </>
  )
}