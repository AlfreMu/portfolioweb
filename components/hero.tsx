import Image from "next/image";
import { ArrowDown, FileText } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="mx-auto flex w-full max-w-[1100px] flex-col-reverse items-center gap-12 px-6 md:flex-row md:gap-16">
        {/* Left content */}
        <div className="flex-1 text-center md:text-left">
          <p className="mb-2 font-mono text-sm text-primary">
            {"// bienvenido"}
          </p>
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Hola
            <span className="text-primary">.</span>
            <br />
            {"Soy Gonzalo Alfredo Mu\u00f1iz"}
          </h1>
          <p className="mt-1 text-lg text-muted-foreground italic">
            {"Aunque todos me dicen "}
            <span className="text-primary font-semibold not-italic">Alfre</span>
          </p>
          <p className="mt-3 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
            DevOps / Cloud Engineer{" "}
            <span className="text-muted-foreground">(Jr)</span>
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
            >
              <ArrowDown size={16} />
              Ver Proyectos
            </a>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <FileText size={16} />
              Descargar CV
            </a>
          </div>
        </div>

        {/* Right photo */}
        <div className="relative flex-shrink-0">
          <div className="relative h-64 w-64 sm:h-80 sm:w-80">
            {/* Animated accent ring */}
            <div
              className="absolute inset-0 rounded-full border-2 border-primary/40"
              style={{ animation: "pulse-ring 3s ease-in-out infinite" }}
            />
            <div className="absolute -inset-3 rounded-full border border-primary/20" />
            <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-primary/60">
              <Image
                src="/profile.jpg"
                alt="Foto de perfil de Gonzalo Alfredo Muniz"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
