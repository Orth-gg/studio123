
"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ShieldCheck, Zap, TrendingUp } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-20 pb-16 md:pt-32 md:pb-20 overflow-hidden money-gradient">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
          <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="space-y-4 md:space-y-6">
              <Badge variant="outline" className="px-4 py-1 text-accent border-accent/30 bg-accent/5 font-bold uppercase tracking-wider animate-pulse text-[10px] md:text-xs">
                Vagas Limitadas para a Nova Turma
              </Badge>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-headline font-extrabold leading-[1.2] md:leading-[1.1] uppercase text-balance">
                Como pessoas comuns estão gerando <span className="gradient-text">renda todos os dias</span> usando o Facebook Marketplace
              </h1>
              <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Aprenda o método simples que permite transformar o Marketplace em uma máquina de renda extra — mesmo começando do zero e sem precisar investir em estoque.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto lg:mx-0">
              {[
                { icon: Zap, text: "Comece hoje mesmo" },
                { icon: ShieldCheck, text: "Método simples e direto" },
                { icon: TrendingUp, text: "Pode virar renda principal" },
                { icon: Zap, text: "Sem experiência prévia" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <item.icon className="text-primary w-5 h-5 shrink-0" />
                  <span className="text-sm font-semibold uppercase tracking-tight">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-2">
              <Button size="lg" className="h-16 md:h-20 px-8 text-lg md:text-xl font-black bg-primary hover:bg-primary/90 w-full sm:w-auto cta-button-glow uppercase rounded-2xl" asChild>
                <a href="https://pay.kirvano.com/db5931e7-179f-4147-b201-a554ac4c0aeb">
                  Quero começar agora <ArrowRight className="ml-2 w-6 h-6" />
                </a>
              </Button>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-[10px] md:text-xs text-muted-foreground font-bold uppercase tracking-widest">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> Acesso imediato</span>
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> Compra segura</span>
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> Garantia de 7 dias</span>
              </div>
            </div>
          </div>

          <div className="flex-1 relative w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative group w-full max-w-[320px] md:max-w-none">
              <div className="absolute -inset-6 md:-inset-10 bg-primary/20 blur-[60px] md:blur-[100px] rounded-full animate-pulse" />
              <div className="relative flex flex-col items-center justify-center space-y-4 glass-card p-10 md:p-20 rounded-[2.5rem] md:rounded-[3.5rem] border-primary/30 shadow-[0_0_50px_rgba(24,119,242,0.2)]">
                <div className="bg-primary p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] shadow-xl shadow-primary/20">
                  <TrendingUp className="w-12 h-12 md:w-24 md:h-24 text-white" />
                </div>
                <div className="text-center">
                  <h2 className="text-3xl md:text-6xl font-headline font-black tracking-tighter">
                    RENDA<span className="text-primary">EXPRESS</span>
                  </h2>
                  <p className="text-[10px] md:text-sm font-bold text-muted-foreground uppercase tracking-[0.3em] mt-2">
                    DOMINE O MARKETPLACE
                  </p>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 glass-card p-3 md:p-4 rounded-xl md:rounded-2xl border-primary/30 animate-bounce-slow">
                <p className="text-[8px] md:text-[10px] text-muted-foreground font-bold uppercase">Meta Batida</p>
                <p className="text-lg md:text-xl font-headline font-extrabold text-primary">R$ 450,00</p>
              </div>
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 glass-card p-3 md:p-4 rounded-xl md:rounded-2xl border-accent/30 animate-pulse">
                <p className="text-[8px] md:text-[10px] text-muted-foreground font-bold uppercase">Vendas Hoje</p>
                <p className="text-lg md:text-xl font-headline font-extrabold text-accent">+12</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
