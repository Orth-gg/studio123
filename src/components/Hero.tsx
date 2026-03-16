
"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ShieldCheck, Zap, TrendingUp } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-32 pb-20 overflow-hidden money-gradient">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <Badge variant="outline" className="px-4 py-1 text-accent border-accent/30 bg-accent/5 font-bold uppercase tracking-wider animate-pulse">
                Vagas Limitadas para a Nova Turma
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-extrabold leading-[1.1] uppercase">
                Como pessoas comuns estão gerando <span className="gradient-text">renda todos os dias</span> usando o Facebook Marketplace
              </h1>
              <h2 className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Aprenda o método simples que permite transformar o Marketplace em uma máquina de renda extra — mesmo começando do zero e sem precisar investir em estoque.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                <Zap className="text-primary w-5 h-5 shrink-0" />
                <span className="text-sm font-medium">Pode começar hoje mesmo</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                <ShieldCheck className="text-primary w-5 h-5 shrink-0" />
                <span className="text-sm font-medium">Método simples e direto</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                <TrendingUp className="text-primary w-5 h-5 shrink-0" />
                <span className="text-sm font-medium">Pode virar renda principal</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                <Zap className="text-primary w-5 h-5 shrink-0" />
                <span className="text-sm font-medium">Sem experiência prévia</span>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <Button size="lg" className="h-16 px-10 text-xl font-bold bg-primary hover:bg-primary/90 w-full sm:w-auto cta-button-glow uppercase" asChild>
                <a href="https://pay.kirvano.com/db5931e7-179f-4147-b201-a554ac4c0aeb">
                  Quero começar a vender no Marketplace <ArrowRight className="ml-2 w-6 h-6" />
                </a>
              </Button>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-muted-foreground font-medium uppercase tracking-tighter">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> Acesso imediato</span>
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> Compra segura</span>
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> Garantia de 7 dias</span>
              </div>
            </div>
          </div>

          <div className="flex-1 relative w-full flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-10 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
              <div className="relative flex flex-col items-center justify-center space-y-4 glass-card p-12 md:p-20 rounded-[3rem] border-primary/30 shadow-[0_0_50px_rgba(24,119,242,0.2)] hover:scale-105 transition-transform duration-500">
                <div className="bg-primary p-6 rounded-[2rem] shadow-xl shadow-primary/20">
                  <TrendingUp className="w-16 h-16 md:w-24 md:h-24 text-white" />
                </div>
                <div className="text-center">
                  <h2 className="text-4xl md:text-6xl font-headline font-black tracking-tighter">
                    RENDA<span className="text-primary">EXPRESS</span>
                  </h2>
                  <p className="text-xs md:text-sm font-bold text-muted-foreground uppercase tracking-[0.3em] mt-2">
                    DOMINE O MARKETPLACE
                  </p>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-2xl border-primary/30 animate-bounce-slow">
                <p className="text-[10px] text-muted-foreground font-bold uppercase">Meta Batida</p>
                <p className="text-xl font-headline font-extrabold text-primary">R$ 450,00</p>
              </div>
              <div className="absolute -top-6 -right-6 glass-card p-4 rounded-2xl border-accent/30 animate-pulse">
                <p className="text-[10px] text-muted-foreground font-bold uppercase">Vendas Hoje</p>
                <p className="text-xl font-headline font-extrabold text-accent">+12</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
