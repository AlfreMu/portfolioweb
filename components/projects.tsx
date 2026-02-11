import { Github, Construction } from "lucide-react";

const projects = [
  {
    id: "devops-challenge",
    name: "DevOps Challenge \u2014 Flask + Angular",
    desc: "Proyecto DevOps full-stack orientado a cerrar un flujo real de punta a punta: CI autom\u00e1tico (build & push), infraestructura como c\u00f3digo, despliegue en Kubernetes sobre AWS EC2 y observabilidad b\u00e1sica. Dise\u00f1ado con foco en reproducibilidad, simplicidad y buenas pr\u00e1cticas.",
    tags: ["Docker", "Kubernetes (k3s)", "GitHub Actions", "AWS EC2", "Terraform", "Prometheus", "Grafana"],
    github: "https://github.com/AlfreMu/devops-challenge-flask-angular",
    wip: false,
  },
  {
    id: "devops-portfolio",
    name: "DevOps Portfolio \u2014 FastAPI",
    desc: "Proyecto de portfolio DevOps enfocado en operaci\u00f3n, automatizaci\u00f3n y despliegue de aplicaciones containerizadas. Utilic\u00e9 Docker y Docker Compose como baseline local, despliegue en Kubernetes (kind/k3s), persistencia de datos con vol\u00famenes, CI con GitHub Actions (build y validaciones en PR) y protecci\u00f3n de rama.",
    tags: ["Docker", "Kubernetes (k3s)", "GitHub Actions", "PostgreSQL", "FastAPI"],
    github: "https://github.com/AlfreMu/devops-portfolio-fastapi",
    wip: false,
  },
  {
    id: "wip-infra",
    name: "En construccion",
    desc: "Proximo proyecto: mejoras de infraestructura (IaC), seguridad y observabilidad.",
    tags: ["Roadmap"],
    github: null,
    wip: true,
  },
  {
    id: "wip-ops",
    name: "En construccion",
    desc: "Proximo proyecto: nuevos despliegues y practicas de operacion (CD, monitoreo/alertas, hardening y docs).",
    tags: ["Roadmap"],
    github: null,
    wip: true,
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
              {project.wip && (
                <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  <Construction size={12} />
                  En construccion
                </span>
              )}
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
              {project.github && (
                <div className="flex items-center gap-3">
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
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
