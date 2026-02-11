import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    id: "epam-devops",
    title: "Curso DevOps Fundamentals",
    institution: "EPAM Systems",
    date: "Septiembre 2025 – Octubre 2025",
    description:
      "Prepare una VM Debian para uso operativo (usuarios, grupos, permisos y configuracion). Realice contenerizacion con Docker, orquestacion de servicios y replicas con Docker Swarm y pipelines CI/CD en GitLab. El proyecto final consistio en disenar y presentar un pipeline CI/CD completo.",
    link: "https://certificates.epam.com/certificates/7e533ea4-babb-405b-a2b4-650d825e1902",
    status: null,
  },
  {
    id: "linkedin-k8s",
    title: "Curso Aprende Kubernetes",
    institution: "LinkedIn Learning",
    date: "Diciembre 2025",
    description:
      "Trabajo con Pods, Deployments, ReplicaSets, DaemonSets y StatefulSets; configuracion de Services (ClusterIP, NodePort, LoadBalancer).",
    link: "https://linkedin.com/learning/certificates/802ecad4a35d907b35d9207e4f07a513ab6116ead1959a0ecb87113f4f0b2524?trk=share_certificate",
    status: null,
  },
  {
    id: "aws-ccp",
    title: "Curso Formativo AWS Certified Cloud Practitioner",
    institution: "Udemy",
    date: "En curso",
    description:
      "AWS fundamentos: servicios principales, conceptos de cloud, seguridad, networking y pricing.",
    link: null,
    status: null,
  },
  {
    id: "talento-tech",
    title: "Curso Desarrollo Web (HTML5, CSS, JavaScript)",
    institution: "Talento Tech – GCBA",
    date: "2024",
    description: "Fundamentos de desarrollo web: HTML5, CSS y JavaScript.",
    link: null,
    status: null,
  },
];

export function Certificaciones() {
  return (
    <section id="certificaciones" className="py-20">
      <div className="mx-auto max-w-[1100px] px-6">
        <p className="mb-2 font-mono text-sm text-primary">
          {"// certificaciones"}
        </p>
        <h2 className="mb-10 text-balance text-3xl font-bold text-foreground sm:text-4xl">
          Certificaciones
        </h2>

        <div className="flex flex-col gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.institution}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:flex-shrink-0">
                  {cert.status && (
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {cert.status}
                    </span>
                  )}
                  <span className="font-mono text-sm text-muted-foreground">
                    {cert.date}
                  </span>
                </div>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:ml-[52px]">
                {cert.description}
              </p>

              {cert.link && (
                <div className="mt-3 sm:ml-[52px]">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary underline underline-offset-2 transition-colors hover:text-primary/80"
                  >
                    <ExternalLink size={14} />
                    Ver certificado
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
