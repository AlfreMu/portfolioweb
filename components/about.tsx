import { FolderGit2, Globe, Workflow } from "lucide-react";

const stats = [
  { icon: FolderGit2, value: "20", label: "Repos publicos" },
  { icon: Globe, value: "5+", label: "Apps online" },
  { icon: Workflow, value: "6", label: "Proyectos destacados" },
];

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-[1100px] px-6">
        <p className="mb-2 font-mono text-sm text-primary">{"// sobre mi"}</p>
        <h2 className="mb-8 text-balance text-3xl font-bold text-foreground sm:text-4xl">
          Sobre mi
        </h2>

        <div className="grid items-start gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <p className="leading-relaxed text-muted-foreground">
              {
                "Soy Gonzalo Alfredo Mu\u00f1iz (Alfre), DevOps & Cloud Engineer de Argentina. Vengo de una formacion en Derecho, pero hoy enfoco mi carrera en construir sistemas que no solo funcionen: tambien puedan desplegarse, monitorearse y explicarse."
              }
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {
                "En GitHub hoy conviven proyectos de automatizacion, cloud e infraestructura como codigo con productos web reales como "
              }
              <a
                href="https://playpollgaming.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2 transition-colors hover:text-primary/80"
              >
                PlayPoll
              </a>
              {
                ", una app en tiempo real para votar que jugar con amigos. Ese cruce entre producto, deploy y operacion es el tipo de trabajo que mas me entusiasma."
              }
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {
                "Mi interes por la infraestructura y la automatizacion se consolido durante la capacitacion practica en DevSecOps de "
              }
              <a
                href="https://novitsoftware.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2 transition-colors hover:text-primary/80"
              >
                Novit Software
              </a>
              {
                " junto a la UTN. Hoy sigo profundizando en CI/CD, contenedores, observabilidad y cloud mientras curso la Tecnicatura Universitaria en Programacion."
              }
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {
                "Me gusta trabajar en proyectos que puedan defenderse de punta a punta: desde la interfaz y la API hasta el pipeline, la infraestructura y el monitoreo. Afuera de la terminal, me podes encontrar jugando al futbol o al padel, leyendo algo que me hayan recomendado o disfrutando de un buen videojuego."
              }
            </p>
          </div>

          <div className="flex flex-col gap-4 md:col-span-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <stat.icon size={22} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
