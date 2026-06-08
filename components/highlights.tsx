import { Workflow, Cloud, Boxes } from "lucide-react";

const highlights = [
  {
    icon: Workflow,
    title: "CI/CD & Automatizacion",
    desc: "Pipelines de build, test y deploy con GitHub Actions y Azure DevOps, pensados para flujos reproducibles, promociones entre ambientes y entregas mas confiables.",
  },
  {
    icon: Cloud,
    title: "Infraestructura & Cloud",
    desc: "Infraestructura como codigo con Terraform sobre AWS y Azure, mas observabilidad con Prometheus y Grafana para entender mejor el estado real de cada despliegue.",
  },
  {
    icon: Boxes,
    title: "Apps & Despliegue",
    desc: "Desarrollo de productos con Next.js, React, Tailwind, Supabase y Vercel, sin perder el foco en contenedores, despliegue y experiencia final de uso.",
  },
];

export function Highlights() {
  return (
    <section className="pt-8 pb-20">
      <div className="mx-auto grid max-w-[1100px] gap-6 px-6 sm:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
              <item.icon size={24} />
            </div>
            <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
