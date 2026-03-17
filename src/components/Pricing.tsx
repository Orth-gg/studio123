
"use client";

import { Button } from "@/components/ui/button";
import { Check, Sparkles, ShieldCheck, Zap } from "lucide-react";

const benefits = [
  "Acesso completo ao curso",
  "Ferramentas de gestão",
  "Acesso imediato e vitalício",
  "Suporte exclusivo",
  "Bônus: Scripts de Negociação"
];

export function Pricing() {
  return (
    <section id="comprar" className="py-20 bg-primary/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-headline font-bold uppercase text-balance leading-tight">Comece hoje por um valor simbólico</h2>
          <p className="text-muted-foreground text-sm md:text-lg uppercase font-black tracking-tight">
            O investimento que se paga com sua primeira venda.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-[2.5rem] overflow-hidden border-primary/40 relative shadow-[0_0_60px_rgba(24,119,242,0.15)]">
            <div className="absolute top-4 right-4 md:top-8 md:right-8">
              <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-accent animate-pulse" />
            </div>

            <div className="grid lg:grid-cols-2">
              <div className="p-8 md:p-12 space-y-6 md:space-y-8 bg-white/[0.02]">
                <div>
                  <h3 className="text-xl md:text-2xl font-headline font-extrabold mb-2 uppercase">Acesso Premium</h3>
                  <p className="text-muted-foreground text-[10px] md:text-xs uppercase font-bold tracking-widest">Tudo incluso para o seu sucesso.</p>
                </div>

                <ul className="space-y-4">
                  {benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-xs md:text-sm font-bold uppercase tracking-tight">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 md:p-12 flex flex-col justify-center items-center text-center space-y-6 md:space-y-8 border-t lg:border-t-0 lg:border-l border-white/10 bg-primary/5">
                <div className="space-y-2">
                  <p className="text-muted-foreground line-through text-base md:text-lg font-bold">De R$ 197,00</p>
                  <div className="flex flex-col items-center">
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-1">Por apenas</span>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold mr-1">R$</span>
                      <span className="text-7xl md:text-8xl font-headline font-black text-primary leading-none">47</span>
                    </div>
                  </div>
                  <p className="text-[10px] md:text-xs text-accent font-black tracking-[0.2em] uppercase animate-bounce pt-4">Acesso imediato via PIX/Cartão</p>
                </div>

                <Button size="lg" className="h-20 px-10 text-xl w-full bg-primary hover:bg-primary/90 shadow-xl shadow-primary/30 font-black uppercase rounded-2xl cta-button-glow" asChild>
                  <a href="https://pay.kirvano.com/db5931e7-179f-4147-b201-a554ac4c0aeb">
                    Quero garantir minha vaga
                  </a>
                </Button>

                <div className="flex items-center gap-4 text-[9px] md:text-[10px] text-muted-foreground uppercase font-black tracking-widest">
                  <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> Compra Segura</span>
                  <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-accent" /> Últimas Vagas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
