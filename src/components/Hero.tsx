
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-dashboard");

  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <Badge variant="outline" className="px-4 py-1 text-accent border-accent/30 bg-accent/5">
                Vagas Limitadas para a Nova Turma
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold leading-[1.1]">
                Transforme seu <span className="gradient-text">Facebook</span> em uma Máquina de Vendas
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Aprenda o método exato usado por quem vive exclusivamente do Marketplace. 
                Renda extra ou principal com ferramentas de gestão profissional e lucro priorizado.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 w-full sm:w-auto" asChild>
                <a href="#comprar">
                  Quero Lucrar Agora <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="lg" className="h-14 px-8 text-lg w-full sm:w-auto">
                <Play className="mr-2 w-5 h-5 text-accent" /> Ver como funciona
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 pt-4">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>Acesso Vitalício</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>Guia de Especialista</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>Ferramentas de Gestão</span>
              </div>
            </div>
          </div>

          <div className="flex-1 relative w-full aspect-square max-w-[600px]">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full" />
            <div className="relative glass-card rounded-2xl overflow-hidden border-white/20">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  width={600}
                  height={600}
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  data-ai-hint={heroImage.imageHint}
                />
              )}
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-xl animate-bounce-slow">
              <p className="text-sm text-muted-foreground">Lucro Mensal Médio</p>
              <p className="text-2xl font-headline font-bold text-accent">R$ 4.500,00+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
