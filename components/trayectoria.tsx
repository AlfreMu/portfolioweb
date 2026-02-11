import { GraduationCap, ShieldCheck, ExternalLink } from "lucide-react";

const timeline = [
  {
    id: "abogado",
    year: "2023 -- Actualidad",
    title: "Abogado",
    subtitle: "Especializado en Accidentes de Trabajo",
    company: "Estudio Juridico Diaz & Gimenez",
    icon: GraduationCap,
    link: null,
    certLink: null,
  },
  {
    id: "novit",
    year: "Julio 2025 -- Septiembre 2025",
    title: "Programa de Capacitaci\u00f3n Practica DevSecOps",
    subtitle: "Capacitaci\u00f3n te\u00f3rico-pr\u00e1ctica con mentor\u00eda y evaluaci\u00f3n de proyectos. A trav\u00e9s de entregas t\u00e9cnicas supervisadas, implement\u00e9 pipelines de CI/CD con GitHub Actions, orquestaci\u00f3n en Docker Swarm y monitoreo con Prometheus/Grafana, validando mis conocimientos en un entorno profesional.",
    company: "Novit Software",
    icon: ShieldCheck,
    link: "https://novitsoftware.com",
    certLink:
      "https://sceu-utnba.bitrix24.es/pub/document/130374/26c4200e06047d70a0b8af90008cf6e4/",
  },
];

export function Trayectoria() {
  return (
    <section id="trayectoria" className="py-20">
      <div className="mx-auto max-w-[1100px] px-6">
        <p className="mb-2 font-mono text-sm text-primary">
          {"// trayectoria"}
        </p>
        <h2 className="mb-10 text-balance text-3xl font-bold text-foreground sm:text-4xl">
          Trayectoria
        </h2>

        {/* Vertical timeline */}
        <div className="relative ml-4 border-l-2 border-border pl-8">
          {timeline.map((item, index) => (
            <div
              key={item.id}
              className={`relative ${index < timeline.length - 1 ? "pb-12" : ""}`}
            >
              {/* Dot */}
              <div className="absolute -left-[calc(2rem+5px)] flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background">
                <item.icon size={18} className="text-primary" />
              </div>

              {/* Content */}
              <div className="rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <span className="font-mono text-sm text-primary">
                    {item.year}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.subtitle}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-primary underline underline-offset-2"
                    >
                      {item.company}
                    </a>
                  ) : (
                    item.company
                  )}
                </p>
                {item.certLink && (
                  <a
                    href={item.certLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm text-primary underline underline-offset-2 transition-colors hover:text-primary/80"
                  >
                    <ExternalLink size={14} />
                    Ver certificado
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
