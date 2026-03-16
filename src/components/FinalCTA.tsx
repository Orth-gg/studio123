"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 money-gradient">
      <div className="container mx-auto px-4 text-center space-y-8">
        <div className="relative inline-block">
          <Sparkles className="absolute -top-8 -right-8 w-12 h-12 text-accent animate-pulse" />
          <h2 className="text-4xl md:text-6xl font-headline font-extrabold uppercase">Comece hoje mesmo</h2>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto uppercase font-bold tracking-tighter">
          Não deixe para amanhã o lucro que você pode começar a gerar hoje.
        </p>
        <div className="max-w-xl mx-auto pt-4">
          <Button size="lg" className="h-20 px-12 text-2xl font-extrabold w-full bg-primary hover:bg-primary/90 cta-button-glow uppercase transition-all hover:scale-105" asChild>
            <a href="#comprar">
              Quero acessar o Renda Express <ArrowRight className="ml-2 w-8 h-8" />
            </a>
          </Button>
          <p className="mt-6 text-sm text-muted-foreground uppercase font-bold tracking-widest animate-pulse">
            Acesso imediato após a compra
          </p>
        </div>
      </div>
    </section>
  );
}