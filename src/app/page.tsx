
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Expert } from "@/components/Expert";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Chatbot } from "@/components/Chatbot";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Expert />
      <Pricing />
      <FAQ />
      
      <footer className="py-12 border-t border-white/10 bg-secondary/20">
        <div className="container mx-auto px-4 text-center space-y-4">
          <div className="font-headline font-bold text-xl tracking-tight">
            Lucro<span className="text-primary">Express</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Marketplace Renda Express. Todos os direitos reservados.
          </p>
          <div className="flex justify-center gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Suporte</a>
          </div>
          <p className="text-[10px] text-muted-foreground/50 max-w-lg mx-auto leading-relaxed">
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Uma vez que você sai do Facebook, a responsabilidade não é mais deles e sim do nosso site.
          </p>
        </div>
      </footer>

      <Chatbot />
    </main>
  );
}
