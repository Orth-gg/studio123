
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { ArrowRight, ShieldCheck, Zap, TrendingUp } from "lucide-react";

export function Hero() {
  const heroImage = (PlaceHolderImages || []).find((img) => img.id === "hero-dashboard");

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
                <a href="#comprar">
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

          <div className="flex-1 relative w-full aspect-square max-w-[550px]">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full" />
            <div className="relative glass-card rounded-3xl overflow-hidden border-white/20">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  width={600}
                  height={600}
                  className="object-cover"
                  data-ai-hint={heroImage.imageHint}
                />
              )}
            </div>
            <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl border-primary/30 animate-bounce-slow">
              <p className="text-xs text-muted-foreground font-bold uppercase">Resultado Real</p>
              <p className="text-2xl font-headline font-extrabold text-primary">R$ 350,00</p>
              <p className="text-[10px] text-muted-foreground uppercase">Lucro no primeiro dia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
