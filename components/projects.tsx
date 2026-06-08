import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: "playpoll",
    name: "PlayPoll",
    desc: "App en tiempo real para decidir que jugar con amigos. Permite crear salas, compartir link, proponer juegos, votar en vivo y resolver empates con una ruleta final.",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    github: "https://github.com/AlfreMu/appvotarjuegos",
    live: "https://playpollgaming.vercel.app/",
  },
  {
    id: "devops-challenge",
    name: "DevOps Challenge - Flask + Angular",
    desc: "Proyecto DevOps full-stack orientado a cerrar un flujo real de punta a punta: CI automatico, infraestructura como codigo, despliegue en Kubernetes sobre AWS EC2 y observabilidad basica.",
    tags: [
      "Docker",
      "Kubernetes (k3s)",
      "GitHub Actions",
      "AWS EC2",
      "Terraform",
      "Prometheus",
    ],
    github: "https://github.com/AlfreMu/devops-challenge-flask-angular",
    live: null,
  },
  {
    id: "devops-portfolio",
    name: "DevOps Portfolio - FastAPI",
    desc: "Flujo completo de despliegue alrededor de una app FastAPI, con contenedores, base de datos, GitHub Actions y una base fuerte para operar, versionar y publicar cambios con criterio DevOps.",
    tags: [
      "FastAPI",
      "Docker",
      "PostgreSQL",
      "GitHub Actions",
      "AWS EC2",
      "Kubernetes",
    ],
    github: "https://github.com/AlfreMu/devops-portfolio-fastapi",
    live: null,
  },
  {
    id: "club-17",
    name: "17 de Agosto",
    desc: "Sitio web moderno para un club, trabajado con foco en presentacion clara, componentes pulidos y una experiencia responsive lista para publicar.",
    tags: ["Next.js 16", "React 19", "Tailwind CSS", "Radix UI", "Vercel"],
    github: "https://github.com/AlfreMu/17deagosto",
    live: "https://17deagosto.vercel.app/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-[1100px] px-6">
        <p className="mb-2 font-mono text-sm text-primary">
          {"// proyectos"}
        </p>
        <h2 className="mb-10 text-balance text-3xl font-bold text-foreground sm:text-4xl">
          Proyectos
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {project.name}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.desc}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-all hover:brightness-110"
                  >
                    <ExternalLink size={14} />
                    Ver online
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-border bg-transparent px-4 py-2 text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Github size={14} />
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
