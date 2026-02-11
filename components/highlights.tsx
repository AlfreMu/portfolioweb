import { Workflow, Cloud, Boxes } from "lucide-react";

const highlights = [
  {
    icon: Workflow,
    title: "Automatizacion CI/CD",
    desc: "Pipelines de build/test/push y despliegue con GitHub Actions y GitLab CI. Versionado de imagenes (GHCR) y deploy reproducible en entornos Linux.",
  },
  {
    icon: Cloud,
    title: "Infra & Observabilidad",
    desc: "Infraestructura en AWS con Terraform (VPC/EC2/SG/IAM) y observabilidad con Prometheus + Grafana + exporters (Node Exporter/cAdvisor) para metricas, dashboards y alertas.",
  },
  {
    icon: Boxes,
    title: "Contenedores & Orquestacion",
    desc: "Contenerizacion con Docker y Docker Compose. Despliegues en Kubernetes (k3s) y troubleshooting basico de workloads, redes y puertos.",
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
