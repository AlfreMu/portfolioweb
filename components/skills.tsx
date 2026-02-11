import { Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const technicalGroups = [
  {
    category: "Cloud",
    skills: ["AWS EC2", "IAM", "VPC", "S3", "CloudWatch"],
  },
  {
    category: "CI/CD",
    skills: ["GitHub Actions", "GitLab CI/CD"],
  },
  {
    category: "Contenedores",
    skills: ["Docker", "Kubernetes (k3s)"],
  },
  {
    category: "Infraestructura como c\u00f3digo",
    skills: ["Terraform"],
  },
  {
    category: "Observabilidad",
    skills: ["Prometheus", "Grafana", "Node Exporter", "cAdvisor"],
  },
  {
    category: "Sistemas Operativos",
    skills: ["Linux (Ubuntu/Debian)", "SSH", "Troubleshooting"],
  },
  {
    category: "Control de versiones",
    skills: ["Git", "GitHub"],
  },
  {
    category: "Scripting",
    skills: ["Bash", "Python"],
  },
  {
    category: "Bases de datos",
    skills: ["PostgreSQL", "MySQL"],
  },
];

const softSkills = [
  "Metodolog\u00edas \u00c1giles (Scrum)",
  "Aprendizaje Continuo",
  "Documentaci\u00f3n T\u00e9cnica",
  "Resoluci\u00f3n de Problemas",
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-[1100px] px-6">
        <p className="mb-2 font-mono text-sm text-primary">
          {"// habilidades"}
        </p>
        <h2 className="mb-10 text-balance text-3xl font-bold text-foreground sm:text-4xl">
          Habilidades y Herramientas
        </h2>

        {/* Soft skills section */}
        <div className="mb-12 rounded-xl border border-border bg-card p-6">
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-primary">
            Habilidades Blandas
          </h3>

          {/* Row 1: Languages */}
          <div className="mb-5 flex items-center gap-2.5">
            <Globe size={18} className="flex-shrink-0 text-muted-foreground" />
            <p className="text-sm text-foreground">
              <span className="font-medium">Idiomas:</span>{" "}
              {"Espa\u00f1ol "}
              <span className="text-muted-foreground">(Nativo)</span>
              {" \u2022 "}
              {"Ingl\u00e9s "}
              <span className="text-muted-foreground">(B2)</span>
            </p>
          </div>

          {/* Row 2: Soft skill badges */}
          <div className="flex flex-wrap gap-2.5">
            {softSkills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="rounded-lg border-border px-3.5 py-1.5 text-sm font-normal text-foreground hover:border-primary/40 hover:text-primary"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Technical skills */}
        <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-primary">
          {"Habilidades T\u00e9cnicas"}
        </h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {technicalGroups.map((group) => (
            <div key={group.category}>
              <h4 className="mb-3 text-sm font-semibold text-foreground">
                {group.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
