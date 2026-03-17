
"use client";

import { AlertCircle } from "lucide-react";

export function BeliefBreaker() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-destructive/10 text-destructive mb-6 md:mb-8">
          <AlertCircle className="w-7 h-7 md:w-8 md:h-8" />
        </div>
        <h2 className="text-2xl md:text-5xl font-headline font-black mb-6 md:mb-8 uppercase leading-tight text-balance">
          A verdade sobre ganhar dinheiro online
        </h2>
        <div className="space-y-6 text-base md:text-xl text-muted-foreground leading-relaxed text-left glass-card p-6 md:p-12 rounded-[2rem] md:rounded-[3rem]">
          <p>
            Muitas pessoas acreditam que ganhar dinheiro online exige investimentos altos, conhecimento técnico ou sorte.
          </p>
          <p className="font-bold text-foreground">
            Mas existe um lugar onde milhões de pessoas compram e vendem todos os dias, sem gastar um centavo em anúncios.
          </p>
          <p className="text-primary font-black text-2xl md:text-4xl font-headline leading-tight py-2">
            Esse lugar é o Facebook Marketplace.
          </p>
          <p className="text-sm md:text-lg">
            O problema é que a maioria das pessoas usa ele da forma errada:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {["Sem estratégia", "Sem método", "Sem saber vender"].map((txt, i) => (
              <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/10 font-black uppercase text-[10px] md:text-xs text-center tracking-widest text-foreground">
                {txt}
              </div>
            ))}
          </div>
          <p className="text-center pt-8 text-lg md:text-2xl">
            E é por isso que o <span className="text-primary font-black">Renda Express</span> é a sua melhor chance hoje.
          </p>
        </div>
      </div>
    </section>
  );
}
