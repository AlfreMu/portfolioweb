import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Highlights } from "@/components/highlights";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Trayectoria } from "@/components/trayectoria";
import { Skills } from "@/components/skills";
import { Certificaciones } from "@/components/certificaciones";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Highlights />
      <About />
      <Projects />
      <Trayectoria />
      <Skills />
      <Certificaciones />
      <Contact />
      <Footer />

    </main>
  );
}
