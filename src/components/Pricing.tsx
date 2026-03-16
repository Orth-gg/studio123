
"use client";

import { Button } from "@/components/ui/button";
import { Check, Sparkles, ShieldCheck, Zap } from "lucide-react";

const benefits = [
  "Acesso completo ao curso",
  "Todas as ferramentas incluídas",
  "Atualizações futuras",
  "Acesso imediato e vitalício",
  "Suporte exclusivo na área de membros",
  "Bônus: Scripts de Negociação"
];

export function Pricing() {
  return (
    <section id="comprar" className="py-24 bg-primary/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase">Hoje você pode começar por um valor simbólico</h2>
          <p className="text-muted-foreground text-lg uppercase font-bold tracking-tighter">
            O investimento que se paga com sua primeira venda.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-[2.5rem] overflow-hidden border-primary/40 relative shadow-[0_0_60px_rgba(24,119,242,0.15)]">
            <div className="absolute top-0 right-0 p-8">
              <Sparkles className="w-12 h-12 text-accent animate-pulse" />
            </div>

            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12 space-y-8 bg-white/[0.02]">
                <div>
                  <h3 className="text-2xl font-headline font-extrabold mb-2 uppercase">Acesso Premium</h3>
                  <p className="text-muted-foreground text-sm uppercase font-bold">Tudo que você precisa para dominar o marketplace.</p>
                </div>

                <ul className="space-y-4">
                  {benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm font-bold uppercase tracking-tight">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-center items-center text-center space-y-8 border-t lg:border-t-0 lg:border-l border-white/10 bg-primary/5">
                <div className="space-y-2">
                  <p className="text-muted-foreground line-through text-lg font-bold">De R$ 197,00</p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-xl font-medium uppercase">Por apenas</span>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold mr-1">R$</span>
                      <span className="text-6xl md:text-7xl font-headline font-extrabold text-primary">47</span>
                    </div>
                  </div>
                  <p className="text-sm text-accent font-extrabold tracking-widest uppercase animate-bounce pt-2">Acesso imediato após a compra</p>
                </div>

                <Button size="lg" className="h-16 px-12 text-xl w-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all hover:scale-105 font-extrabold uppercase cta-button-glow" asChild>
                  <a href="https://pay.kirvano.com/db5931e7-179f-4147-b201-a554ac4c0aeb">
                    Quero começar agora
                  </a>
                </Button>

                <div className="flex items-center gap-4 text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
                  <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> Compra Segura</span>
                  <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-yellow-500" /> Vagas Limitadas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
