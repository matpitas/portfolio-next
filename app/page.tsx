
import ContactButton from "./components/contact-button";
import { ChevronsDown, Disc3, Dumbbell, Coffee, Cat, Gamepad2, Code, Clapperboard, Apple, Heart } from 'lucide-react'
import AboutMe from "./components/about-me";
import Hobbies from "./components/hobbies";

export default function Home() {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <div className="w-full flex items-center justify-center flex-col mt-40 gap-2">
        <h1 className="text-xl md:text-6xl font-black text-slate-800">
          Olá, sou Matheus Pitas Baptista
        </h1>
        <h1 className="bg-gradient-to-r from-emerald-800 via-emerald-200 to-emerald-800 bg-clip-text text-transparent text-lg md:text-6xl font-bold">
          Desenvolvedor Full-Stack.
        </h1>
      </div>
      <p className="font-bold text-slate-500 text-sm text-center mt-10 md:mt-14">Caso queira me mandar uma mensagem, considere clicar no botão abaixo!</p>
      <ContactButton />
      <div className="font-bold text-slate-600 text-lg mt-52 md:mt-72 flex flex-col items-center justify-center gap-5">
        Mais sobre mim
        <ChevronsDown className="size-5" />
      </div>
      <AboutMe />
      <div className="font-bold text-slate-600 text-lg mt-32 md:mt-52 flex flex-col items-center justify-center gap-5">
        Hobbies e Paixões
        <ChevronsDown className="size-5" />
      </div>
      <div className="w-5/6 md:w-2/3 mt-20 flex flex-wrap gap-10">
        <Hobbies logo={<Coffee className="size-5"/>} title="Café" description="A minha bebida favorita é café!" />
        <Hobbies logo={<Dumbbell className="size-5"/>} title="Academia" description="Um dos meus melhores passa-tempos é praticar musculação." />
        <Hobbies logo={<Disc3 className="size-5"/>} title="Música" description="Meus estilos de música favoritos são: Rock, Pop e Warm Fuzzy Songs." />
        <Hobbies logo={<Cat className="size-5"/>} title="Animais" description="Gosto muito de cachorros, gatos... e fuinhas." />
        <Hobbies logo={<Gamepad2 className="size-5"/>} title="Jogos" description="Gosto de jogar jogos competitivos com amigos quando nos reunimos." />
        <Hobbies logo={<Code className="size-5"/>} title="Programação" description="Sempre que possível estou tentando procurar novas coisas para aprender no mundo da programação." />
        <Hobbies logo={<Clapperboard className="size-5"/>} title="Filmes" description="Meus filmes favoritos são todos os filmes da saga de Harry Potter e a maioria dos filmes de cachorros..." />
        <Hobbies logo={<Apple className="size-5"/>} title="Comida" description="As minhas preferidas com certeza são as da minha Mãe e da culinária japonesa." />
        <Hobbies logo={<Heart className="size-5"/>} title="Família, Namorada e Amigos" description="Sempre gosto de passar o melhor tempo possível com pessoas que eu amo e fazem parte da minha vida." />
      </div>
    </div>
  );
}
