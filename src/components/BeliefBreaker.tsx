"use client";

import { AlertCircle } from "lucide-react";

export function BeliefBreaker() {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 text-destructive mb-8">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h2 className="text-3xl md:text-5xl font-headline font-bold mb-8 uppercase">
          A verdade que ninguém te conta sobre ganhar dinheiro online
        </h2>
        <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed text-left glass-card p-8 md:p-12 rounded-3xl">
          <p>
            Muitas pessoas acreditam que ganhar dinheiro online exige investimentos altos, conhecimento técnico ou sorte.
          </p>
          <p className="font-bold text-foreground">
            Mas existe um lugar dentro da internet onde milhões de pessoas compram e vendem todos os dias.
          </p>
          <p className="text-primary font-bold text-2xl md:text-3xl font-headline">
            Esse lugar é o Facebook Marketplace.
          </p>
          <p>
            O problema é que a maioria das pessoas usa ele da forma errada:
          </p>
          <ul className="grid sm:grid-cols-3 gap-4 text-center">
            <li className="bg-white/5 p-4 rounded-xl border border-white/10 font-bold uppercase text-sm">Sem estratégia</li>
            <li className="bg-white/5 p-4 rounded-xl border border-white/10 font-bold uppercase text-sm">Sem método</li>
            <li className="bg-white/5 p-4 rounded-xl border border-white/10 font-bold uppercase text-sm">Sem saber vender</li>
          </ul>
          <p className="text-center pt-8 text-xl">
            E é exatamente por isso que criamos o <span className="text-primary font-bold">Renda Express Marketplace</span>.
          </p>
        </div>
      </div>
    </section>
  );
}