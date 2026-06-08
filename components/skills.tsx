import {
  Blocks,
  Brain,
  Cloud,
  Code2,
  Database,
  Globe,
  Server,
  Sparkles,
  Wrench,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const technicalGroups = [
  {
    category: "Lenguajes",
    icon: Code2,
    skills: ["TypeScript", "JavaScript", "Python", "SQL"],
    accent: "from-cyan-500/20 via-sky-500/10 to-transparent",
    iconColor: "text-cyan-300",
    chip: "border-cyan-400/25 bg-cyan-500/10 text-cyan-100 hover:border-cyan-300/50 hover:text-cyan-50",
  },
  {
    category: "Frontend",
    icon: Sparkles,
    skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
    accent: "from-fuchsia-500/20 via-pink-500/10 to-transparent",
    iconColor: "text-fuchsia-300",
    chip: "border-fuchsia-400/25 bg-fuchsia-500/10 text-fuchsia-100 hover:border-fuchsia-300/50 hover:text-fuchsia-50",
  },
  {
    category: "Backend & APIs",
    icon: Server,
    skills: ["Node.js", "Express", "FastAPI", "Flask", "REST APIs"],
    accent: "from-emerald-500/20 via-green-500/10 to-transparent",
    iconColor: "text-emerald-300",
    chip: "border-emerald-400/25 bg-emerald-500/10 text-emerald-100 hover:border-emerald-300/50 hover:text-emerald-50",
  },
  {
    category: "Data",
    icon: Database,
    skills: ["PostgreSQL", "Supabase", "SQLModel"],
    accent: "from-amber-500/20 via-orange-500/10 to-transparent",
    iconColor: "text-amber-300",
    chip: "border-amber-400/25 bg-amber-500/10 text-amber-100 hover:border-amber-300/50 hover:text-amber-50",
  },
  {
    category: "CI/CD & Delivery",
    icon: Blocks,
    skills: ["GitHub Actions", "Azure DevOps", "Vercel", "GHCR"],
    accent: "from-violet-500/20 via-indigo-500/10 to-transparent",
    iconColor: "text-violet-300",
    chip: "border-violet-400/25 bg-violet-500/10 text-violet-100 hover:border-violet-300/50 hover:text-violet-50",
  },
  {
    category: "Contenedores & Cloud",
    icon: Cloud,
    skills: ["Docker", "Kubernetes (k3s/kind)", "AWS EC2", "Linux"],
    accent: "from-blue-500/20 via-sky-500/10 to-transparent",
    iconColor: "text-blue-300",
    chip: "border-blue-400/25 bg-blue-500/10 text-blue-100 hover:border-blue-300/50 hover:text-blue-50",
  },
  {
    category: "IaC & Observabilidad",
    icon: Wrench,
    skills: ["Terraform", "Prometheus", "Grafana", "Nginx"],
    accent: "from-rose-500/20 via-red-500/10 to-transparent",
    iconColor: "text-rose-300",
    chip: "border-rose-400/25 bg-rose-500/10 text-rose-100 hover:border-rose-300/50 hover:text-rose-50",
  },
  {
    category: "Herramientas",
    icon: Wrench,
    skills: ["Git", "GitHub", "Bash", "Troubleshooting"],
    accent: "from-teal-500/20 via-cyan-500/10 to-transparent",
    iconColor: "text-teal-300",
    chip: "border-teal-400/25 bg-teal-500/10 text-teal-100 hover:border-teal-300/50 hover:text-teal-50",
  },
];

const softSkills = [
  "Pensamiento Analitico",
  "Aprendizaje autodidacta",
  "Documentacion Tecnica",
  "Comunicacion Clara",
];

const spotlight = [
  { value: "8", label: "areas tecnicas" },
  { value: "4", label: "fortalezas blandas" },
  { value: "2", label: "idiomas" },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-20">
      <div className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-72 max-w-5xl bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_45%),radial-gradient(circle_at_30%_40%,rgba(217,70,239,0.12),transparent_32%),radial-gradient(circle_at_75%_35%,rgba(34,197,94,0.12),transparent_30%)]" />

      <div className="mx-auto max-w-[1100px] px-6">
        <p className="mb-2 font-mono text-sm text-primary">
          {"// habilidades"}
        </p>
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
              Habilidades y Herramientas
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Stack enfocado en producto, automatizacion y despliegue, con una
              base visual mas clara para mostrar mejor cada area.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {spotlight.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]"
              >
                <p className="text-xl font-bold text-foreground">{item.value}</p>
                <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12 overflow-hidden rounded-3xl border border-white/10 bg-card/80 shadow-[0_20px_80px_rgba(2,6,23,0.35)] backdrop-blur-sm">
          <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="border-b border-white/10 bg-[linear-gradient(135deg,rgba(59,130,246,0.14),rgba(168,85,247,0.08)_45%,transparent_80%)] p-6 lg:border-b-0 lg:border-r">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-sky-200">
                <Brain size={14} />
                Habilidades blandas
              </div>

              <div className="mb-5 flex items-center gap-2.5">
                <Globe size={18} className="flex-shrink-0 text-sky-300" />
                <p className="text-sm text-foreground">
                  <span className="font-medium">Idiomas:</span>{" "}
                  {"Espa\u00f1ol "}
                  <span className="text-muted-foreground">(Nativo)</span>
                  {" \u2022 "}
                  {"Ingl\u00e9s "}
                  <span className="text-muted-foreground">(B2)</span>
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {softSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="rounded-full border-sky-400/20 bg-sky-500/10 px-3.5 py-1.5 text-sm font-normal text-sky-50 hover:border-sky-300/40 hover:bg-sky-500/15"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="p-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary/90">
                Enfoque actual
              </p>
              <h3 className="text-xl font-semibold text-foreground">
                Producto + cloud + delivery
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Me interesa trabajar en proyectos donde el desarrollo, la
                infraestructura y la entrega continua se sientan parte del mismo
                sistema.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {technicalGroups.map((group) => (
            <div
              key={group.category}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/85 p-5 shadow-[0_16px_50px_rgba(2,6,23,0.22)] transition-all hover:-translate-y-1 hover:border-white/20"
            >
              <div
                className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-br ${group.accent}`}
              />

              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] ${group.iconColor}`}
                  >
                    <group.icon size={20} />
                  </div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
                    {group.category}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${group.chip}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
