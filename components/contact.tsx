import { Mail, Github, Linkedin } from "lucide-react";

const links = [
  {
    icon: Mail,
    label: "muniz.gonzalo1@gmail.com",
    sublabel: "Correo",
    href: "mailto:muniz.gonzalo1@gmail.com",
  },
  {
    icon: Github,
    label: "AlfreMu",
    sublabel: "GitHub",
    href: "https://github.com/AlfreMu",
  },
  {
    icon: Linkedin,
    label: "gonzaloalfredomuniz",
    sublabel: "LinkedIn",
    href: "https://www.linkedin.com/in/gonzaloalfredomuniz/",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-[1100px] px-6">
        <p className="mb-2 font-mono text-sm text-primary">
          {"// contacto"}
        </p>
        <h2 className="mb-4 text-balance text-3xl font-bold text-foreground sm:text-4xl">
          Contacto
        </h2>
        <p className="mb-10 max-w-lg leading-relaxed text-muted-foreground">
          {"Estoy en b\u00fasqueda de mi primer experiencia como DevOps para poder aportar mis conocimientos y continuar expandi\u00e9ndolos. Si mi perfil te interes\u00f3, no dudes en escribirme."}
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          {links.map((link) => (
            <a
              key={link.sublabel}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <link.icon size={22} />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {link.sublabel}
                </p>
                <p className="truncate text-sm font-medium text-foreground group-hover:text-primary">
                  {link.label}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
