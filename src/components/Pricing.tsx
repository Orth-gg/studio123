
"use client";

import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const benefits = [
  "Acesso ao Guia Mestre Marketplace",
  "Acesso à Plataforma de Gestão (1 ano)",
  "Calculadora de Lucro Automática",
  "Estratégias de Escala e Bloqueios",
  "Modelos de Anúncios que Convertem",
  "Suporte Exclusivo via WhatsApp",
  "Bônus: Fornecedores de Confiança"
];

export function Pricing() {
  return (
    <section id="comprar" className="py-24 bg-primary/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-headline font-bold">Sua Jornada Começa Agora</h2>
          <p className="text-muted-foreground text-lg">
            Investimento único com retorno garantido se você aplicar o método.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl overflow-hidden border-primary/30 relative shadow-[0_0_50px_rgba(71,99,235,0.2)]">
            <div className="absolute top-0 right-0 p-8">
              <Sparkles className="w-12 h-12 text-accent animate-pulse" />
            </div>

            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12 space-y-8 bg-white/[0.02]">
                <div>
                  <h3 className="text-2xl font-headline font-bold mb-2">Acesso Premium</h3>
                  <p className="text-muted-foreground">Tudo que você precisa para dominar o marketplace.</p>
                </div>

                <ul className="space-y-4">
                  {benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-center items-center text-center space-y-8 border-t lg:border-t-0 lg:border-l border-white/10">
                <div className="space-y-2">
                  <p className="text-muted-foreground line-through text-lg">De R$ 497,00</p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-xl font-medium">Por apenas</span>
                    <span className="text-5xl md:text-6xl font-headline font-bold text-accent">R$ 197</span>
                  </div>
                  <p className="text-sm text-primary font-bold tracking-widest uppercase">Ou 12x de R$ 19,70</p>
                </div>

                <Button size="lg" className="h-16 px-12 text-xl w-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all hover:scale-105">
                  Garantir Minha Vaga
                </Button>

                <p className="text-xs text-muted-foreground flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500" /> 
                  Garantia incondicional de 7 dias
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
