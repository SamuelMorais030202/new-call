import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {

  return (
    <main
      className={`h-screen flex items-center justify-end gap-20 ml-auto max-w-[calc(100vw - (100vw - 1160px) / 2)]`}
    >
      <section className="md:px-10 space-y-5 max-w-[480px]">
        <h2 className="text-6xl font-extrabold text-white">
          Agendamento descomplicado
        </h2>

        <p className="text-xl text-gray-200">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </p>

        <Button className="bg-red-600">
          Criar conta com o Google
        </Button>
      </section>

      <section className="hidden md:flex">
        <Image
          src="/app-preview.png"
          alt="Imagem de preview"
          height={400}
          width={827}
          quality={100}
          priority
        />
      </section>
    </main>
  );
}
