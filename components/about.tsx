import { Folder, Cloud, LayoutDashboard } from "lucide-react";

const stats = [
  { icon: Folder, value: "2", label: "Proyectos" },
  { icon: Cloud, value: "2", label: "Deployments en nube" },
  { icon: LayoutDashboard, value: "5+", label: "Monitoreo / dashboards" },
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
              {"Soy Gonzalo Alfredo Mu\u00f1iz (Alfre). Abogado graduado de la UBA (2023) reconvertido al mundo IT por pasi\u00f3n. En 2025 comenc\u00e9 la Tecnicatura Universitaria en Programaci\u00f3n en la UTN."}
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {"Mi inter\u00e9s por la infraestructura y la automatizaci\u00f3n se consolid\u00f3 en julio de 2025 durante la capacitaci\u00f3n pr\u00e1ctica en DevSecOps de "}
              <a
                href="https://novitsoftware.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2 transition-colors hover:text-primary/80"
              >
                Novit Software
              </a>
              {", donde descubr\u00ed mi vocaci\u00f3n por la cultura DevOps."}
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {"Actualmente sigo profundizando en tecnolog\u00edas Cloud y orquestaci\u00f3n de contenedores. Afuera de la terminal me pod\u00e9s encontrar jugando al f\u00fatbol o al p\u00e1del con amigos, leyendo alg\u00fan libro que me hayan recomendado o disfrutando de un buen videojuego para recargar energ\u00edas."}
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
